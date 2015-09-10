'use strict';

const moduleName = 'tableSort';

class Controller {
  /*@ngInject*/
  constructor() {
    this.menus = this.getMenuState();

    this.order = {};

    this.sort = {
      // place : sortItems.place['account_id'],
      // isDesc: sortItems.isDesc[1],
    };

    // scope.orderBy = function (place) {
    //   scope.order = getOrder(place);

    //   // $compileすると全てstringになるのでintであるべき物はintに置換
    //   _.each(target, function(val){
    //     val[place] = (Number.isNaN(parseInt(val[place]))) ? val[place]:parseInt(val[place]);
    //   });
    // };

    // // ソートの選定
    // var getOrder = function(place){
    //   // 現在のscope.sort.placeとクリックしたplaceが同じ場合のみtoggle処理
    //   var str = (scope.sort[].isDesc && scope.sort[].place==place) ? '-' : '';
    //   scope.sort[].isDesc = (scope.sort[].isDesc && scope.sort[].place == place) ? true : false;
    //   scope.sort[].place  = place;

    //   return str + scope.sort[].place;
    // };

    // // activeクラスの付与
    // scope.activeClass = function(, place){
    //   if(scope.sort[].place  === place){
    //     return (!scope.sort[].isDesc) ? {'sort-asc' : true} : {'sort-desc': true};
    //   }
    // };
  }
}


const modules = require('../../utils/modules');

module.exports = modules.get(moduleName, config.names.general)
  .directive(moduleName, modules.getDdo(moduleName, Controller, true));
