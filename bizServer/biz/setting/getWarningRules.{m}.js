module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var alarmTypeText=sender.req.query.alarmTypeText;
      var lcid=sender.req.query.LCID;
      var sqlQueryTypeWarning="";
      var param=[alarmTypeText];
    
    if(lcid==1033){
            sqlQueryTypeWarning='select * from WarningRules where WarningOIDParent=(select '
            +' WarningOID from WarningRules where WarningAID=? ) ';

        }else{
             param.push(lcid)
            sqlQueryTypeWarning=" select w1.WarningOID,ddw.DisplayValue as WarningName,w1.SMS,w1.Email "+
                                "   from WarningRules w1,DDWarningRules ddw"+
                                "  where w1.WarningAID=ddw.DDKey  and w1.WarningAID in("+
                                "        select WarningAID from WarningRules "+
                                "         where WarningOIDParent=(select WarningOID "+
                                "                                   from WarningRules"+
                                "                                  where WarningAID=? ) ) and ddw.LCID=? ";
        }

    yjDBService.exec({
        sql:sqlQueryTypeWarning,
        parameters:param,
        success:function(result){
            var Data=yjDB.dataSet2ObjectList(result.meta,result.rows);
            sender.success(Data)
        }
    })
}