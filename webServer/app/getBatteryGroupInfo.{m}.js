var yjBizService = global.yjRequire("yujiang.Foil").yjBizService;
var yjPusher = yjRequire("yujiang.Foil").yjPusher;
module.exports = function(sender) {
    var translation=sender.req.query.translation;
    var batteryGroup=[{
        groupID:1,
        groupName:translation.batterA,
        runtimeData:49,
        temperatureData:37,
        batteryTemperatureData:36,
        currentData:91,
        voltageData:781.5,
        capacity:75,
        batteriesInfo:{}
    },{
        groupID:2,
        groupName:translation.batterB,
        runtimeData:69,
        temperatureData:35,
        batteryTemperatureData:37,
        currentData:94,
        voltageData:791,
        capacity:70,
        batteriesInfo:{}
    }]
    yjBizService.get({
        params : ["battery","getBatteryInfo"],
        query : sender.req.query,
        success : function(data){
            batteryGroup[0].voltageData=data.realTimeVoltage;
            batteryGroup[0].capacity=data.realTimeCapacity;
            sender.success(batteryGroup);  
        },
        error : sender.error
    });
    var timer=setInterval(function(){ 
        yjBizService.get({
            params : [ "battery","getBatteryInfo" ],
            query : sender.req.query,
            success : function(data) {
                batteryGroup[0].voltageData=data.realTimeVoltage;
                batteryGroup[0].capacity=data.realTimeCapacity;
                yjPusher.push('batteryRealTimeData', {
                      newBatteryRealTimeData : data
                });
                var conCount=yjPusher.getClientCount('batteryRealTimeData');
                if(conCount==0){
                    clearInterval(timer);
                }
            },
            error : function(){
                console.log("erro");
            }
        });
    }, 5000);  
    console.log("batteryGroup");
       
}
