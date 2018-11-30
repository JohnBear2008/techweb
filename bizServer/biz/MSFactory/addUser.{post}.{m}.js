module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var yjSecurity = global.yjRequire("yujiang.Foil").yjSecurity;
    
    
    
    var UserOID=sender.req.query.UserOID;
    var UserAID=sender.req.query.Account; 
    var IntPW=sender.req.query.IntPW;
    var PWenc = yjSecurity["Diffie-Hellman"].sign(IntPW);
    var Name=sender.req.query.FName;
    var AName=sender.req.query.AName;
    var AAID=sender.req.query.AID
    var OrgOID="2";
    var UserFID=sender.req.query.FID;    
    var VidDate=sender.req.query.VidDate;
    var auth="1";

//    console.log(sender.req.query);  
//    console.log(UserOID);
    
//------------定义插入users表数据-----------
    sql="INSERT INTO users (UserOID,UserAID,Password,Name,AName,AAID,OrgOID,UserFID,VidDate,auth) VALUES (?,?,?,?,?,?,?,?,?,?)";
    
    yjDBService.exec({
        sql : sql,
        parameters : [UserOID,UserAID,PWenc,Name,AName,AAID,OrgOID,UserFID,VidDate,auth],
        
//        success : sender.success,	    
        success :function(r){  

        	sender.success(r);
        },
        error : sender.error
   })
    
//----------------------------------
    

   
   
   
    
    
}