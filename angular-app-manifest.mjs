
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 641, hash: '315e3945293b9217226faa87cea3147f7451c571ab867721a4a44426a3916780', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1004, hash: 'c2cd116f5aa110eb2614173570938cec10a80131df3a4cd09e07609834da3bb3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-SPLAIKQF.css', {size: 25, hash: 'aSEC1cd1US4', text: () => import('./assets-chunks/styles-SPLAIKQF_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
