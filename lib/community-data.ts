export type MemberRole =
  | 'COHORT PARTICIPANT'
  | 'TEAM'

export type MemberCohort = '01' | '02' | null

export interface MemberProject {
  name: string
  description: string
  role?: string
  links?: {
    demo?: string
    github?: string
    notion?: string
  }
}

export interface CohortParticipantDetails {
  cohortLabel: string
  projectsBuilt: MemberProject[]
  contributions: string[]
  testimonial?: string
  highlights?: string[]
}

export interface TeamMemberDetails {
  title: string
  responsibilities: string[]
  focusAreas?: string[]
  notes?: string
}

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
  participant?: CohortParticipantDetails
  team?: TeamMemberDetails
  socials: {
    x?: string
    linkedin?: string
    github?: string
    portfolio?: string
  }
  initials: string
  avatarUrl?: string
  avatarBg?: string
  featured?: boolean
}

export const MEMBERS: Member[] = [
  {
    id: 'shivang-kandoi',
    name: 'Shivang Kandoi',
    role: 'TEAM',
    cohort: null,
    discipline: 'Team',
    college: 'USICT, GGSIPU',
    location: 'Delhi, India',
    bio: 'Team member at Quild. Student at USICT, GGSIPU.',
    tags: ['USICT'],
    team: {
      title: 'Core Team',
      responsibilities: [
        'Cohort operations and participant success',
        'Product and community systems',
        'Mentorship and reviews',
      ],
      focusAreas: ['Cohorts', 'Community', 'Product'],
    },
    socials: {},
    initials: 'SK',
    avatarUrl: 'https://zemonhouseofbuilders.in/shivang.png',
  },
  {
    id: 'satyajit-jena',
    name: 'Satyajit Jena',
    role: 'TEAM',
    cohort: null,
    discipline: 'Team',
    college: 'USICT, GGSIPU',
    location: 'Delhi, India',
    bio: 'Team member at Quild. Student at USICT, GGSIPU.',
    tags: ['USICT'],
    team: {
      title: 'Core Team',
      responsibilities: [
        'Engineering and build systems',
        'Program execution support',
        'Cohort tooling and workflows',
      ],
      focusAreas: ['Engineering', 'Systems'],
    },
    socials: {},
    initials: 'SJ',
    avatarUrl: 'https://zemonhouseofbuilders.in/satyajit.png',
  },
  {
    id: 'harshit-kundra-team',
    name: 'Harshit Kundra',
    role: 'TEAM',
    cohort: null,
    discipline: 'Team',
    college: 'USICT, GGSIPU',
    location: 'Delhi, India',
    bio: 'Team member at Quild. Student at USICT, GGSIPU.',
    tags: ['USICT'],
    team: {
      title: 'Core Team',
      responsibilities: [
        'Community growth and engagement',
        'Cohort support and facilitation',
        'Partner and ecosystem coordination',
      ],
      focusAreas: ['Community', 'Ops'],
    },
    socials: {},
    initials: 'HK',
    avatarUrl: 'https://zemonhouseofbuilders.in/harshit.png',
  },
  {
    id: 'ritik-paliya-team',
    name: 'Ritik Paliya',
    role: 'TEAM',
    cohort: null,
    discipline: 'Team',
    college: 'USICT, GGSIPU',
    location: 'Delhi, India',
    bio: 'Team member at Quild. Student at USICT, GGSIPU.',
    tags: ['USICT'],
    team: {
      title: 'Core Team',
      responsibilities: [
        'Curriculum and cohort delivery',
        'Project reviews and feedback',
        'Community support',
      ],
      focusAreas: ['Cohorts', 'Mentorship'],
    },
    socials: {},
    initials: 'RP',
    avatarUrl: 'https://zemonhouseofbuilders.in/ritik.png',
  },
  {
    id: 'harshit-kundra',
    name: 'Harshit Kundra',
    role: 'COHORT PARTICIPANT',
    cohort: '01',
    discipline: 'Student',
    college: 'USICT, GGSIPU',
    location: 'Delhi, India',
    bio: 'Cohort 01 participant. Student at USICT, GGSIPU.',
    tags: ['USICT', 'Cohort 01'],
    participant: {
      cohortLabel: 'Cohort 01',
      projectsBuilt: [
        {
          name: 'Cohort Project',
          description: 'Built during Quild cohort with teammates; focused on shipping an MVP.',
          role: 'Builder',
        },
      ],
      contributions: [
        'Shipped weekly iterations and feature demos',
        'Helped teammates unblock implementation details',
      ],
      testimonial: 'The cohort helped me move from ideas to shipping consistently with feedback.',
      highlights: ['Fast iterations', 'Strong collaboration'],
    },
    socials: {},
    initials: 'HK',
    avatarUrl: 'https://zemonhouseofbuilders.in/harshit.png',
  },
  {
    id: 'ritik-paliya',
    name: 'Ritik Paliya',
    role: 'COHORT PARTICIPANT',
    cohort: '01',
    discipline: 'Student',
    college: 'USICT, GGSIPU',
    location: 'Delhi, India',
    bio: 'Cohort 01 participant. Student at USICT, GGSIPU.',
    tags: ['USICT', 'Cohort 01'],
    participant: {
      cohortLabel: 'Cohort 01',
      projectsBuilt: [
        {
          name: 'Cohort Build',
          description: 'A product built with cohort peers; validated problem + shipped MVP.',
          role: 'Builder',
        },
      ],
      contributions: [
        'Owned core UI implementation and polish',
        'Contributed to product narrative and pitch',
      ],
      testimonial: 'The cohort gave structure, accountability, and real feedback loops.',
      highlights: ['UI polish', 'Ownership'],
    },
    socials: {},
    initials: 'RP',
    avatarUrl: 'https://zemonhouseofbuilders.in/ritik.png',
  },
  {
    id: 'prachi-yadav',
    name: 'Prachi Yadav',
    role: 'COHORT PARTICIPANT',
    cohort: '01',
    discipline: 'Student',
    college: 'USICT, GGSIPU',
    location: 'Delhi, India',
    bio: 'Cohort 01 participant. Student at USICT, GGSIPU.',
    tags: ['USICT', 'Cohort 01'],
    participant: {
      cohortLabel: 'Cohort 01',
      projectsBuilt: [
        {
          name: 'Cohort MVP',
          description: 'End-to-end project built in cohort with scope control and execution.',
          role: 'Builder',
        },
      ],
      contributions: [
        'Led research + user interviews for the problem',
        'Documented learnings and helped with roadmap',
      ],
      testimonial: 'I learned how to build with clarity and communicate progress weekly.',
      highlights: ['Research', 'Documentation'],
    },
    socials: {},
    initials: 'PY',
    avatarUrl: 'https://media.licdn.com/dms/image/v2/D5603AQHZJnrbJdkDjg/profile-displayphoto-scale_400_400/B56Zyu3hKMKUAo-/0/1772460317027?e=1775088000&v=beta&t=qq8dxNr0wlRNfBfD7cBJz5ctDVt2S9-gcVdVTy8eFnU',
  },
  {
    id: 'sanjay',
    name: 'Sanjay',
    role: 'COHORT PARTICIPANT',
    cohort: '01',
    discipline: 'Student',
    college: 'USICT, GGSIPU',
    location: 'Delhi, India',
    bio: 'Cohort 01 participant. Student at USICT, GGSIPU.',
    tags: ['USICT', 'Cohort 01'],
    participant: {
      cohortLabel: 'Cohort 01',
      projectsBuilt: [
        {
          name: 'Cohort Project',
          description: 'Contributed to product features and shipping milestones in cohort.',
          role: 'Builder',
        },
      ],
      contributions: [
        'Implemented key features and fixes',
        'Helped with testing and release readiness',
      ],
      highlights: ['Execution', 'Testing'],
    },
    socials: {},
    initials: 'S',
    avatarUrl: 'https://zemonhouseofbuilders.in/sanjay.png',
  },
  {
    id: 'shashi-ranjan',
    name: 'Shashi Ranjan',
    role: 'COHORT PARTICIPANT',
    cohort: '01',
    discipline: 'Student',
    college: 'USICT, GGSIPU',
    location: 'Delhi, India',
    bio: 'Cohort 01 participant. Student at USICT, GGSIPU.',
    tags: ['USICT', 'Cohort 01'],
    participant: {
      cohortLabel: 'Cohort 01',
      projectsBuilt: [
        {
          name: 'Cohort MVP',
          description: 'Collaborated on MVP delivery with iteration + feedback cycles.',
          role: 'Builder',
        },
      ],
      contributions: ['Collaborated across the build team', 'Presented weekly progress demos'],
      highlights: ['Collaboration', 'Communication'],
    },
    socials: {},
    initials: 'SR',
    avatarUrl: 'https://media.licdn.com/dms/image/v2/D5603AQFT0bxG6QCadQ/profile-displayphoto-scale_400_400/B56Zx1lr.rJAAg-/0/1771499341907?e=1775088000&v=beta&t=QFp0e9gJmQcDan63TmIcDwWHr-kFdfRFd92_2uBDNTM',
  },
]

export const ROLE_FILTERS = [
  'ALL',
  'COHORT PARTICIPANT',
  'TEAM',
] as const

export type RoleFilter = typeof ROLE_FILTERS[number]

export const ROLE_LABELS: Record<RoleFilter, string> = {
  ALL: 'All',
  'COHORT PARTICIPANT': 'Cohort',
  TEAM: 'Team',
}
