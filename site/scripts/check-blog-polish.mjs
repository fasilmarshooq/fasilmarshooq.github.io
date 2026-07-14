import { readFileSync } from "node:fs"
import { join } from "node:path"

const root = new URL("..", import.meta.url).pathname

const read = path => readFileSync(join(root, path), "utf8")

const checks = [
  {
    name: "homepage exposes compact navigation",
    path: "src/components/HomeLayout/home-layout.jsx",
    test: text =>
      text.includes("SiteNav") &&
      text.includes('to="/about"') &&
      text.includes('to="/tags/tech"'),
  },
  {
    name: "post list renders excerpts and read affordance",
    path: "src/components/blog-layout.jsx",
    test: text =>
      text.includes("excerpt(pruneLength: 140)") &&
      text.includes("articleExcerpt") &&
      text.includes("Read article"),
  },
  {
    name: "article prose uses reading font while code remains monospace",
    path: "src/components/styles/post.module.css",
    test: text =>
      text.includes("var(--font-reading)") &&
      text.includes("overflow-x: auto") &&
      text.includes("var(--font-mono)"),
  },
  {
    name: "bio image is styled as an intentional portrait",
    path: "src/components/Bio/styles.jsx",
    test: text =>
      text.includes("box-shadow") &&
      text.includes("linear-gradient") &&
      text.includes("clamp("),
  },
]

const failures = checks.filter(check => !check.test(read(check.path)))

if (failures.length > 0) {
  console.error("Blog polish checks failed:")
  failures.forEach(failure => console.error(`- ${failure.name}`))
  process.exit(1)
}

console.log("Blog polish checks passed")
