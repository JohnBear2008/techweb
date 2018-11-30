var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;
var g_realTimeGreenPushing =false;
var path=require("path");
module.exports = function(sender) {
    yjBizService.post({
        params : ["HMI","HMISetAdd"],
        query : sender.req.body,
        success : function(data){
        
            sender.success(data);
        },
        error : sender.error
    });
}
