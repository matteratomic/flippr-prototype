let {authenticate} = require('../routes/middleware')

let users = [
{username:"IanMacharia",
email:"matteratomic@gmail.com",
password:"bacon",
avatar:"https://pbs.twimg.com/profile_images/1028197344444116992/eS2p6w9f_400x400.jpg",
flashcards:{
	art:[
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
	],
	german:[
		{url:"https://images.unsplash.com/photo-1532708773901-d9468eed9135?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c6a5c069b64266f649e561ea09aec3d&auto=format&fit=crop&w=401&q=80",
	title:"Lorem ipsum dolor sit",
	subtitle:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, beatae.
	`},
	]
}
},
{username:"MrFantastic",
email:"mrfantastic@gmail.com",
password:"susan",
avatar:
"https://vignette.wikia.nocookie.net/fantasticfourmovies/images/f/fc/Fantastic-four_371e7633.jpg/revision/latest?cb=20130706102039"}
]


exports = module.exports = function(req,res){

	authenticate(req).then(({username})=>{

	res.locals.flashcards = users.filter((user)=>{
		return user.username === username
	})[0].flashcards

	res.locals.section = 'profile'
	}).then(
	()=>res.render('profile',res.locals))
			.catch(err=>res.status(401).json({error:"Forbidden"}))
}