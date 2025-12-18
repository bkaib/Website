import { QuartzTransformerPlugin } from "../types"

interface Options {
  openInNewTab: boolean
  addIcon: boolean
  internalHosts?: string[]
}

export const ExternalLinks = (opts: Options): QuartzTransformerPlugin => {
  return {
    name: "ExternalLinks",
    transform: async (ctx, content) => {
      const internalHosts = new Set(opts.internalHosts ?? [])
      const dom = content.dom
      dom.querySelectorAll("a[href]").forEach((a) => {
        try {
          const url = new URL(a.getAttribute("href")!, ctx.cfg.configuration.baseUrl)
          const isExternal =
            url.protocol.startsWith("http") && !internalHosts.has(url.hostname)
          if (isExternal) {
            if (opts.openInNewTab) {
              a.setAttribute("target", "_blank")
              a.setAttribute("rel", "noopener noreferrer")
            }
            if (opts.addIcon) {
              a.innerHTML += " 🔗"
            }
          }
        } catch {
          // ignore invalid URLs
        }
      })
      return content
    },
  }
}