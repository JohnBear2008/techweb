module.exports = function(sender) {
        var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
        var yjDB = global.yjRequire("yujiang.Foil").yjDB;
        var limit=parseInt(sender.req.query.limit);
        var page=parseInt(sender.req.query.page);
        var UID=sender.req.query.UID;
        var start=parseInt((page-1)*limit);
        var end=limit;

        var SUser=sender.req.query.SUser;
        
//        console.log(sender.req.query);

        var sql="SELECT * FROM users WHERE OrgOID<>0  ORDER BY UserAID Asc ";
        
        if(!SUser==""){
        	
        	SUser="%"+SUser+"%";//格式化搜索信息
//        	console.log(SUser);
        	 var sql="SELECT * FROM users WHERE OrgOID<>0 AND Name  like ?   ORDER BY UserAID Asc ";
        }
        
        
//    select count(1) from spinfo 查询数量 执行效率高
//    select * from table limit (start-1)*limit,limit; 其中start是页码，limit是每页显示的条数。
//        var sqlcount="select count(*) from spinfo"
        yjDBService.exec({
            sql : sql,
            parameters : [SUser],
            rowsAsArray : true,
            success : function(result) {
                var data=yjDB.dataSet2ObjectList(result.meta,result.rows);
//                console.log(data.length);
                var datasend={};
                
                if((data.length-start)<limit){
                	var end=data.lengh-start;

                }
                for(var i=0;i<limit;i++){
                	datasend[i]=data[start+i];

                }
                
  
                var resulttest={"code":0,"msg":"","count":data.length,"data":datasend}

                sender.success(resulttest);
            },
            error : sender.error
        });
    }  
    
