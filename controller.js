var apiRoute = require('./routes/api')
var lineRoute = require('./routes/line')
module.exports = function main(app){
    let apiPath = '/api';
    app.get(apiPath,apiRoute.get);
    app.put(apiPath,apiRoute.put);
    app.post(apiPath,apiRoute.post);
    app.patch(apiPath,apiRoute.patch);
    app.delete(apiPath,apiRoute.delete);

    let linePath = '/line';
    app.post(linePath, lineRoute.post);
}