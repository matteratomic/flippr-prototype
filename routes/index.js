let express = require('express')
let router  = express.Router()

let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')

let {verifyToken,sign} = require('./middleware')
let middleware = require('./middleware')

router.use(middleware.initNavLinks)
router.use(cookieParser())
router.use(middleware.checkCookies)
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))


let home = require('./home')
let profile = require('./profile')

let users = [
{username:"IanMacharia",email:"matteratomic@gmail.com",password:"bacon",avatar:"https://pbs.twimg.com/profile_images/1028197344444116992/eS2p6w9f_400x400.jpg"},
{username:"MrFantastic",email:"mrfantastic@gmail.com",password:"susan",avatar:"https://vignette.wikia.nocookie.net/fantasticfourmovies/images/f/fc/Fantastic-four_371e7633.jpg/revision/latest?cb=20130706102039"}
]




router.get('/',(req,res)=>{
	res.render('login')
})

router.post('/login',(req,res)=>{
	const user = users.find((user)=>user.username === req.body.username && user.password === req.body.password)
	if(user){
	sign(user).then((token)=>{
		res.cookie('sid',token)
		res.redirect(301,'home')
	})
	}else{
		res.status(401).json({error:"Forbidden"})
	}
})

router.get('/home',verifyToken,home)
router.get('/profile',verifyToken,profile)




module.exports = router