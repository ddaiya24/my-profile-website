---
name: Lumina Slate
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#1d4ed8'
  on-secondary: '#ffffff'
  secondary-container: '#4069f2'
  on-secondary-container: '#fffbff'
  tertiary: '#0051b1'
  on-tertiary: '#ffffff'
  tertiary-container: '#0f69dc'
  on-tertiary-container: '#edf0ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001551'
  on-secondary-fixed-variant: '#0039b5'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.25rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

The design system embodies a modern, sleek, and minimalist aesthetic tailored for mobile-first personal portfolio experiences. Designed for high-performing professionals, creative technologists, and executive operators, the interface communicates precision, credibility, and effortless sophistication. 

The visual narrative relies on extreme visual discipline: generous negative space, immaculate typographic scale, razor-sharp architectural borders, and deliberate hits of vibrant electric blue. Rather than relying on heavy ornaments, the personality is established through structural balance, subtle surface shifts, and micro-interactions that feel responsive and tactile on touch screens.

## Colors

The palette is engineered to maximize contrast, clarity, and visual punch while preserving a clinical, airy foundation.

- **Canvas & Surfaces:**
  - Base canvas: `#FFFFFF` provides clean luminescence.
  - Surface subtle / Page contrast background: `#F8FAFC`.
  - Elevated card fills: `#FFFFFF` paired with structural dividers.
- **Accents:**
  - Primary Action / Highlight: `#2563EB` (Cobalt Royal).
  - Pressed / Active Accent: `#1D4ED8` (Deep Blue).
  - Secondary Highlight / Interactive Hover: `#3B82F6` (Electric Blue).
  - Subtle Tints / Accent Surface: `#EFF6FF` for badge backgrounds, active pill states, and selected list rows.
- **Neutrals & Borders:**
  - Primary Typography: `#0F172A` (Slate 900) for high-contrast titles.
  - Secondary Typography: `#475569` (Slate 600) for body and meta labels.
  - Muted Details: `#94A3B8` (Slate 400) for subtle icons and timestamps.
  - Crisp Structural Borders: `#E2E8F0` (Slate 200) for hairline dividers and card boundaries.

## Typography

The type hierarchy relies on `Inter` across all touchpoints, emphasizing clean geometric precision, exceptional horizontal rhythm, and optical legibility on mobile screens. 

- **Display & Headings:** Rendered in Slate 900 (`#0F172A`) with negative letter tracking to yield an editorial, punchy presence.
- **Body:** Uses calibrated line-heights (1.5x–1.6x) in Slate 600 (`#475569`) to guarantee fatigue-free reading across project case studies and career summaries.
- **Meta & Micro-labels:** Small caps or slightly tracked medium-to-semibold weights keep secondary info distinct and scannable.

## Layout & Spacing

The layout is built around a mobile-first, fluid column structure enclosed within safe, comfortable edge margins.

- **Layout Structure:**
  - Phone (< 640px): 4-column fluid layout with `1rem` screen margin and `0.75rem` gutters. Content containers feature single-column stacked flows.
  - Tablet / Expanded (≥ 640px): 6 to 8-column layout with `1.25rem` margins and `1rem` gutters, enabling 2-column project grids.
- **Spacing Rhythm:** Standard 4px/8px incremental rhythm governs all internal spacing, preserving airy pacing between sections (`space-xl`), within composite cards (`space-lg`), and across micro elements (`space-sm`).

## Elevation & Depth

Visual hierarchy uses a refined hybrid of crisp borders and ultra-soft ambient lighting rather than heavy drop shadows:

- **Surface Tiers:**
  - Base Page: `#F8FAFC`
  - Elevated Container / Card: Pure white `#FFFFFF` layered on `#F8FAFC`
- **Low-Contrast Hairlines:** All containers and cards leverage a 1px solid border in `#E2E8F0`. This anchors components crisply against the canvas.
- **Ambient Micro-Shadows:** Floating elements (e.g., sticky navigation pills, modals, active tooltips) feature a hyper-diffused, cool-tinted shadow: `0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.03)`.
- **Active Accent Elevation:** Primary blue focus states and buttons feature an ambient colored glow: `0 4px 14px 0 rgba(37, 99, 235, 0.25)`.

## Shapes

The interface balances sharp precision with modern ergonomics. Corner radii adhere to Level 2 (Rounded):

- **Cards, Sheets & Content Modules:** Standardized to `1rem` (16px, `rounded-lg`) for smooth framing on mobile displays.
- **Buttons, Form Inputs & Interactive Blocks:** Styled at `0.5rem` to `0.75rem` (8px–12px) for a structured, tactile grip.
- **Badges, Tags & Floating Navigators:** Styled as full pill geometry (`9999px`) to create intentional geometric contrast against squared content modules.

## Components

### Navigation Bar
- **Mobile Floating Header:** A docked top pill or anchored bottom bar with a semi-opaque background (`rgba(255, 255, 255, 0.85)` + 12px blur), bounded by a 1px `#E2E8F0` border.
- **Nav Links:** Compact labels in `#475569` transitioning to `#0F172A` with an active dot indicator in `#2563EB`.

### Buttons
- **Primary:** Solid `#2563EB` fill, `#FFFFFF` text, `0.625rem` radius, `0.75rem 1.25rem` padding. In active/pressed states: `#1D4ED8` with subtle scale transition (`0.98`).
- **Secondary / Outline:** Background `#FFFFFF`, 1px solid border `#E2E8F0`, text `#0F172A`. Active state uses `#F8FAFC`.
- **Ghost:** Transparent background, `#475569` text, `#EFF6FF` on press with `#2563EB` text.

### Badges & Chips
- **Status / Skill Pills:** Background `#EFF6FF`, border 1px solid `#DBEAFE`, text `#2563EB`, font size `label-sm` (11px, weight 600).
- **Neutral Badges:** Background `#F8FAFC`, border 1px solid `#E2E8F0`, text `#475569`.
- **Availability Dot:** Circular 6px indicator in `#10B981` (emerald green) nestled inside a `#ECFDF5` pill to show availability for hire.

### Project & Experience Cards
- **Card Styling:** White background (`#FFFFFF`), 1px border (`#E2E8F0`), `1rem` corner radius, generous inner padding (`space-lg`).
- **Card Media:** Aspect ratio 16:9 or 4:3 with overflow hidden and a subtle inset hairline border (`inset 0 0 0 1px rgba(0,0,0,0.05)`).
- **Metadata Stack:** Inline company/timeline row in `body-sm` (`#94A3B8`), title in `headline-md` (`#0F172A`), summary in `body-md` (`#475569`).

### Input Fields & Contact Elements
- **Text Inputs:** Height 48px, background `#FFFFFF`, border 1px solid `#E2E8F0`, `0.5rem` radius, text `#0F172A`, placeholder `#94A3B8`.
- **Focus State:** Border color shifts to `#2563EB` paired with an outer box-shadow ring `0 0 0 3px rgba(37, 99, 235, 0.15)`.

### Lists & Timeline Trackers
- **Work History List:** Left-anchored 1px hairline guide (`#E2E8F0`) with 8px circular nodes in `#2563EB` for active roles and `#CBD5E1` for past roles. Items padded uniformly using `space-md`.