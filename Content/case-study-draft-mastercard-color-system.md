# [Draft] Accessible color system for data visualization

> **Note to self before publishing:** Every artifact from this project is under NDA, and there are no existing screenshots or wireframes to pull from. Screens need to be recreated from scratch using generic data, illustrative charts, and palette swatches, not real Mastercard UI. Avoid reusing the literal hex values from Mastercard's system if unsure they're shareable; describe the accessibility standard met (WCAG AA contrast) instead of exact proprietary codes.

---

**At a glance**
- Year: 2025
- Highlight: Design systems, accessibility, data visualization
- Role: UX Designer
- Collaboration: engineering team, design lead, designers
- Project type: Internal product color palette / accessibility initiative
- Platform: Web (internal tools)
- Users: Internal design and engineering teams across 3 Mastercard products

## The problem
Development teams regularly ran into accessibility contrast failures and inconsistent design across products, caused by disconnected, unmanaged internal design system libraries. This wasn't just a usability issue: accessibility compliance was something auditors actively checked for, making it a real business risk. My scope was to reconcile these libraries and create consistent, accessible color decisions across them.

## The approach
This project relied on accessibility research rather than user interviews. I tested contrast compliance against WCAG 2.1 AA using the WebAIM contrast checker, and worked directly with engineering on implementation.

## My contribution
- Researched accessibility contrast standards and data visualization best practices
- Pushed to move data visualization and interactive components off the existing color palette
- Designed and documented the new color system as a Figma library
- Established a governance process for future color additions
- Extended the system to support dark mode

## Key decisions

**Moving off the existing palette for data visualization.** The existing internal product color palette didn't meet contrast requirements for interactive components and charts. Rather than work around the limitation, I pushed for a dedicated, accessible palette built to scale across chart types.

**Pushing back on engineering.** Engineering proposed keeping colors from the existing library, some of which failed contrast testing. I walked them through our testing process and reframed it as the compliance risk it was, not just a design preference. The new system was adopted.

**Scoping the accessibility work to contrast.** Spacing constraints in existing chart components made full colorblind-safe redundant encoding (patterns, icons) infeasible everywhere. Where possible, I used legends and direct data labels as a partial substitute, but kept the project scoped to contrast-ratio compliance rather than a full redesign.

## The solution
- **Accessible color system**: 16 base colors with at least 10 shades each, meeting contrast standards for interactive components and data visualization. Adoption required only updating existing color values, not rebuilding components, keeping implementation effort low for engineering.
- **Figma library and guidelines**: documented for other designers to adopt independently
- **Dark mode support**: built into the same system rather than as an afterthought

> 📍 **Visual suggestion:** A before/after: the old internal palette's contrast failure next to the new palette, on the same chart. This makes the problem concrete without using any real Mastercard screens.
> 📍 **Visual suggestion:** A palette swatch grid showing the full scale system is a strong, easy-to-recreate visual.

## Outcome
Developers used the new system to build charts and components, passing all accessibility testing. The palette was adopted across 3 internal products, with positive feedback from internal teams.

## Reflection
The process was reactive rather than structured: we patched issues one at a time after discovering the old palette failed accessibility for data visualization, which cost both teams time. I'd check the existing palette against accessibility standards proactively and on a regular cadence, rather than waiting to find failures after the fact.
