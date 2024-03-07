import { App } from "vue";
import setupTailWindCss from "./tailwindcss";
import envs from "../../vite/utils";
import componentAutoLoad from "./componentAutoLoad";

export default function setupPlugins(app:App) {
    setupTailWindCss()
    envs(import.meta.env);
    componentAutoLoad(app);
}

