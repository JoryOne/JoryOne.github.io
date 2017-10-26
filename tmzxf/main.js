Vue.use(VueMaterial);

function getX(obj){ 
	var parObj=obj; 
	var left=obj.offsetLeft; 
	while(parObj=parObj.offsetParent){ 
	    left+=parObj.offsetLeft; 
	} 
	return left; 
}  

window.calCoord = function(event){
   var top,left,oDiv; 
    oDiv=document.getElementById("processBar"); 
    left=getX(oDiv); 
    var aaa = event.clientX-left+document.documentElement.scrollLeft +1; 
    mainApp.process = aaa/oDiv.clientWidth * 100;
    mainApp.proValue.left = mainApp.process + '%';
}
var mainApp = new Vue({
  el: '#app',
  data () {
	    return {
	      list: [
	        {'name': '有梦为马', 'time': '2014-02-20'},
	        {'name': '伴我行天涯', 'time': '2014-03-03'},
	        {'name': '流浪歌手的情人·上', 'time': '2014-04-12'},
	        {'name': '流浪歌手的情人·下', 'time': '2014-05-01'},
	        {'name': '给你一颗糖', 'time': '2014-06-09'},
	        {'name': '阳光晒不到的地方', 'time': '2014-07-30'},
	        {'name': '放任自流的小时光', 'time': '2014-09-18'},
	        {'name': '我的小姑娘', 'time': '2014-10-19'},
	        {'name': '十二月党人的妻子', 'time': '2014-12-25'},
	        {'name': '她叛逃的东西叫宿命', 'time': '2015-03-11'},
	        {'name': '西藏往事（一）', 'time': '2015-06-25'},
	        {'name': '西藏往事（二）', 'time': '2015-10-10'},
	        {'name': '西藏往事（三）', 'time': '2016-03-06'},
	        {'name': '不用手机的女孩', 'time': '2016-11-02'}
	      ],
	      rating7:[0,10],
	      process:30,
	      proValue : {
            left : '30%'
          }
	    }
    }
})