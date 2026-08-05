# [Draft] ChargePoint: EV charging station discovery

---

**At a glance**
- Duration: ~3 months (immediately preceding the Mastercard engagement)
- Highlight: UX design, competitive research, interaction design
- Role: Designer, part of a team with a researcher, a UI designer, another designer, and a product owner from ChargePoint
- Team: as above
- Project type: Consumer mobility app, map and discovery feature
- Platform: Mobile app [confirm: is this correct, or was this web/multi-platform?]
- Users: EV drivers looking for available charging stations and nearby amenities

## The problem
Users spent significant time in the ChargePoint app trying to determine whether a station was actually available, and whether it matched the charging speed and connector type they needed. For the business, this was a retention risk: losing user trust in the app's reliability meant losing usage, and with it, revenue.

## The approach
Working with a researcher, a UI designer, another designer, and ChargePoint's product owner, the team ran a competitive analysis of more than 10 charging station apps, studying how each organized station data in both the broad map view and the single-station detail view. That research surfaced that charge speed (fast vs. slow), station count at a location, and real-time availability were the most consistent, highest-value data points across competitors.

## My contribution
Led the competitive analysis research, and led the map redesign work on how station icons changed through zoom in/out interaction.

## Key decisions

**Designing around inconsistent, host-owned data.** Most ChargePoint stations aren't owned or operated by ChargePoint itself, independent site hosts own the equipment and manage the stations entirely. This meant station data on the map was sometimes inconsistent or poorly synced, and details like station naming were outside ChargePoint's control. Rather than trying to paper over that inconsistency, the design focused on clearly indicating status and reduced the prominence of redundant or unreliable details, keeping user focus on what actually mattered: power level, station count, and availability.

## The solution
- **Improved map discoverability**: reworked station icons and at-a-glance details so availability and charge speed were clearer without opening a station
- **Amenities filter workflow**: designed a new filtering flow to help users find nearby amenities faster

## Outcome
The project was approved and moved into development. I handed the work off when I moved to the Mastercard engagement, so I don't have visibility into how it performed after launch.

## Reflection
The timeline was tight: stakeholders needed a prototype quickly to pitch the project's potential to their directors, which meant the team designed against assumptions rather than validating with real users first. Looking back, I'd have pushed to test those assumptions with real users before finalizing the design.
