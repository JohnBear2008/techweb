var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;
module.exports = function(sender) {
    yjBizService.get({
        params : ["HMI","HMISetGet"],
        query : sender.req.query,
        success : function(data){
        	console.log("get 1111111");
            sender.success(data);
        },
        error : sender.error
    });
}
