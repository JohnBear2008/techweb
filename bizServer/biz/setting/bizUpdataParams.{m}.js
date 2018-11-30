var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
module.exports = function(sender){
	var value=sender.req.query.Value;
	var id=sender.req.query.ParamOID;
	var sql='update EEIDeviceParams set Value=? where ParamOID=?';
	yjDBService.exec({
		sql:sql,
		parameters:[value,id],
		success:sender.success,
		error:sender.error
	});
}
