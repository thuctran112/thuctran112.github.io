# [Draft] Load tracking redesign

> **Note to self before publishing:** Client name below is a placeholder pending written permission from your former employer (a coworker has already published a similar case study naming the client, which may make this easier to request, but confirm separately). Screens still need to be rebuilt with sanitized data before publishing. In particular, the order-details "after" screenshot shows a real business partner name, address, and phone number that need to be blurred or replaced regardless of the client-name decision.

---

**At a glance**
- Year: 2022-2023
- Highlight: Product design, UX research, systems thinking
- Role: Sole product designer, partnering with a UX researcher who led the project
- Team: UX researcher (project lead), engineering, a PM, a product owner; a second designer joined mid-project
- Project type: Enterprise workflow redesign
- Platform: Web
- Users: Customer service and operations staff, several hundred people across multiple U.S. states

## The problem
Customer service reps had no reliable way to track a load's status. They had to check three or more separate systems, and often learned about delays only when a customer called, costing hours of avoidable rework each week. Research also surfaced a separate revenue risk: missing proof-of-delivery uploads.

> 📍 **Visual suggestion:** A before/after comparison of the legacy AS400 screen and the redesigned dashboard, placed right here, makes the problem clear before the reader gets to any text.

## The approach
Working under a fixed deadline with one designer for most of the project, I partnered with the UX researcher who led it to interview 21 users across five departments, synthesized through affinity mapping into a journey map. We also visited an operations site to observe workflows directly. As the deadline approached, I shifted to building a shared design system so the team could move from validated workflows straight into production-ready mockups.

> 📍 **Visual suggestion:** A simplified crop of the journey map, showing only the 3-4 pain points central to this story, with a short caption under each on why it matters to the business.

## My contribution
- Led research and synthesis alongside the UX researcher: conducted interviews, built the journey map, and identified the core problem and a separate revenue-risk finding
- Made the scoping call to flag the revenue-risk finding rather than expand the project
- Built the project's design system from the ground up
- Designed the interactive timeline, turning it from a display into a tool
- Designed the planning dashboard's workflow end-to-end
- Maintained design consistency across the team after a second designer joined mid-project

## Key decisions

**Scoping.** Research surfaced a revenue-risk finding, missing proof-of-delivery uploads, that lived outside the system we were redesigning. I flagged it separately to stakeholders rather than expanding scope, keeping the team focused on the workflow we could actually change.

**Buy vs. build.** Chose a Vue Material dashboard theme as the design system's foundation to hit the deadline, then built custom where it fell short: a fully custom drag-and-drop planning interaction, and a v1 live map deliberately scoped to visuals only.

> 📍 **Visual suggestion:** A side-by-side of the stock theme component and the customized version makes this trade-off concrete.

**Timeline as a tool, not a display.** Extended the status timeline so users could mark status, message on a load, and receive alerts, directly closing the gap that caused reps to learn about delays too late.

## The solution

> 📍 **Visual suggestion:** Lead this section with a full screenshot of the consolidated order details dashboard. This is the primary image for the case study.

- **Consolidated order details dashboard**: order information, a live map, and an interactive timeline in one view
  > 📍 A close-up of the timeline component, showing the mark/message/alert interaction, works well here.
- **Live map (v1)**: routes and load status at a glance, scoped as visual-only for this release
- **Planning dashboard**: designed the planning workflow end-to-end, including the drag-and-drop scheduling interaction
  > 📍 A short GIF of the drag-and-drop in motion, if you can capture or recreate one, reads stronger than a static screenshot.

## Outcome
The redesign resolved most identified pain points: 80% for customer service, 45% for planners, 36% for driver managers, with reduced workflow complexity in order entry, plan assignment, search, and planning. The project was paused before launch due to company-wide cuts. In usability testing, users and the product owner responded positively to the timeline, alerts, and drag-and-drop planning, all seen as faster and clearer than the legacy workflow.

## Reflection
I'd scope this differently: focus early on the highest-revenue-risk problem instead of redesigning the full workflow at once. Doing everything in parallel created real overhead and, at times, overwhelmed the PO and stakeholders. A leaner, phased approach would have reduced that strain and gotten something in front of users sooner.
