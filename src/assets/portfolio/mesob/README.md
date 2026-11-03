# Mesob

**Queue management for public offices** — a citizen takes a number, an operator calls them, a TV on that floor announces it, an admin watches the whole building. The kiosk speaks **Afaan Oromoo**.

Built as a **freelancer** for **[Debo Engineering](https://www.deboengineering.com/)**.

Portfolio case study: `/projects/mesob`  
Screenshots live in this folder. Video: Awesome Screenshot walkthrough on the case-study page.

Source is a **private** repository.

---

## What it does

Think of a government building, not a single line at a bakery. The building belongs to one organization. Inside it: sectors, services, floors, windows, counters, operators.

A citizen at the kiosk picks a window and a service. The system only prints a ticket if someone who can do that service is online. It assigns the least-busy matching counter, prints number + counter + window + floor, and the floor TV calls the ticket.

### Roles

| Role | Can do |
| :--- | :--- |
| **Citizen** | Take a ticket, watch the TV, give feedback, file a complaint (no login) |
| **Operator** | Call next, recall, served, no-show, transfer; profile |
| **Admin** | Organization setup, windows, live queue, charts, complaints |

---

## Best features

- Only counters that offer that service can get the ticket.
- Offline operators are skipped.
- Least loaded matching counter wins.
- Printout and TV already know the floor and desk.
- Transfer mid-visit, with a reason.
- Thermal ticket (80mm): org, service, big number, counter, window, floor, date.
- Complaint PDF in Afaan Oromoo and English.

---

## How the office works

| Piece | Plain meaning |
| :--- | :--- |
| Sector | A department (e.g. Licensing, Payments) |
| Service | One thing a citizen came to do (e.g. Renew ID) |
| Floor | A physical storey with its own waiting TV |
| Window | A service point on that floor |
| Counter | One desk inside a window |
| Operator | The staff member sitting at that desk |

