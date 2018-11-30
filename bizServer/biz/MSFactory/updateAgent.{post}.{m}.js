module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var Account=sender.req.query.Account;
    var AName=sender.req.query.AName;
    var Contact=sender.req.query.Contact;
    var Address=sender.req.query.Address;
    var AInfo=sender.req.query.AInfo;
    var OpenUser=sender.req.query.OpenUser;
    
//console.log(sender.req.query);
//console.log(Account+AName+Contact+Address+AInfo);

 sql="UPDATE msagent SET AName=?,Contact=?,Address=?,AInfo=?,OpenUser=? WHERE Account=?";
    
    yjDBService.exec({
        sql : sql,
        parameters : [AName,Contact,Address,AInfo,OpenUser,Account],
        success : sender.success,	     
        error : sender.error
   })
    
    

    
}