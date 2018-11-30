module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var FID=sender.req.query.FID;

    
    var sql="SELECT * FROM msagent WHERE FID=?";
    yjDBService.exec({
        sql : sql,
        parameters : [FID],
        rowsAsArray : true,
        success : function(result) {
            var data=yjDB.dataSet2ObjectList(result.meta,result.rows);

            sender.success(data);
        },
        error : sender.error
    });
}