import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

/**
 * Route Handler for refreshing the Supabase auth session.
 * Called client-side on protected pages since proxy.ts is not available
 * on Cloudflare Workers. Route Handlers CAN write cookies, Server Components cannot.
 */
export async function GET() {
  const supabase = await createClient()
  // getUser() triggers a token refresh if the access token is expired,
  // and the server client's setAll handler writes the new cookie to the response
  await supabase.auth.getUser()
  return NextResponse.json({ ok: true })
}
