module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;

    var UserOID=sender.req.query.UserOID;
    
    
    
  sql1="delete from usersauthority where UserOID=?";
    
    yjDBService.exec({
        sql : sql1,
        parameters : [UserOID],
    
        success :function(){},
        error : sender.error
   })
    

    
    sql2="delete from users where UserOID=?";
    
    yjDBService.exec({
        sql : sql2,
        parameters : [UserOID],
        success : sender.success,	    
//        success :function(){      	
//        },
        error : sender.error
   })
    
    
    
    
    
    
////插入users-----------------
//    var sql="INSERT INTO users (UserAID,Password,Name,OrgOID,UserFID,VidDate) VALUES (?,?,?,?,?,?)";
//    
//    yjDBService.exec({
//        sql : sql,
//        parameters : [UserAID,PWenc,FName,UserType,FInfo,VidDate],
//        rowsAsArray : true,
////        success : function(result) {
//////            var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
////            sender.success();
////        	console.log(result)
////        	
////        },
//        success :sender.success,
//        error : sender.error
//    });
    
    
}