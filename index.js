/*
 * genuid
 * 2014/5/6
 * Syuhei Hiya
 */
(function(){
function genid(cb) {
	var time = new Date().getTime();
	if(this.prev == time) {
		setTimeout(function () {
			genid(cb);
		}, 1);
	}else{
		this.prev = time;
		cb(null, tohash(time));
	}
}

var shuffle_table = 'ybfghijam6cpqdrw71nx34eo5suz0t9vkl28';
function tohash(uid) {
		var h = '';
		var t = uid;
		while(t > 0) {
			h += shuffle_table[t % 36];
			t = t/36;
			t = Math.floor(t);
		}
		return h;
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

}())