# CommandBars.Item

获取 **CommandBars** 集合中的 **CommandBar** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **CommandBars** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的对象的名称或索引号。 |

## 返回值

CommandBar

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

 **Item** 是对象或集合的默认成员。以下两个语句都将 **CommandBar** 对象分配给 commandBar。

```JavaScript
let commandBar = CommandBars.Item("Standard") 
let commandBar = CommandBars("Standard")
```



## 示例


```JavaScript
/*本示例运行于各组件，显示是否启用艺术字命令栏。*/
function test() {
    let commandBar = Application.CommandBars.Item("WordArt")
    alert(commandBar.Enabled)
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿中图表命令栏的名称。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Item("Chart")
    alert(commandBar.Name)
}
```
