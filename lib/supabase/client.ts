import { createBrowserClient } from '@supabase/ssr'
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    // During build time (SSR on the server for static pages), 
    // variables might be missing. Return a dummy if on server.
    if (typeof window === "undefined") {
      return {} as any;
    }
    throw new Error("@supabase/ssr: URL and API key are required!");
  }

  return createBrowserClient(url, key);
}
