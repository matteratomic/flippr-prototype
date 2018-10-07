let jwt = require('jsonwebtoken')

let initNavLinks = function(req,res,next){
	res.locals = {}

	res.locals.navLinks = [
	{label:"Home",key:"home",href:"/home"},
	{label:"Profile",key:"profile",href:"/profile"},
	{label:"Community",key:"community",href:"/community"},
	{label:"About",key:"about",href:"/about"},
	{label:"Terms&Conditions",key:"t&c",href:"/terms"}
	]
	next()
}

let checkCookies = function(req,res,next){
	if(req.cookies){
		res.locals.hasCookie = true
		next()
	}else{
		res.locals.hasCookie = false
		next()
	}
}

let sign = function(user){
	return new Promise((resolve,reject)=>{
		let {username,password,email,avatar} = user
		jwt.sign({username,password,email,avatar},"mysecret",(err,token)=>{
		if(err) reject(err)
			resolve(token)
		})
	})
}

let authenticate = function(req){
	return new Promise((resolve,reject)=>{
		jwt.verify(req.cookies.sid,"mysecret",(err,user)=>{
			if(err) reject(err)
				resolve(user)
		})
	})
}

let verifyToken = function(req,res,next){
	authenticate(req)
		.then((user)=>{
			let {password,...userData} = user
			res.locals.userData = userData

		})
		.then(()=>next())
		.catch((err)=>{
			res.status(401).json({error:"Forbidden"})
		})
}

module.exports = {
	initNavLinks,
	checkCookies,
	sign,
	authenticate,
	verifyToken
}