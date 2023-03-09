(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{421:function(n,o,v){"use strict";v.r(o);var s=v(2),t=Object(s.a)({},(function(){var n=this,o=n._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h1",{attrs:{id:"作用域"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[n._v("#")]),n._v(" 作用域")]),n._v(" "),o("p",[n._v("变量找作用域链，属性找原型链（找不到返回undefined）")]),n._v(" "),o("p",[n._v("作用域是指程序源代码中定义变量的区域。\n作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。\n作用：隔离变量，不同作用域下同名变量不会有冲突\nJavaScript 采用词法作用域(lexical scoping)，函数作用域基于函数创建的位置，也就是静态作用域。")]),n._v(" "),o("p",[n._v("分类\n1.全局\n2.函数\n3.块作用域（es6+），即{}作用域")]),n._v(" "),o("p",[n._v("分类2：静态作用域和动态作用域")]),n._v(" "),o("p",[n._v("个数：n+1 n是定义几个函数，在定义时确定，静态\n与执行上下文不同：n是调用几个函数，在调用时确定，动态，调用结束后释放")]),n._v(" "),o("p",[n._v("联系：执行上下文 从属于 所在的作用域")]),n._v(" "),o("p",[n._v("作用域链：由内向外\n函数作用域基于函数创建的位置\nvar x = 10\nfunction fn() {\nconsole.log(x)\n}\nfunction show(f){\nvar x = 20\nf()\n}\nshow(fn)")]),n._v(" "),o("p",[n._v("结果是10，要根据作用域找，fn 和 show的作用域是并列的")]),n._v(" "),o("p",[n._v("var fn = function (){\nconsole.log(fn)\n}\nfn() //输出函数  简单")]),n._v(" "),o("p",[n._v("var obj = {\nfn2: function (){\nconsole.log(fn2)\n}\n}\nobj.fn2() //报错！！自身作用域找fn2 没有，再往上全局也没有\n要找对象中的fn2，得改为 this.fn2  区别？？？？？？？？？？？？")]),n._v(" "),o("p",[n._v("动态作用域\nbash 就是动态作用域，不信的话，把下面的脚本存成例如 scope.bash，然后进入相应的目录，用命令行执行 bash ./scope.bash，看看打印的值是多少。")]),n._v(" "),o("p",[n._v("value=1\nfunction foo () {\necho $value;\n}\nfunction bar () {\nlocal value=2;\nfoo;\n}\nbar")])])}),[],!1,null,null,null);o.default=t.exports}}]);