# Data Model

Primary JSON files:
career.json
projects.json
talks.json
publications.json
media.json
education.json
awards.json
repositories.json

Each record contains:
id
title
summary
startDate
endDate
tags
relatedItems
links
accessibilityNotes

# Claude Build Contract

Never hardcode repeated content.
Render pages from JSON.
Maintain WCAG 2.2 AA.
Keep navigation consistent.
Preserve stable URLs.
Treat this repository as the canonical source for resumes, bios, media kits, and applications.
