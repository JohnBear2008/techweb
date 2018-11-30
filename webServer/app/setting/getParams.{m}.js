module.exports = function(sender) {
    var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
    yjBizService.get({
        params : ["setting","bizGetParams"],
        query : sender.req.query,
        success : sender.success,
        error : sender.error
    });
}