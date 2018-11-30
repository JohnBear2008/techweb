module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var sql = "select * from Sendmail em  where  em.ReciverAddr!=''";

    yjDBService.exec({
        sql : sql,
        parameters : [],
        rowsAsArray : true,
        success : function(result) {
            var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
            sender.success(data);
        },
        error : sender.error
    });
}
                  