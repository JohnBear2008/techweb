module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var yjSecurity = global.yjRequire("yujiang.Foil").yjSecurity;
    var UID=sender.req.query.UID;
    var PW=sender.req.query.PW;    
    var PWenc = yjSecurity["Diffie-Hellman"].sign(PW);
    var sql=" update Users set Password=? where UserAID=?"; 
    yjDBService.exec({
        sql : sql,
        parameters : [PWenc,UID],
        success :sender.success,
        error : sender.error
    });
    
    
}