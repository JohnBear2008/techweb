module.exports = function(sender) {
    var yjDBService = global.yjRequire("yujiang.Foil").yjDBService;
    var yjDB = global.yjRequire("yujiang.Foil").yjDB;
    var textYearStart=sender.req.query.textYearStart;
    var textYearEnd=sender.req.query.textYearEnd;
    var textMaxID=sender.req.query.textMaxID;
    var textNewMT=sender.req.query.textNewMT;
    var textCodeOne=sender.req.query.textCodeOne;
    var textCodeStart=sender.req.query.textCodeStart;
    var textCodeEnd=sender.req.query.textCodeEnd;
    
    var sql="INSERT INTO hmiset(yearStart,yearEnd,maxID,newMT,codeOne,codeStart,codeEnd) VALUE(?,?,?,?,?,?,?) ";
    yjDBService.exec({
        sql : sql,
        parameters : [textYearStart,textYearEnd,textMaxID,textNewMT,textCodeOne,textCodeStart,textCodeEnd],
        rowsAsArray : true,
        success : function() {

        	console.log("insert ok");
        },
        error : sender.error
    });
    
}