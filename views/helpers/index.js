var _helpers = {}

exports = module.exports = function(){
	_helpers.ifeq = function(a,b,options){
		if(a === b){
			return options.fn(this)
		}else{
			return options.inverse(this)
		}
	}
	_helpers.noOfKeys = function(obj){
		let num = Object.keys(obj).length
		return num
	}
	return _helpers
}