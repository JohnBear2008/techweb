module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var yjSecurity = global.yjRequire("yujiang.Foil").yjSecurity;
    var UserOID=sender.req.query.UserOID;
    var FInfo=sender.req.query.FInfo;
    var FName=sender.req.query.FName;
    var UserType=sender.req.query.UserType;
    var ACode=sender.req.query.ACode;
    var IntPW=sender.req.query.IntPW;
    var VidDate=sender.req.query.VidDate;
    var AddInfo=sender.req.query.AddInfo;


//    console.log(Now());
    var UserAID=FInfo+ACode;
    
//    /**
//     * 生成一个用不重复的ID
//     */
//    Date.prototype.format = function(format)
//	{
//	 var o = {
//	 "M+" : this.getMonth()+1, //month
//	 "d+" : this.getDate(),    //day
//	 "h+" : this.getHours(),   //hour
//	 "m+" : this.getMinutes(), //minute
//	 "s+" : this.getSeconds(), //second
//	 "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
//	 "S" : this.getMilliseconds() //millisecond
//	 }
//	 if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
//	 (this.getFullYear()+"").substr(4 - RegExp.$1.length));
//	 for(var k in o)if(new RegExp("("+ k +")").test(format))
//	 format = format.replace(RegExp.$1,
//	 RegExp.$1.length==1 ? o[k] :
//	 ("00"+ o[k]).substr((""+ o[k]).length));
//	 return format;
//	}
//	
//	
//	var TEMPOID=new Date();
////	alert(test.format('yyyyMMddhhmmss'));
//
//    var UserOID=TEMPOID.format('MMddhhmmss');//定义随机ID

    var PWenc = yjSecurity["Diffie-Hellman"].sign(IntPW);
    
//------------定义插入users表数据-----------
    sql="INSERT INTO users (UserOID,UserAID,Password,Name,AAID,Description,OrgOID,UserFID,VidDate,auth) VALUES (?,?,?,?,?,?,?,?,?,?)";
    
    yjDBService.exec({
        sql : sql,
        parameters : [UserOID,UserAID,PWenc,FName,ACode,AddInfo,UserType,FInfo,VidDate,1],
        
//        success : sender.success,	    
        success :function(r){  
        	
        	
//        	 sql2="INSERT INTO usersauthority (UserOID,ProcessOID,ActionOID,Value) VALUES (?,?,?,?)";
//           
//               yjDBService.exec({
//               sql : sql2,
//               parameters : [UserOID,190,0,1],
//               success :function(){},
//               error : sender.error
//          })
        	sender.success(r);
        },
        error : sender.error
   })
    
//----------------------------------
    
////------------定义插入usersauthority表数据-----------
//    sql2="INSERT INTO usersauthority (UserOID,ProcessOID,ActionOID,Value) VALUES (?,?,?,?)";
//    
//    yjDBService.exec({
//        sql : sql2,
//        parameters : [UserOID,190,0,1],
//        
////        success : sender.success,	    
//        success :function(r){  
//        	console.log(UserOID);
//
//        	sender.success(r);
//        },
//        error : sender.error
//   })
//    
////----------------------------------
   
   
   
    
    
}