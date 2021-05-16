window.axios = require("axios");
window.fuse = require("fuse.js");
window.Vue = require("vue");

import Search from "./components/Search.vue";
import Banner from "./components/Banner.vue";
import LogoEditor from "./components/LogoEditor.vue";
import HtmlDownloader from "./components/HtmlDownloader.vue";
import Quote from "./components/Quote/Quote.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import Copy from "./components/Copy.vue";
import hljs from "highlight.js/lib/core";
import VueAgile from "vue-agile";

/**
 * Vue Agile (Carousel)
 * @see https://github.com/lukaszflorczak/vue-agile
 */
Vue.use(VueAgile);

// Syntax highlighting
hljs.registerLanguage("bash", require("highlight.js/lib/languages/bash"));
hljs.registerLanguage("ruby", require("highlight.js/lib/languages/ruby"));
hljs.registerLanguage("css", require("highlight.js/lib/languages/css"));
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"));
hljs.registerLanguage(
    "javascript",
    require("highlight.js/lib/languages/javascript")
);
hljs.registerLanguage("json", require("highlight.js/lib/languages/json"));
hljs.registerLanguage(
    "markdown",
    require("highlight.js/lib/languages/markdown")
);
hljs.registerLanguage("php", require("highlight.js/lib/languages/php"));
hljs.registerLanguage("scss", require("highlight.js/lib/languages/scss"));
hljs.registerLanguage("yaml", require("highlight.js/lib/languages/yaml"));

document.querySelectorAll("pre code").forEach(block => {
    hljs.highlightBlock(block);
});

Vue.config.productionTip = false;

new Vue({
    components: {
        Search,
        Banner,
        ThemeSwitcher,
        Quote,
        Copy,
        HtmlDownloader,
        LogoEditor
    }
}).$mount("#app");
