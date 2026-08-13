---
title: Accessible Design System
summary: Design systems, accessibility, data visualization
order: 2
company: Mastercard
logo: mastercard
accent: "#eb051a"
cover: mastercard-cover.jpg
timeframe: "2025"
role: UX designer
collaboration: Design Lead, Engineering Team, Designer
projectType: Internal product color palette / accessibility initiative
platform: Web (internal tools)
users: Internal design and engineering teams across 3 Mastercard products
protected: true
---

CONTEXT

## The problem
*Accessibility failures across fragmented systems*

Development teams regularly ran into accessibility contrast failures and inconsistent design across products, caused by disconnected, unmanaged internal design system libraries. This wasn't just a usability issue: accessibility compliance was something auditors actively checked for, making it a real business risk. My scope was to reconcile these libraries and create consistent, accessible color decisions across them.

DISCOVERY

## The approach
*Testing standards and building engineering alignment*

This project relied on accessibility research rather than user interviews. I tested contrast compliance against WCAG 2.1 AA using the WebAIM contrast checker, and worked directly with engineering on implementation.


IDEATION

## My contribution
*Research, design system, and governance*

- Researched accessibility contrast standards and data visualization best practices
- Pushed to move data visualization and interactive components off the existing color palette
- Designed and documented the new color system as a Figma library
- Established a governance process for future color additions
- Extended the system to support dark mode


## Key decisions
*Critical choices that shaped the project direction*

- **Dedicated palette for data viz:** The existing palette failed contrast requirements. I advocated for building a new, accessible palette rather than working around the limitation.
- **Stakeholder alignment:** Engineering wanted to keep the old colors. I reframed the issue as a compliance risk and walked them through testing to get buy-in for the new system.
- **Scoping to contrast:** Full colorblind-safe encoding wasn't feasible in all components. I scoped to contrast compliance and used legends/labels as supplements.


## The solution
*Accessible color system with dark mode*

- **Accessible color system**: 16 base colors with at least 10 shades each, meeting contrast standards for interactive components and data visualization. Adoption required only updating existing color values, not rebuilding components, keeping implementation effort low for engineering.
- **Figma library and guidelines**: documented for other designers to adopt independently
- **Dark mode support**: built into the same system rather than as an afterthought

OUTCOME

## Adopted across 3 products, fully compliant

Developers used the new system to build charts and components, passing all accessibility testing. The palette was adopted across 3 internal products, with positive feedback from internal teams.

REFLECTION

## From reactive to proactive auditing

The process was reactive rather than structured: we patched issues one at a time after discovering the old palette failed accessibility for data visualization, which cost both teams time. I'd check the existing palette against accessibility standards proactively and on a regular cadence, rather than waiting to find failures after the fact.
