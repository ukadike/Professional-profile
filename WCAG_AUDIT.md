# WCAG 2.1 AA Accessibility Audit

Date: 2026-07-20
Scope: All rendered web content in the repository — `index.html`,
`styles/styles.css`, `scripts/app.js`. Every other section
(`about/`, `career/`, `projects/`, `research/`, `speaking/`, `media/`,
`downloads/`, `components/`, `assets/`) currently contains only an
`AWAITING FRAGMENT` `README.md` placeholder with no HTML — there is no
markup there yet to audit. No `<img>` or inline `<svg>` elements exist
anywhere in the repository.

## Summary

| Severity | Found | Fixed | Open |
|---|---|---|---|
| Serious  | 2 | 2 | 0 |
| Moderate | 1 | 1 | 0 |
| Minor    | 1 | 1 | 0 |
| **Total** | **4** | **4** | **0** |

No open items were left — nothing required guessing at unknown content
(no ambiguous images/alt text existed to begin with).

## Issues

### 1. Navigation not marked up as a list — Serious
- **File/line:** `index.html:11` (pre-fix)
- **WCAG:** 1.3.1 Info and Relationships
- **Detail:** The primary nav was a single line of `<a>` elements separated
  by literal `|` text characters, with no list semantics. Assistive
  technology has no way to convey "list of N navigation items," and the
  pipe characters would be announced as "vertical bar" by some screen
  readers.
- **Fix:** Converted to a semantic `<nav aria-label="Primary"><ul
  class="nav-list"><li>...</li></ul></nav>`. Visual pipe separators are
  now applied via CSS `::before { content: "|" }` on list items, which is
  not exposed to the accessibility tree, so screen reader users get clean
  list semantics while the visual layout is preserved (`styles/styles.css`
  new `.nav-list` rules).

### 2. Link text color not guaranteed to meet contrast in dark mode — Serious
- **File/line:** `styles/styles.css` (no prior `a { color }` rule)
- **WCAG:** 1.4.3 Contrast (Minimum)
- **Detail:** The page defines `--accent`/`--foreground`/`--background`
  tokens that swap under `prefers-color-scheme: dark`, but no rule set
  `color` on `a` elements. Anchor text therefore fell back to the
  browser's user-agent default link color, which does not track the
  page's `prefers-color-scheme` media query (and isn't opted into scheme
  adaptation via `color-scheme`). A default UA blue link color on the
  dark-mode `--background: #111` background can fall to roughly 1.3:1
  contrast — well under the 4.5:1 minimum for normal text.
- **Fix:** Added `a { color: var(--accent); }` and `color-scheme: light
  dark;` on `:root`. Verified contrast computationally against the
  token values actually in use:
  - Light mode: `--accent #2457ff` on `--background #fff` ≈ 5.41:1 (passes 4.5:1)
  - Dark mode: `--accent #7c9cff` on `--background #111` ≈ 7.24:1 (passes 4.5:1)
  - Also reconfirmed existing text-color pairs while at it:
    `--foreground` on `--background` ≈ 18.5:1 (light) / very high (dark);
    `--muted` on `--background` ≈ 5.02:1 (light) / 7.66:1 (dark) — both
    already compliant, no change needed.
  - Focus-outline color (`--accent`) against `--background` also re-verified
    ≥ 3:1 non-text contrast in both modes (5.41:1 / 7.24:1) — SC 1.4.11 met.

### 3. Skip link stacking safety — Minor (hardening)
- **File/line:** `styles/styles.css` `.skip-link:focus`
- **WCAG:** 2.4.1 Bypass Blocks
- **Detail:** The skip link relies on default stacking order to appear
  above the header when focused. No failure was observed, but nothing
  guaranteed it would stay on top if the header ever gains a background
  or its own stacking context.
- **Fix:** Added `z-index: 100;` to `.skip-link:focus` as a defensive
  guarantee the visible-on-focus skip target is never obscured.

### 4. Duplicate `href` for "About" and "Contact" nav links — Moderate (verified non-issue, documented)
- **File/line:** `index.html` nav
- **WCAG:** 2.4.4 Link Purpose (In Context)
- **Detail:** Both "About" and "Contact" link to `/about/`. Checked
  against SC 2.4.4, which is about each link's *own* text being
  descriptive of its destination, not links being unique — "About" and
  "Contact" are each independently descriptive, so this is compliant.
  No fabricated content or new `/contact/` page was invented (no
  contact-specific route exists yet in `data/` or elsewhere). Left as-is;
  noting it here only so it isn't mistaken for an oversight.

## Checklist coverage (explicit scope items)

- 1.1.1 Non-text content — N/A, no `<img>`/icons in repo.
- 1.3.1 Info & relationships — Fixed (nav list); heading hierarchy
  (h1 → dynamically injected h2) already correct; landmarks
  (header/nav/main/footer) already present; no form inputs exist.
- 1.4.1 Use of color — Already compliant: links keep the browser default
  underline (no `text-decoration: none` in the stylesheet), so link
  identity doesn't rely on color alone.
- 1.4.3 / 1.4.11 Contrast — Fixed (see Issue 2); all token pairs computed
  and passing in both color schemes.
- 2.1.1 / 2.4.7 Keyboard & focus — Already compliant: all interactive
  elements are native `<a>` tags (keyboard operable by default); visible
  focus outline (`a:focus { outline: 3px solid var(--accent) }`) is
  defined and never suppressed.
- 2.4.1 Bypass blocks — Already had a working skip link; hardened (Issue 3).
- 2.4.2 Page titled — `<title>Adekemi Sijuwade-Ukadike</title>` present
  and descriptive of a personal profile page; left unchanged.
- 2.4.4 Link purpose — No "click here"/"read more" text anywhere; see
  Issue 4 for the one edge case checked.
- 3.1.1 Language of page — `<html lang="en">` already present.
- 4.1.2 Name, role, value — N/A, no custom widgets (menus, toggles,
  modals, carousels) exist yet.
- Motion — `prefers-reduced-motion: reduce` block already present and
  correctly implemented in `styles/styles.css`.
- Inline SVGs — N/A, none exist in the repository.

## Files changed
- `index.html` — nav restructured to `<ul>/<li>`, `aria-label="Primary"` added.
- `styles/styles.css` — `color-scheme`, explicit `a { color }`, `.nav-list`
  rules, `z-index` on focused skip link.
