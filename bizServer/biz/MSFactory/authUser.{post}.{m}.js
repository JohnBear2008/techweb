module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var UserOID=sender.req.query.UserOID;
    var Account=sender.req.query.Account;

    sql1="INSERT INTO usersauthority (UserOID,Account,ProcessOID,ActionOID,Value) VALUES (?,?,190,0,1),(?,?,230,0,1)";
    
    yjDBService.exec({
        sql : sql1,
        parameters : [UserOID,Account,UserOID,Account],
        success :function(r){

       	sender.success(r);
//       	sender.success("授权成功");
       },
        error : sender.error
   })



}