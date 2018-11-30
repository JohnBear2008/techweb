module.exports = function(sender) {
        var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
        var yjDB = global.yjRequire("yujiang.Foil").yjDB;       
        var UserAID=sender.req.query.UserAID;
        var sql="SELECT users.VidDate FROM users WHERE UserAID=?";
//        console.log(UserAID);

        yjDBService.exec({
            sql : sql,
            parameters : [UserAID],
            rowsAsArray : true,
            success : function(r) {             
                sender.success(r);
            },
            error : sender.error
        });
    }  
    
