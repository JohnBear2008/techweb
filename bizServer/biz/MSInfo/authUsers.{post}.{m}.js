module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var UserOID=sender.req.query.UserOID;
//    var OrgOID=sender.req.query.OrgOID;
    var UserType=sender.req.query.UserType;

//    console.log('get'+UserOID+OrgOID);
    

	 
if(UserType==1){
    sql1="INSERT INTO usersauthority (UserOID,ProcessOID,ActionOID,Value) VALUES (?,190,0,1),(?,220,0,1),(?,230,0,1)";
    
    yjDBService.exec({
        sql : sql1,
        parameters : [UserOID,UserOID,UserOID],
        success :function(r){
        	sender.success("授权成功");
        },
        error : sender.error
   })

}

	 
if(UserType==2){
	
	  sql2="INSERT INTO usersauthority (UserOID,ProcessOID,ActionOID,Value) VALUES (?,190,0,1),(?,230,0,1)";
	    
	    yjDBService.exec({
	        sql : sql2,
	        parameters : [UserOID,UserOID],    
	        success :function(r){
	        	sender.success("授权成功");
	        },
	        error : sender.error
	   })

			
}	 
	 
//sql3="update users set auth=1 where UserOID =?";
//
//yjDBService.exec({
//       sql : sql3,
//       parameters : [UserOID],
//
//       success :function(r){
//
////       	sender.success(r)
//       	sender.success("授权成功");
//       },
//       error : sender.error
//  })


}