module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var UserAID=sender.req.query.UserAID;
    var VidDate=sender.req.query.VidDate;
    var resetPW=sender.req.query.resetPW;
    var yjSecurity = global.yjRequire("yujiang.Foil").yjSecurity;
    var PWenc = yjSecurity["Diffie-Hellman"].sign(resetPW);


    
console.log(sender.req.query);
//console.log(Account+AName+Contact+Address+AInfo);
    
    
    if(resetPW!=""){
    	sql="UPDATE users SET VidDate=?,password=? WHERE UserAID=?";
        
        yjDBService.exec({
            sql : sql,
            parameters : [VidDate,PWenc,UserAID],
            success : sender.success,	     
            error : sender.error
       })
    	
    }else{
    	
    	 sql="UPDATE users SET VidDate=? WHERE UserAID=?";
    	    
    	    yjDBService.exec({
    	        sql : sql,
    	        parameters : [VidDate,UserAID],
    	        success : sender.success,	     
    	        error : sender.error
    	   })
    	
    }


    
    

    
}