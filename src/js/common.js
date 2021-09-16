
const common = window.common || {};
const queryString = require('querystring');

/**
 * 获取url name参数值
 */
function getUrlParam(name) {
	let rets;
	if (name) {
		const reg = new RegExp(`(?:^|\\?|\\&)${name}=([^&]*)(?:\\&|$)`, 'i');
		rets = window.location.search.match(reg);
	}
	return rets && rets[1] ? decodeURIComponent(rets[1]) : null;
}

Object.assign(common, {
	getUrlParam,
	
	errorMsg: '亲，系统繁忙，请稍后再试！',

});

window.queryString = queryString;

window.common = common;
export default common;