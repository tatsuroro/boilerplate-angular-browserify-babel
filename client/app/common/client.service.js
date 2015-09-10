'use strict';

class clientService {
  /*@ngInject*/
  constructor (Restangular, commonService) {
    console.log('clientService init');

    this.Restangular = Restangular;
    this.commonService = commonService;

    this.rest = {
      cdms : Restangular.all(config.api.general + '/cdms')
    };

    this.media = {
      selected : config.media[0].id,
      selection: _.cloneDeep(config.media)
    };

    // selected Client
    this.client = {};

    // accounts
    this.accounts = {
      selected : [],
      selection: {}
    };

    // temporary WebSocket;
    this.socket = null;
  }

  getRest(media = null) {
    var target = (media) ? media : this.media.selected;
    return this.rest[target];
  }

  clearClient() {
    this.client = {};
  }

  clearAccounts() {
    this.accounts.selected = [];
  }

  clearAccountsSelection() {
    this.accounts.selection = _.transform(this.media.selection, (res, val) => {
      res[val.id] = [];
    });
  }

  getClients() {
    return this.rest.cdms.all('/clients').customGET();
  }

  getMediaAccounts(params) {
    return this.rest.cdms.all('/media_account').customGET(null, params)
      .then((res) => {
        this.accounts.selection = (_.isEmpty(res.data)) ? this.clearAccountsSelection() : this._setAccountsSelection(res.data);
      });
  }

  _setAccountsSelection(req) {
    return _.transform(req, (selection, val, key) => {
      selection[key] = _.map(val[0].clients[0].media_accounts, this._changeAccountsKey);
    });
  }

  _changeAccountsKey(val) {
    return {id: val.mediaAccountId, name: val.mediaAccountName};
  }

  /**
   * temporary: twitter WebSocket Methods
   */
  initWebSocket(location) {
    this.Restangular.all(config.api.twitter + '/')
      .customGET('')
      .then((res) =>{
        if (res) console.log('success: get TAM TopPage');
      })
      .then(() => {

        // 本番 / 開発でWebSocket プロトコルを切りかえる (WebSocket消すかもなので暫定対応)
        var wsProtocol = (location.protocol() === 'https') ? 'wss://' : 'ws://';

        if (!this.socket) this.socket = new WebSocket(wsProtocol + location.host() + config.api.twitter + '/notification/socket');

        this.socket.onopen = () => {
          console.debug('webSocket opend');
          this.socket.send('open test message'); //send empty message
        };
        this.socket.onmessage = (e) => {
          console.log(e);

          var json = JSON.parse(e.data);
          console.debug(json);

          if (json.data && json.type) {
            this.commonService.notify(json.data.type, json.data.message);
          }
        };
        this.socket.onclose = () => {
          console.debug('webSocket closed');
        };
        this.socket.onerror = (error) => {
          console.log(error);
        };
      });
    }

  closeSocket() {
    this.socket.close();
    this.socket = null;
  }

}


module.exports = clientService;
