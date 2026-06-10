---
name: Zytact Portfolio
description: Personal proof-of-work portfolio for Arnab Chakraborty.
colors:
    cool-paper-bg: '#eef3fa'
    cool-paper-soft: '#e2ecf7'
    ink: '#141820'
    ink-soft: '#2d3750'
    muted-blue-gray: '#5a6a82'
    proof-blue: '#1d63d4'
    paper-card: '#f5f9ff'
    stamp-yellow: '#fbbf24'
    shipped-green: '#22c55e'
    tool-purple: '#a855f7'
    maker-pink: '#ec4899'
    alert-red: '#ef4444'
    night-bg: '#0e1118'
    night-paper: '#1a1f2c'
    night-ink: '#ece8de'
typography:
    display:
        fontFamily: 'Instrument Serif, Georgia, serif'
        fontSize: 'clamp(4.5rem, 11vw, 6.25rem)'
        fontWeight: 400
        lineHeight: 0.92
        letterSpacing: '-3px'
    headline:
        fontFamily: 'Instrument Serif, Georgia, serif'
        fontSize: 'clamp(3rem, 7vw, 3.5rem)'
        fontWeight: 400
        lineHeight: 0.95
        letterSpacing: '-2px'
    title:
        fontFamily: 'Instrument Serif, Georgia, serif'
        fontSize: '26px'
        fontWeight: 400
        lineHeight: 1
        letterSpacing: '-0.8px'
    body:
        fontFamily: 'DM Sans, sans-serif'
        fontSize: '16px'
        fontWeight: 400
        lineHeight: 1.55
    label:
        fontFamily: 'Caveat, cursive'
        fontSize: '20px'
        fontWeight: 700
        letterSpacing: '0.5px'
rounded:
    xs: '2px'
    sm: '8px'
    md: '12px'
    lg: '14px'
    xl: '18px'
    pill: '999px'
spacing:
    xs: '6px'
    sm: '10px'
    md: '18px'
    lg: '24px'
    xl: '40px'
    page: '48px'
components:
    button-primary:
        backgroundColor: '{colors.proof-blue}'
        textColor: '#ffffff'
        rounded: '{rounded.md}'
        padding: '12px 22px'
    button-secondary:
        backgroundColor: '{colors.paper-card}'
        textColor: '{colors.ink}'
        rounded: '{rounded.md}'
        padding: '12px 22px'
    card-proof:
        backgroundColor: '{colors.paper-card}'
        textColor: '{colors.ink}'
        rounded: '{rounded.xl}'
        padding: '24px'
    chip:
        backgroundColor: 'rgba(0,0,0,0.06)'
        textColor: '{colors.ink}'
        rounded: '{rounded.pill}'
        padding: '2px 8px'
---

# Design System: Zytact Portfolio

## 1. Overview

**Creative North Star: "Shipping Scrapbook"**

The portfolio should feel like a tactile wall of shipped proof: project notes, small stamps, hand-marked labels, and hard-edged proof cards pinned into a clean web surface. The system is playful, technical, and relentless without becoming a terminal costume or a corporate recruiter template.

Direction B is the active identity. It pairs cool paper surfaces, saturated stamp colors, chunky offset shadows, slight rotations, emoji cursor feedback, and a serif plus handwritten voice. The design should always make the work easier to inspect. Decoration exists as a memory hook, not as a layer between the visitor and evidence.

**Key Characteristics:**

- Cool blue paper base with saturated proof colors.
- Tactile cards: ink borders, low-radius corners, hard offset shadows.
- Serif display type for personality, DM Sans body for legibility, Caveat for sticker voice.
- Playful interaction details: rotations, emoji cursor, hover lifts.
- Proof-first information density: projects, tags, PRs, contribution graph, contact paths.

## 2. Colors

The palette is a cool-paper scrapbook with one authoritative blue and a small set of saturated stamp colors for category and proof accents.

### Primary

- **Proof Blue** (`proof-blue`): Main action, highlighted names, project initials, graph high values, and technical credibility marks. Use it for decisive proof moments, not every decorative element.

### Secondary

- **Stamp Yellow** (`stamp-yellow`): Active nav, mark highlights, small delight moments.
- **Shipped Green** (`shipped-green`): positive status, database/category marks, alternate timeline dots.
- **Tool Purple** (`tool-purple`), **Maker Pink** (`maker-pink`), **Alert Red** (`alert-red`): category stamps and dark-mode offset shadows.

### Neutral

- **Cool Paper Background** (`cool-paper-bg`): default page body.
- **Cool Paper Soft** (`cool-paper-soft`): footer and broad secondary surfaces.
- **Paper Card** (`paper-card`): cards, pills, nav backing, graph containers.
- **Ink** (`ink`): borders, headings, primary text, hard shadows.
- **Ink Soft** (`ink-soft`): body copy on cards and hero prose.
- **Muted Blue Gray** (`muted-blue-gray`): metadata, helper copy, labels.
- **Night Background / Night Paper / Night Ink**: dark-mode equivalents. Dark mode keeps the scrapbook feel by changing shadows to accent colors.

### Named Rules

**The Proof Blue Rule.** Blue means verification or action. If a surface is not asking for trust, action, or attention, do not paint it blue.

**The Stamp Palette Rule.** Yellow, green, purple, pink, and red are stamps. Use them in small confident hits, never as vague gradients.

## 3. Typography

**Display Font:** Instrument Serif with Georgia fallback  
**Body Font:** DM Sans with sans-serif fallback  
**Label Font:** Caveat with cursive fallback  
**Technical Accent:** Geist Mono only for literal repo or code-like metadata

**Character:** The type system is a proof notebook, not a terminal. Serif headlines add personhood, DM Sans keeps project evidence readable, and Caveat adds hand-placed energy in short labels.

### Hierarchy

- **Display** (400, `clamp(4.5rem, 11vw, 6.25rem)`, 0.92): hero and page titles only.
- **Headline** (400, `clamp(3rem, 7vw, 3.5rem)`, 0.95): section headings.
- **Title** (400, `26px`, 1): project, PR, and timeline titles.
- **Body** (400 to 500, `14px` to `17px`, 1.55 to 1.65): descriptions and proof copy. Keep long prose under 75ch.
- **Label** (600 to 700, `11px` to `20px`): stickers, badges, short metadata. Uppercase is allowed only for compact tags and statuses.

### Named Rules

**The Short Handwriting Rule.** Caveat is for stickers, side comments, and brief personality. Never set body copy or long explanations in the hand font.

**The No Terminal Costume Rule.** Mono appears only when the content is actually repo-like or code-like. Do not use monospace as a generic developer aesthetic.

## 4. Elevation

Elevation is structural and tactile. The system does not use ambient soft shadows. Depth comes from hard offset shadows that read like physical paper sitting above the background.

### Shadow Vocabulary

- **Sticker Tap** (`2px 2px 0 var(--b-shadow)`): active nav pills and small social links.
- **Button Lift** (`4px 4px 0 var(--b-shadow)`): primary and secondary CTA buttons.
- **Note Lift** (`5px 5px 0 var(--b-shadow)`): hero notes and sidebar cards.
- **Proof Card Lift** (`6px 6px 0 var(--b-shadow)`): cards, graphs, project and PR surfaces.
- **Hover Proof Lift** (`9px 9px 0 var(--b-shadow)`): project and PR card hover state.

### Named Rules

**The Hard Shadow Rule.** Shadows are solid offsets, never blurred glow. If a card needs depth, use an ink border plus a hard offset shadow.

**The Movement Has Weight Rule.** Hover states lift by a few pixels and straighten rotations. They should feel like picking up a note, not like a fade preset.

## 5. Components

### Buttons

- **Shape:** low-radius tactile rectangle (`12px`), not a SaaS pill except nav CTA.
- **Primary:** proof blue background, white text, `2px` ink border, `4px 4px` hard shadow, slight counter-rotation.
- **Secondary:** paper-card background, ink text, same border and shadow as primary.
- **Hover / Focus:** preserve hard-shadow language. Use visible focus outlines if new interactive states are added.

### Chips

- **Style:** pill shape (`999px`), tiny internal padding, transparent ink tint, compact DM Sans.
- **State:** category badges may use saturated stamp backgrounds; project tags should stay quiet so titles and descriptions win.

### Cards / Containers

- **Corner Style:** modest corners (`14px` to `18px`). Do not exceed `18px` on cards.
- **Background:** paper-card or the project tint set (`--b-tint-*`).
- **Shadow Strategy:** hard offset shadow from Elevation.
- **Border:** always ink-like and visible (`2px` to `2.5px`) on proof cards.
- **Internal Padding:** `18px` to `26px`, with project cards at `24px`.

### Inputs / Fields

No primary form system exists yet. If added, fields should borrow the button/card grammar: paper-card background, `2px` ink border, `12px` radius, readable placeholder contrast, and a focus state that uses proof blue plus a hard shadow shift.

### Navigation

Sticky, paper-backed, and tactile. The active link rotates slightly, turns stamp yellow, gets an ink border, and uses a small hard shadow. The contact CTA is dark ink with a blue shadow. On tablet and mobile, nav wraps and keeps links horizontally scrollable rather than collapsing into a generic hamburger.

### Signature Component: Proof Cards

Project cards are the signature surface. They rotate slightly, use varied paper tints, include a stamped project initial, and lift into alignment on hover. These cards must remain scannable: title, shipped year, concise description, private-repo note if needed, then tech tags.

### Signature Component: Emoji Cursor

Desktop uses an emoji cursor scoped to the portfolio shell. It should react to `data-cur` affordances and disappear on touch-sized layouts. Never rely on it for meaning.

## 6. Do's and Don'ts

### Do:

- **Do** keep proof visible before personality: project descriptions, links, PRs, tags, and contribution data matter most.
- **Do** use cool paper surfaces, ink borders, and hard offset shadows as the core visual grammar.
- **Do** reserve proof blue for actions, verification, and high-attention marks.
- **Do** provide reduced-motion alternatives whenever adding new motion.
- **Do** preserve responsive behavior: two-column proof grids on tablet, one-column proof cards on phones, no text overflow.

### Don't:

- **Don't** use terminal or ANSI aesthetics.
- **Don't** use generic SaaS landing page structure, purple gradients, or glass cards.
- **Don't** use corporate recruiter template patterns.
- **Don't** make an overly artsy portfolio that hides the work.
- **Don't** turn the site into a minimal black-and-white clone portfolio.
- **Don't** add blurred soft card shadows, gradient text, repeating stripe backgrounds, or side-stripe borders.
- **Don't** over-round cards beyond `18px`, and never use `32px+` radii on proof surfaces.
