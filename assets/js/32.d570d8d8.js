(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{439:function(n,e,o){"use strict";o.r(e);var s=o(2),r=Object(s.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v('流程控制分支结构\n分支流程控制if语句\nex.\nif (score >= 90){\nalert("A")\n}else if (score >= 80 && score < 90){ //没必要写&& score < 90，因为90以上，已经在第一阶段执行了\nalert("B")\n}else if (score >= 70 && score < 80){\nalert("C")\n}else if (score >= 60 && score < 70){\nalert("D")\n}else {\nalert("E")\n}\n分支流程控制switch语句\nex. 拿表达式的值与case的值相匹配（全等关系）；如果没有break，则会继续往下执行，直到退出\nvar fruit = prompt("请输入水果名字：")\nswitch (fruit) {\ncase \'西瓜\':\nconsole.log("35/斤")\nbreak\ncase \'榴莲\':\nconsole.log("60/斤")\nbreak\ndefault:\nconsole.log("没有此水果")\n}')]),n._v(" "),e("p",[n._v("if和switch的区别")]),n._v(" "),e("ol",[e("li",[n._v("switch...case语句通常处理case为比较确定的值\nif...else...语句更加灵活，用于范围判断")]),n._v(" "),e("li",[n._v("switch语句条件判断后，直接跳到满足条件的case处，效率更高，而if有几种条件，就得判断多少次")]),n._v(" "),e("li",[n._v("当分支比较少时，if更有效")])]),n._v(" "),e("p",[n._v('循环语句结构\n1.for循环语句：组成：终止条件+循环体\nfor(初始变量;条件表达式;操作表达式){\n//循环体\n}\n操作表达式：每次循环最后执行的代码，经常用于计数器变量（初始变量）更新:递增或递减\nex.\nfor (var i = 0;i<100;i++){\nconsole.log("你好")\n}\n1.var i =0;\n2.判断i < 100;\n3.执行console.log("你好")\n4.i++ i =1；\n5.判断i < 100;\t\t\n6.执行console.log("你好")\n...\n7.i++ i =101；\n8.判断i < 100;\n9.终止')]),n._v(" "),e("p",[n._v('断点调试\n1.sources\n2.打开代码\n3.单击数字，断点\n4.浅蓝色背景表单前阶段\n5.下一步右边按钮\t\nwatch：来观察变量\nex.\nvar num =prompt("求1-输入值之间累加:")\nvar sum = 0;\nfor (var i = 1;i <=num;i++){\nsum = sum + i;\nconsole.log(sum)\n}')]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("//求1-100之间所有数的平均值\nvar sum = 0;\nvar average = 0;\nfor (var i = 1;i <=100;i++){\n  sum = sum + i;\n}\naverage = sum / 100;\nconsole.log(average)\n\n//求1-100之间所有偶数之和以及奇数之和\nvar even = 0;\nvar odd = 0;\nfor (var i = 1; i <= 100; i++){\n  if (i % 2 === 0){\n    even = even + i;\n  }else {\n    odd = odd + i;\n  }\n}\nconsole.log(even)\nconsole.log(odd)\n")])])]),e("p",[n._v("打印5行5列星星\n//内层负责打印5个星形\n//外层负责打印5行\nvar str = \"\"\nfor (var i = 1; i <= 5; i++){\nfor (var j = 1; j <= 5;j++){\nstr = str + '*'\n}\n//实现换行\nstr = str + '反斜杠n'\n}\nconsole.log(str)\n倒三角，可以直接让j=i")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("//99乘法\nvar str = \"\"\nfor (var i = 1; i <= 9; i++){\n  for (var j = 1; j <= i;j++){\n    str += i +'*'+ j + '=' + i * j + '\\t'\n  }\n  //实现换行\n  str = str + '\\n'\n}\nconsole.log(str)\n\n//while语句 比for更灵活，条件比较复杂时可用\nvar num = 1\nwhile(num <= 100){\n  console.log(\"你好啊\")\n  num++\n}\n\n//do...while语句;先执行一次循环体再判断；至少会执行一次\nvar num = 1\ndo {\n  console.log(\"你好啊\")\n  i++\n}while(i <= 100)\n\n//continue 跳过当次循环，执行下一次循环\n//计算1-100之间，除了能被7整除之外的整数和\nvar sum = 0\nfor (var i = 1; i <= 100; i++){\n  if (i % 7 ==0){\n    continue\n  }\n  sum += i\n}\nconsole.log(sum)")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);