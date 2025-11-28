
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 969, hash: '789dd4f55ba0714ffa52ae9ba806d634ad264810a47d60feb8e737001627af9e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1303, hash: '6b275c5e2394c77f6ab98cbb88a1b7bf56fd5c8424de2aaa66792986eadc751b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 23863, hash: '321d8f077c07c8e8b06c2685804960a0c9a4a752067efcbb09a7987752e59e93', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-VGS5QSEC.css': {size: 54, hash: 'v309HNzts8Y', text: () => import('./assets-chunks/styles-VGS5QSEC_css.mjs').then(m => m.default)}
  },
};
