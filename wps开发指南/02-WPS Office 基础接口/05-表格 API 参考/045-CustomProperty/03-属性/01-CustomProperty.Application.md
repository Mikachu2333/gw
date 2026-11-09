# CustomProperty.Application

如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。




## 语法

express.**Application**

express   一个代表 **CustomProperty** 对象的变量。

## 类型

Application

## 示例


```JavaScript
/* 本示例显示一条有关创建 myObject 的应用程序的消息*/
function test(){
	let myObject = Application.ActiveWorkbook
	if(myObject.Application.Value == "ET") {
		alert("This is an ET Application object.")
	}
	else {
		alert("This is not an ET Application object.")
	}
}
```
