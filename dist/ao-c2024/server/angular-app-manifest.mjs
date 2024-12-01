
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 687, hash: 'a427b74461d5e347e7a5abcd4c3eb254944ed49a524327dc749a1427e33711e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1050, hash: '7a074dad72913165cb7e5e190d520ee1ddcfd5b5a334c13bbdbd68efb7c49f4e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-SPLAIKQF.css', {size: 25, hash: 'aSEC1cd1US4', text: () => import('./assets-chunks/styles-SPLAIKQF_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
