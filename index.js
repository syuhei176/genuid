/*
 * genuid
 * 2014/5/6
 * Syuhei Hiya
 */

function genid(cb) {
	var time = new Date().getTime();
	if(this.prev == time) {
		setTimeout(function () {
			genid(cb);
		}, 1);
	}else{
		this.prev = time;
		cb(null, time.toString(36));
	}
}

if ('undefined' == typeof module) {
	window.genuid = {
		genid : genid,
		prev : null
	}
} else {
	module.exports = {
		genid : genid
	}
}

