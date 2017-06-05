var areaCodeMap = {
		"10":"北京",
		"20":"广州",
		"21":"上海",
		"22":"天津",
		"23":"重庆",
		"24":"沈阳",
		"25":"南京",
		"27":"武汉",
		"28":"眉山",
		"29":"西安",
		"310":"邯郸",
		"311":"石家庄",
		"312":"保定",
		"313":"张家口",
		"314":"承德",
		"315":"唐山",
		"316":"廊坊",
		"317":"沧州",
		"318":"衡水",
		"319":"邢台",
		"335":"秦皇岛",
		"349":"朔州",
		"350":"忻州",
		"351":"太原",
		"352":"大同",
		"353":"阳泉",
		"354":"晋中",
		"355":"长治",
		"356":"晋城",
		"357":"临汾",
		"358":"吕梁",
		"359":"运城",
		"370":"商丘",
		"371":"郑州",
		"372":"安阳",
		"373":"新乡",
		"374":"许昌",
		"375":"平顶山",
		"376":"信阳",
		"377":"南阳",
		"378":"开封",
		"379":"洛阳",
		"391":"焦作",
		"392":"鹤壁",
		"393":"濮阳",
		"394":"周口",
		"395":"漯河",
		"396":"驻马店",
		"398":"三门峡",
		"410":"铁岭",
		"411":"大连",
		"412":"鞍山",
		"413":"抚顺",
		"414":"本溪",
		"415":"丹东",
		"416":"锦州",
		"417":"营口",
		"418":"阜新",
		"419":"辽阳",
		"421":"朝阳",
		"427":"盘锦",
		"429":"葫芦岛",
		"431":"长春",
		"432":"吉林",
		"433":"延边",
		"434":"四平",
		"435":"通化",
		"436":"白城",
		"437":"辽源",
		"438":"松原",
		"439":"白山",
		"451":"哈尔滨",
		"452":"齐齐哈尔",
		"453":"牡丹江",
		"454":"佳木斯",
		"455":"绥化",
		"456":"黑河",
		"457":"大兴安岭",
		"458":"伊春",
		"459":"大庆",
		"464":"七台河",
		"467":"鸡西",
		"468":"鹤岗",
		"469":"双鸭山",
		"470":"呼伦贝尔",
		"471":"呼和浩特",
		"472":"包头",
		"473":"乌海",
		"474":"乌兰察布",
		"475":"通辽",
		"476":"赤峰",
		"477":"鄂尔多斯",
		"478":"巴彦淖尔",
		"479":"锡林郭勒盟",
		"482":"兴安盟",
		"483":"阿拉善盟",
		"510":"无锡",
		"511":"镇江",
		"512":"苏州",
		"513":"南通",
		"514":"扬州",
		"515":"盐城",
		"516":"徐州",
		"517":"淮安",
		"518":"连云港",
		"519":"常州",
		"523":"泰州",
		"527":"宿迁",
		"530":"菏泽",
		"531":"济南",
		"532":"青岛",
		"533":"淄博",
		"534":"德州",
		"535":"烟台",
		"536":"潍坊",
		"537":"济宁",
		"538":"泰安",
		"539":"临沂",
		"543":"滨州",
		"546":"东营",
		"550":"滁州",
		"551":"合肥",
		"552":"蚌埠",
		"553":"芜湖",
		"554":"淮南",
		"555":"马鞍山",
		"556":"安庆",
		"557":"宿州",
		"558":"阜阳",
		"559":"黄山",
		"561":"淮北",
		"562":"铜陵",
		"563":"宣城",
		"564":"六安",
		"565":"巢湖",
		"566":"池州",
		"570":"衢州",
		"571":"杭州",
		"572":"湖州",
		"573":"嘉兴",
		"574":"宁波",
		"575":"绍兴",
		"576":"台州",
		"577":"温州",
		"578":"丽水",
		"579":"金华",
		"580":"舟山",
		"591":"福州",
		"592":"厦门",
		"593":"宁德",
		"594":"莆田",
		"595":"泉州",
		"596":"漳州",
		"597":"龙岩",
		"598":"三明",
		"599":"南平",
		"631":"威海",
		"632":"枣庄",
		"633":"日照",
		"634":"莱芜",
		"635":"聊城",
		"660":"汕尾",
		"662":"阳江",
		"663":"揭阳",
		"668":"茂名",
		"691":"西双版纳",
		"692":"德宏",
		"701":"鹰潭",
		"710":"襄阳",
		"711":"鄂州",
		"712":"孝感",
		"713":"黄冈",
		"714":"黄石",
		"715":"咸宁",
		"716":"荆州",
		"717":"宜昌",
		"718":"恩施",
		"719":"十堰",
		"722":"随州",
		"724":"荆门",
		"728":"仙桃",
		"730":"岳阳",
		"731":"长沙",
		"734":"衡阳",
		"735":"郴州",
		"736":"常德",
		"737":"益阳",
		"738":"娄底",
		"739":"邵阳",
		"743":"吉首",
		"744":"张家界",
		"745":"怀化",
		"746":"永州",
		"750":"江门",
		"751":"韶关",
		"752":"惠州",
		"753":"梅州",
		"754":"汕头",
		"755":"深圳",
		"756":"珠海",
		"757":"佛山",
		"758":"肇庆",
		"759":"湛江",
		"760":"中山",
		"762":"河源",
		"763":"清远",
		"766":"云浮",
		"768":"潮州",
		"769":"东莞",
		"770":"防城港",
		"771":"南宁",
		"772":"柳州",
		"773":"桂林",
		"774":"梧州",
		"775":"玉林",
		"776":"百色",
		"777":"钦州",
		"778":"河池",
		"779":"北海",
		"790":"新余",
		"791":"南昌",
		"792":"九江",
		"793":"上饶",
		"794":"抚州",
		"795":"宜春",
		"796":"吉安",
		"797":"赣州",
		"798":"景德镇",
		"799":"萍乡",
		"812":"攀枝花",
		"813":"自贡",
		"816":"绵阳",
		"817":"南充",
		"818":"达州",
		"825":"遂宁",
		"826":"广安",
		"827":"巴中",
		"830":"泸州",
		"831":"宜宾",
		"832":"内江",
		"833":"乐山",
		"834":"西昌",
		"835":"雅安",
		"836":"甘孜",
		"837":"阿坝",
		"838":"德阳",
		"839":"广元",
		"851":"贵阳",
		"852":"遵义",
		"853":"安顺",
		"854":"黔南",
		"855":"黔东南",
		"856":"铜仁",
		"857":"毕节",
		"858":"六盘水",
		"859":"黔西南",
		"870":"昭通",
		"871":"昆明",
		"872":"大理",
		"873":"红河",
		"874":"曲靖",
		"875":"保山",
		"876":"文山",
		"877":"玉溪",
		"878":"楚雄",
		"879":"普洱",
		"883":"临沧",
		"886":"怒江",
		"887":"迪庆",
		"888":"丽江",
		"891":"拉萨",
		"892":"日喀则",
		"893":"山南",
		"894":"林芝",
		"895":"昌都",
		"896":"那曲",
		"897":"阿里",
		"898":"海口",
		"899":"三亚",
		"901":"塔城",
		"902":"哈密",
		"903":"和田",
		"906":"阿勒泰",
		"908":"克州",
		"909":"博乐",
		"910":"咸阳",
		"911":"延安",
		"912":"榆林",
		"913":"渭南",
		"914":"商洛",
		"915":"安康",
		"916":"汉中",
		"917":"宝鸡",
		"919":"铜川",
		"930":"临夏",
		"931":"兰州",
		"932":"定西",
		"933":"平凉",
		"934":"庆阳",
		"935":"武威",
		"936":"张掖",
		"937":"嘉峪关",
		"938":"天水",
		"939":"陇南",
		"941":"甘南",
		"943":"白银",
		"951":"银川",
		"952":"石嘴山",
		"953":"吴忠",
		"954":"固原",
		"955":"中卫",
		"970":"海北",
		"971":"西宁",
		"972":"海东",
		"973":"黄南",
		"974":"共和",
		"975":"果洛",
		"976":"玉树",
		"977":"德令哈",
		"979":"格尔木",
		"990":"克拉玛依",
		"991":"乌鲁木齐",
		"992":"奎屯",
		"993":"石河子",
		"994":"昌吉",
		"995":"吐鲁番",
		"996":"库尔勒",
		"997":"阿克苏",
		"998":"喀什",
		"999":"伊犁"};
function showAreaName(areaCode){
	return areaCodeMap[areaCode];
}
// 路径
var ipconfigure = "${pageContext.request.contextPath}/";

// 比率
var bilv = 100;

// 日期转换
Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1, // month
		"d+" : this.getDate(), // day
		"h+" : this.getHours(), // hour
		"m+" : this.getMinutes(), // minute
		"s+" : this.getSeconds(), // second
		"q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
		"S" : this.getMilliseconds()
	// millisecond
	}
	if (/(y+)/.test(format))
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(format))
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
					: ("00" + o[k]).substr(("" + o[k]).length));
	return format;
}

/**
 * 调用此方法必须引入layer.js<br>
 * direction<br>
 * 1上<br>
 * 2右(默认)<br>
 * 3下<br>
 * 4左<br>
 */
function showLayerTips(id, msg, direction, time) {
	direction = !direction ? 2 : direction;
	layer.tips(msg, '#' + id, {
		tips : [ direction, '#008be7' ],
		time : time ? time : 2000
	});
}

function layerAlert(msg, icon, title) {
	icon = (icon == 1 || icon == 0) ? icon : 1;
	layer.alert(msg, {
		icon : icon,
		title : title ? title : '提示'
	});
}

/**
 * 停止事件的传播
 * 
 * @param e
 *            事件对象
 */
function stopPropagation(e) {
	if (e) {
		if (e.stopPropagation) {
			// this code is for Mozilla and Opera
			e.stopPropagation();
		} else if (window.event) {
			// this code is for IE
			window.event.cancelBubble = true;
		}
	}
}

function iCheck(selector) {
	$(selector).iCheck({
		checkboxClass : 'icheckbox_minimal-blue',
		radioClass : 'iradio_minimal-blue',
		increaseArea : '20%'
	});
}

function chosen(selector, placeholderText) {
	$(selector).chosen({
		no_results_text : "未找到",
		placeholder_text : placeholderText ? placeholderText : null,
		search_contains : true,
		disable_search_threshold : 10,
	});
}

function handlefuhao(s) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

$.ajaxSetup({
	contentType : "application/x-www-form-urlencoded;charset=utf-8",
	complete : function(XMLHttpRequest, textStatus) {
		var sessionstatus = XMLHttpRequest.getResponseHeader("sessionstatus"); // 通过XMLHttpRequest取得响应头，sessionstatus，
		if (sessionstatus == "timeout") {
			// 如果超时就处理 ，指定要跳转的页面
			window.parent.location.replace("login.jsp");
		}
	}
}); 
