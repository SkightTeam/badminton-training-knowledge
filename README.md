# Badminton Training Knowledge Base

A bilingual English/Chinese badminton knowledge base for finding and curating high-quality YouTube learning resources.

This project is independent from the Vertical Agent Workbench project. It is not a training portal. It is a content and link knowledge base focused on badminton shots, footwork, tactics, and reliable video references.

## Product direction

The website has two primary user stories:

1. End user: I want to easily find YouTube video links according to different shot types, footwork types, tactics, level, and tags, in either English or Chinese.
2. Mediator: I want to add, compare, approve, or reject high-quality content based on AI search results and a clear quality rubric.

## Bilingual approach

The initial UI supports an English / 中文 language toggle.

Current bilingual fields include:

- Navigation labels
- Hero and section copy
- Video titles
- Shot and footwork type names
- Levels and quality statuses
- Tags
- Mediator queue examples
- Content model and roadmap text

Long-term content should move from inline TypeScript seed data to structured files with explicit `en` and `zh` fields.

## Current content coverage

The site currently contains a seed taxonomy, not a complete badminton knowledge base. The seed library now covers the most common starter areas:

- Shots: forehand clear, forehand drop, backhand drop, drop shot overview, smash, backhand clear, net shot, lift, drive
- Footwork: split step, scissor kick, lunge, chasse step, cross step
- Tactics: doubles serve return

Search supports English and Chinese aliases, so terms such as `Forehand drop`, `drop shot`, `正手吊球`, `快吊`, and `慢吊` can match the relevant seed card.

## Initial features

- Bilingual UI toggle
- Searchable seed library of YouTube search links
- Filters by category and quality status
- Shot and footwork topic cards
- Curated quality states: Approved, Candidate, Needs Review
- Mediator workflow mockup for AI-assisted content selection
- Initial content model for video resources, topics, quality rubric, and mediator decisions

## Content model direction

Core objects:

- Video Resource
- Technique Topic
- Quality Rubric
- Mediator Decision
- AI Search Candidate

The long-term repository should store content as structured JSON or Markdown frontmatter so links can be reviewed, versioned, translated, and published without changing app code.

## Tech stack

- Vite
- React
- TypeScript
- CSS

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## GitHub Pages

This repo is configured to publish the static site with GitHub Pages from GitHub Actions.

## Recommended next milestones

1. Expand `content/videos.json` from seed coverage toward 50-100 searchable topics.
2. Add a proper bilingual topic taxonomy for shots, footwork, tactics, and fitness.
3. Add mediator review fields: approved, rejected, reason, quality score, reviewed date.
4. Add AI search import format for candidate queues.
5. Replace YouTube search URLs with selected direct video URLs after mediator approval.
6. Add stable URLs for English and Chinese pages if SEO becomes important.

## License

MIT
