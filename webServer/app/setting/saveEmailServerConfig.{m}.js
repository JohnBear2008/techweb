var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;
var path=require("path");
module.exports = function(sender) {
    yjBizService.get({
        params : ["setting","saveEmailServerConfig"],
        query : sender.req.query,
        success : function(data){
            sender.success(data);
        },
        error : sender.error
    });
}
