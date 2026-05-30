import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  ExternalLink,
  Filter,
  Footprints,
  Gauge,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Video,
} from 'lucide-react';
import './styles.css';

type Category = 'Shot' | 'Footwork' | 'Tactics' | 'Fitness';
type Level = 'Beginner' | 'Intermediate' | 'Advanced';
type Quality = 'Approved' | 'Candidate' | 'Needs Review';

type VideoResource = {
  title: string;
  category: Category;
  type: string;
  level: Level;
  source: string;
  url: string;
  quality: Quality;
  reason: string;
  tags: string[];
};

const videoResources: VideoResource[] = [
  {
    title: 'Forehand Clear: contact point and recovery checklist',
    category: 'Shot',
    type: 'Forehand clear',
    level: 'Beginner',
    source: 'YouTube curated link',
    url: 'https://www.youtube.com/results?search_query=badminton+forehand+clear+technique+contact+point',
    quality: 'Approved',
    reason: 'Good starter query for fundamentals: grip, preparation, contact height, follow-through, and recovery.',
    tags: ['clear', 'overhead', 'contact point', 'recovery'],
  },
  {
    title: 'Drop Shot: fast drop vs slow drop examples',
    category: 'Shot',
    type: 'Drop shot',
    level: 'Intermediate',
    source: 'YouTube curated link',
    url: 'https://www.youtube.com/results?search_query=badminton+drop+shot+fast+drop+slow+drop+technique',
    quality: 'Candidate',
    reason: 'Needs mediator review to select videos with clear camera angle and tactical explanation.',
    tags: ['drop', 'deception', 'overhead', 'tempo'],
  },
  {
    title: 'Smash: body rotation and pronation',
    category: 'Shot',
    type: 'Smash',
    level: 'Intermediate',
    source: 'YouTube curated link',
    url: 'https://www.youtube.com/results?search_query=badminton+smash+body+rotation+pronation+technique',
    quality: 'Approved',
    reason: 'Search phrase targets mechanics instead of only highlight clips.',
    tags: ['smash', 'pronation', 'power', 'rotation'],
  },
  {
    title: 'Backhand clear: when to use and common mistakes',
    category: 'Shot',
    type: 'Backhand clear',
    level: 'Advanced',
    source: 'YouTube curated link',
    url: 'https://www.youtube.com/results?search_query=badminton+backhand+clear+technique+common+mistakes',
    quality: 'Needs Review',
    reason: 'Many videos overpromise quick fixes; mediator should choose technically conservative examples.',
    tags: ['backhand', 'clear', 'common mistakes'],
  },
  {
    title: 'Split step timing against real shots',
    category: 'Footwork',
    type: 'Split step',
    level: 'Beginner',
    source: 'YouTube curated link',
    url: 'https://www.youtube.com/results?search_query=badminton+split+step+timing+footwork',
    quality: 'Approved',
    reason: 'Core movement concept; prioritize videos that show timing relative to opponent contact.',
    tags: ['split step', 'timing', 'movement'],
  },
  {
    title: 'Rear-court scissor kick and recovery',
    category: 'Footwork',
    type: 'Scissor kick',
    level: 'Intermediate',
    source: 'YouTube curated link',
    url: 'https://www.youtube.com/results?search_query=badminton+scissor+kick+rear+court+recovery',
    quality: 'Candidate',
    reason: 'Mediator should compare demonstrations for balance, hip rotation, and landing recovery.',
    tags: ['scissor kick', 'rear court', 'recovery'],
  },
  {
    title: 'Front-court lunge mechanics',
    category: 'Footwork',
    type: 'Lunge',
    level: 'Beginner',
    source: 'YouTube curated link',
    url: 'https://www.youtube.com/results?search_query=badminton+front+court+lunge+mechanics+footwork',
    quality: 'Approved',
    reason: 'Useful for safety and efficiency; focus on knee alignment, heel-to-toe landing, and push-back.',
    tags: ['lunge', 'front court', 'injury prevention'],
  },
  {
    title: 'Doubles serve return patterns',
    category: 'Tactics',
    type: 'Serve return',
    level: 'Intermediate',
    source: 'YouTube curated link',
    url: 'https://www.youtube.com/results?search_query=badminton+doubles+serve+return+patterns',
    quality: 'Candidate',
    reason: 'Needs quality selection because tactical terminology varies widely by creator.',
    tags: ['doubles', 'serve return', 'third shot'],
  },
];

const categories: Array<'All' | Category> = ['All', 'Shot', 'Footwork', 'Tactics', 'Fitness'];
const qualityLabels: Array<'All' | Quality> = ['All', 'Approved', 'Candidate', 'Needs Review'];

const mediatorQueue = [
  {
    query: 'badminton forehand clear beginner full court angle',
    suggestedBy: 'AI search',
    status: 'Ready to compare',
    criteria: ['clear camera angle', 'safe technique', 'beginner friendly'],
  },
  {
    query: 'badminton split step timing opponent contact slow motion',
    suggestedBy: 'AI search',
    status: 'Needs source check',
    criteria: ['timing explanation', 'match examples', 'concise teaching'],
  },
  {
    query: 'badminton scissor kick recovery common mistakes',
    suggestedBy: 'Manual seed + AI expansion',
    status: 'Needs final pick',
    criteria: ['balance', 'landing safety', 'recovery step'],
  },
];

function App() {
  const [category, setCategory] = useState<'All' | Category>('All');
  const [quality, setQuality] = useState<'All' | Quality>('All');
  const [query, setQuery] = useState('');

  const filteredResources = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return videoResources.filter((resource) => {
      const matchesCategory = category === 'All' || resource.category === category;
      const matchesQuality = quality === 'All' || resource.quality === quality;
      const haystack = [resource.title, resource.type, resource.level, resource.reason, ...resource.tags]
        .join(' ')
        .toLowerCase();
      const matchesQuery = normalized.length === 0 || haystack.includes(normalized);
      return matchesCategory && matchesQuality && matchesQuery;
    });
  }, [category, quality, query]);

  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <div className="brand">
            <span className="brandMark">BTK</span>
            <span>Badminton Knowledge Base</span>
          </div>
          <div className="navLinks">
            <a href="#finder">Video Finder</a>
            <a href="#mediator">Mediator</a>
            <a href="#model">Content Model</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Curated YouTube links · shot library · footwork knowledge</p>
            <h1>A badminton knowledge base for finding the right learning video faster.</h1>
            <p className="lead">
              The site is not a training portal. It is a searchable, mediator-curated reference
              for badminton shots, footwork types, tactics, and quality learning resources.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#finder">
                Find videos <ArrowRight size={18} />
              </a>
              <a className="secondaryButton" href="#mediator">
                Review curation workflow
              </a>
            </div>
          </div>

          <aside className="heroCard" aria-label="Knowledge base status">
            <div className="courtDiagram">
              <span>Shots</span>
              <span>Footwork</span>
              <span>Tactics</span>
            </div>
            <div className="heroStats">
              <div><strong>{videoResources.length}</strong><span>seed links</span></div>
              <div><strong>4</strong><span>content areas</span></div>
              <div><strong>AI</strong><span>search assisted</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="sectionLabel">Direction</p>
          <h2>Knowledge base first, not training portal.</h2>
        </div>
        <p>
          The core job is helping a badminton learner quickly discover high-quality video resources
          by shot type, footwork type, level, and topic. The site should store links, quality notes,
          tags, and mediator decisions rather than manage training plans or coaching workflows.
        </p>
      </section>

      <section className="section finder" id="finder">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">End-user feature</p>
            <h2>Find YouTube links by shot and footwork type</h2>
          </div>
          <div className="searchBox"><Search size={18} /> searchable seed library</div>
        </div>

        <div className="filters" aria-label="Video filters">
          <label>
            <Search size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search clear, split step, lunge, smash..."
            />
          </label>
          <label>
            <Filter size={18} />
            <select value={category} onChange={(event) => setCategory(event.target.value as 'All' | Category)}>
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <BadgeCheck size={18} />
            <select value={quality} onChange={(event) => setQuality(event.target.value as 'All' | Quality)}>
              {qualityLabels.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <div className="resourceGrid">
          {filteredResources.map((resource) => (
            <article className="resourceCard" key={`${resource.type}-${resource.title}`}>
              <div className="cardTop">
                <span className={`level ${resource.level.toLowerCase()}`}>{resource.level}</span>
                <span className={`quality ${resource.quality.toLowerCase().replace(' ', '-')}`}>{resource.quality}</span>
              </div>
              <div className="resourceType">
                {resource.category === 'Footwork' ? <Footprints size={18} /> : <Target size={18} />}
                {resource.category} · {resource.type}
              </div>
              <h3>{resource.title}</h3>
              <p>{resource.reason}</p>
              <ul>
                {resource.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <a className="videoLink" href={resource.url} target="_blank" rel="noreferrer">
                Open YouTube search <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section mediator" id="mediator">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">Mediator feature</p>
            <h2>Choose the best content from AI search results</h2>
          </div>
        </div>

        <div className="mediatorLayout">
          <article className="workflowCard">
            <BrainCircuit size={30} />
            <h3>AI-assisted curation loop</h3>
            <ol>
              <li>Seed a topic such as “split step timing” or “forehand clear”.</li>
              <li>AI search expands candidates and extracts title, channel, summary, and reason.</li>
              <li>Mediator compares candidates using quality criteria.</li>
              <li>Best links are approved, tagged, and published to the knowledge base.</li>
            </ol>
          </article>

          <div className="queueList">
            {mediatorQueue.map((item) => (
              <article className="queueItem" key={item.query}>
                <div>
                  <p className="queueMeta"><Sparkles size={16} /> {item.suggestedBy} · {item.status}</p>
                  <h3>{item.query}</h3>
                </div>
                <ul>
                  {item.criteria.map((criterion) => <li key={criterion}>{criterion}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section knowledge" id="model">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">Knowledge architecture</p>
            <h2>Initial content model</h2>
          </div>
        </div>
        <div className="pillarGrid">
          <article className="pillarCard">
            <Video size={28} />
            <h3>Video Resource</h3>
            <p>URL, title, channel, topic type, level, tags, language, duration, and quality status.</p>
          </article>
          <article className="pillarCard">
            <Target size={28} />
            <h3>Technique Topic</h3>
            <p>Shot or footwork type, common terms, related topics, and what a good video should show.</p>
          </article>
          <article className="pillarCard">
            <Gauge size={28} />
            <h3>Quality Rubric</h3>
            <p>Camera clarity, technical accuracy, safety, level fit, explanation quality, and practical examples.</p>
          </article>
          <article className="pillarCard">
            <ShieldCheck size={28} />
            <h3>Mediator Decision</h3>
            <p>Approved, candidate, rejected, replacement reason, review notes, and publication timestamp.</p>
          </article>
        </div>
      </section>

      <section className="section roadmap" id="roadmap">
        <div className="roadmapText">
          <p className="sectionLabel">Next build steps</p>
          <h2>Move from seed links to a curated knowledge base.</h2>
          <p>
            The initial version uses static seed data. The next milestone should add structured content files,
            richer topic pages, and an offline mediator workflow for importing AI search candidates.
          </p>
        </div>
        <div className="lessonList">
          {[
            'Create topic taxonomy: shots, footwork, tactics, physical preparation',
            'Store video links in JSON or Markdown frontmatter',
            'Add mediator review fields: approved, rejected, reason, quality score',
            'Add Chinese and English labels for every topic',
            'Automate AI search result import into a candidate queue',
          ].map((item, index) => (
            <div className="lessonItem" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
              <BookOpen size={20} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
