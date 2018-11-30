module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var sql="select * from hmiset where id=(select MAX(id) from hmiset )";
    yjDBService.exec({
        sql : sql,
        parameters : [],
        rowsAsArray : true,
        success : function(result) {
            var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
            console.log("get 222222222");

            sender.success(data);
        },
        error : sender.error
    });
}