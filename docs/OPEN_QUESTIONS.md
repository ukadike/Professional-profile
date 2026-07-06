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
