// Feature flags. No existing flag mechanism was found in this codebase (no env-var
// convention, no config service) — this is the first one, added as a plain env var
// per the simplest-available pattern.
//
// NEXT_PUBLIC_ prefix is required so the flag is readable in client components
// (e.g. components/sima-probe/subscription-levels.tsx), not just server-rendered pages.
// Defaults to false/off when unset.
export const INSIGHT_TIERS_LIVE = process.env.NEXT_PUBLIC_INSIGHT_TIERS_LIVE === 'true'
