module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;   
    var FID=sender.req.query.FID;
    var AID=sender.req.query.AID;
    var Account=sender.req.query.Account;
    var FName=sender.req.query.FName;
    var AName=sender.req.query.AName;
    var FAName=FID+AName;
    var Contact=sender.req.query.Contact;
    var Address=sender.req.query.Address;
    var AInfo=sender.req.query.AInfo;
    var OpenUser=sender.req.query.OpenUser;



//-----------定义添加用户函数----------------
   
   
////定义添加用户表参数--------------------  
//    var params=[UserOID,UserAID,PWenc,Name,OrgOID,UserFID,VidDate,auth];
//   
//   function addAgentUser(params){   	
//    	sql1="INSERT INTO users (UserOID,UserAID,Password,Name,OrgOID,UserFID,VidDate,auth) VALUES (?,?,?,?,?,?,?,?,?)";    	
//    	 yjDBService.exec({
//    	        sql : sql1,
//    	        parameters : params,
//    	        success :function(){},
//    	        error : sender.error
//    	   })
//    }
//   
//   
//    
////-----------定义添加用户函数----------------
//    
//    
////-----------定义插入授权表---------------    
//   
//   
//   function authAgentUser(UserOID){
//	   
//	   sql2="INSERT INTO usersauthority (UserOID,ProcessOID,ActionOID,Value) VALUES (?,190,0,1),(?,230,0,1)";
//	   
//	   yjDBService.exec({
//	       sql : sql2,
//	       parameters : [UserOID,UserOID],    
//	       success :function(){},
//	       error : sender.error
//	  })
//   } 
//  
//   
// //-----------定义插入授权表---------------    
   

   
 
   

   
   
 //-----------------插入代理商表------------------------   
   sql="INSERT INTO msagent (FID,AID,Account,FName,AName,FAName,Contact,Address,AInfo,OpenUser) VALUES (?,?,?,?,?,?,?,?,?,?)";
   
   yjDBService.exec({
       sql : sql,
       parameters : [FID,AID,Account,FName,AName,FAName,Contact,Address,AInfo,OpenUser],
       
//       success : sender.success,	    
       success :function(r){ 
       	
       	sender.success(r);
       },
       error : sender.error
  })
  
//-----------------插入代理商表------------------------   
    
    
}