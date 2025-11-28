
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Assignment/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Assignment/home",
    "route": "/Assignment"
  },
  {
    "renderMode": 2,
    "route": "/Assignment/home"
  },
  {
    "renderMode": 2,
    "route": "/Assignment/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 980, hash: '7f629b7217a0a14d8e2a0e40924b835216fc5246e1d8576c9bf63006c3e327b1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1314, hash: '35a86676df2e2902aadff8444552800ac35d6a3e5ba7e34f1dae2f8834b0d094', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 23874, hash: 'b1afb524b2b0c637ef02a8035ccd86722abb30e613f72a4839d51c6bf4e270a4', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-VGS5QSEC.css': {size: 54, hash: 'v309HNzts8Y', text: () => import('./assets-chunks/styles-VGS5QSEC_css.mjs').then(m => m.default)}
  },
};
