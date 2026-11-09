# Application.Application

该属性返回一个代表 ET 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。只读。



## 语法

express.**Application**

express   一个代表 **Application** 对象的变量。

## 类型

Application

## 示例


```JavaScript
/*本示例显示一条有关创建 myObject 的应用程序的消息*/
function test() {
    let myObject = Application
    alert(myObject.Application.Value)
}
```


```JavaScript
/*此示例演示将应用程序对象的界面隐藏。*/
function test() {
    Application.Application.Visible = false
}
```
