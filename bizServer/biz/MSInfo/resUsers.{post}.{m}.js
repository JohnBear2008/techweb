module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var yjSecurity = global.yjRequire("yujiang.Foil").yjSecurity;
    var UserOID=sender.req.query.UserOID;

    console.log('get'+UserOID);

    var PWenc = yjSecurity["Diffie-Hellman"].sign("123456");
    

    sql="update users set password=? where UserOID =?";
    
    yjDBService.exec({
        sql : sql,
        parameters : [PWenc,UserOID],
        success : sender.success,	    
//        success :function(){

//        },
        error : sender.error
   })

}