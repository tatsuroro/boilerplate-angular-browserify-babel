'use strict';

const config = {
  names: {
    app: 'app',
    contents: 'app.contents',
    components: 'app.components',
    general: 'app'
  },
  api: {
    facebook: '/api/facebook',
    twitter : '/api/twitter',
    general : '/api/general',
    webfront: '/api',
  },
  media: [
    {id: 'facebook', icon: 'icon ion-social-facebook'},
    {id: 'twitter',  icon: 'icon ion-social-twitter'}
  ],
  menus: {
    facebook: [
      {id: 'stats',    name: '分析レポート',    state: 'media.stats', params: {media: 'facebook'}, icon: 'fa fa-bar-chart'},
      {id: 'stats-retrieve',  parent: 'stats' , name: 'レポート再取得', state: 'media.stats.retrieve', params: {media: 'facebook'}}
    ],
    twitter: [
      {id: 'stats',  name: '分析レポート',   state: 'media.stats', params: {media: 'twitter'}, icon: 'fa fa-bar-chart'},
      {id: 'stats-retrieve', parent: 'stats' , name: 'レポート再取得', state: 'media.stats.retrieve', params: {media: 'twitter'}},
    ]
  }
};


module.exports = config;
