
var path = require("path");
var g_dbConenctions = {
	"local": {
		engine: "mysql",
		connection: {
			server: '127.0.0.1',
			database: 'TECHWEB',
			user: 'root',//'root',
			password: '654321'
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
	port: 2018,
	biz_Connection: {
		engine: "remote.restler",
		connection: {
			url: "http://127.0.0.1:2018/biz"
		}
	},
	homePage_url: "/app/MSAgent/showMSAgent",
	db_Connection: g_dbConenctions["local"],
	copyright: "2018-2028",
	product: {
		bannerBackgroundImage: "/images/banner/banner.png",
		name: "TECH-WEB",
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
		isNeedAuthorityCheck:true,
		style: "navBar"
	},
	security: {
		passwordEncryptMode: 'rsa',
		isNeedSession: true,
		isOpenRegister: false,
		login_url: "/app/account/showLogin",
//		loginTypes: ["mobilePhone"],
		loginTypes: ["userID"],
			notNeedLogin_urls:[
			"/app/showAbout", "/app/bear/getDevices", "/app/bear/getBearInfo"]
	},
	theme: {
		layout: {
			foil: ["bright"][0]
//			foil: ["ubuntu"][0]
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

