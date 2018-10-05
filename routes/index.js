let express = require('express')
let router  = express.Router()

let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')

let {verifyToken,sign} = require('./middleware')
let middleware = require('./middleware')

router.use(middleware.initNavLinks)
router.use(cookieParser())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))


let profile = require('./profile')

let users = [
{username:"IanMacharia",email:"matteratomic@gmail.com",password:"bacon"},
{username:"MrFantastic",email:"mrfantastic@gmail.com",password:"susan"}
]




router.get('/',(req,res)=>{
	res.render('login')
})

router.post('/login',(req,res)=>{
	const user = users.find((user)=>user.username === req.body.username && user.password === req.body.password)
	if(user){
	sign(user).then((token)=>{
		res.cookie('sid',token)
		res.redirect(301,'profile')
	})
	}else{
		res.status(401).json({error:"Forbidden"})
	}
})

router.get('/profile',verifyToken,profile)




module.exports = router