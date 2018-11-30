module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var sql=" SELECT Name,Count(1) AS CNT FROM users WHERE OrgOID<>0 AND DATEDIFF(VidDate,NOW())<=30 GROUP BY UserFID ";

    
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