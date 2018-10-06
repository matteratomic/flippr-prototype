exports = module.exports = function(req,res){
	res.locals.section = 'profile'
	res.render('profile',res.locals)
}