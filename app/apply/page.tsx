import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import ApplyClient from './ApplyClient'

export default async function ApplyPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/profile')
  }

  return <ApplyClient />
}
