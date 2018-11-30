
var path = require("path");
var g_dbConenctions = {
	"local": {
		engine: "mysql",
		connection: {
			server: '172.16.192.10',
			database: 'TECHWEBIDCPES',
			user: 'root',//'root',
			password: '123456'
		},
		connection_iGBS: {
			server: '127.0.0.1',
			database: 'test',
			user: 'root',//'root',
			password: '123456'
		}
	}	
};
var config = {
	port: 2015,
	biz_Connection: {
		engine: "remote.restler",
		connection: {
			url: "http://127.0.0.1:2015/biz"
		}
	},
	homePage_url: "/app/demond/showDemond",
	db_Connection: g_dbConenctions["local"],
	copyright: "2013-2016",
	product: {
		bannerBackgroundImage: "/images/banner/banner.png",
		name: "TECHWEB",
		namePic: "/images/TECHWEB.jpg",
		description: "Factory  ·  Green  ·  Energy  ·  System",
		logo: "/images/TECHWEB.jpg",
		version: "v3.0.1.0",
		releaseLogDir: path.join(__dirname, "./webServer/system/release/data"),
		company: {
			name: "Techmation Co.,Ltd.",
			website: "http://www.techmation.com.cn"
		},
		TECHWEB:{
			deviceType:"EEI"
		}
	},
	processTree: {
		isNeedAuthorityCheck:false,
		style: "navBar"
	},
	security: {
		passwordEncryptMode: 'rsa',
		isNeedSession: true,
		isOpenRegister: false,
		login_url: "/app/account/showLogin",
		loginTypes: ["userID"],
			notNeedLogin_urls:[
			"/app/showAbout","/app/showWhether",
			"/app/overview/showOverView","/app/overview/getIllumationData","/app/overview/getOverViewSysStatusInfo","/app/overview/getTemAndHumData",
         	"/app/process/getprocesstree", "/app/process/getNavgatior","/app/process/getSubNavgatior",
         	"/app/Grid/showGrid","/app/grid/getGridChartInfo", "/app/grid/getGridPattern", "/app/grid/getGridPatternChartInfo", "/app/grid/getRealTimeVoltage",
         	"/app/grid/getRealTimeWholseSaleTabInfo","/app/grid/getWholeSaleEnergyReportByDateType","/app/grid/getRealTimeWholeSaleTabInfo",
         	"/app/grid/getRealtimeTodayWholeSaleValue","/app/grid/getRealTimeWholeBuyTabInfo","/app/grid/getConsumeGridElectricityByDateType",
         	"/app/grid/getConsumeGridPowerInfo","/app/grid/getGridInfoFromPCS",
         	"/app/green/showGreen", "/app/green/getGenerateRecordBySettingTime", "/app/green/getGreenChartInfo", "/app/green/getGreenChartYear","/app/green/getGreenChartTabEfficiencyData",
         	   "/app/green/getGreenChartTabInfo","/app/green/getGreenEnergyGeneratedByDateType","/app/green/getGreenGenerateDevices",   "/app/green/getRealTimeGenerateEfficiency",
         	   "/app/green/getRealTimeGreenChartTabInfo", "/app/green/getSingelDeviceGreenChartInfo","/app/green/getTotalGreenGenerateData","/app/green/getIiiumationRecordBySettingTime",
         	   "/app/green/getIllumationYear","/app/green/getIllumationChartData","/app/green/getRealTimeGenerateEfficiencyEachDevice","/app/green/getOptimizerDetailDataBySettingOption",
         		"/app/green/getRealTimeOptimizerData","/app/green/getOptimizerChartData","/app/green/getIllumationToday",
         	"/app/Battery/showBattery","/app/battery/deleteBatterySchedulInfo","/app/battery/editRoutineSchedual", "/app/battery/getBatteriesInfoByGroupID",
         	   "/app/battery/getBatteryCapacityChartData","/app/battery/getBatteryStatisticInfo","/app/battery/getBatteryStatus", 
         	   "/app/battery/getBatteryStatusInfo", "/app/battery/getBatteryWorkStatusChartInfo","/app/battery/getRoutinModeSetting",
         	   "/app/battery/saveNewRoutineSchedual","/app/battery/saveSpecialScheduleInfo","/app/battery/updateRoutineScheduleWeekdays",
         	"/app/load/getLoadChartInfo","/app/load/getLoadChartTabConsumeData","/app/load/getLoadChartTabInfo","/app/load/getLoadConsumeByDateType",
         	    "/app/load/getLoadConsumePowerCharInfo","/app/load/getLoadEnergConsumeToday","/app/load/getLoadRealTimeInfo","/app/load/getSingelDeviceOutPutChartInfo",
         	    "/app/load/getSingleLoadRealTimeInfo","/app/load/ShowLoad","/app/load/getLoadRecordBySettingTimeAndDevice",
         	    "/app/load/getLoadRankDataByDateType","/app/load/getLoadDevices",
         	"/app/PCSOutPut/showPCSOutPut","/app/PCSOutPut/getInverterOutPutDetailInfo","/app/pcsoutput/getinverteroutputdetailinfo",
         	"/app/setting/addNewReciverAddr", "/app/setting/deleteParams","/app/setting/getAllReciverAddr","/app/setting/getEmailServerConfig",
         	    "/app/setting/getParams","/app/setting/getPhases","/app/setting/getWarningRules","/app/setting/updataParams",
         	    "/app/setting/saveEmailServerConfig","/app/setting/updataPhases",
			"/app/grid/getWholeSaleChartInfo" ,"/app/grid/getTwoWayBattery",
         	"/app/sys/getDeviceType","/app/demand/HumanAlert","/app/demand/HumanDetect","/app/demand/DemandQuery",
         	"/app/Camera/showCamera",  "/app/green/getCapacity",

         	"/app/warning/getDevices", "/app/warning/getDeviceWarnings", "/app/warning/getWarningTypes",]
	},
	theme: {
		layout: {
			foil: ["bright"][0]
		},
		style: {
			easyui: ["default", "black", "bootstrap", "gray", "metro"][4],
			foil: ["bright", "modern"][0]
		}
	},
	project: {
		edition: "TECHWEB"
	},
	isNeedView: true,
	rootDir: path.join(__dirname, "../yujiang.Foil.Node.WebServer"),
	logDir: path.join(__dirname, "./webServer/system/log"),
	autoRunDirs: [path.join(__dirname, "./bizServer/biz/auto")],
	routeDirs: [{
		isNeedAuthorityCheck: false,
		rootDir: path.join(__dirname, "../yujiang.Foil.Node.BizServer"),
		dir: path.join(__dirname, "../yujiang.Foil.Node.BizServer/biz")
	}, {
			isNeedAuthorityCheck: false,
			rootDir: path.join(__dirname, "./bizServer"),
			dir: path.join(__dirname, "./bizServer/biz")
		}, {
			isNeedAuthorityCheck: true,
			rootDir: path.join(__dirname, "./webServer"),
			dir: path.join(__dirname, "./webServer/app")
		}, {
			isNeedAuthorityCheck: true,
			rootDir: path.join(__dirname, "../yujiang.Foil.Node.WebServer"),
			dir: path.join(__dirname, "../yujiang.Foil.Node.WebServer/app")
		}],
	staticDirs: [
	    path.join(__dirname, "../node_modules"),
		path.join(__dirname, "../yujiang.Foil.Node/client"),
		path.join(__dirname, "../yujiang.Foil.Node/src/client"),
		path.join(__dirname, "../yujiang.Foil.Node.WebServer/client"),
		path.join(__dirname, "./webServer/client")],
	requireDirs: {
		"yujiang.Foil": path.join(__dirname, "../yujiang.Foil.Node/src"),
		"acroprise.MultiLang": path.join(__dirname, "../MultiLanguage/Component/JavaScript/Acroprise.MultiLang.JavaScript/src")
	},
	locale: {
		DDFile: path.join(__dirname, "../yujiang.Foil.Node.WebServer/system/locale/Unicode.lng"),
		LCID: 2052
	},
	email: {
 	 	 	pool : true,
 	 	 	host : '218.255.252.46',//
 	 	 	port : 25,
 	 	 	secure : false,
 	 	 	tls:{rejectUnauthorized: false},
 	 	 	from : '',//
 	 	 	auth : {
 	 	 	 	user : 'sdlin',
 	 	 	 	//关于密码，如果有auth.pass，用之，否则，用加密的密码encryptedPassword  Qm168524
 	 	 	 	pass : "",
 	 	 	 	encryptedPassword:''
 	 	 	}
 	}
}
module.exports = config;

