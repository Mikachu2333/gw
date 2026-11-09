# CommandBarControls.Item

获取 **CommandBarControls** 集合中的一个 **[CommandBarControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/obj)** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **CommandBarControls** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的对象的名称或索引号。 |

## 返回值

CommandBarControl

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，执行名为“Standard”的命令栏中名为“打开”的控件的命令。*/
function test() {
    let cbControl = Application.CommandBars.Item("Standard").Controls.Item("打开")
    cbControl.Execute()
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“WordArt”的命令栏的最后一个控件顶边到屏幕顶边的距离。*/
function test() {
    let cbControls = ActiveWorkbook.CommandBars.Item("WordArt").Controls
    alert(cbControls.Item(cbControls.Count).Top + " 像素")
}
```
