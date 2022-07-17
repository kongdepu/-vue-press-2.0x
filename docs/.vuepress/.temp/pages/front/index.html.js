export const data = JSON.parse("{\"key\":\"v-7e25fb5f\",\"path\":\"/front/\",\"title\":\"前端\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"前端\",\"description\":\"前端描述\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"front/README.md\"}")

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
