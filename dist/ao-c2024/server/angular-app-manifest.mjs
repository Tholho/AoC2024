
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 641, hash: 'bdb5045fbb4a2d46b72756a8094665cd052d7654b05fd5f31748d1994f1a769e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1004, hash: '861a1933aaaacfdfe44c335c72bc3bf71543d07b9b6e206d027ebee9fba93f9d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-SPLAIKQF.css', {size: 25, hash: 'aSEC1cd1US4', text: () => import('./assets-chunks/styles-SPLAIKQF_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
