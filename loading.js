export default {
	$loadingNum:0,
	$:null,
	$Popup:null,
	isShow:false,
	create(){
		this.$Popup = document.createElement('div');
		this.$Popup.id = '_Popup';
		this.$Popup.className = "xh_Popup";
		document.body.appendChild(this.$Popup);
		this.$ = document.createElement('div');
		this.$.id = "_loading"
		this.$.className = "loader"
		this.$.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div>'
		document.body.appendChild(this.$);
	},
     show(){
		this.$loadingNum++;
		if(!this.$||!this.$Popup){
			this.$ = document.getElementById('_loading')
			this.$Popup = document.getElementById('_Popup')
		}
		if(!this.$||!this.$Popup){
			this.create()
		}
		if(this.isShow)return
		this.$.style.display = "block"; 
		this.$Popup.style.display = "block";
		this.isShow = true;
	 },
	 close(){
		this.$loadingNum--;
		if(this.$loadingNum!==0)return
		this.$.style.display = "none"; 
		this.$Popup.style.display = "none"; 
		this.isShow = false;
	 },
	 forceClose(){
		if(!this.isShow)return
		this.$loadingNum=1;
		this.close();
	 }
}
