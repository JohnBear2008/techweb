module.exports = function(sender) {
    var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
    yjBizService.get({
        params : ["setting","getPhases-zp"],
        query : sender.req.query,
        success : sender.success,
        error : sender.error
    });
}