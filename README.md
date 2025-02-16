# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project.
[Youtube Video](https://youtu.be/d5x0JCZbAJs)

# [Deployed Link](https://t3-app-2.vercel.app/)

## Some tools that were used

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## How do I deploy this?

[Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) are some good options

## TODO

- [x] Make deploy (vercel)
- [x] Scaffold basic ui & mock data
- [x] tidy up build process
- [x] setup brave to work with drizzle studio (install mkcert & brew) / my mistake the solution was to just use neon db interface on there site since I used neon db instead of vercel postgres.
- [x] attach db to ui
- [x] add authentication (clerk)
- [x] add image upload
- [x] [taint](https://react.dev/reference/react/experimental_taintObjectReference) & [server-only](https://nextjs.org/blog/security-nextjs-server-components-actions#data-access-layer)
- [x] error management (sentry)
- [x] use Next/Image component
- [x] fix problems with [dynamic api links](https://nextjs.org/docs/messages/sync-dynamic-apis) & [parallel routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
- [x] routing/ image page (parallel route)
- [x] delete button (w/ server actions)
- [x] analytics (posthog)
- [ ] ratelimiting (upstash)
