export const data = JSON.parse("{\"key\":\"v-5c08a3f7\",\"path\":\"/guide/bundler/webpack.html\",\"title\":\"webpack\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"webpack\",\"description\":\"描述\"},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"VuePress\",\"slug\":\"vuepress\",\"children\":[{\"level\":3,\"title\":\"vuePress one\",\"slug\":\"vuepress-one\",\"children\":[]}]},{\"level\":2,\"title\":\"百度\",\"slug\":\"百度\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/bundler/webpack.md\"}")

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
