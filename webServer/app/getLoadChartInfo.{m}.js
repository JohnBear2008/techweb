var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;
module.exports = function(sender) {
    var data=[{
                loadName:'A-data-110V',
                nowData:32,
                dayData:41.7,
                monthData:1200,
                yearData:14000
            }];
    var menuFile='/loadChart.ejs';
    var fs = require("fs");
    var ejs = require("ejs");
    var content = fs.readFileSync(__dirname + menuFile, {
        encoding : "utf8"
    });
    var result=new Array();
    result.push(data);
    result.push(content);
    sender.success(result);     
}
