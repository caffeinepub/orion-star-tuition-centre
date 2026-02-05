# Specification

## Summary
**Goal:** Build a responsive marketing website for “Orion Star Tuition Centre” (Classes 1–12) with an enquiry form that stores submissions and a simple admin view to review/delete enquiries.

**Planned changes:**
- Create a responsive multi-section homepage that prominently shows “Orion Star Tuition Centre” and clearly states it teaches Class 1 through Class 12.
- Add homepage sections with English copy: Hero (headline + short description + prominent CTA), About/Why Choose Us, Classes & Subjects (grouped 1–5, 6–8, 9–10, 11–12), Teaching approach, and a Contact/Enquiry section.
- Implement a Contact/Enquiry form (student name, parent/guardian name, class/grade, phone/email, message) with client-side validation, and success/failure states; submit to backend for persistent storage.
- Add an admin view (not linked in public navigation) to list enquiries (most recent first) with timestamps and allow deleting individual enquiries.
- Apply a consistent education-appropriate visual theme (not blue/purple-dominant) across all sections and components.
- Generate and include required static image assets in `frontend/public/assets/generated` and display the logo and hero image on the homepage.

**User-visible outcome:** Visitors can browse a themed, mobile-friendly site describing classes (1–12) and submit enquiries via a validated form; an admin-only page can review and delete stored enquiries that persist after reload.
