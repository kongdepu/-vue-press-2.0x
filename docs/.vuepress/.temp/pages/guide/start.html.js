export const data = JSON.parse("{\"key\":\"v-621628ba\",\"path\":\"/guide/start.html\",\"title\":\"快速上手\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"快速上手\",\"description\":\"描述\"},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"VuePress\",\"slug\":\"vuepress\",\"children\":[{\"level\":3,\"title\":\"vuePress one\",\"slug\":\"vuepress-one\",\"children\":[]}]},{\"level\":2,\"title\":\"百度\",\"slug\":\"百度\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/start.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
