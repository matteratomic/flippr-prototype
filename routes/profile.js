exports = module.exports = function(req,res){
	res.locals.section = 'profile'
	
	res.locals.flipcards = [
	{url:"https://images.unsplash.com/photo-1530900381846-cd345b083d83?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=61364c47e27bc11fed40dc7ca21d0923&auto=format&fit=crop&w=751&q=80",
	title:"What is a table in Kikuyu",
	subtitle:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, beatae.
	`},
	{url:"https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6304386ba5696891b580989892c66b5&auto=format&fit=crop&w=750&q=80",
	title:"Lorem ipsum dolor sit",
	subtitle:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, beatae.
	`},
	{url:"https://images.unsplash.com/photo-1532708773901-d9468eed9135?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c6a5c069b64266f649e561ea09aec3d&auto=format&fit=crop&w=401&q=80",
	title:"Lorem ipsum dolor sit",
	subtitle:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, beatae.
	`},
	{url:"https://images.unsplash.com/photo-1528491836309-55b4a140b78a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=23aaa192eea192c327d544285ebaf819&auto=format&fit=crop&w=675&q=80",
	title:"Lorem ipsum dolor sit",
	subtitle:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, beatae.
	`},
	{url:"https://images.unsplash.com/photo-1527694074837-46326ca68464?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3db06dd7354dab2b62954e9136931da6&auto=format&fit=crop&w=667&q=80",
	title:"Lorem ipsum dolor sit",
	subtitle:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, beatae.
	`},
	{url:"https://images.unsplash.com/photo-1516188003451-593901026058?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=26702bdaafe645b659e7002b6c460e95&auto=format&fit=crop&w=750&q=80",
	title:"Lorem ipsum dolor sit",
	subtitle:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, beatae.
	`},
	]
console.log(res.locals.section)
	res.render('profile',res.locals)
}