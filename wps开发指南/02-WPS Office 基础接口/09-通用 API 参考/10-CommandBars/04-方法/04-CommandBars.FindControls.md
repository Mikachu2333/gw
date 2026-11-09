# CommandBars.FindControls

获取符合指定条件的 **CommandBarControls** 集合。

## 语法

express.**FindControls(Type, Id, Tag, Visible)**

express   一个代表 **CommandBars** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | any | 为指定控件类型的 **[MsoControlType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoControlType)** 常量之一。 |
| Id | 可选 | any | 控件的标识符。 |
| Tag | 可选 | any | 控件的标记值。 |
| Visible | 可选 | any | 如果为 **True** ，则只能在搜索中包含可见的命令栏控件。默认值为 **False** 。 |

## 返回值

CommandBarControls

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

如果未找到符合条件的控件， **FindControls** 方法将返回 **null** 。



## 示例


```JavaScript
/*本示例运行于各组件，用 FindControls 方法搜索 CommandBars 集合中所有 ID 为 18 的按钮控件，并显示搜索到的按钮控件的数量。*/
function test() {
    let cbControls = Application.CommandBars.FindControls(msoControlButton, 18)
    alert("There are " + cbControls.Count + " controls that meet the search criteria.")
}
```


```JavaScript
/*本示例运行于表格组件，用 FindControls 方法搜索活动工作簿的 CommandBars 集合中所有 ID 为 1731 的组合框控件，然后显示这些组合框控件屏幕提示中展示的文本。*/
function test() {
    let str = ""
    let cbControls = ActiveWorkbook.CommandBars.FindControls(msoControlComboBox, 1731, null, false)
    for (let i = 1; i <= cbControls.Count; i++) {
        str += cbControls.Item(i).TooltipText + "\n"
    }
    alert(str)
}
```
