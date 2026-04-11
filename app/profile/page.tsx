import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ProfileCard from "@/components/profile/ProfileCard";
import SessionRefresher from "@/components/auth/SessionRefresher";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Your Quild network profile.",
};

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/apply");
  }

  const meta = user.user_metadata ?? {};
  const firstName: string = meta.first_name ?? "";
  const lastName: string = meta.last_name ?? "";
  const email: string = user.email ?? "";
  const fullName =
    [firstName, lastName].filter(Boolean).join(" ") || email.split("@")[0];

  return (
    <main className="min-h-screen bg-(--bg) flex items-center justify-center p-4 lg:p-8">
      <SessionRefresher />
      <ProfileCard fullName={fullName} email={email} />
    </main>
  );
}
