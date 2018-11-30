module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var UserOID=sender.req.query.UserOID;
    var VidDate=sender.req.query.VidDate;
 
//console.log(sender.req.query);
//console.log(Account+AName+Contact+Address+AInfo);

 sql="UPDATE users SET VidDate=? WHERE UserOID=?";
    
    yjDBService.exec({
        sql : sql,
        parameters : [VidDate,UserOID],
        success : sender.success,	     
        error : sender.error
   })
    
    

    
}