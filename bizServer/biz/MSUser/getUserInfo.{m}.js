module.exports = function(sender) {
        var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
        var yjDB = global.yjRequire("yujiang.Foil").yjDB;

        var UID=sender.req.query.UID;

        var sql="SELECT users.UserAID,users.Name,users.AAID,users.OrgOID,users.UserFID,users.Description,DATE_FORMAT(VidDate,'%Y-%m-%d') As VidDate FROM users WHERE UserAID=?";
 
        yjDBService.exec({
            sql : sql,
            parameters : [UID],
            rowsAsArray : true,
            success : function(result) {
            	var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
                sender.success(data);
            },
            error : sender.error
        });
    }  
    
