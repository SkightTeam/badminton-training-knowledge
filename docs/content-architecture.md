# Content Architecture

The website should become a practical bilingual badminton knowledge base for discovering and curating high-quality learning videos.

It is not a training portal. It does not manage player schedules, workouts, progress, or coaching workflows.

## Bilingual content rule

Every user-facing content object should support English and Chinese.

Recommended data shape for short text:

```json
{
  "en": "Split step",
  "zh": "启动步"
}
```

Recommended file convention for long-form pages:

- English: `slug.md`
- Chinese: `slug.zh.md`

Keep the source URL and media metadata shared, but allow language-specific titles, summaries, tags, and mediator notes.

## Core content types

### Video Resource

A reviewed or candidate YouTube resource.

Fields:

- title: `{ en, zh }`
- url
- source platform
- channel name
- language
- duration
- category: shot, footwork, tactics, fitness
- topic type: `{ en, zh }`, such as clear / 高远球, smash / 杀球, split step / 启动步
- level: beginner, intermediate, advanced
- tags: array of `{ en, zh }`
- quality status: approved, candidate, needs review, rejected
- quality score
- mediator notes: `{ en, zh }`
- last reviewed date

### Technique Topic

A searchable badminton concept.

Fields:

- title: `{ en, zh }`
- slug
- category
- aliases: `{ en, zh }`
- description: `{ en, zh }`
- related topics
- common search queries in English and Chinese
- what a good video should show: `{ en, zh }`
- common misleading signs: `{ en, zh }`

### AI Search Candidate

A candidate found by AI-assisted search.

Fields:

- search query
- candidate title
- candidate URL
- channel
- extracted summary: `{ en, zh }` when available
- AI reason for inclusion: `{ en, zh }`
- risk flags
- suggested tags: array of `{ en, zh }`
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
- reason: `{ en, zh }`
- preferred alternative URL
- notes: `{ en, zh }`
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

Required convention:

- English short fields: `en`
- Chinese short fields: `zh`
- English long-form pages: `slug.md`
- Chinese long-form pages: `slug.zh.md`

Keep media assets and YouTube URLs language-neutral where possible, but allow per-language recommendations when the best videos differ.
