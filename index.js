// Vercel entrypoint.
//
// Vercel's Hono builder needs a root entrypoint that imports from 'hono' directly, and it compiles
// source files without running `tsc-alias`, so the `#modules/*` / `#common/*` import aliases in `src/`
// would not resolve at runtime. `bun run build` (tsc + tsc-alias) already emits a fully resolved
// build in `dist/`, so we re-export the compiled app from there.
import 'hono'

export { default } from './dist/server.js'
