'use client'

import { useEffect } from 'react'

/**
 * Fires a session refresh on mount so the Supabase access token cookie
 * stays fresh. Required because proxy.ts is unavailable on Cloudflare Workers,
 * and Server Components cannot write cookies.
 */
export default function SessionRefresher() {
  useEffect(() => {
    fetch('/api/auth/refresh').catch(() => {})
  }, [])

  return null
}
