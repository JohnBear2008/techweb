var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
var yjDB = global.yjRequire("yujiang.Foil").yjDB;
module.exports = function(sender) {
    var data = sender.req.query;
    var ParamOID = parseInt(data.ParamOID);
    var sql = "UPDATE EEIDeviceParams set Value=? where ParamOID= ?";
    yjDBService.exec({
        sql: sql,
        parameters: [data.Value, ParamOID],
        success: function(results) {
            sender.success(results);
        },
        error: sender.error
    });
}