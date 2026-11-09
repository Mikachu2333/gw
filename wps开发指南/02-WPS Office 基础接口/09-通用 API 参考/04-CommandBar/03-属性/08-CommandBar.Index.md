# CommandBar.Index

获取一个 **Long** 类型的值，该值代表集合中 **CommandBar** 对象的索引号。只读。



## 语法

express.**Index**

express   一个代表 **CommandBar** 对象的变量。

## 类型

number（int 精度）

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，显示艺术字命令栏的索引号。*/
function test() {
    let commandBar = Application.CommandBars.Item("WordArt")
    alert(commandBar.Index)
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿中图表命令栏的索引和名称。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Item("Chart")
    alert(`索引：${commandBar.Index}\n名称：${commandBar.Name}`)
}
```
