import React from 'react';
import ReactDOM from 'react-dom/client';
import { ArrowRight, BookOpen, CalendarDays, Dumbbell, GraduationCap, HeartPulse, PlayCircle, Search, ShieldCheck, Target, Users } from 'lucide-react';
import './styles.css';

type TrainingModule = {
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Coach';
  duration: string;
  description: string;
  skills: string[];
};

const modules: TrainingModule[] = [
  {
    title: 'Footwork Foundations',
    level: 'Beginner',
    duration: '4 weeks',
    description: 'Build efficient movement patterns for front court, mid court, rear court, recovery, and split-step timing.',
    skills: ['Split step', 'Chasse', 'Lunge mechanics', 'Base recovery'],
  },
  {
    title: 'Overhead Stroke System',
    level: 'Intermediate',
    duration: '6 weeks',
    description: 'Progress from clear and drop consistency into smash preparation, deception, contact height, and tactical shot choice.',
    skills: ['Clear', 'Drop', 'Smash', 'Late hold'],
  },
  {
    title: 'Net Control and Front Court',
    level: 'Intermediate',
    duration: '4 weeks',
    description: 'Train tight net shots, spinning net, lift quality, interception habits, and pressure from the forecourt.',
    skills: ['Net spin', 'Tumbling net', 'Lift', 'Kill timing'],
  },
  {
    title: 'Singles Tactical Patterns',
    level: 'Advanced',
    duration: '8 weeks',
    description: 'Learn rally construction, pressure zones, variation, tempo changes, and opponent-specific pattern selection.',
    skills: ['Rally plans', 'Tempo', 'Corners', 'Pattern breaks'],
  },
  {
    title: 'Doubles Rotation and Roles',
    level: 'Advanced',
    duration: '8 weeks',
    description: 'Develop front-back attack, side-side defense, serve-return systems, rotation triggers, and communication rules.',
    skills: ['Serve return', 'Rotation', 'Defense', 'Third shot'],
  },
  {
    title: 'Coach Session Planner',
    level: 'Coach',
    duration: 'Reusable',
    description: 'Plan progressive sessions with warm-up, skill block, constraints games, conditioning, feedback, and homework.',
    skills: ['Session design', 'Assessment', 'Feedback', 'Load control'],
  },
];

const knowledgeAreas = [
  {
    icon: Target,
    title: 'Technique Library',
    copy: 'Stroke mechanics, grips, body positions, contact points, common errors, and corrective cues.',
  },
  {
    icon: Dumbbell,
    title: 'Physical Preparation',
    copy: 'Mobility, strength, speed, plyometrics, injury prevention, and return-to-play progressions.',
  },
  {
    icon: GraduationCap,
    title: 'Tactics and Game Models',
    copy: 'Singles and doubles patterns, serve-return systems, pressure building, and match analysis templates.',
  },
  {
    icon: HeartPulse,
    title: 'Training Load and Recovery',
    copy: 'Weekly planning, fatigue signals, recovery routines, and tournament preparation guidelines.',
  },
];

const sampleLessons = [
  'How to time the split step against different opponents',
  'Rear-court scissor kick: when to rotate and when to block jump',
  'Designing a 90-minute doubles serve-return session',
  'Video analysis checklist for overhead preparation',
  'Beginner 12-week progression from rallying to first tournament',
];

function App() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <div className="brand">
            <span className="brandMark">BTK</span>
            <span>Badminton Training Knowledge</span>
          </div>
          <div className="navLinks">
            <a href="#modules">Modules</a>
            <a href="#knowledge">Knowledge</a>
            <a href="#roadmap">Roadmap</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Training material · skill library · coaching knowledge base</p>
            <h1>Build a structured badminton learning website for players and coaches.</h1>
            <p className="lead">
              A clean starting point for organizing badminton technique, footwork, tactics,
              physical preparation, session plans, and video-analysis resources.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#modules">
                Explore modules <ArrowRight size={18} />
              </a>
              <a className="secondaryButton" href="#roadmap">
                View content roadmap
              </a>
            </div>
          </div>

          <aside className="heroCard" aria-label="Website pillars">
            <div className="courtDiagram">
              <span>Front court</span>
              <span>Mid court</span>
              <span>Rear court</span>
            </div>
            <div className="heroStats">
              <div><strong>6</strong><span>starter modules</span></div>
              <div><strong>4</strong><span>knowledge pillars</span></div>
              <div><strong>12w</strong><span>beginner path target</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="sectionLabel">Project concept</p>
          <h2>From scattered drills to a searchable training system.</h2>
        </div>
        <p>
          This project is intentionally separate from the agent-workbench repository. It is a
          public-facing knowledge website concept for badminton education, with room to grow into
          bilingual articles, drill cards, coaching plans, video notes, and structured learning paths.
        </p>
      </section>

      <section className="section" id="modules">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">Training modules</p>
            <h2>Starter curriculum map</h2>
          </div>
          <div className="searchBox"><Search size={18} /> searchable later</div>
        </div>
        <div className="moduleGrid">
          {modules.map((module) => (
            <article className="moduleCard" key={module.title}>
              <div className="cardTop">
                <span className={`level ${module.level.toLowerCase()}`}>{module.level}</span>
                <span className="duration"><CalendarDays size={14} /> {module.duration}</span>
              </div>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <ul>
                {module.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section knowledge" id="knowledge">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">Knowledge architecture</p>
            <h2>Four pillars for the content library</h2>
          </div>
        </div>
        <div className="pillarGrid">
          {knowledgeAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article className="pillarCard" key={area.title}>
                <Icon size={28} />
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section roadmap" id="roadmap">
        <div className="roadmapText">
          <p className="sectionLabel">Next content to write</p>
          <h2>Turn the site into a practical badminton reference.</h2>
          <p>
            The first milestone should create evergreen training pages and a repeatable lesson format:
            goal, prerequisites, coaching cues, drill setup, progressions, common errors, and video notes.
          </p>
        </div>
        <div className="lessonList">
          {sampleLessons.map((lesson, index) => (
            <div className="lessonItem" key={lesson}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{lesson}</p>
              <PlayCircle size={20} />
            </div>
          ))}
        </div>
      </section>

      <section className="section trust">
        <article>
          <BookOpen size={26} />
          <h3>Content-first</h3>
          <p>Designed around reusable lessons, drills, glossary entries, and structured pathways.</p>
        </article>
        <article>
          <Users size={26} />
          <h3>Player and coach friendly</h3>
          <p>Works for self-study, club training, coach session planning, and junior programs.</p>
        </article>
        <article>
          <ShieldCheck size={26} />
          <h3>Evidence-aware</h3>
          <p>Can later include citations, video examples, coach notes, and versioned updates.</p>
        </article>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
