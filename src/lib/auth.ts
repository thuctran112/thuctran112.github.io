import crypto from "node:crypto";

const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

// Astro/Vite exposes non-PUBLIC_ env vars via import.meta.env at runtime,
// not via process.env, so all secret lookups go through this.
const env = import.meta.env as unknown as Record<string, string | undefined>;

function getSessionSecret(): string {
  const secret = env.SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "SESSION_SECRET is not set. Add it to your environment before serving protected case studies."
    );
  }
  return secret;
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", getSessionSecret()).update(payload).digest("hex");
}

function timingSafeStringsEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

export function cookieNameFor(slug: string): string {
  return `cs_auth_${slug}`;
}

/** Signed, expiring token scoped to a single case study slug — not reusable for other slugs. */
export function makeAuthToken(slug: string): string {
  const expires = Date.now() + COOKIE_MAX_AGE_SECONDS * 1000;
  const payload = `${slug}.${expires}`;
  return `${payload}.${sign(payload)}`;
}

export function verifyAuthToken(slug: string, token: string | undefined): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [tokenSlug, expiresRaw, signature] = parts;
  if (tokenSlug !== slug) return false;

  const expires = Number(expiresRaw);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;

  const expectedSignature = sign(`${tokenSlug}.${expiresRaw}`);
  return timingSafeStringsEqual(signature, expectedSignature);
}

export const AUTH_COOKIE_MAX_AGE = COOKIE_MAX_AGE_SECONDS;

function passwordEnvVarFor(slug: string): string {
  return `CASE_STUDY_PASSWORD_${slug.replace(/-/g, "_").toUpperCase()}`;
}

/** Fails closed: an unconfigured password means the case study cannot be unlocked. */
export function checkPassword(slug: string, candidate: string): boolean {
  const expected = env[passwordEnvVarFor(slug)];
  if (!expected) return false;
  return timingSafeStringsEqual(candidate, expected);
}
