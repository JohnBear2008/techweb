module.exports = function(sender) {
        var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
        var yjDB = global.yjRequire("yujiang.Foil").yjDB;
        var limit=parseInt(sender.req.query.limit);
        var page=parseInt(sender.req.query.page);
        var FID=sender.req.query.FID;
        var start=parseInt((page-1)*limit);
        var end=limit;

        var SAgent=sender.req.query.SAgent;
        
        var nowDate = new Date();


        var sql="SELECT msagent.*, DATE_FORMAT(users.VidDate,'%Y-%m-%d') As VidDate FROM msagent LEFT JOIN users on msagent.Account=users.UserAID  WHERE  FID=? ORDER BY Account Asc ";
        
        
//        SELECT Websites.name, access_log.count, access_log.date
//        FROM Websites
//        LEFT JOIN access_log
//        ON Websites.id=access_log.site_id
//        ORDER BY access_log.count DESC;
//        date_format(now(), '%Y-%m-%d')
        
        if(!SAgent==""){
        	
        	SAgent="%"+SAgent+"%";//格式化搜索信息

        	 var sql="SELECT msagent.*,DATE_FORMAT(users.VidDate,'%Y-%m-%d') As VidDate FROM msagent LEFT JOIN users on msagent.Account=users.UserAID WHERE FID=? AND  msagent.AName  like ? ORDER BY Account Asc ";
        }
        

        yjDBService.exec({
            sql : sql,
            parameters : [FID,SAgent],
            rowsAsArray : true,
            success : function(result) {
                var data=yjDB.dataSet2ObjectList(result.meta,result.rows);

                var datasend={};
                
                if((data.length-start)<limit){
                	var end=data.lengh-start;

                }
                for(var i=0;i<limit;i++){
                	
                	
                	if(data[start+i]!=undefined){
                		
                	
                		
                		if(data[start+i].VidDate!=null){
                			if(data[start+i].VidDate<nowDate){
                				
                				data[start+i].accoutKey="已过期";

                    			
                    		}else{
                    			
                    			data[start+i].accoutKey="正常";

                    		}
                			
                		}
                		
                		
                		
                		if(data[start+i].OpenUser==1){
                			data[start+i].OpenUserKey="是";
                		}else{
                			data[start+i].OpenUserKey="否";
                		}
                    	
                    	datasend[i]=data[start+i];
                		
                	}
                	
                	

                }
  
                var resulttest={"code":0,"msg":"","count":data.length,"data":datasend}
                
             
                sender.success(resulttest);
            },
            error : sender.error
        });
    }  
    
