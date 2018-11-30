module.exports = function(sender) {
        var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
        var yjDB = global.yjRequire("yujiang.Foil").yjDB;
        
        var Account=sender.req.query.Account;
        var sql="SELECT msagent.AName,msagent.Contact,msagent.Address,msagent.AInfo,msagent.OpenUser,msagent.Account FROM msagent WHERE Account=?";

        yjDBService.exec({
            sql : sql,
            parameters : [Account],
            rowsAsArray : true,
            success : function(r) {             
                sender.success(r);
            },
            error : sender.error
        });
    }  
    
