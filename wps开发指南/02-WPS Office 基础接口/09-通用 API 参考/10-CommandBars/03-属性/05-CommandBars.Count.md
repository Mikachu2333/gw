# CommandBars.Count

获取宿主应用程序中的命令栏数量。只读。



## 语法

express.**Count**

express   一个代表 **CommandBars** 对象的变量。

## 类型

number（int 精度）

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，显示应用程序中命令栏的数量。*/
function test() {
    alert(Application.CommandBars.Count)
}
```
