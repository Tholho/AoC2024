
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 673, hash: 'ff70a2f18a4d6bc8abb51eb7e1f3d3668eceddbfaa82a88984b3a5b15453b1e0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1036, hash: '77e7186019bdfd5c9d623ee0911e925e7eada7c1f17dd609d6b9713b42a1f64a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-SPLAIKQF.css', {size: 25, hash: 'aSEC1cd1US4', text: () => import('./assets-chunks/styles-SPLAIKQF_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
