# CommandBarControls.Count

获取命令栏上的控件数量。只读。



## 语法

express.**Count**

express   一个代表 **CommandBarControls** 对象的变量。

## 类型

number（int 精度）

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，显示名为“WordArt”的命令栏的控件的数量。*/
function test() {
    alert(Application.CommandBars.Item("WordArt").Controls.Count)
}
```
