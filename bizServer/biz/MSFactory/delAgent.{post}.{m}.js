module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var ID=sender.req.query.ID;
    
    
    
  sql="delete from msagent where ID=?";
    
    yjDBService.exec({
        sql : sql,
        parameters : [ID],
        success : sender.success,	
        error : sender.error
   })
    
    
    
}