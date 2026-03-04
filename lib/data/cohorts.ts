export type Cohort = {
  id: string;
  city: string;
  dates: string;
  deadline: string;
  status: "upcoming" | "active" | "past";
};

export const cohorts: Cohort[] = [
  { id: "05", city: "Delhi", dates: "Aug 2026 — Sep 2026", deadline: "Jul 12, 2026", status: "upcoming" },
  { id: "04", city: "Bengaluru", dates: "May 2026 — Jun 2026", deadline: "Apr 10, 2026", status: "active" },
  { id: "03", city: "Mumbai", dates: "Nov 2025 — Dec 2025", deadline: "Oct 18, 2025", status: "past" },
  { id: "02", city: "Pune", dates: "Aug 2025 — Sep 2025", deadline: "Jul 10, 2025", status: "past" },
  { id: "01", city: "Online", dates: "Apr 2025 — May 2025", deadline: "Mar 20, 2025", status: "past" },
];
