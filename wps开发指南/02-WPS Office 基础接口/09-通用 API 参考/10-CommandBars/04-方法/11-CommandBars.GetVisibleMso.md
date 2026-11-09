# CommandBars.GetVisibleMso

如果 *idMso* 参数标识的控件可见，则返回 **True** 。



## 语法

express.**GetVisibleMso(idMso)**

express   一个代表 **CommandBars** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| idMso | 必选 | string | 控件的标识符。 |

## 返回值

Boolean

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，显示名为“Bold”的控件是否可见。*/
function test() {
    alert(Application.CommandBars.GetVisibleMso("Bold"))
}
```


```JavaScript
/*本示例运行于表格组件，判断如果活动工作簿上名为“Italic”的控件可见，则显示用户是否已按下该控件。*/
function test() {
    if (ActiveWorkbook.CommandBars.GetVisibleMso("Italic")) {
        alert(ActiveWorkbook.CommandBars.GetPressedMso("Italic"))
    }
}
```
