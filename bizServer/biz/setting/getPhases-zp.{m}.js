module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var sql = ' select  EEIDeviceParams.ParamOID,EEIDeviceParams.ParamName,EEIDeviceParams.Value,tmUOMs.Abbreviation from EEIDeviceParams inner join tmUOMs on(tmUOMs.UOMOID=EEIDeviceParams.UOMOID)';
           console.log('ddddddd');
    yjDBService.selectData({
		sql : sql,
		parameters : [],
		pageIndex : sender.req.query.page-1,
		pageRowCount : parseInt(sender.req.query.rows),
		orderBy : sender.req.query.sort+ " " + sender.req.query.order,
		// orderBy:'EEIDeviceParams.ParamOID asc',
		rowsAsArray : true,
		fetchTotalCount : true,
		success : function(result) {
			console.log('ddddddd');
			sender.success(result);
		},
		error : sender.error
	});
}