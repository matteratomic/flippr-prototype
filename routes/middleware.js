let jwt = require('jsonwebtoken')

let initNavLinks = function(req,res,next){
	res.locals = {}

	res.locals.navLinks = [
	{label:"Home",key:"home",href:"/"},
	{label:"Profile",key:"profile",href:"/profile"},
	{label:"Community",key:"community",href:"/community"},
	{label:"About",key:"about",href:"/about"},
	{label:"Terms&Conditions",key:"t&c",href:"/terms"}
	]
	next()
}


let sign = function(user){
	return new Promise((resolve,reject)=>{
		jwt.sign(user,"mysecret",(err,token)=>{
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
			req.appUser = user
			next()
		})
		.catch((err)=>{
			res.status(401).json({error:"Forbidden"})
		})
}

module.exports = {
	initNavLinks,
	sign,
	authenticate,
	verifyToken
}