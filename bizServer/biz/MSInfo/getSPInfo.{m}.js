module.exports = function(sender) {
        var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
        var yjDB = global.yjRequire("yujiang.Foil").yjDB;
        var limit=parseInt(sender.req.query.limit);
        var page=parseInt(sender.req.query.page);
        var UID=sender.req.query.UID;
        var start=parseInt((page-1)*limit);
        var end=limit;
        
//        var field=sender.req.query.field;
//        var type=sender.req.query.type;
        
        var SInfo=sender.req.query.SInfo;
        

        
        
        
        
        var sql="SELECT * FROM spinfo ORDER BY TimeStamp Desc ";
        
        if(!SInfo==""){
        	
        	SInfo="%"+SInfo+"%";//格式化搜索信息

        	 var sql="SELECT * FROM spinfo WHERE MCID like ? ORDER BY TimeStamp Desc ";
        }
        
//---定义显示时间函数-------------------------   
    	
    	
    	function getDateShow(date){
    		  var date= new Date(Date.parse(date));
    	    	var y = date.getFullYear();
    	    	var m = date.getMonth()+1;//月份以数组形式存储 0-11 因此会少1
    	    	if(m<10){m="0"+m}
    	    	var d = date.getDate();
    	    	if(d<10){d="0"+d}
    	    	return y+'-'+m+'-'+d;
    	}

        
//      console.log(limit+page+id);
      
        
//        var sql="SELECT * FROM spinfo limit ?,?";
        
//    select count(1) from spinfo 查询数量 执行效率高
//  select * from table limit (start-1)*limit,limit; 其中start是页码，limit是每页显示的条数。
//        var sqlcount="select count(*) from spinfo"
        
        yjDBService.exec({
            sql : sql,
            parameters : [SInfo],
            rowsAsArray : true,
            success : function(result) {
                var data=yjDB.dataSet2ObjectList(result.meta,result.rows);

                var datasend={};
                
                if((data.length-start)<limit){
                	var end=data.lengh-start;

                }
                for(var i=0;i<limit;i++){
                	datasend[i]=data[start+i];                	
                	datasend[i].TimeStamp=getDateShow(datasend[i].TimeStamp);
                }
        
                var resulttest={"code":0,"msg":"","count":data.length,"data":datasend}


                sender.success(resulttest);
            },
            error : sender.error
        });
    }  
    
