# Badminton Knowledge Base Agent Instructions

This repository is a bilingual English/Chinese badminton knowledge base and resource directory, not a training portal.

## Project focus
- Help end users find high-quality YouTube learning resources by badminton topic: shot type, footwork type, tactics, fitness, and related tags.
- Support a mediator/curator workflow for selecting, approving, rejecting, or deferring AI-assisted content candidates.
- Keep the site bilingual. Short structured fields use `{ "en": "...", "zh": "..." }`. Longer pages should use `slug.md` plus `slug.zh.md` when added.
- Do not reintroduce coach, coaching, club-management, progress-tracking, or training-plan positioning unless the user explicitly asks.

## Core content files
- `content/topics.json`: canonical topic taxonomy.
- `content/videos.json`: video/search resource entries shown by the UI.

## Development workflow
- Use `npm run build` before committing UI/content changes.
- For GitHub Pages, keep the app compatible with the repository base path `/badminton-training-knowledge/`.
- After meaningful milestones, commit and push to `origin/main`, then verify GitHub Pages deployment and the public URL if the change affects the site.

## Current public site
- http://www.skight.ca/badminton-training-knowledge/

## Useful search examples that should keep working
- `Forehand drop`, `forehand drop shot`, `drop shot`
- `正手吊球`, `快吊`, `慢吊`
- `clear`, `高远球`, `smash`, `杀球`
- `split step`, `启动步`, `lunge`, `弓步`
