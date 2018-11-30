module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var sql = "select * from Sendmail em  where  em.Server!=''";
    var server=sender.req.query.server;
    var fromAddr=sender.req.query.fromAddr;
    var pwd=sender.req.query.pwd;

    yjDBService.exec({
        sql : sql,
        parameters : [],
        rowsAsArray : true,
        success : function(result) {
            var sql1;
            var params;
            if(result.rows.length>0){
                sql1="update Sendmail set Server=?, FromAddr=?, Password=? where OID=? "
                params=[server,fromAddr,pwd,result.rows[0][0]];
            }
            else{
                sql1="insert  Sendmail (Server, FromAddr, Password) values(?,?,?) ";
                params=[server,fromAddr,pwd];
            }
            yjDBService.exec({
                sql:sql1,
                parameters:params,
                success:sender.success,
                error:sender.error
            });
        },
        error : sender.error
    });
}
                  