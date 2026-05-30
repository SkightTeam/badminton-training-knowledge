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
  Languages,
  Search,
  Sparkles,
  Target,
} from 'lucide-react';
import './styles.css';
import topicsData from '../content/topics.json';
import videoResourcesData from '../content/videos.json';

type Lang = 'en' | 'zh';
type Category = 'Shot' | 'Footwork' | 'Tactics' | 'Fitness';
type Level = 'Beginner' | 'Intermediate' | 'Advanced';
type Quality = 'Approved' | 'Candidate' | 'Needs Review';
type Bilingual = Record<Lang, string>;

type VideoResource = {
  title: Bilingual;
  category: Category;
  type: Bilingual;
  aliases: Bilingual[];
  level: Level;
  source: Bilingual;
  url: string;
  quality: Quality;
  reason: Bilingual;
  tags: Bilingual[];
};

type Topic = {
  id: string;
  category: Category;
  name: Bilingual;
  aliases: Bilingual[];
  level: Level;
  priority: number;
  youtubeQuery: string;
  description: Bilingual;
  qualitySignals: Bilingual[];
};

const label = {
  en: {
    langName: 'English',
    switchTo: '中文',
    brand: 'Badminton Knowledge Base',
    navFinder: 'Video Finder',
    navMediator: 'Mediator',
    navTopics: 'Topic Taxonomy',
    eyebrow: 'Curated YouTube links · shot library · footwork knowledge',
    heroTitle: 'A bilingual badminton knowledge base for finding the right learning video faster.',
    heroLead:
      'The site is not a training portal. It is a searchable, mediator-curated reference for badminton shots, footwork types, tactics, and quality learning resources.',
    findVideos: 'Find videos',
    reviewWorkflow: 'Review curation workflow',
    shots: 'Shots',
    footwork: 'Footwork',
    tactics: 'Tactics',
    seedLinks: 'seed links',
    contentAreas: 'content areas',
    aiAssisted: 'AI search assisted',
    direction: 'Direction',
    directionTitle: 'Knowledge base first, not training portal.',
    directionBody:
      'The core job is helping a badminton learner quickly discover high-quality video resources by shot type, footwork type, level, language, and topic. The site stores links, quality notes, tags, and mediator decisions rather than managing training plans or coaching workflows.',
    endUserFeature: 'End-user feature',
    finderTitle: 'Find YouTube links by shot and footwork type',
    searchable: 'searchable seed library',
    searchPlaceholder: 'Search forehand drop, clear, split step, lunge, smash...',
    all: 'All',
    openYoutube: 'Open YouTube search',
    mediatorFeature: 'Mediator feature',
    mediatorTitle: 'Choose the best content from AI search results',
    aiLoopTitle: 'AI-assisted curation loop',
    aiLoop: [
      'Seed a topic such as “split step timing” or “forehand clear”.',
      'AI search expands candidates and extracts title, channel, summary, and reason.',
      'Mediator compares candidates using quality criteria.',
      'Best links are approved, tagged, and published to the knowledge base.',
    ],
    knowledgeArchitecture: 'Knowledge architecture',
    contentModelTitle: 'Initial bilingual topic taxonomy',
    nextSteps: 'Next build steps',
    roadmapTitle: 'Move from seed links to a curated bilingual knowledge base.',
    roadmapBody:
      'The initial version uses static seed data. The next milestone should add structured bilingual content files, richer topic pages, and an offline mediator workflow for importing AI search candidates.',
    roadmapItems: [
      'Create bilingual topic taxonomy: shots, footwork, tactics, physical preparation',
      'Store video links in JSON or Markdown frontmatter with en/zh fields',
      'Add mediator review fields: approved, rejected, reason, quality score',
      'Add Chinese and English labels for every topic',
      'Automate AI search result import into a candidate queue',
    ],
  },
  zh: {
    langName: '中文',
    switchTo: 'English',
    brand: '羽毛球知识库',
    navFinder: '视频查找',
    navMediator: '内容审核',
    navTopics: '主题分类',
    eyebrow: '精选 YouTube 链接 · 击球知识 · 步法知识',
    heroTitle: '一个双语羽毛球知识库，帮助你更快找到合适的学习视频。',
    heroLead:
      '这不是训练门户，而是一个可搜索、由 mediator 筛选的参考知识库，用于整理羽毛球击球、步法、战术和高质量学习资源。',
    findVideos: '查找视频',
    reviewWorkflow: '查看筛选流程',
    shots: '击球',
    footwork: '步法',
    tactics: '战术',
    seedLinks: '种子链接',
    contentAreas: '内容领域',
    aiAssisted: 'AI 搜索辅助',
    direction: '方向',
    directionTitle: '先做知识库，不做训练门户。',
    directionBody:
      '核心任务是帮助羽毛球学习者按击球类型、步法类型、水平、语言和主题快速发现高质量视频资源。网站保存链接、质量说明、标签和 mediator 审核决策，而不是管理训练计划、打卡或教练流程。',
    endUserFeature: '终端用户功能',
    finderTitle: '按击球和步法类型查找 YouTube 链接',
    searchable: '可搜索的种子资源库',
    searchPlaceholder: '搜索 正手吊球、高远球、启动步、弓步、杀球...',
    all: '全部',
    openYoutube: '打开 YouTube 搜索',
    mediatorFeature: 'Mediator 功能',
    mediatorTitle: '基于 AI 搜索结果筛选最佳内容',
    aiLoopTitle: 'AI 辅助内容筛选流程',
    aiLoop: [
      '输入主题，例如“启动步时机”或“正手高远球”。',
      'AI 搜索扩展候选视频，并提取标题、频道、摘要和推荐理由。',
      'Mediator 根据质量标准比较候选内容。',
      '最佳链接被批准、打标签，并发布到知识库。',
    ],
    knowledgeArchitecture: '知识架构',
    contentModelTitle: '初始双语主题分类',
    nextSteps: '下一步建设',
    roadmapTitle: '从种子链接发展成精选双语知识库。',
    roadmapBody:
      '当前初版使用静态种子数据。下一个里程碑应增加结构化双语内容文件、更完整的主题页，以及导入 AI 搜索候选结果的离线 mediator 流程。',
    roadmapItems: [
      '建立双语主题分类：击球、步法、战术、身体准备',
      '用 JSON 或 Markdown frontmatter 保存视频链接，并包含 en/zh 字段',
      '增加 mediator 审核字段：批准、拒绝、原因、质量评分',
      '为每个主题增加中文和英文标签',
      '自动导入 AI 搜索结果到候选队列',
    ],
  },
} as const;

const categoryLabel: Record<Category, Bilingual> = {
  Shot: { en: 'Shot', zh: '击球' },
  Footwork: { en: 'Footwork', zh: '步法' },
  Tactics: { en: 'Tactics', zh: '战术' },
  Fitness: { en: 'Fitness', zh: '体能' },
};

const levelLabel: Record<Level, Bilingual> = {
  Beginner: { en: 'Beginner', zh: '初级' },
  Intermediate: { en: 'Intermediate', zh: '中级' },
  Advanced: { en: 'Advanced', zh: '高级' },
};

const qualityLabel: Record<Quality, Bilingual> = {
  Approved: { en: 'Approved', zh: '已批准' },
  Candidate: { en: 'Candidate', zh: '候选' },
  'Needs Review': { en: 'Needs Review', zh: '待审核' },
};

const topics = topicsData as Topic[];
const videoResources = videoResourcesData as VideoResource[];

const categories: Array<'All' | Category> = ['All', 'Shot', 'Footwork', 'Tactics', 'Fitness'];
const qualityValues: Array<'All' | Quality> = ['All', 'Approved', 'Candidate', 'Needs Review'];

const mediatorQueue = [
  {
    query: { en: 'badminton forehand clear beginner full court angle', zh: '羽毛球 正手高远球 初学 全场角度' },
    suggestedBy: { en: 'AI search', zh: 'AI 搜索' },
    status: { en: 'Ready to compare', zh: '可开始比较' },
    criteria: [
      { en: 'clear camera angle', zh: '镜头角度清楚' },
      { en: 'safe technique', zh: '技术安全' },
      { en: 'beginner friendly', zh: '适合初学者' },
    ],
  },
  {
    query: { en: 'badminton split step timing opponent contact slow motion', zh: '羽毛球 启动步 时机 对手击球 慢动作' },
    suggestedBy: { en: 'AI search', zh: 'AI 搜索' },
    status: { en: 'Needs source check', zh: '需要来源检查' },
    criteria: [
      { en: 'timing explanation', zh: '解释启动时机' },
      { en: 'match examples', zh: '有比赛示例' },
      { en: 'concise teaching', zh: '讲解简洁' },
    ],
  },
  {
    query: { en: 'badminton scissor kick recovery common mistakes', zh: '羽毛球 剪刀步 回位 常见错误' },
    suggestedBy: { en: 'Manual seed + AI expansion', zh: '人工种子 + AI 扩展' },
    status: { en: 'Needs final pick', zh: '需要最终选择' },
    criteria: [
      { en: 'balance', zh: '平衡' },
      { en: 'landing safety', zh: '落地安全' },
      { en: 'recovery step', zh: '回位步伐' },
    ],
  },
];

function text(value: Bilingual, lang: Lang) {
  return value[lang];
}

function normalizeSearchText(value: string) {
  return value
    .toLowerCase()
    .replace(/[·/／,，:：;；()（）\[\]{}"“”'’‘-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenizeSearchQuery(value: string) {
  return normalizeSearchText(value)
    .split(' ')
    .map((token) => token.trim())
    .filter(Boolean);
}

function buildResourceSearchText(resource: VideoResource) {
  return normalizeSearchText([
    resource.title.en,
    resource.title.zh,
    resource.type.en,
    resource.type.zh,
    ...resource.aliases.flatMap((alias) => [alias.en, alias.zh]),
    resource.category,
    categoryLabel[resource.category].zh,
    resource.level,
    levelLabel[resource.level].zh,
    resource.quality,
    qualityLabel[resource.quality].zh,
    resource.reason.en,
    resource.reason.zh,
    ...resource.tags.flatMap((tag) => [tag.en, tag.zh]),
  ].join(' '));
}

function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [category, setCategory] = useState<'All' | Category>('All');
  const [quality, setQuality] = useState<'All' | Quality>('All');
  const [query, setQuery] = useState('');
  const t = label[lang];

  const filteredResources = useMemo(() => {
    const tokens = tokenizeSearchQuery(query);
    return videoResources.filter((resource) => {
      const matchesCategory = category === 'All' || resource.category === category;
      const matchesQuality = quality === 'All' || resource.quality === quality;
      const searchText = buildResourceSearchText(resource);
      const matchesQuery = tokens.length === 0 || tokens.every((token) => searchText.includes(token));
      return matchesCategory && matchesQuality && matchesQuery;
    });
  }, [category, quality, query]);

  return (
    <main lang={lang}>
      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <div className="brand">
            <span className="brandMark">BTK</span>
            <span>{t.brand}</span>
          </div>
          <div className="navLinks">
            <a href="#finder">{t.navFinder}</a>
            <a href="#mediator">{t.navMediator}</a>
            <a href="#topics">{t.navTopics}</a>
            <button className="languageButton" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}>
              <Languages size={16} /> {t.switchTo}
            </button>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="lead">{t.heroLead}</p>
            <div className="heroActions">
              <a className="primaryButton" href="#finder">
                {t.findVideos} <ArrowRight size={18} />
              </a>
              <a className="secondaryButton" href="#mediator">
                {t.reviewWorkflow}
              </a>
            </div>
          </div>

          <aside className="heroCard" aria-label="Knowledge base status">
            <div className="courtDiagram">
              <span>{t.shots}</span>
              <span>{t.footwork}</span>
              <span>{t.tactics}</span>
            </div>
            <div className="heroStats">
              <div><strong>{videoResources.length}</strong><span>{t.seedLinks}</span></div>
              <div><strong>{topics.length}</strong><span>{t.contentAreas}</span></div>
              <div><strong>AI</strong><span>{t.aiAssisted}</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="sectionLabel">{t.direction}</p>
          <h2>{t.directionTitle}</h2>
        </div>
        <p>{t.directionBody}</p>
      </section>

      <section className="section finder" id="finder">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">{t.endUserFeature}</p>
            <h2>{t.finderTitle}</h2>
          </div>
          <div className="searchBox"><Search size={18} /> {t.searchable}</div>
        </div>

        <div className="filters" aria-label="Video filters">
          <label>
            <Search size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.searchPlaceholder}
            />
          </label>
          <label>
            <Filter size={18} />
            <select value={category} onChange={(event) => setCategory(event.target.value as 'All' | Category)}>
              {categories.map((item) => (
                <option key={item} value={item}>{item === 'All' ? t.all : categoryLabel[item][lang]}</option>
              ))}
            </select>
          </label>
          <label>
            <BadgeCheck size={18} />
            <select value={quality} onChange={(event) => setQuality(event.target.value as 'All' | Quality)}>
              {qualityValues.map((item) => (
                <option key={item} value={item}>{item === 'All' ? t.all : qualityLabel[item][lang]}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="resourceGrid">
          {filteredResources.map((resource) => (
            <article className="resourceCard" key={`${resource.category}-${resource.type.en}-${resource.title.en}`}>
              <div className="cardTop">
                <span className={`level ${resource.level.toLowerCase()}`}>{levelLabel[resource.level][lang]}</span>
                <span className={`quality ${resource.quality.toLowerCase().replace(' ', '-')}`}>{qualityLabel[resource.quality][lang]}</span>
              </div>
              <div className="resourceType">
                {resource.category === 'Footwork' ? <Footprints size={18} /> : <Target size={18} />}
                {categoryLabel[resource.category][lang]} · {text(resource.type, lang)}
              </div>
              <h3>{text(resource.title, lang)}</h3>
              <p>{text(resource.reason, lang)}</p>
              <ul>
                {resource.tags.map((tag) => <li key={`${tag.en}-${tag.zh}`}>{text(tag, lang)}</li>)}
              </ul>
              <a className="videoLink" href={resource.url} target="_blank" rel="noreferrer">
                {t.openYoutube} <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section mediator" id="mediator">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">{t.mediatorFeature}</p>
            <h2>{t.mediatorTitle}</h2>
          </div>
        </div>

        <div className="mediatorLayout">
          <article className="workflowCard">
            <BrainCircuit size={30} />
            <h3>{t.aiLoopTitle}</h3>
            <ol>
              {t.aiLoop.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </article>

          <div className="queueList">
            {mediatorQueue.map((item) => (
              <article className="queueItem" key={item.query.en}>
                <div>
                  <p className="queueMeta"><Sparkles size={16} /> {text(item.suggestedBy, lang)} · {text(item.status, lang)}</p>
                  <h3>{text(item.query, lang)}</h3>
                </div>
                <ul>
                  {item.criteria.map((criterion) => <li key={criterion.en}>{text(criterion, lang)}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section knowledge" id="topics">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">{t.knowledgeArchitecture}</p>
            <h2>{t.contentModelTitle}</h2>
          </div>
        </div>
        <div className="topicGrid">
          {topics.map((topic) => (
            <article className="topicCard" key={topic.id}>
              <div className="cardTop">
                <span className={`level ${topic.level.toLowerCase()}`}>{levelLabel[topic.level][lang]}</span>
                <span className="quality candidate">P{topic.priority}</span>
              </div>
              <div className="resourceType">
                {topic.category === 'Footwork' ? <Footprints size={18} /> : <Target size={18} />}
                {categoryLabel[topic.category][lang]}
              </div>
              <h3>{text(topic.name, lang)}</h3>
              <p>{text(topic.description, lang)}</p>
              <ul>
                {topic.qualitySignals.slice(0, 2).map((signal) => <li key={`${topic.id}-${signal.en}`}>{text(signal, lang)}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section roadmap" id="roadmap">
        <div className="roadmapText">
          <p className="sectionLabel">{t.nextSteps}</p>
          <h2>{t.roadmapTitle}</h2>
          <p>{t.roadmapBody}</p>
        </div>
        <div className="lessonList">
          {t.roadmapItems.map((item, index) => (
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
