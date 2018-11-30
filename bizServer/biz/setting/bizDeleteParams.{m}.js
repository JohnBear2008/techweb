module.exports = function(sender){
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	console.log(sender.req.query);	
	var ParamOID = sender.req.query.ParamOID;
	var sql="delete from EEIDeviceParams where ParamOID=?";
	yjDBService.exec({
		sql : sql,
		parameters : [ParamOID],
		success:sender.success,
		error : sender.error
	});
}