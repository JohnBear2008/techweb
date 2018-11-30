module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
	var yjDB = global.yjRequire("yujiang.Foil").yjDB;
	var keepAllCheckData=sender.req.query.changeCheckData;
	var updataWaringRules1=' update WarningRules set Email=?,SMS=? where WarningOID=? ';
	var updataWaringRules2=' update warningRules set Email=? where WarningOID=? ';
	var updataWaringRules3=' update warningRules set SMS=? where WarningOID=? ';
	var index=0;
	var sqlSucceedExec=0;
	for(var key in keepAllCheckData){
		index++;
		var alarmType=keepAllCheckData[key];
		var WarningOID=alarmType.WarningOID;
		var Email=alarmType.Email;
		var SMS=alarmType.SMS;
		if(Email!==undefined && SMS!==undefined){
			yjDBService.exec({
				sql:updataWaringRules1,
				parameters:[Email,SMS,WarningOID],
				success:function(result){
					sqlSucceedExec++;
					if(sqlSucceedExec==index){
						sender.success('modify rules succeed')
					}
				}
			})
		}else if(Email!==undefined){
			yjDBService.exec({
				sql:updataWaringRules2,
				parameters:[Email,WarningOID],
				success:function(result){
					sqlSucceedExec++;
					if(sqlSucceedExec==index){
						sender.success('modify rules succeed')
					}
				}
			})
		}else if(SMS!==undefined){
			yjDBService.exec({
				sql:updataWaringRules3,
				parameters:[SMS,WarningOID],
				success:function(result){
					sqlSucceedExec++;
					if(sqlSucceedExec==index){
						sender.success('modify rules succeed')
					}
				}
			})
		}	
	}
}