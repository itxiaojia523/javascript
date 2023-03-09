(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{417:function(n,t,c){"use strict";c.r(t);var o=c(2),e=Object(o.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"执行上下文栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文栈"}},[n._v("#")]),n._v(" 执行上下文栈")]),n._v(" "),t("p",[n._v("JavaScript 代码执行顺序的话，想必写过 JavaScript 的开发者都会有个直观的印象，那就是顺序执行")]),n._v(" "),t("p",[n._v("并不是简单的顺序执行")]),n._v(" "),t("p",[n._v("函数提升和变量提升的现象：注意只是声明提升，初始化赋值没有提升")]),n._v(" "),t("p",[n._v("JavaScript 引擎并非一行一行地分析和执行程序，而是一段一段地分析执行。当执行一段代码的时候，会进行一个“准备工作”")]),n._v(" "),t("p",[n._v("JavaScript 的可执行代码(executable code)的类型\n三种，全局代码、函数代码、eval代码")]),n._v(" "),t("p",[n._v('举个例子，当执行到一个函数的时候，就会进行准备工作\n更专业一点的说法，就叫做"执行上下文(execution context)"。')]),n._v(" "),t("p",[n._v("写的函数多了\n如何管理创建的那么多执行上下文呢？")]),n._v(" "),t("p",[n._v("JavaScript 引擎创建了执行上下文栈（Execution context stack，ECS）来管理执行上下文")]),n._v(" "),t("p",[n._v("让我们定义执行上下文栈是一个数组：\n试想当 JavaScript 开始要解释执行代码的时候，最先遇到的就是全局代码，所以初始化的时候首先就会向执行上下文栈压入一个全局执行上下文，我们用 globalContext 表示它，并且只有当整个应用程序结束的时候，ECStack 才会被清空，所以程序结束之前， ECStack 最底部永远有个 globalContext：\nECStack = [\nglobalContext\n];")]),n._v(" "),t("p",[n._v("现在 JavaScript 遇到下面的这段代码了：")]),n._v(" "),t("p",[n._v("function fun3() {\nconsole.log('fun3')\n}\nfunction fun2() {\nfun3();\n}\nfunction fun1() {\nfun2();\n}\nfun1();")]),n._v(" "),t("p",[n._v("当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。知道了这样的工作原理，让我们来看看如何处理上面这段代码：")]),n._v(" "),t("p",[n._v("// 伪代码\n// fun1()\nECStack.push("),t("fun1",[n._v(" functionContext);\n// fun1中竟然调用了fun2，还要创建fun2的执行上下文\nECStack.push("),t("fun2",[n._v(" functionContext);\n// 擦，fun2还调用了fun3！\nECStack.push("),t("fun3",[n._v(" functionContext);\n// fun3执行完毕\nECStack.pop();\n// fun2执行完毕\nECStack.pop();\n// fun1执行完毕\nECStack.pop();\n// javascript接着执行下面的代码，但是ECStack底层永远有个globalContext")])],1)],1)],1),n._v(" "),t("p",[n._v("看看\n两段代码")]),n._v(" "),t("p",[n._v('var scope = "global scope";\nfunction checkscope(){\nvar scope = "local scope";\nfunction f(){\nreturn scope;\n}\nreturn f();\n}\ncheckscope();')]),n._v(" "),t("p",[n._v("来自 "),t("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/4",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/mqyqingfeng/Blog/issues/4"),t("OutboundLink")],1)]),n._v(" "),t("p",[n._v('var scope = "global scope";\nfunction checkscope(){\nvar scope = "local scope";\nfunction f(){\nreturn scope;\n}\nreturn f;\n}\ncheckscope()();')]),n._v(" "),t("p",[n._v("两段代码执行的结果一样，但是两段代码究竟有哪些不同呢？\n答案就是执行上下文栈的变化不一样。")]),n._v(" "),t("p",[n._v("第一段代码：\nECStack.push("),t("checkscope",[n._v(" functionContext);\nECStack.push("),t("f",[n._v(" functionContext);\nECStack.pop();\nECStack.pop();")])],1)],1),n._v(" "),t("p",[n._v("第二段代码：\nECStack.push("),t("checkscope",[n._v(" functionContext);\nECStack.pop();\nECStack.push("),t("f",[n._v(" functionContext);\nECStack.pop();")])],1)],1)])}),[],!1,null,null,null);t.default=e.exports}}]);