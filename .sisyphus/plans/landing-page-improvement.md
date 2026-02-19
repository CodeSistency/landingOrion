# Landing Page Improvement Plan

## TL;DR
> **Quick Summary**: Refactoring the landing page to improve conversion (Primary Goal: "Book a Demo") and visual polish using Framer Motion. Replacing custom scroll hooks with robust animation library.
> 
> **Deliverables**:
> - Updated Hero with "Book a Demo" CTA
> - New `TrustedBy` section with placeholder logos
> - Full Framer Motion integration (scroll reveals, hover states)
> - Cleanup of legacy `useScrollAnimation` hook
> 
> **Estimated Effort**: Medium
> **Parallel Execution**: YES - 3 waves
> **Critical Path**: Install Framer Motion → Component Updates → Cleanup

---

## Context

### Original Request
User wants to "get better" the landing page with frontend skills, specifically focusing on conversion and visual polish using a motion skill.

### Interview Summary
**Key Discussions**:
- **Goal**: "Contact / Demo" is primary conversion action.
- **Social Proof**: User requested placeholders for "Trusted By".
- **Visuals**: "Enhanced Animations" & "Micro-interactions" (Framer Motion).
- **Style**: Refine current minimal/black & white style.

### Metis Review
**Identified Gaps** (addressed):
- **Duplicate Logic**: Plan removes `useScrollAnimation` in favor of Framer Motion.
- **Performance**: Added bundle size check step.
- **CTA Destination**: defaults to `#contact` for now.

---

## Work Objectives

### Core Objective
Increase conversion to "Book a Demo" and elevate visual quality with professional motion.

### Concrete Deliverables
- `components/Hero.tsx`: Updated copy & CTA
- `components/TrustedBy.tsx`: New component
- `lib/motion.ts`: Centralized animation variants
- Updated `page.tsx` including new sections

### Definition of Done
- [ ] "Book a Demo" button exists and links to contact form
- [ ] `TrustedBy` section renders with 4-5 placeholder logos
- [ ] Scroll animations work smoothly on all major sections
- [ ] Lighthouse Performance score > 90

### Must Have
- Framer Motion integration
- "Book a Demo" CTA
- Placeholder logos
- Mobile responsiveness maintained

### Must NOT Have (Guardrails)
- New color scheme (stick to black/white/gray)
- Heavy assets (video backgrounds, large images)
- Complex 3D (keep it 2D motion)

---

## Verification Strategy (MANDATORY)

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: NO (Tests not found in exploration)
- **Automated tests**: NO (Focus on visual regression/manual QA via agent)
- **QA Policy**: Every task MUST include agent-executed QA scenarios using `playwright` (UI) or `bash` (Verify files).

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Foundation):
├── Task 1: Install Framer Motion & Setup Variants [quick]
├── Task 2: Create TrustedBy Component [visual-engineering]
└── Task 3: Update Hero CTA & Copy [quick]

Wave 2 (Animation Integration):
├── Task 4: Animate Hero Section (Framer Motion) [visual-engineering]
├── Task 5: Animate Features & Benefits (Scroll Reveal) [visual-engineering]
├── Task 6: Animate TrustedBy & HowItWorks [visual-engineering]
└── Task 7: Add Micro-interactions (Buttons/Links) [visual-engineering]

Wave 3 (Cleanup & Polish):
├── Task 8: Remove Legacy Animation Hook [quick]
└── Task 9: Final Mobile Responsiveness Check [visual-engineering]

Wave FINAL (Verification):
├── Task F1: Plan Compliance Audit (oracle)
├── Task F2: Visual QA (playwright)
└── Task F3: Scope Fidelity Check (deep)
```

---

## TODOs

- [ ] 1. Install Framer Motion & Setup Variants

  **What to do**:
  - Install `framer-motion` and `clsx` `tailwind-merge` (if not present)
  - Create `components/ui/motion.tsx` (or `lib/motion.ts`) with reusable variants:
    - `fadeInUp`: { opacity: 0, y: 20 } -> { opacity: 1, y: 0 }
    - `fadeInScale`: { opacity: 0, scale: 0.95 } -> { opacity: 1, scale: 1 }
    - `staggerContainer`: { transition: { staggerChildren: 0.1 } }

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1

  **References**:
  - `package.json` - Check dependencies
  - `components/Hero.tsx` - See current animation classes to replace

  **QA Scenarios**:
  ```
  Scenario: Verify Framer Motion installation
    Tool: interactive_bash
    Steps:
      1. Run `npm list framer-motion` (or equivalent for package manager)
      2. Check if `components/ui/motion.tsx` exists
    Expected Result: Package installed, file created
    Evidence: .sisyphus/evidence/task-1-install.txt
  ```

- [ ] 2. Create TrustedBy Component

  **What to do**:
  - Create `components/TrustedBy.tsx`
  - Add section title: "Trusted by innovative teams" (or similar)
  - Add grid of 4-6 placeholder logos (use `lucide-react` icons or simple SVG shapes like circles/squares with opacity)
  - Style: Grayscale, opacity 50%, hover -> opacity 100%
  - Add to `app/[locale]/page.tsx` below Hero

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`frontend-ui-ux`, `frontend-design`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1

  **References**:
  - `components/Features.tsx` - Layout reference
  - `app/[locale]/page.tsx` - Integration point

  **QA Scenarios**:
  ```
  Scenario: Verify TrustedBy component render
    Tool: playwright
    Steps:
      1. Navigate to `/`
      2. Scroll below Hero
      3. Assert text "Trusted by" is visible
      4. Count logo placeholders (should be >= 4)
    Expected Result: Section visible with logos
    Evidence: .sisyphus/evidence/task-2-trustedby.png
  ```

- [ ] 3. Update Hero CTA & Copy

  **What to do**:
  - Modify `components/Hero.tsx`:
    - Change primary button text to "Book a Demo" (update `en.json` / translation files)
    - Ensure it links to `#contact`
    - Make it distinct (solid background vs outline) if not already
  - Check `messages/en.json` (or similar) for translation keys and update them.

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1

  **References**:
  - `components/Hero.tsx:34` - Primary CTA
  - `messages/en.json` - Translation strings (infer path)

  **QA Scenarios**:
  ```
  Scenario: Verify Hero CTA update
    Tool: playwright
    Steps:
      1. Navigate to `/`
      2. Locate primary button in Hero
      3. Assert text contains "Book a Demo"
      4. Click button -> Verify URL hash is `#contact`
    Expected Result: Text updated, link works
    Evidence: .sisyphus/evidence/task-3-cta.png
  ```

- [ ] 4. Animate Hero Section (Framer Motion)

  **What to do**:
  - Convert `components/Hero.tsx` to use `framer-motion`
  - Replace `useScrollAnimation` with `<motion.div>`
  - Apply `fadeInUp` variant to Title, Subtitle, CTAs
  - Apply `staggerContainer` to the parent
  - Ensure `use client` is preserved

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocked By**: Task 1 (Motion variants)

  **References**:
  - `components/ui/motion.tsx` - Variants source
  - `components/Hero.tsx` - File to edit

  **QA Scenarios**:
  ```
  Scenario: Verify Hero animation
    Tool: playwright
    Steps:
      1. Reload `/`
      2. Observe Hero elements entering
      3. Check DOM for `style="opacity: 1"` after animation
    Expected Result: Elements fade in smoothly
    Evidence: .sisyphus/evidence/task-4-hero-anim.mp4
  ```

- [ ] 5. Animate Features & Benefits

  **What to do**:
  - Convert `components/Features.tsx` and `components/Benefits.tsx`
  - Use `motion.div` with `initial="hidden" whileInView="visible" viewport={{ once: true }}`
  - Stagger feature cards entrance
  - Add hover scale effect to feature icons/cards (`whileHover={{ scale: 1.05 }}`)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocked By**: Task 1

  **References**:
  - `components/Features.tsx`
  - `components/Benefits.tsx`

  **QA Scenarios**:
  ```
  Scenario: Verify Features animation
    Tool: playwright
    Steps:
      1. Scroll to Features section
      2. Hover over a feature card
      3. Assert transform scale changes
    Expected Result: Scroll reveal works, hover effect works
    Evidence: .sisyphus/evidence/task-5-features-anim.mp4
  ```

- [ ] 6. Animate TrustedBy & HowItWorks

  **What to do**:
  - Apply scroll reveal to `TrustedBy` component (fade in up)
  - Apply staggered reveal to `HowItWorks` steps
  - Ensure no layout shift (use defined heights)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocked By**: Task 2

  **References**:
  - `components/TrustedBy.tsx`
  - `components/HowItWorks.tsx`

  **QA Scenarios**:
  ```
  Scenario: Verify TrustedBy animation
    Tool: playwright
    Steps:
      1. Scroll to TrustedBy
      2. Verify opacity transition
    Expected Result: Logos fade in
    Evidence: .sisyphus/evidence/task-6-trusted-anim.mp4
  ```

- [ ] 7. Add Micro-interactions (Buttons/Links)

  **What to do**:
  - Create a reusable `MotionButton` wrapper or apply to existing buttons
  - Add `whileTap={{ scale: 0.95 }}`
  - Add `whileHover={{ scale: 1.05 }}` (subtle)
  - Apply to Navbar links, Footer links, and all CTAs

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocked By**: Task 1

  **References**:
  - `components/Hero.tsx` (Buttons)
  - `components/Footer.tsx` (Links)

  **QA Scenarios**:
  ```
  Scenario: Verify Button interactions
    Tool: playwright
    Steps:
      1. Hover over "Book a Demo"
      2. Click (mouse down) on "Book a Demo"
      3. Assert visual feedback (scale)
    Expected Result: Button scales on hover/click
    Evidence: .sisyphus/evidence/task-7-interactions.mp4
  ```

- [ ] 8. Remove Legacy Animation Hook

  **What to do**:
  - Delete `hooks/useScrollAnimation.ts` (or `useScrollAnimation.tsx`)
  - Remove all imports of `useScrollAnimation`
  - Remove CSS classes `.reveal`, `.animate-fade-in-up` if no longer used (check `globals.css` or Tailwind config)

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 3
  - **Blocked By**: Tasks 4, 5, 6

  **References**:
  - `hooks/useScrollAnimation.ts`
  - `app/globals.css`

  **QA Scenarios**:
  ```
  Scenario: Verify cleanup
    Tool: bash
    Steps:
      1. `ls hooks/useScrollAnimation.ts` (should fail)
      2. `grep -r "useScrollAnimation" .` (should return nothing)
    Expected Result: File gone, no references
    Evidence: .sisyphus/evidence/task-8-cleanup.txt
  ```

- [ ] 9. Final Mobile Responsiveness Check

  **What to do**:
  - Verify all new animations on mobile viewport (375px)
  - Ensure "TrustedBy" logos wrap correctly
  - Ensure no horizontal overflow from animations
  - Add `overflow-x-hidden` to `body` or `main` if needed

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 3
  - **Blocked By**: All previous tasks

  **References**:
  - `app/[locale]/page.tsx`
  - `app/layout.tsx`

  **QA Scenarios**:
  ```
  Scenario: Verify Mobile Layout
    Tool: playwright
    Steps:
      1. Set viewport size { width: 375, height: 667 }
      2. Scroll full page
      3. Check for horizontal scrollbar (should be none)
      4. Check TrustedBy grid layout (should be 2 cols or 1 col)
    Expected Result: Responsive layout intact
    Evidence: .sisyphus/evidence/task-9-mobile.png
  ```

---

## Final Verification Wave

- [ ] F1. **Plan Compliance Audit** — `oracle`
- [ ] F2. **Visual QA** — `playwright`
- [ ] F3. **Scope Fidelity Check** — `deep`

---

## Commit Strategy
- **1**: `chore: install framer-motion`
- **2**: `feat: add TrustedBy component`
- **3**: `content: update hero CTA`
- **4**: `feat: animate hero`
- **5**: `feat: animate features benefits`
- **6**: `feat: animate trustedby howitworks`
- **7**: `style: add micro-interactions`
- **8**: `refactor: remove legacy animation hook`
- **9**: `fix: mobile responsiveness`

## Success Criteria
- [ ] Lighthouse Performance > 90
- [ ] "Book a Demo" visible and functional
- [ ] No console errors related to animations
