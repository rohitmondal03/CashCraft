import { createNavigationConfig } from "next-safe-navigation";


export const { routes, useSafeParams, useSafeSearchParams } = createNavigationConfig(
  (defineRoute) => ({
    home: defineRoute('/'),
    dashboard: defineRoute("/dashboard"),
    bills: defineRoute("/dashboard/bills"),
    goals: defineRoute("/dashboard/goals"),
    spending: defineRoute("/dashboard/spending"),
    pricing: defineRoute("/pricing"),
    signup: defineRoute("/sign-up"),
    login: defineRoute("/log-in")
  }),
);