module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var Account=sender.req.query.Account;
    
    
    
  sql="delete from usersauthority where Account=?";
    
    yjDBService.exec({
        sql : sql,
        parameters : [Account],
        success : sender.success,	
        error : sender.error
   })
    
    
    
}