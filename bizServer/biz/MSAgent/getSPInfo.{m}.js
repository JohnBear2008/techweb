module.exports = function(sender) {
        var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
        var yjDB = global.yjRequire("yujiang.Foil").yjDB;
        var limit=parseInt(sender.req.query.limit);
        var page=parseInt(sender.req.query.page);
        var UID=sender.req.query.UID;
        var start=parseInt((page-1)*limit);
        var end=limit;
     
        var SInfo=sender.req.query.SInfo;
        
//        console.log("get:"+JSON.stringify(sender.req.query));
       
        
        var sql="SELECT spinfo.SPID,spinfo.UID,spinfo.MKID,spinfo.Customer,spinfo.AGID,spinfo.MCID,spinfo.EndDate,spinfo.SP,spinfo.PW,spinfo.Type,spinfo.FQ,spinfo.downloadNum,DATE_FORMAT(CreateDate,'%Y-%m-%d') As CreateDate FROM spinfo WHERE UID=? ORDER BY TimeStamp Desc ";
        
        if(!SInfo==""){
        	
        	SInfo="%"+SInfo+"%";//格式化搜索信息
        	 var sql="SELECT spinfo.SPID,spinfo.UID,spinfo.MKID,spinfo.Customer,spinfo.AGID,spinfo.MCID,spinfo.EndDate,spinfo.SP,spinfo.PW,spinfo.Type,spinfo.FQ,spinfo.downloadNum,DATE_FORMAT(CreateDate,'%Y-%m-%d') As CreateDate FROM spinfo WHERE UID=? AND (MCID like ? OR Customer like ? )ORDER BY TimeStamp Desc ";
        }
        

//        SELECT id,DATE_FORMAT(date1,'%Y-%m-%d') As date1,
//        DATE_FORMAT(date2,'%Y-%m-%d') As date2 FROM test;
        
//    select count(1) from spinfo 查询数量 执行效率高
//  select * from table limit (start-1)*limit,limit; 其中start是页码，limit是每页显示的条数。
//        var sqlcount="select count(*) from spinfo"
        yjDBService.exec({
            sql : sql,
            parameters : [UID,SInfo,SInfo],
            rowsAsArray : true,
            success : function(result) {
                var data=yjDB.dataSet2ObjectList(result.meta,result.rows);

                var datasend={};
                
                
               // console.log("data.length:"+data.length);
                
                if((data.length-start)<limit){
                	var end=data.lengh-start;

                }
                
                
               // console.log("limit:"+limit);
                for(var i=0;i<limit;i++){
                	datasend[i]=data[start+i];

                }
                
                

                
                var resulttest={"code":0,"msg":"","count":data.length,"data":datasend}


                sender.success(resulttest);
            },
            error : sender.error
        });
    }  
    
