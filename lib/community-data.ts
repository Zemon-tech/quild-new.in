export type MemberRole =
  | 'COHORT PARTICIPANT'
  | 'MENTOR'
  | 'PARTNER'
  | 'RESEARCHER'
  | 'CREATOR'
  | 'TEAM'

export type MemberCohort = '01' | '02' | null

export interface Member {
  id: string
  name: string
  role: MemberRole
  cohort: MemberCohort
  discipline: string
  college?: string
  location: string
  bio: string
  tags: string[]
  socials: {
    x?: string
    linkedin?: string
    github?: string
    portfolio?: string
  }
  initials: string
  avatarBg?: string
  featured?: boolean
}

export const MEMBERS: Member[] = [
  {
    id: 'shivang-kandoi',
    name: 'Shivang Kandoi',
    role: 'TEAM',
    cohort: null,
    discipline: 'Product & Community',
    college: 'USICT, GGSIPU',
    location: 'Delhi, India',
    bio: 'CEO and co-founder of Quild. Building the room for serious builders. Computer Science student at USICT, GGSIPU.',
    tags: ['Product', 'Community', 'AI'],
    socials: { x: 'shivangkandoi', linkedin: 'shivangkandoi', github: 'shivangkandoi' },
    initials: 'SK',
    featured: true,
    avatarBg: 'var(--sage-light)',
  },
  {
    id: 'satyajit-jena',
    name: 'Satyajit Jena',
    role: 'TEAM',
    cohort: null,
    discipline: 'Software Engineering',
    college: 'USICT, GGSIPU',
    location: 'Delhi, India',
    bio: 'CTO and co-founder of Quild. Believes the best engineering happens when surrounded by people who care as much as you do.',
    tags: ['Engineering', 'Systems', 'AI'],
    socials: { x: 'satyajitjena', linkedin: 'satyajitjena', github: 'satyajitjena' },
    initials: 'SJ',
    featured: true,
    avatarBg: 'var(--surface)',
  },
  {
    id: 'ananya-gupta',
    name: 'Ananya Gupta',
    role: 'COHORT PARTICIPANT',
    cohort: '01',
    discipline: 'Product Design',
    college: 'DTU',
    location: 'Delhi, India',
    bio: 'Designing systems that feel inevitable. Currently exploring human-AI collaboration for creative tools.',
    tags: ['Design Systems', 'UX', 'Prototyping'],
    socials: { linkedin: 'ananya-gupta', portfolio: 'https://example.com' },
    initials: 'AG',
    avatarBg: 'var(--sage-light)',
  },
  {
    id: 'arjun-mehra',
    name: 'Arjun Mehra',
    role: 'COHORT PARTICIPANT',
    cohort: '01',
    discipline: 'Software Engineering',
    college: 'NSUT',
    location: 'Gurugram, India',
    bio: 'Full-stack builder focused on reliability and speed. Likes shipping small things that compound.',
    tags: ['React', 'TypeScript', 'Shipping'],
    socials: { github: 'arjunmehra', x: 'arjunmehra' },
    initials: 'AM',
  },
  {
    id: 'divya-nair',
    name: 'Divya Nair',
    role: 'COHORT PARTICIPANT',
    cohort: '01',
    discipline: 'AI/ML',
    college: 'IIIT Delhi',
    location: 'Delhi, India',
    bio: 'Working on applied ML with an obsession for evals. Interested in building human-scale AI products.',
    tags: ['ML', 'Evals', 'Applied AI'],
    socials: { github: 'divyanair', linkedin: 'divya-nair' },
    initials: 'DN',
  },
  {
    id: 'karthik-iyer',
    name: 'Karthik Iyer',
    role: 'COHORT PARTICIPANT',
    cohort: '02',
    discipline: 'Software Engineering',
    college: 'BITS Pilani',
    location: 'Bengaluru, India',
    bio: 'Enjoys building developer tooling and internal platforms. Believes good DX is leverage.',
    tags: ['Systems', 'Tooling', 'Next.js'],
    socials: { github: 'karthikiyer' },
    initials: 'KI',
    avatarBg: 'var(--surface)',
  },
  {
    id: 'meera-joshi',
    name: 'Meera Joshi',
    role: 'COHORT PARTICIPANT',
    cohort: '02',
    discipline: 'Product',
    college: 'IIM Indore',
    location: 'Mumbai, India',
    bio: 'Product thinker who likes clear bets and crisp narratives. Building with builders, not for them.',
    tags: ['Product', 'Go-to-market', 'Research'],
    socials: { x: 'meerajoshi', linkedin: 'meera-joshi' },
    initials: 'MJ',
    avatarBg: 'var(--sage-light)',
  },
  {
    id: 'rohan-saxena',
    name: 'Rohan Saxena',
    role: 'COHORT PARTICIPANT',
    cohort: '02',
    discipline: 'AI/ML',
    college: 'IIT Roorkee',
    location: 'Hyderabad, India',
    bio: 'Building agents that are boringly reliable. Interested in workflows, not demos.',
    tags: ['Agents', 'Python', 'Evals'],
    socials: { github: 'rohansaxena' },
    initials: 'RS',
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'MENTOR',
    cohort: null,
    discipline: 'Product & Growth',
    location: 'Remote',
    bio: 'Mentors early-stage teams on positioning and loops. Previously built consumer + B2B products.',
    tags: ['Positioning', 'Growth', 'Distribution'],
    socials: { linkedin: 'priya-sharma' },
    initials: 'PS',
  },
  {
    id: 'aditya-verma',
    name: 'Aditya Verma',
    role: 'PARTNER',
    cohort: null,
    discipline: 'Community Partnerships',
    location: 'Delhi, India',
    bio: 'Helps communities collaborate without losing their identity. Focused on long-term compounding partnerships.',
    tags: ['Partnerships', 'Community', 'Operations'],
    socials: { x: 'adityaverma' },
    initials: 'AV',
    avatarBg: 'var(--surface)',
  },
  {
    id: 'neha-kapoor',
    name: 'Neha Kapoor',
    role: 'RESEARCHER',
    cohort: null,
    discipline: 'Research',
    location: 'Pune, India',
    bio: 'Researching how builders learn in public and stay consistent. Interested in craft, habit, and teams.',
    tags: ['Research', 'Writing', 'Learning'],
    socials: { portfolio: 'https://example.com' },
    initials: 'NK',
    avatarBg: 'var(--sage-light)',
  },
  {
    id: 'ishaan-singh',
    name: 'Ishaan Singh',
    role: 'CREATOR',
    cohort: null,
    discipline: 'Writing & Media',
    location: 'Delhi, India',
    bio: 'Writes about builders, constraints, and taste. Helps translate technical work into narratives people care about.',
    tags: ['Writing', 'Media', 'Taste'],
    socials: { x: 'ishaansingh' },
    initials: 'IS',
  },
]

export const ROLE_FILTERS = [
  'ALL',
  'COHORT PARTICIPANT',
  'TEAM',
  'MENTOR',
  'PARTNER',
  'RESEARCHER',
  'CREATOR',
] as const

export type RoleFilter = typeof ROLE_FILTERS[number]

export const ROLE_LABELS: Record<RoleFilter, string> = {
  ALL: 'All',
  'COHORT PARTICIPANT': 'Cohort',
  TEAM: 'Team',
  MENTOR: 'Mentors',
  PARTNER: 'Partners',
  RESEARCHER: 'Research',
  CREATOR: 'Creators',
}
