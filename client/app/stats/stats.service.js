'use strict';


class statsService {
  /*@ngInject*/
  constructor (Restangular, clientService) {
    this.Restangular = Restangular;
    this.clientService = clientService;

    this.params;
    this.outputType;
  }

  getStats(params, isCsv = false) {
    this.outputType = (isCsv) ? '/csv' : '';
    this.params = params;

    if (this.clientService.media.selected === 'facebook') return this._getStatsFacebook();

    return this._getStatsTwitter();
  }

  _getStatsFacebook() {
    var restAngular = this.Restangular
      .one(config.api.facebook + '/stats/report/', this.params.component)
      .all(this.outputType);

    return restAngular.customGET(null, this.params)
      .then((res) => {
        if (!res) return false;

        return res.s3;
      });
  }

  _getStatsTwitter() {
    var restAngular = this.Restangular
      .one(config.api.twitter + '/report/campaign_download/', this.params.adAccountId);

    return restAngular.customGET(null, this.params)
      .then((res) => {
        return res;
      });
  }

  postRetrieve(formdata) {
	var api_host = config.api[this.clientService.media.selected];

    var restAngular = this.Restangular
      .all(api_host + '/retrieve/')
      .withHttpConfig({ cache: false });
    return restAngular.customPOST(formdata)
      .then((res) => {
        console.log(res);
        return res;
      }, (error) => {
        console.log(error);
        return false;
      });
  }

  getRetrieveHistory() {
	var api_host = config.api[this.clientService.media.selected];

    var restAngular =
		this.Restangular
		.all(api_host + '/retrieve/history')
		.withHttpConfig({ cache: false });

    return restAngular.customGET(null)
      .then((res) => {
        console.log(res);
        return res;
      }, (error) => {
        console.log(error);
        return false;
      });
  }
}


module.exports = statsService;
