/* 
* @Author: Mike Reich
* @Date:   2015-11-15 19:59:53
* @Last Modified 2015-12-08
*/

'use strict';

class StaticSiteScaffold {

  constructor (app, loaded) {
    this._options = {
      name: 'static-site',
      description: 'A scaffold for static sites.'
    }

    this._dir = __dirname+"/../dist"

    app.get('scaffold').send('scaffolds').with("static-site", this._options, this._dir)
  }

}

export default StaticSiteScaffold
