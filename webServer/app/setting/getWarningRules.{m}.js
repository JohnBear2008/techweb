var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;
var yjMultiLang = global.yjRequire("yujiang.Foil").yjMultiLang;
module.exports = function(sender) {
	var LCID = yjMultiLang.getCurrentLCID(); 
    sender.req.query.LCID=LCID;
    yjBizService.get({
        params : ["setting","getWarningRules"],
        query : sender.req.query,
        success : function(data){
            sender.success(data);
        },
        error : sender.error
    });
}
