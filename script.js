var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var titleHeight=60;
var contentHeight=470;
var n=0;
for(var i=0;i<title.length;i++){
	title[i].index=i;
	title[i].onclick=function(){
		for(var i=0;i<ctbox.length;i++){
			n=this.index;
			if(i<=n){
				ctbox[i].style.top=i*titleHeight+'px';
			}else{
				ctbox[i].style.top=i*titleHeight+contentHeight+'px';
			}
		}
	}
}