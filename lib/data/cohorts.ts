export type TimelineStatus = "upcoming" | "active" | "completed";
export type TimelineType = "cohort" | "event";

export type Cohort = {
  id: string;
  label: string;
  type: TimelineType;
  dates: string;
  deadline: string;
  status: TimelineStatus;
  order: number;
  ctaHref?: string;
  ctaLabel?: string;
};

export const cohorts: Cohort[] = [
  {
    id: "3.0",
    label: "Cohort 3.0",
    type: "cohort",
    dates: "From Apr 2026 (TBA)",
    deadline: "TBA",
    status: "upcoming",
    order: 4,
    ctaHref: "/apply",
    ctaLabel: "APPLY",
  },
  {
    id: "PD-01",
    label: "Quild Summit",
    type: "event",
    dates: "Apr 11, 2026",
    deadline: "TBA",
    status: "upcoming",
    order: 3,
    ctaHref: "/apply",
    ctaLabel: "APPLY",
  },
  {
    id: "2.0",
    label: "Cohort 2.0",
    type: "cohort",
    dates: "Feb 25, 2026 - Apr 5, 2026",
    deadline: "Closed",
    status: "active",
    order: 2,
    ctaHref: "/apply",
    ctaLabel: "APPLY",
  },
  {
    id: "1.0",
    label: "Cohort 1.0",
    type: "cohort",
    dates: "Jan 1, 2026 - Feb 15, 2026",
    deadline: "Closed",
    status: "completed",
    order: 1,
  },
];
