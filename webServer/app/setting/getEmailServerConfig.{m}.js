var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;

module.exports = function(sender) {
    yjBizService.get({
        params : ["setting","getEmailServerConfig"],
        query : sender.req.query,
        success : function(data){
            sender.success(data);
        },
        error : sender.error
    });
}
