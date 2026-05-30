# Badminton Training Knowledge Base

A badminton knowledge base for finding and curating high-quality YouTube learning resources.

This project is independent from the Vertical Agent Workbench project. It is not a training portal. It is a content and link knowledge base focused on badminton shots, footwork, tactics, and reliable video references.

## Product direction

The website has two primary user stories:

1. End user: I want to easily find YouTube video links according to different shot types, footwork types, tactics, level, and tags.
2. Mediator: I want to add, compare, approve, or reject high-quality content based on AI search results and a clear quality rubric.

## Initial features

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

The long-term repository should store content as structured JSON or Markdown frontmatter so links can be reviewed, versioned, and published without changing app code.

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

1. Move video seed data from `src/main.tsx` into `content/videos.json`.
2. Add a proper topic taxonomy for shots, footwork, tactics, and fitness.
3. Add bilingual English/Chinese topic labels.
4. Add mediator review fields: approved, rejected, reason, quality score, reviewed date.
5. Add AI search import format for candidate queues.
6. Replace YouTube search URLs with selected direct video URLs after mediator approval.

## License

MIT
