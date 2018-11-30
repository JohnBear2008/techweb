module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var UserAID=sender.req.query.UserAID;
    
    
    
  sql="delete from users where UserAID=?";
    
    yjDBService.exec({
        sql : sql,
        parameters : [UserAID],
        success : sender.success,	
        error : sender.error
   })
    
    
    
}