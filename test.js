var crypto = require("crypto");
var genuid = require("./index");

genuid.genid(function(err, uid) {
	var sha1 = crypto.createHash('sha1');
	sha1.update(uid);
	var hash = sha1.digest('base64');
	console.log(hash);
});


