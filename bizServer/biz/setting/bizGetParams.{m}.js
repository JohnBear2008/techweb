module.exports =function(sender){
	var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB=global.yjRequire("yujiang.Foil").yjDB;
	var sql="select EEIDeviceParams.ParamOID,EEIDeviceParams.ParamName,EEIDeviceParams.Value,tmUOMs.UOMAID "+
	"from tmUOMs,EEIDeviceParams "+
	"where tmUOMs.UOMOID=EEIDeviceParams.UOMOID";
	yjDBService.selectData({
		sql:sql,
		orderBy:'ParamOID asc',
		success:function(data){
			var pageData=yjDB.dataSet2ObjectList(data.meta,data.rows);
			sender.success(pageData);
		},
		error:sender.error,
	});
}