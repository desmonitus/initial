exports.get = function(req,res){
    // res.render(page, param);
    res.end('api Run!!');
};
exports.post = function(req,res) {
    var object = {};
    object.message = '';
    object.status = false;
    res.json(object);
    return;
};
exports.put = function(req,res){
    var object = {};
    object.message = '';
    object.success = false;
    res.json(object);
    return;
};
exports.patch = function(req,res){
    var object = {};
    object.message = '';
    object.success = false;
    res.json(object);
    return;
};
exports.delete = function(req,res){
    var object = {};
    object.message = '';
    object.success = false;
    res.json(object);
    return;
};