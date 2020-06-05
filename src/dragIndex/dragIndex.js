import React from 'react';
import ReactDOM from 'react-dom';
import Css from './dragindex.css';
import * as d3 from 'd3';


export default class dragIndex extends React.Component {

  constructor(props){
    super();
    this.state={
          isMobile:false,
          nodes : [//节点集
            {name:"江户川柯南",imgUrl:'http://img.qqzhi.com/uploads/2018-12-03/014958552.jpg'},
            {name:"工藤新一",imgUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2561355949,369093416&fm=26&gp=0.jpg'},
            {name:"毛利兰",imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591025229382&di=5d27e951ae8c32889e4126d2257c9dfd&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb812c8fcc3cec3fd980ff5afd688d43f87942732.jpg'},
            {name:"毛利小五郎",imgUrl:'http://5b0988e595225.cdn.sohucs.com/images/20190604/530ec9b5547544c5b1034a9086193ff1.jpeg'},
            {name:"目暮十三",imgUrl:'http://p2.qhimg.com/t010eeb1666d352e3ff.jpg'},
            {name:"小岛元太",imgUrl:'https://img5.51tietu.net/pic/2019-082115/jp0k3gtwq2vjp0k3gtwq2v.jpg'},
            {name:"圆谷光彦",imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590925545757&di=982e8440f7f704588f9c097593023c9a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2Fcebd0017806f5a224b90a736.jpg'},
            {name:"吉田步美",imgUrl:'http://imgsrc.baidu.com/forum/w=580;cp=tieba,10,403;ap=%BC%AA%CC%EF%B2%BD%C3%C0%B0%C9,90,411/sign=d947df23cf5c1038247ececa822af063/e8175082b2b7d0a23ce3dba4c2ef76094b369a80.jpg'},
            {name:"阿笠博士",imgUrl:'http://img.diudou.com/file/juqingjieshao/dongman/2017-08-09/79c9e5c1fecbe50c3f9257dcae28c3fb.jpg'},
            {name:"灰原哀",imgUrl:'http://n.sinaimg.cn/sinacn/w640h409/20180101/b55a-fyqefvw7401167.jpg'},
            {name:"服部平次",imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591025191742&di=4a7e54bec00dec22847a29695479625c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F08%2F20161108124224_3Ctwa.jpeg'}],
          edges : [//边集
            {source:0,target:1,relation:"同一人物",value:0.8},
            {source:0,target:2,relation:"关心",value:0.9},
            {source:0,target:3,relation:"寄住/扎他",value:1},    		
            {source:0,target:4,relation:"协助",value:1.5},    		
            {source:0,target:5,relation:"少年侦探团",value:0.9},    		
            {source:0,target:6,relation:"少年侦探团",value:1.3},    		
            {source:0,target:7,relation:"少年侦探团",value:1.2},    		
            {source:0,target:8,relation:"邻居/好友",value:1.4},    		
            {source:0,target:9,relation:"APTX4869",value:1.2},    		
            {source:0,target:10,relation:"对手/朋友",value:1.5},
            {source:1,target:2,relation:"青梅竹马",value:0.6},    		
            {source:2,target:3,relation:"父女",value:0.7},    		
            {source:3,target:4,relation:"搭档",value:0.7},
            {source:5,target:6,relation:"搭档",value:0.75}, 
            {source:6,target:7,relation:"搭档",value:0.7}, 
            {source:9,target:8,relation:"寄住",value:0.7}, 
          ]
    }



  }
  componentDidMount(){
    this.isMobile();
    this.initArgu();
    
  }

  //判断设备是否为移动端或PC端，更改壁纸
  // 判断浏览器函数
  isMobile(){
    // 移动端
    if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
      this.setState({isMobile:true})
    
    }else{// PC端
      console.log('PC')
    }
}


  //创建参数与svg
  initArgu(){

    /* const marge = {top:50,bottom:60,left:40,right:60} */
    const svg = d3.select('svg')
        .call(d3.zoom() //创建缩放行为
        .scaleExtent([0, 2])
        .on('zoom',zoom_actions)); //设置缩放范围
    const svgDom= ReactDOM.findDOMNode(document.getElementById('svg'))
    const {clientWidth,clientHeight}= svgDom
    const width = clientWidth
    const height = clientHeight
    
    const g = svg.append('g')
          .attr('width',width)
          .attr('height',height)

        /* .attr("transform","translate("+marge.top+","+marge.left+")"); */
    
    /* //模拟数据
    const nodes = [//节点集
        {name:"江户川柯南",imgUrl:'http://img.qqzhi.com/uploads/2018-12-03/014958552.jpg'},
        {name:"工藤新一",imgUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2561355949,369093416&fm=26&gp=0.jpg'},
        {name:"毛利兰",imgUrl:'http://img4.imgtn.bdimg.com/it/u=965431289,2622556019&fm=26&gp=0.jpg'},
        {name:"毛利小五郎",imgUrl:'http://5b0988e595225.cdn.sohucs.com/images/20190604/530ec9b5547544c5b1034a9086193ff1.jpeg'},
        {name:"目暮十三",imgUrl:'http://p2.qhimg.com/t010eeb1666d352e3ff.jpg'},
        {name:"小岛元太",imgUrl:'https://img5.51tietu.net/pic/2019-082115/jp0k3gtwq2vjp0k3gtwq2v.jpg'},
        {name:"圆谷光彦",imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590925545757&di=982e8440f7f704588f9c097593023c9a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2Fcebd0017806f5a224b90a736.jpg'},
        {name:"吉田步美",imgUrl:'http://imgsrc.baidu.com/forum/w=580;cp=tieba,10,403;ap=%BC%AA%CC%EF%B2%BD%C3%C0%B0%C9,90,411/sign=d947df23cf5c1038247ececa822af063/e8175082b2b7d0a23ce3dba4c2ef76094b369a80.jpg'},
        {name:"阿笠博士",imgUrl:'http://img.diudou.com/file/juqingjieshao/dongman/2017-08-09/79c9e5c1fecbe50c3f9257dcae28c3fb.jpg'},
        {name:"灰原哀",imgUrl:'http://n.sinaimg.cn/sinacn/w640h409/20180101/b55a-fyqefvw7401167.jpg'},
        {name:"服部平次",imgUrl:'https://b-ssl.duitang.com/uploads/item/201611/08/20161108124224_3Ctwa.jpeg'}];


    const edges = [//边集
      {source:0,target:1,relation:"同一人物",value:0.8},
      {source:0,target:2,relation:"关心",value:0.9},
      {source:0,target:3,relation:"寄住/扎他",value:1},    		
      {source:0,target:4,relation:"协助",value:1.5},    		
      {source:0,target:5,relation:"少年侦探团",value:0.9},    		
      {source:0,target:6,relation:"少年侦探团",value:1.3},    		
      {source:0,target:7,relation:"少年侦探团",value:1.2},    		
      {source:0,target:8,relation:"邻居/好友",value:1.4},    		
      {source:0,target:9,relation:"APTX4869",value:1.2},    		
      {source:0,target:10,relation:"对手/朋友",value:1.5},
      {source:1,target:2,relation:"青梅竹马",value:0.6},    		
      {source:2,target:3,relation:"父女",value:0.7},    		
      {source:3,target:4,relation:"搭档",value:0.7},
      {source:5,target:6,relation:"搭档",value:0.75}, 
      {source:6,target:7,relation:"搭档",value:0.7}, 
      {source:9,target:8,relation:"寄住",value:0.7}, 
    ]
 */

    //新建一个d3力导向图
    const forceSimulation = d3.forceSimulation()
        .force("link",d3.forceLink())//设置连线
        .force("charge",d3.forceManyBody().strength(-1000))//设置斥力
        .force("center",d3.forceCenter())//设置力学仿真器的中心
        .alphaDecay(0.03)//设置 alpha 衰减率.迭代150，默认0.0228
        .force("collision",d3.forceCollide(20)) //设置节点碰撞半径,避免重叠
        

    //从这里开始初始化力导向图，也就是传入数据
    //生成节点数据
    forceSimulation.nodes(this.state.nodes)
        .on("tick",ticked);

    //生成边集数据
    forceSimulation.force("link")
    		.links(this.state.edges)
    		.distance(function(d){//每一边的长度
    			return d.value*170;
        }) 
        
    //设置图形的中心位置	
    forceSimulation.force("center")
        .x(width/2)
        .y(height/2);

    // defs  <defs>标签的内容不会显示，只有调用的时候才显示
    const defs=g.append('defs');
    //添加箭头
    const arrowMarker = defs.append('marker')
      .attr('id', 'arrow')
      .attr('markerUnits', 'strokeWidth')
      .attr('markerWidth', '15')
      .attr('markerHeight', '18')
      .attr('viewBox', '0 0 12 12')
      .attr('refX', '30')
      .attr('refY', '6')
      .attr('orient', 'auto');

    const arrow_path = 'M2,2 L10,6 L2,10 L6,6 L2,2';
    /* M 2,2 – 把笔落下，放在2,2处
      L 10,6 – 从起点2 2出发绘制一条直线到10,6处
      L 2,10 – 从起点10,6出发绘制一条直线到L2,10处
      L 6,6 – 从起点2,10出发绘制一条直线到L6,6处
      L L2,2 – 从起点6,6出发绘制一条直线到L2,2处*/

    arrowMarker.append('path')
      .attr('d', arrow_path)
      .attr('fill', '#999');   

    //得到节点和边数据后开始绘制边。因为d3各元素有层级关系，先绘制的在下面，所以应该先绘制边
    const links = g.append('g')   		
          .selectAll("line")    		
          .data(this.state.edges)    		
          .enter()    		
          .append("line")    		
          /* .attr("stroke",function(d,i){    			
            return colorScale(i);    		
          }) */    		
          .attr("strokewidth",1) 
          .attr('stroke','#fff')
          .attr('stroke-dasharray', 3, 2)
          .attr('marker-end', 'url(#arrow)')

      //建立用来放在每个节点和对应文字的分组<g>
    const gs = g.selectAll(".circleText")    		
          .data(this.state.nodes)    		
          .enter()    		
          .append("g")
          .on('click',(d,i)=>{
            console.log(d)
          })    		
          /* .attr("transform",function(d,i){  			
            let cirX = d.x;    			
            let cirY = d.y;    			
            return "translate("+cirX+","+cirY+")";    		
          })   */  		
          .call(d3.drag()    			
            .on("start",started)    			
            .on("drag",dragged)    			
            .on("end",ended)    		
          )
          

      //绘制节点
    gs.append("circle")
          .attr("r",25)
          .attr('stroke','white')//边框
          .attr('stroke-width','1.4')//边框宽度
          .attr('fill',(d,i)=>{
            const catpattern = defs.attr('id', 'imgdefs').append('pattern')
              .attr('id', `catpattern${i}`)
              .attr('height', 3)
              .attr('width', 3)
            catpattern.append('image')
              .attr('x', -14)
              .attr('y', -12)
              .attr('width', 95)
              .attr('height', 90)
              .attr('xlink:href', d.imgUrl)
              .attr('transform','scale(0.7)')

          return `url(#catpattern${i})`;
          })
          
      
      //绘制文字
    gs.append("text")
          .attr("x",29)
          .attr("y",4)
          .text(d => d.name)
          .attr('fill','#DED7D6  ')
          .attr('font-size','12')
    
    //添加关系嵌板
    const panel=g.selectAll(".relationPanel")
      .data(this.state.edges)    		
      .enter() 
      .append("rect")
      .attr('class', 'relationPanel')
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('width', 50)
      .attr('height', 16)
      .style('fill', '#fff')
      .style('stroke', '#aaa')
      	   		

    //添加relation
    const panelText=g.selectAll(".panelText")
      .data(this.state.edges)    		
      .enter()
      .append('text') 
      .attr('class', 'panelText')
      .attr("x",5)
      .attr("y",10)
      .text(d => d.relation)
      .attr('fill', '000')
      .attr('font-size', '8px')
      .attr('color','#ccc')
      
        
      //ticked函数
      function ticked(){
          links
            .attr("x1",function(d){return d.source.x;})
            .attr("y1",function(d){return d.source.y;})    			
            .attr("x2",function(d){return d.target.x;})    			
            .attr("y2",function(d){return d.target.y;});    

          gs    			
            .attr("transform",function(d) { 
              return "translate(" + d.x + "," + d.y + ")"
            });  

          panel
            .attr("x",d=>{return (d.source.x + d.target.x)/2-25})
            .attr("y",d=>{return (d.source.y + d.target.y)/2-8})
            .attr("transform",function(d,i) { 
              const lineWidth = Math.sqrt((d.source.x - d.target.x) * (d.source.x - d.target.x) + (d.source.y - d.target.y) * (d.source.y - d.target.y))
              let angle = Math.floor(Math.acos((d.source.x - d.target.x) / lineWidth) / Math.PI * 180)
              angle = angle ? (d.source.y < d.target.y) ? -angle : angle : 0
              return `rotate(${angle},${(d.source.x + d.target.x) / 2},${(d.source.y + d.target.y) / 2})`
            });

          panelText
            .attr("x",d=>{return (d.source.x + d.target.x)/2-20})
            .attr("y",d=>{return (d.source.y + d.target.y)/2+3})
            .attr("transform",function(d,i) { 
              const lineWidth = Math.sqrt((d.source.x - d.target.x) * (d.source.x - d.target.x) + (d.source.y - d.target.y) * (d.source.y - d.target.y))
              let angle = Math.floor(Math.asin((d.source.y - d.target.y) / lineWidth) / Math.PI * 180)
              angle = angle ? (d.source.x < d.target.x) ? -angle : angle : 0
              return `rotate(${angle},${(d.source.x + d.target.x) / 2},${(d.source.y + d.target.y) / 2})`
            });
            
      }

      //设置拖拽的started、drag、ended函数
      function started(d){    		
          if(!d3.event.active){    			
            forceSimulation.alphaTarget(0.7).restart();//设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0，1]    		
          }    		
          d.fx = d.x;    		
          d.fy = d.y;    	
        }    	
        function dragged(d){    		
          d.fx = d3.event.x;    		
          d.fy = d3.event.y;    	
        }    	
        function ended(d){    		
          if(!d3.event.active){    			
            forceSimulation.alphaTarget(0);    		
          }    		
          d.fx = null;    		
          d.fy = null;    	
      }

      //缩放函数
      function zoom_actions() { 
        //限定缩放比例
        if(d3.event.transform.k >=2){
          d3.event.transform.k =2
        }else if(d3.event.transform.k <= 0.6){
          d3.event.transform.k =0.6
        }

        //设定拖拽范围
        if(d3.event.transform.x <=width*-0.5){
          d3.event.transform.x =width*-0.5
        }else if(d3.event.transform.x >= width*0.5){
          d3.event.transform.x = width/2
        }
        if(d3.event.transform.y <=height*-0.5){
          d3.event.transform.y =height*-0.5
        }else if(d3.event.transform.y >= height*0.5){
          d3.event.transform.y = height/2
        }
        
        g.attr("transform", d3.event.transform)
      }

  }
  render(){
    return (
    <div className={this.state.isMobile?Css['mobile']:Css['main']} ref='main'>
        <svg id="svg" ref='svg'></svg>
    </div>
    )
  }
}


