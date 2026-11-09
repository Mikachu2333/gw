# CommandBars.GetPressedMso

返回一个值，该值指示是否已按下 **idMso** 参数标识的 **toggleButton** 控件。



## 语法

express.**GetPressedMso(idMso)**

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
/*本示例运行于各组件，显示用户是否按下名为“Bold”的命令栏控件。*/
function test() {
    alert(Application.CommandBars.GetPressedMso("Bold"))
}
```


```JavaScript
/*本示例运行于表格组件，判断如果用户按下活动工作簿中的倾斜按钮，则通知用户。*/
function test() {
    if (ActiveWorkbook.CommandBars.GetPressedMso("Italic")) {
        alert("用户已按下“倾斜”按钮")
    }
}
```
