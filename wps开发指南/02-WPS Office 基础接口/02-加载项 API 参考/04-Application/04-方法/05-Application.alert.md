# Application.alert

弹出alert警告。

## 语法

express.alert(text)

express   一个代表 Application 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| text | 必选 | String | 表示警告框要显示的字符串内容. |

## 说明

alert实际上是浏览器 **window** 对象内置的一个方法，在 **wps** 的js环境中，wps对这个对象进行了拦截，主要原因是由于chrome的技术架构决定的。  
wps的js环境是内置了一个chrome的内核来展示网页、执行js脚本，在chrome的技术架构中，chrome的js执行、css及html渲染、网页uil用户操作等都分别是它自己的线程中， 同样的，如果alert不作拦截，当网页前端代码调用alert时，这个alert框仅仅只是阻塞住了chrome的ui线程，而对wps主线程没有影响，这样就会产生alert框弹出来了，但wps仍然能 响应用户操作的奇怪现象，因此，wps对alert框进行了拦截，让alert框在wps主线程中弹出来，当alert弹出时，阻塞的会是wps主线程。
