# WorksheetFunction.Application

如果不使用对象识别符，则该属性返回一个代表 ET 应用程序的 **Application** 对象。如果使用对象识别符，则该属性返回一个代表指定对象的创建程序的 **Application** 对象。可对一个 OLE 自动化对象使用该属性来返回该对象的应用程序。只读。




## 语法

express.**Application**

express   一个代表 **WorksheetFunction** 对象的变量。

## 类型

Application

## 示例


```JavaScript
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
