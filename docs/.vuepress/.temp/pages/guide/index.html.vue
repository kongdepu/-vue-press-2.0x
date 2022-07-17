<template><div><h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1>
<p>VuePress 由两部分组成：第一部分是一个极简静态网站生成器 (opens new window)，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。</p>
<h2 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> VuePress</h2>
<p><a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">百度<ExternalLinkIcon/></a></p>
<h3 id="vuepress-one-百度" tabindex="-1"><a class="header-anchor" href="#vuepress-one-百度" aria-hidden="true">#</a> vuePress one <a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">百度<ExternalLinkIcon/></a></h3>
<p>每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。</p>
<h4 id="vuepress-one-two" tabindex="-1"><a class="header-anchor" href="#vuepress-one-two" aria-hidden="true">#</a> vuePress one two</h4>
<h2 id="它是如何工作的" tabindex="-1"><a class="header-anchor" href="#它是如何工作的" aria-hidden="true">#</a> 它是如何工作的?</h2>
<p>事实上，一个 VuePress 网站是一个由 Vue (opens new window)、Vue Router (opens new window)和 webpack (opens new window)驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。</p>
<p>在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。这种做法的灵感来源于 Nuxt (opens new window)的 nuxt generate 命令，以及其他的一些项目，比如 Gatsby</p>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> FEATURES</h2>
<p><strong>内置的 Markdown 拓展</strong></p>
<ul>
<li>我</li>
<li>爱</li>
<li>java
+. 我
+. 爱
我真的好爱java</li>
</ul>
<h2 id="pwa不能用" tabindex="-1"><a class="header-anchor" href="#pwa不能用" aria-hidden="true">#</a> pwa不能用</h2>
<p>我好烦</p>
<h2 id="谷歌分析不能用" tabindex="-1"><a class="header-anchor" href="#谷歌分析不能用" aria-hidden="true">#</a> 谷歌分析不能用</h2>
<p>我好烦</p>
</div></template>
