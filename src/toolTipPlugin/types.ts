import { HideAll, Props } from "tippy.js"
import type ToolTip from "./ToolTip.vue"

export type PluginOptions = Partial<Props>

export * from "./index.ts"

declare module "vue" {
    interface ComponentCustomProperties {
        $hideAllTooltips: HideAll
    }
    interface GlobalComponents {
        ToolTip: typeof ToolTip
    }
}