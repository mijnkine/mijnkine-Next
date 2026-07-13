import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Enable Next.js caching (ISR/SSG) by adding an incremental cache override.
  // For example, to use Cloudflare R2:
  //   import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
  //   incrementalCache: r2IncrementalCache,
  // See https://opennext.js.org/cloudflare/caching for details.
});
