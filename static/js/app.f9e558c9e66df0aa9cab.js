webpackJsonp([1,0],[function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=i(2),a=s(n),r=i(3),c=s(r),o=i(64),l=s(o);new a.default({router:c.default,render:function(t){return t(l.default)}}).$mount("#app")},function(t,e,i){t.exports=i.p+"static/img/logo.9effeed.jpg"},,function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(2),a=s(n),r=i(88),c=s(r),o=i(68),l=s(o),d=i(66),u=s(d),p=i(72),f=s(p),v=i(70),h=s(v);a.default.use(c.default);var m=function(t,e,i){if(i)return i;var s={};return t.hash&&(s.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(s.x=0,s.y=0),s};e.default=new c.default({mode:"history",scrollBehavior:m,hashbang:!1,routes:[{path:"/home",component:l.default},{path:"/contact",component:u.default},{path:"/projects",component:f.default},{path:"/mooc",component:h.default},{path:"/:id?",redirect:"/home"}]})},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(71),a=s(n),r=i(67),c=s(r),o=i(73),l=s(o);e.default={name:"app",components:{Navbar:a.default,Footers:c.default,StretchyNav:l.default},data:function(){return{scroll:!1}},created:function(){var t=this;document.addEventListener("scroll",function(){t.scroll=(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop)>400})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title","src"],name:"backtitle",data:function(){var t="url(",e=")";return{img:t.concat(this.src).concat(e)}}}},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(65),a=s(n),r=i(74),c=s(r);e.default={name:"mooc",components:{BackTitle:a.default,Timeline:c.default},data:function(){return{time:{title:"我们走过的道路",src:i(28)},saepa11:{title:"我们的团队",src:i(29)}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"footer",data:function(){return{socials:[{title:"社会认可",texts:["清华大学十佳学生协会","清华百年树人德年公益文化奖","北京市志愿服务项目大赛金奖","北京高校优秀学生社团称号","阿克苏诺贝尔全国大学生社会公益比赛金奖","清华大学暑期社会实践金奖","清华大学学生素质拓展计划金奖"]},{title:"媒体报道",texts:["社会媒体专题报道超过20篇，人物采访超过10篇。包含《参考消息》、《新京报》、《京华时报》、《中国青年报》、《中国教育报》、《紫荆报》、清华主页、新浪教育和网易公益等媒体报道。","《清华最帅工科男》视频新浪播放次数达2,496,817，被酷6等各大视频网站、洛阳晚报等各大报纸转载报道。"]},{title:"合作单位",texts:["清华大学扶贫办公室","曾宪备基金会","21世纪教育研究院","世界和平论坛 为中国而教","友成基金会 萝卜太辣","同方人寿 金雅拓 戴尔"]}]}}}},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(69),a=s(n);e.default={name:"home",components:{Jumbotron:a.default},data:function(){var t=") no-repeat center center";return{items:[{url:i(30),alt:"公益创造快乐",text1:"公益是一门",text2:"大学必修课"},{url:i(31),alt:"知识改变命运",text1:"　知识改变命运，",text2:"　实践检验真知！"},{url:i(32),alt:"一个团队，一起努力",text1:"　一个团队，",text2:"　一起努力！"}],textSides:["url("+i(39)+t,"url("+i(40)+t,"url("+i(41)+t,"url("+i(42)+t]}}}},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(75),a=s(n);e.default={name:"jumbotron",data:function(){var t=[i(43),i(44),i(45),i(46)],e="url(",s=")";return{someList:[{title:"",style:{background:e.concat(t[0]).concat(s)}},{title:"",style:{background:e.concat(t[1]).concat(s)}},{title:"",style:{background:e.concat(t[2]).concat(s)}},{title:"",style:{background:e.concat(t[3]).concat(s)}}],sliderinit:{currentPage:0,thresholdTime:500,thresholdDistance:100,loop:!0,autoplay:4e3}}},components:{slider:a.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mooc",components:{},data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navbar",data:function(){return{items:[{text:"主页",path:"/home"},{text:"项目介绍",path:"/projects"},{text:"MOOC",path:"/mooc"},{text:"学方论坛",path:"http://ixuefang.cn/"},{text:"关于我们",path:"/contact"}]}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{scroll:!1,items:["周末支教","享读计划","梦想课堂","筑梦清华","任务魔方","S-Lab","电脑传爱","撒爱论坛"],projects:[{title:"周末支教",subtitle:"用周末不长的时间，做一生难忘的事情",text:"周末支教在清华大学教育扶贫办公室的帮助下，协会与河南滑县抗大初中、河南滑县新区实验小学、河北魏县第一中学等共十余所中小学建立了长期合作关系，定期在当地开展支教活动。每期周末支教活动在教学站进行英语培训、励志教育以及成长经历交流等丰富多彩的教学内容。",boxes:[{url:i(61),alt:"周末支教",title:"项目成果",text:'<div>截至2016年10月，累计期数逾140次，累计培训清华志愿者超过1200人次，累计受益学生逾十四万人，累计给当地孩子带去超过数万页的教学材料。</div><div class="bold">2016年获北京市志愿服务项目大赛金奖</div><div class="bold">2015年获“北京市小微志愿服务项目支持计划”支持</div><div class="bold">2014-2015学年清华大学学生社团十佳活动（撒爱·支教故事大赛）</div>',order:!0}]},{title:"享读计划",subtitle:"愿你们能以书为伴，生活充满阳光",text:"2013年始，周末支教部策划推出了将短期支教影响长期化的子项目——“享读计划”。这是一项以阅读为主题的系列性支教活动，我们在每年暑假期间为学校建立小型图书室或建立班级图书角，并依托这一载体开展一系列阅读类课程与活动，旨在帮助当地学生培养良好阅读习惯，拓展学生视野，提高学生独立思考与自我表达能力，并引导其形成积极向上、开放进取的人生观与世界观。",boxes:[{url:i(59),alt:"享读计划",title:"项目成果",text:'<div>截至2016年暑期，已开展三期享读活动，受益学生千余人，累计给学生带去数千张教学材料，为河南商丘宁陵赵村一中建立图书室并得到学生充分利用；为河北灵寿中学和河北平乡二中增添班级图书角，拓展阅读面。</div><div class="bold">2014年获“清华大学实践梦想计划”支持。</div>',order:!1}]},{title:"梦想课堂",subtitle:"梦想，是给孩子最好的礼物。",text:"梦想课堂项目源于2011年电脑传爱部的一次调研，发现有很多农民工子弟在周末得不到父母的陪伴，同时他们的教育结构中也缺乏素质教育、兴趣教育等必须的内容，因而怀着为孩子播种梦想、为公益搭建平台、帮助大学生更多地了解社会的初衷，逐步形成了现在规模较大、运作规范的梦想课堂活动。梦想课堂活动主要致力于运用周末的时间，利用清华大学班级素拓的形式，对没有父母在侧的农民工孩子起到一个陪伴的作用；同时，通过开展音乐、美术、体育、棋类、团队合作、自信力培养、科技创新、英语口语等丰富多彩的课程，以实现素质教育的理念和目标。",boxes:[{url:i(55),alt:"周末支教",title:"项目成果",text:'<div>从2011年起，我们已在五年中成功举办约<span class="bold">80次活动</span>，受益学生<span class="bold">超三千人</span>，并且和明圆小学、京顺学校等农民工子弟小学建立了稳定的合作关系，学校和学生对清华学生的到来均表现出很大的热情。</div><div>梦想课堂项目迄今为止已多次获得<span class="bold">清华大学校级素拓项目金奖</span>，并获得<span class="bold">2013阿克苏诺贝尔中国大学生社会公益奖金奖</span>。在清华大学校方与学生之中影响力颇为深远。 </div>',order:!0}]},{title:"筑梦清华",subtitle:"寻梦，追梦！",text:"筑梦清华作为梦想课堂的子项目,围绕“寻梦、追梦”的核心,带领孩子们走进清华,感受清华独特的学术氛围,领略清华百年名校的人文气息。志愿者一对一地带领孩子游览清华校园,讲述清华历史,分享清华名人的励志故事,组织各种游戏等等。我们想用爱去感染孩子们,让他们相信“心有多大,舞台就有多大”，让他们在清华园中,感受“自强不息,厚德载物”的清华精神,感受“行胜于言”的务实学风。同时激励孩子们努力学习,积极向上,奋力拼搏,让“清华梦”入驻孩子们的心间。与清华志愿者们的零距离接触，也可以潜移默化地对他们产生积极向上的影响。此外，筑梦清华也在尝试在校外的科技馆开展活动，帮助孩子们了解科技的发展历程，感受科技的神秘魅力，增加对科技的热爱，也增进志愿者与孩子们的互动交流。",boxes:[{url:i(60),alt:"筑梦清华",title:"项目成果",text:'<div>截至2016年10月，累计期数逾140次，累计培训清华志愿者超过1200人次，累计受益学生逾十四万人，累计给当地孩子带去超过数万页的教学材料。</div><div class="bold">2016年获北京市志愿服务项目大赛金奖</div><div class="bold">2015年获“北京市小微志愿服务项目支持计划”支持</div><div class="bold">2014-2015学年清华大学学生社团十佳活动（撒爱·支教故事大赛）</div>',order:!1}]},{title:"任务魔方",subtitle:"人人微公益，小小的力量也能造就大大的可能",text:"<div>任务魔方是清华大学学生教育扶贫协会的线上活动。项目依托微信平台，借鉴微公益理念，力图打造校园线上微公益平台。通过微公益极大降低公益的门槛，提升同学们的公益参与度，及时反馈公益成果和提升公益感受，促进同学们养成公益的习惯，从而使增强校园的公益氛围。任务魔方目前正在运行公益助跑项目，即参与同学可以用自己跑步的里程兑换成捐献金额或火车票里程的方式，来为孩子们献出一份爱心。该项目现借助线上的公益平台和线下的集体助跑活动收集里程，并与多个学生组织进行合作，为筑梦清华、撒爱励志奖学金等活动进行前期宣传。目前任务魔方已获得清华大学萌芽计划支持。公益助跑活动自2015年11起已圆满完成三期。</div>",boxes:[{url:i(51),alt:"任务魔方",title:"项目成果",text:"2015年12月，SAEPA与金雅拓公司联合开展了公益助跑活动，让六位来自河北魏县一中，家庭贫困但学习优秀的初中生迈出了追求更高、更远梦想的第一步。“你跑一公里，助梦一公里”校园宣传活动的成功也让我们看到了清华学子高涨的公益热情。2016年，公益助跑第二期顺利开展，魏县一中的7名师生来到北京，继续寻梦。",order:!0}]},{title:"S-Lab",subtitle:"公益，需要我们去创新",text:"公益不只是捐款助老、义务支教，公益也可以新奇有趣。公益发展的新趋势,让我们聚焦平台支持的能量。在信息碎片化、受众多元化的时代,如何集聚资源、发挥最大效益,是公益行业不断探索的课题。协会的发展离不开新的创意，S-lab正式扮演着协会公益孵化器、实验室和先驱者的角色，致力于实践新的公益想法，探索公益的新领域。",boxes:[{url:i(58),alt:"雅韵心传",title:"雅韵心传",text:"<div>雅韵心传是由梦想课堂延伸出的一种较为长期和体系性的支教尝试，主要是针对农民工子弟小学开展一学期的支教活动，希望实现“寓教于乐”的目标，也帮助志愿者与孩子建立较深的友谊，将活动的影响程度深化、长久化。现在承担的课程是传统文化课，我们想用传统文化知识去感染孩子们，帮助他们形成良好的品德，培养他们的人文底蕴，鼓励他们树立远大的志向和人生理想。 </div>",order:!1},{url:i(50),alt:"春风计划",title:"春风计划",text:"<div>春风计划致力于打造一个有成效、有特点、可持久的大学生社会帮教活动。就项目本身而言，我们希望通过和狱方合作，找到既能有效帮助服刑人员改邪归正，又适合大学生参与的社会帮教模式。<div>通过这项活动，我们一方面希望帮助服刑人员树立正确的意识形态，感受到社会的温暖，促进服刑人员积极改造；另一方面，希望能够借助协会和清华大学的社会影响力，促进社会对帮教活动的重视，最终帮助服刑人员更好地回归社会。</div><div>目前，春风计划和北京市第二监狱取得了合作关系，将主要针对参加入监教育的人员进行心理辅导，以更好地帮助他们度过适应期。第一期活动将于2016年11月—12月推出。</div>",order:!0},{url:i(52),alt:"直播支教",title:"直播支教",text:"直播支教致力于解决支教过程中空间的距离，更好地方便志愿者进行支教。本学期SAEPA直播支教项目组与途梦（Tomoroe）课堂进行合作，联合开展了“途梦-清华SAEPA学霸分享”活动。这个活动面对贫困地区在校的中学生，以线上直播的方式，为远方的孩子们带来一场学习经验分享谈。志愿者将通过QQ视频的方式对学生们进行远程直播支教。每次授课面向3所学校（约200名学生），讲解控制在40分钟左右，并预留20分钟进行答疑。另外，志愿者亦可以通过线上QQ群答疑的方式对同学们进行学习方法的指导。",order:!1},{url:i(57),alt:"心愿认领",title:"心愿认领",text:" <div>心愿认领作为一种创新的活动方式，致力于帮助孩子们实现心愿，为其送去快乐与温暖，并同时让他们感受到来自社会的关注，以此激励他们努力学习，回馈社会。活动方式主要是收集农民工子弟学校学生的心愿，进行整理并分析心愿的可实现性，然后在固定时间及场所，通过心愿墙的形式面向清华全校学生开展心愿认领活动，最后确保心愿的实现。 </div>",order:!0}]},{title:"电脑传爱",subtitle:"用周末不长的时间，做一生难忘的事情",text:"<div>在互联网与科技高速发展的今天，我们致力于“互联网+科技+公益”的公益模式的探索与推行，捐献微机室，机器人普及教育，MOOC教学……我们不断探索新的理念与新的模式，我们让高新技术不再遥远。</div><div>SAEPA电脑传爱部成立于2010年，历年来曾与戴尔公司、国维芯达科技有限公司、美克美家家居连锁有限公司、中视协(北京)演艺文化有限公司、新浪公司、金雅拓（北京）智能卡科技有限公司等知名企业合作，在内蒙古、贵州、云南和北京周边等地区为贫困子弟学校捐赠多达13个微机室，多次获得校级与国家级实践奖项。</div><div>同时，鉴于相当部分合作的贫困学校对教学资源的需求远胜于对硬件资源的需求，部分学校的硬件设施也足以支持网络课程甚至直播支教，项目将工作重心转移到MOOC教学上。2016年下半年，萝卜太辣与SAEPA再次合作，以MOOC结合线下实践课为形式，在合适的中学推行机器人教育，迈出转型的第一步。</div>",boxes:[{url:i(53),alt:"周末支教",title:"项目成果",text:'<div>截至2016年10月，累计期数逾140次，累计培训清华志愿者超过1200人次，累计受益学生逾十四万人，累计给当地孩子带去超过数万页的教学材料。</div><div class="bold">2016年获北京市志愿服务项目大赛金奖</div><div class="bold">2015年获“北京市小微志愿服务项目支持计划”支持</div><div class="bold">2014-2015学年清华大学学生社团十佳活动（撒爱·支教故事大赛）</div>',order:!1}]},{title:"撒爱论坛",subtitle:"一起探讨公益的新形式，新未来。",text:"协会每年一度举办撒爱论坛，邀请包括学术、社会企业、公益组织、基金会和热爱共益的学生进行一番有关公益创新的探讨，通过这样一个公众论坛进行思想碰撞，共同交流。在撒爱论坛的带领下，通过宣传和活动的参与增加公益的氛围，鼓励更多的人参与关注公益。",boxes:[{url:i(56),alt:"撒爱论坛",title:"项目成果",text:"第一届撒爱论坛为支教志愿者、社会公益组织、基金会等公益力量搭建了交流的平台，在交流与讨论中，各方形成了对大学生支教现状的共识，并在此基础上对支教中存在的问题进行了总结反思，提出了切实可行的解决方案，有利于志愿者的不断成长，推进公益组织发展形式的改进与创新。此外，“撒爱论坛”希望能通过论坛的交流，一定程度上化解部分志愿者对公益的质疑，鼓励更多的人参与教育扶贫、关注社会公益事业。 ",order:!0}]}]}},created:function(){var t=this;document.addEventListener("scroll",function(){t.scroll=(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop)>400})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["scroll"],name:"strechynav",data:function(){return{items:[{text:"主页",path:"/home"},{text:"项目介绍",path:"/projects"},{text:"MOOC",path:"/mooc"},{text:"学方论坛",path:"http://ixuefang.cn/"},{text:"关于我们",path:"/contact"}],toggle:!1}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"timeline",data:function(){return{title:"This is my Timeline!",events:[{time:"2006.12",detail:"教育扶贫志愿者协会成立。",hidden:!1},{time:"2008.05",detail:"“周末支教”第一期活动成功开展，周末支教项目诞生。"},{time:"2009.05",detail:"“电脑传爱”项目电脑募捐活动展开，电脑传爱项目诞生。",hidden:!1},{time:"2009.08",detail:"“电脑传爱”为内蒙古太仆寺旗兴盛小学捐建了第一间微机室。",hidden:!1},{time:"2012.08",detail:"“电脑传爱”项目获得首届阿克苏诺贝尔全国大学生社会公益比赛全国金奖(前五名荣誉)。",hidden:!1},{hidden:!1,time:"2012.10",detail:"第一次“梦想课堂”活动在北京市顺义区清红蓝小学开展，梦想课堂项目诞生。"},{hidden:!1,time:"2013.08",detail:"“梦想课堂”项目获得阿克苏诺贝尔中国大学生社会公益奖金奖(前五名荣誉)。"},{hidden:!1,time:"2013.09",detail:'“梦想课堂”项目获得清华大学秋学生素质拓展计划金奖。<br>“电脑传爱”项目获得清华大学“精品素质拓展项目”。<br>"电脑传爱"项目成为新浪微博"圆梦中国"长期线上公益活动员组织课余时光第一期活动开展，课余时光项目诞生。'},{hidden:!1,time:"2013.11",detail:"“面对面”农民工子弟专题访谈举行第一期活动，“面对面”项目诞生。"},{hidden:!1,time:"2014.04",detail:"任务魔方微信平台试运行，任务魔方项目诞生。"},{hidden:!1,time:"2014.08",detail:"“享读计划”第一期活动在河南商丘宁陵赵村一中举行，享读计划项目诞生。"},{hidden:!1,time:"2014.10",detail:"成功举办首届“撒爱支教故事大赛”。<br>电脑传爱获清华大学暑期实践学生最佳实践奖、二金星流动杯荣誉。"},{hidden:!1,time:"2014.12",detail:"成功举办首届撒爱论坛。"},{hidden:!1,time:"2015.05",detail:"“秀出你的公益STYLE”校园公益主题嘉年华。"},{hidden:!1,time:"2016.10",detail:"“多跑一步，多爱一分”公益助跑活动举办。"},{hidden:!1,time:"2016.12",detail:"SAEPA十周年庆典。"}]}},created:function(){var t=this;document.addEventListener("scroll",function(){for(var e=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,i=0;i<t.events.length;i++){var s=document.getElementById("time-"+i).offsetTop-window.screen.height/2;console.log(s),t.events[i].hidden=s>e}console.log("\n")})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["sliderinit","pages"],data:function(){return{basicdata:{poswidth:"0",posheight:"0",start:{},end:{},tracking:!1,animation:{"animation-ease":!1},containerClass:{"swiper-container-vertical":!1},setIntervalid:""}}},computed:{styleobj:function(){return{transform:"translate3D("+this.basicdata.poswidth+","+this.basicdata.posheight+",0)"}},pagenums:function(){return this.pages.length},currentWidth:{get:function(){var t=0,e=void 0,i=this.sliderinit.currentPage-1;this.sliderinit.loop&&(i=this.sliderinit.currentPage);for(var s in this.$el.children)/slider-wrapper/gi.test(this.$el.children[s].className)&&(e=this.$el.children[s]);var n=e.children;for(var a in n)a<=i&&(t+=n[a].offsetWidth,t+=parseInt(n[a].style.marginRight.length?n[a].style.marginRight:0),t+=parseInt(n[a].style.marginLeft.length?n[a].style.marginLeft:0));return t},set:function(t){return t}},currentHeight:function(){var t=0,e=void 0,i=this.sliderinit.currentPage-1;this.sliderinit.loop&&(i=this.sliderinit.currentPage);for(var s in this.$el.children)/slider-wrapper/gi.test(this.$el.children[s].className)&&(e=this.$el.children[s]);var n=e.children;for(var a in n)a<=i&&(t+=n[a].offsetHeight,t+=parseInt(n[a].style.marginTop.length?n[a].style.marginTop:0),t+=parseInt(n[a].style.marginBottom.length?n[a].style.marginBottom:0));return t}},mounted:function(){var t=this,e=this;e.slide(this.sliderinit.currentPage,"animationnone"),e.$on("slideTo",function(e){t.slide(e)}),e.$on("slideNext",function(){t.next()}),e.$on("slidePre",function(){t.pre()}),e.clock().begin(e),"vertical"==this.sliderinit.direction&&(this.basicdata.containerClass["swiper-container-vertical"]=!0)},methods:{swipeStart:function(t){var e=this;if(this.basicdata.animation["animation-ease"]=!1,this.sliderinit.autoplay){var i=this;this.clock().stop(i)}if(document.addEventListener("touchmove",e.preventDefault(t)),"touchstart"===t.type){if(t.touches.length>1)return void(this.basicdata.tracking=!1);this.basicdata.tracking=!0,this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.targetTouches[0].clientX,this.basicdata.start.y=t.targetTouches[0].clientY,this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY}else this.basicdata.tracking=!0,this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.clientX,this.basicdata.start.y=t.clientY,this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY},swipeMove:function(t){if(this.basicdata.tracking){if("touchmove"===t.type?(t.preventDefault(),this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY):(t.preventDefault(),this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY),"vertical"==this.sliderinit.direction)return void(this.basicdata.posheight=-this.currentHeight+this.basicdata.end.y-this.basicdata.start.y+"px");this.basicdata.poswidth=-this.currentWidth+this.basicdata.end.x-this.basicdata.start.x+"px"}},swipeEnd:function(t){var e=this,i=this;this.basicdata.tracking=!1;var s=(new Date).getTime(),n=s-this.basicdata.start.t,a=this.basicdata.end.x-this.basicdata.start.x,r=this.basicdata.end.y-this.basicdata.start.y;return this.sliderinit.autoplay&&!function(){var t=e;setTimeout(function(){t.clock().begin(t)},350)}(),document.removeEventListener("touchmove",i.preventDefault(t)),n>this.sliderinit.thresholdTime?void this.slide(this.sliderinit.currentPage):"vertical"!=this.sliderinit.direction?a>this.sliderinit.thresholdDistance&&Math.abs(r)<this.sliderinit.thresholdDistance?void this.pre():-a>this.sliderinit.thresholdDistance&&Math.abs(r)<this.sliderinit.thresholdDistance?void this.next():void this.slide(this.sliderinit.currentPage):r>this.sliderinit.thresholdDistance&&Math.abs(a)<this.sliderinit.thresholdDistance?void this.pre():-r>this.sliderinit.thresholdDistance&&Math.abs(a)<this.sliderinit.thresholdDistance?void this.next():void this.slide(this.sliderinit.currentPage)},pre:function(){0!=this.sliderinit.currentPage?(this.sliderinit.currentPage-=1,this.slide()):this.sliderinit.loop?(this.sliderinit.currentPage-=1,this.slide(this.sliderinit.currentPage,"loop")):this.slide()},next:function(){this.sliderinit.currentPage!=this.pagenums-1?(this.sliderinit.currentPage+=1,this.slide()):this.sliderinit.loop?(this.sliderinit.currentPage+=1,this.slide(this.sliderinit.currentPage,"loop")):this.slide()},slide:function(t,e){var i=this;return this.basicdata.animation["animation-ease"]=!0,"animationnone"==e&&(this.basicdata.animation["animation-ease"]=!1),(t||0==t)&&(this.sliderinit.currentPage=t),"vertical"==this.sliderinit.direction?this.basicdata.posheight=-this.currentHeight+"px":this.basicdata.poswidth=-this.currentWidth+"px","loop"==e?void setTimeout(function(){i.sliderinit.currentPage==-1?i.slide(i.pagenums-1,"animationnone"):i.slide(0,"animationnone")},200):void this.$emit("slide",this.sliderinit.currentPage)},clock:function(){return{begin:function(t){t.sliderinit.autoplay&&(t.setIntervalid=setInterval(function(){t.next(),t.sliderinit.currentPage!=t.pagenums-1||t.sliderinit.loop||clearInterval(t.setIntervalid)},t.sliderinit.autoplay))},stop:function(t){clearInterval(t.setIntervalid)}}},preventDefault:function(t){t.preventDefault()}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){t.exports=i.p+"static/img/1.c8b090b.jpg"},function(t,e,i){t.exports=i.p+"static/img/2.6cabec8.jpg"},function(t,e,i){t.exports=i.p+"static/img/5.367fa0a.png"},function(t,e,i){t.exports=i.p+"static/img/6.bac0ca3.png"},function(t,e,i){t.exports=i.p+"static/img/7.fc37814.png"},function(t,e,i){t.exports=i.p+"static/img/book.9cf4ee7.png"},function(t,e,i){t.exports=i.p+"static/img/qrcode.a5a0c75.jpg"},function(t,e,i){t.exports=i.p+"static/img/cx1.09e763d.png"},function(t,e,i){t.exports=i.p+"static/img/cx2.a091777.png"},function(t,e,i){t.exports=i.p+"static/img/dnca1.f008bf9.png"},function(t,e,i){t.exports=i.p+"static/img/dnca2.21473e8.png"},function(t,e,i){t.exports=i.p+"static/img/text1.3a98c6e.jpg"},function(t,e,i){t.exports=i.p+"static/img/text2.1409601.jpg"},function(t,e,i){t.exports=i.p+"static/img/text3.b68edd7.jpg"},function(t,e,i){t.exports=i.p+"static/img/text4.e0fb187.jpg"},function(t,e,i){t.exports=i.p+"static/img/4.0c1b83f.jpg"},function(t,e,i){t.exports=i.p+"static/img/5.1fa3bbd.jpg"},function(t,e,i){t.exports=i.p+"static/img/6.7e7d3cd.jpg"},function(t,e,i){t.exports=i.p+"static/img/7.072a4c5.jpg"},function(t,e,i){t.exports=i.p+"static/img/mooc.2319f81.jpg"},function(t,e,i){t.exports=i.p+"static/img/mxkt1.a30f498.png"},function(t,e,i){t.exports=i.p+"static/img/mxkt2.d3e7d19.png"},function(t,e,i){t.exports=i.p+"static/img/cfjh.dc6bfb0.jpg"},function(t,e,i){t.exports=i.p+"static/img/rwmf.15b7d10.png"},function(t,e,i){t.exports=i.p+"static/img/zbzj.1c19949.png"},function(t,e,i){t.exports=i.p+"static/img/1.20be02a.jpg"},function(t,e,i){t.exports=i.p+"static/img/jumb.68871cd.jpg"},function(t,e,i){t.exports=i.p+"static/img/1.50635c1.jpg"},function(t,e,i){t.exports=i.p+"static/img/1.4b1204c.jpg"},function(t,e,i){t.exports=i.p+"static/img/xyrl.78cae9f.jpg"},function(t,e,i){t.exports=i.p+"static/img/yyxc.3b423c7.jpg"},function(t,e,i){t.exports=i.p+"static/img/1.c8664d9.jpg"},function(t,e,i){t.exports=i.p+"static/img/4.afc4503.jpg"},function(t,e,i){t.exports=i.p+"static/img/1.d9e5572.png"},function(t,e,i){t.exports=i.p+"static/img/zmzj1.d3bf7d0.png"},function(t,e,i){t.exports=i.p+"static/img/zmzj2.a535c5f.png"},function(t,e,i){var s,n;i(19),s=i(4);var a=i(78);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e,i){var s,n;i(22),s=i(5);var a=i(81);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-75fdee90",t.exports=s},function(t,e,i){var s,n;i(18),s=i(6);var a=i(77);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-0d5c2b65",t.exports=s},function(t,e,i){var s,n;i(26),s=i(7);var a=i(86);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-f9241fb8",t.exports=s},function(t,e,i){var s,n;i(27),s=i(8);var a=i(87);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-fb64d4b0",t.exports=s},function(t,e,i){var s,n;s=i(9);var a=i(82);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e,i){var s,n;i(25),s=i(10);var a=i(85);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-e5fe0f82",t.exports=s},function(t,e,i){var s,n;i(23),s=i(11);var a=i(83);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-827cbb2c",t.exports=s},function(t,e,i){var s,n;i(16),i(17),s=i(12);var a=i(76);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-035f997a",t.exports=s},function(t,e,i){var s,n;i(21),s=i(13);var a=i(80);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-48863a94",t.exports=s},function(t,e,i){var s,n;i(20),s=i(14);var a=i(79);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-1caeb38a",t.exports=s},function(t,e,i){var s,n;i(24),s=i(15);var a=i(84);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"projects"}},[e("div",{class:{pShow:t.scroll,hidden:!t.scroll},attrs:{id:"subNav",scroll:t.scroll}},[e("ul",[t._l(t.items,function(i,s){return e("li",{staticClass:"item"},[e("a",{attrs:{href:"#sr"+s}},[t._s(i)])])})])]),t._m(0),e("div",{staticClass:"container"},[t._l(t.projects,function(i,s){return e("div",{staticClass:"project",attrs:{id:"sr"+s}},[e("div",{staticClass:"intro"},[e("div",{staticClass:"titleBox"},[e("div",{staticClass:"title"},[t._s(i.title)]),e("div",{staticClass:"subtitle"},[t._s(i.subtitle)])]),e("div",{staticClass:"project_text",domProps:{innerHTML:t._s(i.text)}})]),t._l(i.boxes,function(i){return e("div",{staticClass:"flex_boxes"},[i.order?[e("div",{staticClass:"p_box order-1"},[e("img",{attrs:{src:i.url,alt:i.alt}})]),e("div",{staticClass:"t_box order-2"},[e("div",{staticClass:"box box_title"},[t._s(i.title)]),e("div",{staticClass:"box box_text",domProps:{innerHTML:t._s(i.text)}})])]:[e("div",{staticClass:"p_box order-2"},[e("img",{attrs:{src:i.url,alt:i.alt}})]),e("div",{staticClass:"t_box order-1"},[e("div",{staticClass:"box box_title"},[t._s(i.title)]),e("div",{staticClass:"box box_text",domProps:{innerHTML:t._s(i.text)}})])]])})])})])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"jumb"},[e("img",{attrs:{src:i(54),alt:"我们用精品的项目充实公益"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"contact"},[e("back-title",{attrs:{src:t.time.src,title:t.time.title}}),e("timeline"),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"box"},[e("div",{staticClass:"boxt"},[e("div",{staticClass:"title"},["我们的团队"]),e("div",{staticClass:"structure"},[e("div",{staticClass:"group"},[e("div",{staticClass:"circle"},["项目中心"]),e("div",{staticClass:"line"},["|"]),e("ul",[e("li",["周末支教"]),e("li",["梦想课堂"]),e("li",["电脑传爱"]),e("li",["创新工作室"])])]),e("div",{staticClass:"group"},[e("div",{staticClass:"circle"},["对外交",e("br"),"流中心"]),e("div",{staticClass:"line"},["|"]),e("ul",[e("li",["设计工作室"]),e("li",["外宣部"])])]),e("div",{staticClass:"group"},[e("div",{staticClass:"circle"},["人力资",e("br"),"源中心"]),e("div",{staticClass:"line"},["|"]),e("ul",[e("li",["人力资源部"]),e("li",["撒爱工作室"])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"app"}},[e("navbar"),e("stretchy-nav",{class:{show:t.scroll,hidden:!t.scroll},attrs:{scroll:t.scroll}}),e("transition",{attrs:{namd:"fade",mode:"out-in"}},[e("router-view",{staticClass:"view"})]),e("footers")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"timeline"}},[t._l(t.events,function(i,s){return e("div",{staticClass:"timeline-item",class:{hidden:i.hidden,show:!i.hidden},attrs:{id:"time-"+s}},[e("div",{staticClass:"timeline-icon"}),e("div",{staticClass:"timeline-content",class:{right:s%2===0}},[e("h2",[t._s(i.time)]),e("p",{domProps:{innerHTML:t._s(i.detail)}})])])})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"no-touch"},[e("div",{staticClass:"cd-stretchy-nav",class:{"nav-is-visible":t.toggle&&t.scroll}},[e("a",{staticClass:"cd-nav-trigger",attrs:{href:"#0"},on:{click:function(e){t.toggle=!t.toggle}}},[e("span",{attrs:{"aria-hidden":"true"}})]),e("ul",[t._l(t.items,function(i,s){return["学方论坛"==i.text?[e("li",[e("a",{attrs:{href:i.path,target:"_blank"}},[e("span",[t._s(i.text)])])])]:[e("li",[e("router-link",{attrs:{to:i.path}},[e("span",[t._s(i.text)])])])]]})]),e("span",{staticClass:"stretchy-nav-bg",attrs:{"aria-hidden":"true"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"container"},[e("div",{staticClass:"titleBox",style:{background:t.img+" no-repeat center center"}},[e("div",{staticClass:"arrow-up"})," ",e("div",{staticClass:"title"},["\n      "+t._s(t.title)+"\n    "])," ",e("div",{staticClass:"arrow-down"})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",[e("slider",{attrs:{pages:t.someList,sliderinit:t.sliderinit}})])},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"container"},[e("nav",[e("div",{staticClass:"left_box"}),e("ul",{staticClass:"nav_container"},[e("input",{attrs:{id:"toggle",type:"checkbox",name:"toggle"}}),t._m(0),t._m(1),t._l(t.items,function(i,s){return[e("li",{staticClass:"point"},["·"]),"学方论坛"==i.text?[e("li",{staticClass:"normal"},[e("a",{attrs:{href:i.path,target:"_blank"}},[t._s(i.text)])])]:[e("router-link",{staticClass:"normal",attrs:{to:i.path,tag:"li"}},[t._s(i.text)])]]}),e("li",{staticClass:"point"},["·"])]),t._m(2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("li",{staticClass:"nav_toggle"},[e("label",{staticClass:"nav_icon",attrs:{for:"toggle"}})])},function(){var t=this,e=t.$createElement;return e("li",{staticClass:"logo"},[e("img",{attrs:{src:i(1)}})])},function(){var t=this,e=t.$createElement;return e("div",{staticClass:"right_img"},[e("img",{attrs:{src:i(1)}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"slider-container",class:t.basicdata.containerClass},[e("div",{staticClass:"slider-wrapper",class:t.basicdata.animation,style:t.styleobj,on:{touchmove:t.swipeMove,touchstart:t.swipeStart,touchend:t.swipeEnd,mousedown:t.swipeStart,mouseup:t.swipeEnd,mousemove:t.swipeMove}},[t.sliderinit.loop?t._e():[t._l(t.pages,function(i){return[e("div",{staticClass:"slider-item",style:i.style},["\n        \t"+t._s(i.title)+"\n       \t  "])]})]," "," ",t.sliderinit.loop?[e("div",{staticClass:"slider-item",style:t.pages[t.pages.length-1].style},[t._s(t.pages[t.pages.length-1].title)])," ",t._l(t.pages,function(i){return[e("div",{staticClass:"slider-item",style:i.style},[t._s(i.title)])]})," ",e("div",{staticClass:"slider-item",style:t.pages[0].style},[t._s(t.pages[0].title)])]:t._e()])," ",e("div",{staticClass:"slider-pagination slider-pagination-bullets"},[t._l(t.pagenums,function(i){return[e("span",{staticClass:"slider-pagination-bullet",class:i-1==t.sliderinit.currentPage?"slider-pagination-bullet-active":"",on:{click:function(e){t.slide(i-1)}}})]})])])},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"mooc"}},[e("div",{staticClass:"jumb"},[e("img",{attrs:{src:i(47)}})])])}]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._l(t.socials,function(i){return e("div",{staticClass:"box"},[e("div",{staticClass:"title"},[t._s(i.title)]),e("div",{staticClass:"text"},[t._l(i.texts,function(i){return e("div",[t._s(i)])})])])}),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"box"},[e("div",{staticClass:"title"},["联系我们"]),e("div",{staticClass:"text contactBox"},[e("div",{staticClass:"qrcode"},[e("img",{attrs:{src:i(34)}})]),e("div",["邮箱: saepa_thu@163.com"]),e("div",["微博: 清华SAEPA"])])])}]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"home"}},[e("div",{staticClass:"triangle"}),e("jumbotron",{staticClass:"jumbotron"}),e("div",{staticClass:"container"},[e("div",{staticClass:"first"},[t._m(0),e("div",{staticClass:"icon_container"},[t._l(t.items,function(i){return e("div",{staticClass:"icon_box"},[e("img",{attrs:{src:i.url,alt:i.alt}}),e("div",{staticClass:"icon_text"},[e("p",[t._s(i.text1)]),e("p",[t._s(i.text2)]),e("p",["—"])])])})])]),e("div",{staticClass:"projects"},[e("div",{staticClass:"intro"},[t._m(1),e("div",{staticClass:"achievements"},[t._m(2),e("div",{staticClass:"textSide borderTop",style:{background:t.textSides[0]}},[e("div",{staticClass:"textTitle"},["创新工作室"]),t._m(3)]),t._m(4)]),e("div",{staticClass:"achievements"},[t._m(5),t._m(6),e("div",{staticClass:"textSide",style:{background:t.textSides[1]}},[e("div",{staticClass:"textTitle"},["电脑传爱"]),t._m(7)])]),e("div",{staticClass:"achievements"},[e("div",{staticClass:"textSide",style:{background:t.textSides[2]}},[e("div",{staticClass:"textTitle"},["梦想课堂"]),t._m(8)]),t._m(9),t._m(10)]),e("div",{staticClass:"achievements"},[t._m(11),e("div",{staticClass:"textSide",style:{background:t.textSides[3]}},[e("div",{staticClass:"textTitle"},["周末支教"]),t._m(12)]),t._m(13)])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"aboutUs"},[e("div",{staticClass:"aboutTitle"},["关于我们",e("br"),"—"]),e("div",{staticClass:"aboutContent"},["清华大学学生教育扶贫公益协会（SAEPA）成立于2006年12月，隶属于\n清华大学教育扶贫办公室。协会着力于构建一个教育扶贫平台，促进清华\n学子和中国贫困地区的孩子之间的交流。\n协会专注于周末支教、电脑传爱、梦想课堂等多个规范化项目，成立10年\n来已然取得累累硕果。任务魔方、课余时光、享读计划等新增项目更为协\n会注入活力。"])])},function(){var t=this,e=t.$createElement;return e("div",{staticClass:"summary"},[e("img",{staticClass:"paddingB",attrs:{src:i(33)}}),e("div",["2006年，协会由主要来自2006年中美暑期联合支教实践活动的支队长发起，在清华大学扶贫办公室大力支持与帮助下，成立了最初的教育扶贫志愿者协会。",e("br"),"\n之后，在学校社团部注册时，正式更名为清华大学学生教育扶贫公益协会，",e("br"),'\n"Student Association of Educational Poverty Alleviation" ——SAEPA。'])])},function(){var t=this,e=t.$createElement;return e("div",{staticClass:"picSide"},[e("img",{attrs:{src:i(35),alt:"创新工作室"}})])},function(){var t=this,e=t.$createElement;
return e("div",[e("br"),"\n实践公益新想法",e("br"),"\n探索公益新领域"])},function(){var t=this,e=t.$createElement;return e("div",{staticClass:"picSide"},[e("img",{attrs:{src:i(36),alt:"创新工作室"}})])},function(){var t=this,e=t.$createElement;return e("div",{staticClass:"picSide picLSide"},[e("img",{attrs:{src:i(37),alt:"电脑传爱"}})])},function(){var t=this,e=t.$createElement;return e("div",{staticClass:"picSide picRSide"},[e("img",{attrs:{src:i(38),alt:"电脑传爱"}})])},function(){var t=this,e=t.$createElement;return e("div",[e("br"),"\n互联网+科技+公益"])},function(){var t=this,e=t.$createElement;return e("div",[e("br"),"\n梦想",e("br"),"\n是给孩子最好的礼物"])},function(){var t=this,e=t.$createElement;return e("div",{staticClass:"picSide picLSide"},[e("img",{attrs:{src:i(48),alt:"梦想课堂"}})])},function(){var t=this,e=t.$createElement;return e("div",{staticClass:"picSide picRSide"},[e("img",{attrs:{src:i(49),alt:"梦想课堂"}})])},function(){var t=this,e=t.$createElement;return e("div",{staticClass:"picSide"},[e("img",{attrs:{src:i(62),alt:"周末支教"}})])},function(){var t=this,e=t.$createElement;return e("div",[e("br"),"\n用周末不长的时间",e("br"),"\n做一生难忘的事情"])},function(){var t=this,e=t.$createElement;return e("div",{staticClass:"picSide"},[e("img",{attrs:{src:i(63),alt:"周末支教"}})])}]}}]);
//# sourceMappingURL=app.f9e558c9e66df0aa9cab.js.map