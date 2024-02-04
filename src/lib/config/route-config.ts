import { createNavigationConfig } from "next-safe-navigation";


export const { routes, useSafeParams, useSafeSearchParams } = createNavigationConfig(
  (defineRoute) => ({
    home: defineRoute('/'),
    dashboard: defineRoute("/dashboard"),
    pricing: defineRoute("/pricing"),
    signup: defineRoute("/sign-up"),
    login: defineRoute("/log-in")
  }),
);