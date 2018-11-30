var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
module.exports = function(sender){
    var emailAddr=sender.req.query.emailAddr;
    var sql='delete from Sendmail where  ReciverAddr=?';
    yjDBService.exec({
        sql:sql,
        parameters:[emailAddr],
        success:sender.success,
        error:sender.error
    });
}
