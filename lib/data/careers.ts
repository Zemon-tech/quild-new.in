export type RolePosting = {
  title: string;
  team: string;
  location: string;
  type: "Full-time" | "Contract";
  applyUrl: string;
};

export const roles: RolePosting[] = [
  {
    title: "Program Producer",
    team: "Programs",
    location: "India (Hybrid)",
    type: "Contract",
    applyUrl: "/contact",
  },
  {
    title: "Community Operator",
    team: "Community",
    location: "Bengaluru",
    type: "Full-time",
    applyUrl: "/contact",
  },
];
