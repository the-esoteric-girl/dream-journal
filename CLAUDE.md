# Dream Journal — Project Rules for Claude Code

Read this file before making ANY changes to this project.
Every new feature, fix, or addition must follow these rules.
Do not deviate from these standards unless explicitly told to.

---

## DESIGN SYSTEM

### Colors (always use CSS variables, never hardcode hex values)
- Primary button/action: var(--color-primary) #4C63AE
- Secondary/accent: var(--color-secondary) #D6C3FF
- Destructive: var(--color-destructive) #E57373
- Background: var(--color-bg) #FDF6F0
- Primary text: var(--color-text-primary) #1A1A1A
- Secondary text: var(--color-text-secondary) #5A5A5A
- Card pink: var(--color-card-pink) #FFD9F1
- Card blue: var(--color-card-blue) #BCD2FF
- Card lavender: var(--color-card-lavender) #D6C3FF
- Card yellow: var(--color-card-yellow) #FFF3C4

### Typography
- Font: Pixelify Sans (loaded from Google Fonts) — always
- Minimum font size anywhere in the app: 12px
- Minimum body/readable text: 14px
- Always use var(--font-size-*) variables, never hardcode px

### Spacing
- Always use var(--spacing-*) variables
- Never use arbitrary spacing values

### Border Radius
- Cards, modals, large containers: var(--radius-md) 20px
- Buttons: var(--radius-pill) 50px
- Small elements: var(--radius-sm) 12px
- Never use sharp corners anywhere in this app

---

## SHADOWS — CRITICAL RULE
This app uses PIXEL ART style shadows only. No blur-based shadows.

Every element that has a shadow must use this format:
box-shadow: 3px 3px 0px [shadow-color]

Shadow colors by element:
- Pink card: #E8A8C8
- Blue card: #8AAEE8
- Lavender card: #A898D8
- Yellow card: #D8C880
- Primary buttons: #3A4F8A
- Modals: rgba(0,0,0,0.15) as 4px 4px 0px
- Input fields: rgba(0,0,0,0.10) as 2px 2px 0px
- Secondary buttons: #A898D8

NEVER use box-shadow with a blur value.
NEVER use drop-shadow filters.
ALWAYS apply this shadow style to ANY new button, card, 
modal, or interactive container you create.

---

## BUTTON SYSTEM — CRITICAL RULE
There are exactly 3 button types in this app. No others.

PRIMARY: var(--color-primary) background, white text, 
var(--radius-pill), padding 12px 24px, pixel art shadow 
3px 3px 0px #3A4F8A

SECONDARY: var(--color-secondary) background, 
var(--color-text-primary) text, same radius and padding, 
pixel art shadow 3px 3px 0px #A898D8

DESTRUCTIVE: var(--color-destructive) background, white 
text, same radius and padding, pixel art shadow 
3px 3px 0px #C45555

ALL buttons have these states:
- Hover: background darkens 8%, cursor pointer
- Active/press: scale 0.96, brightness 95%
- Disabled: opacity 0.4, cursor not-allowed

ALWAYS apply these styles to any new button. No exceptions.

---

## MODAL SYSTEM — CRITICAL RULE
Every modal in this app must follow this exact format:

Structure:
- Background: var(--color-modal-bg)
- Border radius: var(--radius-md)
- Pixel art shadow: 4px 4px 0px rgba(0,0,0,0.15)
- Padding: var(--spacing-lg) 24px
- X close button top right: pixelarticons:x icon, 
  var(--color-text-secondary)
- Dark overlay behind modal: rgba(0,0,0,0.4)
- Clicking overlay closes modal (unless unsaved changes)

Animation in:
- Start: opacity 0, scale 0.8
- End: opacity 1, scale 1
- Easing: var(--ease-bounce)
- Duration: var(--duration-normal) 300ms

Animation out:
- Start: opacity 1, scale 1
- End: opacity 0, scale 0.9
- Duration: var(--duration-fast) 150ms

ALWAYS apply this format to any new modal. No exceptions.

---

## ANIMATION SYSTEM

### Easing curves
- Bouncy interactions: var(--ease-bounce) 
  cubic-bezier(0.34, 1.56, 0.64, 1)
- Screen transitions: var(--ease-smooth) 
  cubic-bezier(0.4, 0, 0.2, 1)

### Card/list item entrance
When any list of cards appears, always stagger them in:
- Start: opacity 0, translateY 20px
- End: opacity 1, translateY 0
- Stagger: 80ms per item
- Duration: 400ms
- Easing: var(--ease-bounce)
Apply this to: home screen cards, calendar entries, 
search results

### Interactive hover — cards and tappable items
ALL cards and tappable list items must have:
- Hover: translateY -2px, shadow deepens slightly, 
  transition 200ms var(--ease-bounce)
- Active/press: scale 0.98, translateY 0
This includes: journal entry cards, avatar emoji circles, 
color swatch circles, profile picture circle

### Button press feedback
ALL buttons must have:
- Active/press: scale 0.96, var(--duration-fast)
- Easing: var(--ease-bounce)

### Screen transitions (nav bar)
- Nav bar switching: fade only, opacity 0↔1, 
  var(--duration-fast), linear
- Entry screen open: slide in from right, translateX 
  100%→0, var(--duration-normal), var(--ease-smooth)
- Entry screen close: slide out to right, translateX 
  0→100%, var(--duration-normal), var(--ease-smooth)
- Nav bar: NEVER moves or animates, always static

---

## ICON SYSTEM
- Navigation + UI icons: pixelarticons set via Iconify
- Weather icons: Phosphor set via Iconify (ph: prefix)
- Weather icons must use var(--color-text-secondary) 
  color — never colored or yellow
- All icons must update color correctly in dark mode

## DARK MODE
- Toggle via [data-theme="dark"] on the html element
- All colors must use CSS variables so dark mode works 
  automatically
- Never hardcode colors in JavaScript — always use 
  CSS classes and variables
- Card colors in dark mode are jewel tones, not pastels
- No glow effects in dark mode

## NAV BAR RULES
- Always fixed, never moves
- Active icon: var(--color-primary) filled circle, 
  white icon inside
- Inactive icons: var(--color-text-secondary) 50% opacity
- No back buttons on main nav screens (home, calendar, 
  settings)
- Back buttons only on entry screen

---

## BEFORE MAKING ANY CHANGE:
1. Read this file
2. Check that your change follows all relevant rules above
3. If adding a button → use the button system
4. If adding a modal → use the modal system
5. If adding a card or list → add stagger entrance animation
6. If adding any interactive element → add hover + 
   press states
7. Never hardcode colors, always use CSS variables
