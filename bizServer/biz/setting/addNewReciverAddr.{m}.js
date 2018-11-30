module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var newReciverAddr=sender.req.query.reciverAddr;
    var yjDBServiceUtil = global.yjRequire("yujiang.Foil",'yjDBService.util.js');
    var connectionOptions = yjGlobal.config.db_Connection.connection_iGBS;
   connectionOptions = yjDBServiceUtil.extractConnectionOptions(connectionOptions);
    var sql = "insert  Sendmail (ReciverAddr) values(?)";
   //sql = "INSERT INTO Sendmail ( Server, FromAddr, Port, Password, ReciverAddr) VALUES ( 'mail.techmation.com.cn', 'wang@techmation.com.cn', 25, '861325', NULL)";   
     console.log("addNewReciverAddr.{m}.js");
    yjDBService.exec({
       // connectionOptions: connectionOptions,
        sql : sql,
        parameters : [newReciverAddr],
        rowsAsArray : true,
        success : function(result) {
            sender.success(result);
        },
        error : sender.error
    });
}
                  