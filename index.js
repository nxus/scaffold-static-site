/* 
* @Author: Mike Reich
* @Date:   2015-11-15 20:00:53
* @Last Modified 2015-11-15 @Last Modified time: 2015-11-15 20:00:53
*/

'use strict';

var Scaffold = require('./lib/StaticSiteScaffold')

module.exports = function(app, loaded) {
  new Scaffold(app, loaded)
}