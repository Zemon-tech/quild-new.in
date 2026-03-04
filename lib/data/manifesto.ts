export interface ManifestoPanel {
  n: number;
  image: string;
  gradient: string;
  headline: string;
  body: string;
}

export const manifestoPanels: ManifestoPanel[] = [
  {
    n: 1,
    image: '/ai-will-not.png',
    gradient: 'linear-gradient(135deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
    headline: 'AI will not\nreplace you.',
    body: 'Not the real you. The part of you that questions, creates, connects ideas across disciplines, and builds things that didn\'t exist before. That part? Irreplaceable.',
  },
  {
    n: 2,
    image: '/but-standing-still.png',
    gradient: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 60%, transparent 100%)',
    headline: 'But standing\nstill will.',
    body: 'The builders who treat AI as a threat are already falling behind. The ones who treat it as a tool are building 10x faster with the same talent. The window is now.',
  },
  {
    n: 3,
    image: '/repetitive-work.png',
    gradient: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)',
    headline: 'Repetitive work\nwas never\nthe point.',
    body: 'AI is taking the tasks that kept talented people busy but not growing. That\'s not a crisis. That\'s a gift. Now you have no excuse not to build something real.',
  },
  {
    n: 4,
    image: '/the-best-builder.png',
    gradient: 'linear-gradient(to bottom right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 65%, transparent 100%)',
    headline: 'The best builders\nare made,\nnot found.',
    body: 'Talent is common. The environment that sharpens it is rare. Quild exists to be that environment — for engineers, students, and founders serious about becoming someone.',
  },
  {
    n: 5,
    image: '/build-public.png',
    gradient: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 45%, transparent 70%)',
    headline: 'We\'re building\nthis room\nin public.',
    body: 'We\'re small. We\'re early. We\'re honest about both. If you\'re the kind of person who sees that as a reason to join rather than wait — you\'re exactly who we\'re building this for.',
  },
];
