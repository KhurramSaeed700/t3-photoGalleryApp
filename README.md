# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project.
[Youtube Video](https://youtu.be/d5x0JCZbAJs)

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

- [X] Make deploy (vercel)
- [X] Scaffold basic ui & mock data
- [X] tidy up build process
- [X] setup brave to work with drizzle studio (install mkcert & brew) / my mistake the solution was to just use neon db interface on there site since I used neon db instead of vercel postgres.
- [X] attach db to ui
- [X] add authentication (clerk)
- [X] add image upload
- [X] [taint](https://react.dev/reference/react/experimental_taintObjectReference) & [server-only](https://nextjs.org/blog/security-nextjs-server-components-actions#data-access-layer)
- [X] error management (sentry)
- [X] use Next/Image component
- [X] fix problems with [dynamic api links](https://nextjs.org/docs/messages/sync-dynamic-apis) & [parallel routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
- [X] routing/ image page (parallel route)
- [ ] delete button (w/ server actions)
- [ ] analytics (posthog)
- [ ] ratelimiting (upstash)