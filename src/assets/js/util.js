export default{
	
	install(Vue,options){
		Vue.prototype.customF = {
			
			defaultImg(e){
				
				e.target.src =require("@/assets/default.png");
				
			},
			api:"http://photo.api.netwelive.com"

		}

	}
	
	
	

}
