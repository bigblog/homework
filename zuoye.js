var ctboxs=document.getElementById('ct1');
var ctbox=ct1.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var titleWidth=60;
var contentWidth=590;
for(var i=0;i<title.length;i++){
	title[i].index=i;
	title[i].onclick=function(){
		for(var i=0;i<ctbox.length;i++){
			index=this.index;
			if(i<=index){
			ctbox[i].style.left=i*titleWidth+'px';
			}else{
				ctbox[i].style.left=i*titleWidth+contentWidth+'px';
			}
		}
	}
}
// 点击的序号记为n
// 则ctbox序号小于等于n的时候
// ctbox的left的值计算公式为序号*titleWidth
// ctbox序号大于n的时候
// ctbox的left的值计算公式为*titleWidth=contentWidth
/*点击第0号标题 0*titleWidth=0
0 650px 710px 770px
点击第1号标题 1*titleWidth=60
0 60px 710px 770px
点击第2号标题 2*titleWidth=120
0 60px 120px 770px
点击第3个标题 3*titleWidth=180
0 60px 120px 770px
*/