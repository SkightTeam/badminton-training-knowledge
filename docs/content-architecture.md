# Content Architecture

The website should become a practical badminton learning system, not just a blog.

## Core content types

### Lesson

A focused teaching unit.

Fields:

- title
- slug
- level
- category
- learning goal
- prerequisites
- explanation
- coaching cues
- common errors
- correction drills
- video notes
- related lessons

### Drill

A repeatable training exercise.

Fields:

- title
- objective
- court setup
- player count
- feed type
- work/rest timing
- success criteria
- progressions
- regressions
- safety notes

### Training Plan

A session or multi-week progression.

Fields:

- title
- target player level
- session duration
- warm-up
- skill block
- tactical block
- conditioned game
- physical block
- cool-down
- homework

### Glossary Entry

A short reference definition.

Fields:

- term
- definition
- examples
- related terms

### Video Analysis Note

A structured observation page for match or training videos.

Fields:

- video source
- player level
- scenario
- timestamps
- observations
- technical notes
- tactical notes
- recommended drills

## Proposed top-level navigation

- Learn
- Drills
- Training Plans
- Tactics
- Fitness
- Coaching
- Glossary
- Video Notes

## Bilingual direction

Recommended convention:

- English: `slug.md`
- Chinese: `slug.zh.md`

Keep media assets language-neutral where possible.
