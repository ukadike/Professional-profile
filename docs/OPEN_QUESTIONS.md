# Open Questions

- Nav spec (`05_NAVIGATION_SPEC.md`) and IA doc (`02_INFORMATION_ARCHITECTURE.md`)
  both list "Contact", "Publications", and "Press Kit" as top-nav items, but no
  drop has defined a dedicated directory or data record for any of them yet.
  `index.html` currently points "Contact" at `/about/` as a placeholder.
  AWAITING FRAGMENT until a directory/data model is specified.

- Drop 04's `projects.json` includes "Accessible by Design"
  (`ukadike/accessible-by-design-prototyping`), but Drop 04's `repositories.json`
  has no matching entry — only `prof`, `omoluabi`, and `esl` are defined. Its
  `repositoryId` is set to `null` pending a repositories.json update.
  AWAITING FRAGMENT.

- Drop 05's `CV_GENERATION_RULES.md` specifies generating an Executive Resume,
  Communications Resume, Technical Resume, Academic CV, and Speaker Bio from
  canonical JSON records. `talks.json`, `publications.json`, `awards.json`,
  `fellowships.json`, and `media.json` are all still empty, so no CV/resume
  generation is implemented yet — there is no source data to derive it from.
  AWAITING FRAGMENT.

- Drop 06 implemented status. Built this drop: design tokens in
  `styles/styles.css` (per `11_DESIGN_TOKENS.md`, incl. reduced-motion and a
  dark-mode block) and the "Validate JSON" CI step in
  `.github/workflows/validate-json.yml`. NOT yet built (spec only):
  - `14_GITHUB_ACTIONS_PLAN.md`: broken-link check, Pages build, accessibility
    checks, sitemap generation, schema-card validation.
  - `12_COMPONENT_LIBRARY.md`: no components (Header, Timeline, cards, Tag Chip,
    Breadcrumbs, etc.) are implemented — the home page still renders inline.
  - `15_COMMAND_PALETTE_SPEC.md`: Ctrl/Cmd+K palette not implemented.
  - `13_ACCESSIBILITY_ACCEPTANCE.md`: print-friendly CV not implemented (blocked
    on CV generation, above).
  - `16_ROADMAP_NEXT.md` frames these as drops 07–12. AWAITING FRAGMENT.
