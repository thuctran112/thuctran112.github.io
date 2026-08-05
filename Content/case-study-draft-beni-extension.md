# [Draft] Beni: a secondhand shopping browser extension

> **Note to self before publishing:** The current live version at melodyux.com/beni has weak password protection (the full content is fetchable directly, without the password, confirm and fix this before relying on it for any future case study) and exposes your personal email in plain text in the footer. This project itself isn't confidential, but both issues are worth fixing before this goes on the new site.

---

**At a glance**
- Duration: Dec 2022 - Jan 2023
- Highlight: UX design, visual design, usability testing
- Role: UX & visual designer, part of a 3-designer team (with 3 developers)
- Team: 3 designers, 3 developers, 2 founder stakeholders
- Project type: Chrome browser extension, consumer product
- Platform: Browser extension
- Users: online shoppers looking for secondhand alternatives while browsing retail sites

## The problem
Users only opened Beni's extension when they happened to remember it existed, and gave up quickly once they did, faced with a long, hard-to-filter list of results. For Beni, this was a retention and usage problem: reducing the number of steps to find a genuinely good match was directly tied to whether users kept coming back.

> 📍 **Visual suggestion:** Your existing disabled-vs-enabled icon comparison (from the research phase) is a strong lead-in here, it makes the low-visibility problem legible in one glance before any text.

## The approach
Working directly with Beni's two co-founders over three weeks, our team of 3 designers ran 16 user interviews and 7 usability walkthroughs of the existing extension, alongside a competitive analysis of 9 similar tools, to identify where the current experience was breaking down before proposing changes.

## My contribution
- Led the redesign and prototyping end-to-end
- Led the filter system redesign
- Led the item card redesign
- Independently designed, prototyped, and usability-tested the popup reminder feature end-to-end

## Key decisions

**Expanding the filter system based on research, not assumption.** The original extension only offered one or two filters. After interviews surfaced that this didn't match how users actually wanted to narrow results, I led the effort to expand it into a more curated set of filters matched to real user needs, a call the team made directly from that research rather than adding options for their own sake.

**Borrowing mobile interaction patterns for a browser extension.** Since Beni's extension window is close in size to a mobile screen, I redesigned the filter system around mobile app filter patterns rather than typical desktop extension conventions, letting users see all filter options at once instead of a cramped panel.

**Simplifying after the first usability round.** Testing surfaced that the initial design felt cluttered, so the team removed structural elements (boxes, the navbar) and added whitespace to reduce distraction, prioritizing scanability over density.

**Using color and tone deliberately to manage user anxiety.** For the popup reminder, I chose a white background with a light pink accent specifically to feel soft and non-intrusive, since the popup's job was to interrupt someone's shopping without feeling pushy, paired with a larger call-to-action button to keep it easy to act on.

## The solution

> 📍 **Visual suggestion:** Lead this section with your existing expand/filter GIF (the one showing the panel opening to reveal all options at once). Motion sells this feature better than any static shot, since the interaction itself is the point.

- **Redesigned filter system**: mobile-inspired, expandable filtering by size, color, brand, and condition, replacing a size-only filter
- **Save/favorites feature and redesigned item cards**: bigger product photos, reorganized information, and a "best match" indicator for faster scanning
  > 📍 Your existing save-feature GIF and the before/after card comparison both fit well right under this bullet, the card comparison in particular is a clean, self-explanatory before/after.
- **Popup reminder**: designed, prototyped, and tested end-to-end, balancing visibility with a non-intrusive tone
  > 📍 Your existing popup mockup, plus the larger version showing the call-to-action button, work well here together, they show both the tone (soft, minimal) and the mechanics (a clear, actionable prompt).

## Outcome
The team presented the final design to Beni's co-founders, who approved the direction for the product's upcoming beta launch. Beni's team later shared this feedback: "Our team did a tremendous job designing screens for our Beta. They asked great questions, took feedback and iterated on it, and did a lot of their own research independent of the research that we provided. They were thoughtful, hardworking, and excited to produce good work and see their work out in the world."

## Reflection
Looking back, I'd have pushed for more research and usability testing specifically on the account and saved-preferences feature, which was designed with less validation than the filter and popup work.
