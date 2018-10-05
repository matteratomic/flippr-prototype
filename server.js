let express = require('express')
let path = require('path')
let expressHbs = require('express-handlebars')
let app = express()
let port = parseInt(process.env.PORT || 8080,10)
app.use(require('./routes/index.js'))
app.use(express.static('./public'))
app.listen(port,()=>console.log(`Listening on port ${port}`))

app.engine('hbs',expressHbs({
	extname:'hbs',
	defaultLayout:'layout',
	partials:'partials',
	helpers:new require('./views/helpers/index')()
}))

app.set('view engine','hbs')

let connections = {}




app.get('/poll',(req,res)=>{
	let id = req.cookies.sid
	if(!id){
		res.redirect('/')
	}else{
		connections[id] = res
	}
})



let broadcast = function(msg){
	for (let conn in connections){
		connections[conn].json({msg})
	}
}

process.stdin.on('readable',function(){
	let msg = this.read()
	msg && broadcast(msg.toString())
})




