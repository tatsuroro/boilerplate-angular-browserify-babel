'use strict';

module.exports = {
  targetComponents: {
    facebook: [
      {id: 'adaccounts', name: 'アカウント'},
      {id: 'adcampaigns', name: 'キャンペーン'},
      {id: 'adsets', name: 'アドセット'},
      {id: 'ads', name: '広告'},
    ],
    twitter: [
      {id: 'funding-instrument', name: 'アカウント(I/O)'},
      {id: 'campaign', name: 'キャンペーン'},
      {id: 'ad-group', name: '広告グループ'},
      {id: 'Keywords', name: 'キーワード'},
      {id: 'Follower', name: 'フォロワー'},
      {id: 'promoted-tweet', name: 'ツイート'}
    ]
  },
  formats: [
    {id: 'summary', name: '期間サマリレポート'},
    {id: 'daily', name: '日別レポート'}
  ],
  paginatedTable: {
    limit: 50,
    offset: 0,
    maxSize: 10,
    currentPage: 1,
    columnNames: {
      account: 'アカウント',
      campaign: 'キャンペーン',
      click: 'クリック',
      cv: 'CV数'
    }
  },
  spendMargin: {
    def: 30
  },
  retrieve: {
    header: {
      tabs: [
      {id: 'retrieve', name: '再取得', state: 'media.stats.retrieve', active: false},
      {id: 'retrieve_history', name: '履歴', state: 'media.stats.retrieve.history', active: false},
      ],
    }
  }
};
