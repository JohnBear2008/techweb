  var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
  var yjDB = global.yjRequire("yujiang.Foil").yjDB;
//var yjSecurity=require("../../../yujiang.Foil.Node/src/yjSecurity.js");
 module.exports = function(sender){
 	//console.log("ddddddddddddddd+++++++++++++++++");
    //console.log(sender.req.query);
    var data=sender.req.query;
    //console.log(data.Value);
    var ParamOID=parseInt(data.ParamOID);

    var sql = "UPDATE EEIDeviceParams set Value=? where ParamOID= ?";
	yjDBService.exec({
			sql : sql,
			parameters : [data.Value,ParamOID],
			success : function(results) {
				//console.log(results);
				sender.success(results);
			},
			error : sender.error
		});	
 }  