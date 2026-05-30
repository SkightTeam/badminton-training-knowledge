# Content Architecture

The website should become a practical badminton knowledge base for discovering and curating high-quality learning videos.

It is not a training portal. It does not manage player schedules, workouts, progress, or coaching workflows.

## Core content types

### Video Resource

A reviewed or candidate YouTube resource.

Fields:

- title
- url
- source platform
- channel name
- language
- duration
- category: shot, footwork, tactics, fitness
- topic type: clear, smash, split step, lunge, etc.
- level: beginner, intermediate, advanced
- tags
- quality status: approved, candidate, needs review, rejected
- quality score
- mediator notes
- last reviewed date

### Technique Topic

A searchable badminton concept.

Fields:

- title
- slug
- category
- aliases
- description
- related topics
- common search queries
- what a good video should show
- common misleading signs

### AI Search Candidate

A candidate found by AI-assisted search.

Fields:

- search query
- candidate title
- candidate URL
- channel
- extracted summary
- AI reason for inclusion
- risk flags
- suggested tags
- duplicate match
- mediator decision

### Quality Rubric

A rubric for choosing the best video.

Fields:

- technical accuracy
- camera angle clarity
- safety
- level fit
- explanation quality
- practical examples
- match-context relevance
- production clarity

### Mediator Decision

A human review record.

Fields:

- reviewer
- decision: approve, reject, replace, defer
- reason
- preferred alternative URL
- notes
- timestamp

## Proposed top-level navigation

- Find Videos
- Shots
- Footwork
- Tactics
- Fitness
- Mediator Queue
- Quality Rubric

## Bilingual direction

Recommended convention:

- English: `slug.md` or topic label
- Chinese: `slug.zh.md` or topic label

Keep media assets and YouTube URLs language-neutral where possible, but allow per-language recommendations when the best videos differ.
