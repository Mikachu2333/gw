# CommandBars.GetScreentipMso

将 *idMso* 参数标识的控件的屏幕提示作为 **String** 类型的值返回。



## 语法

express.**GetScreentipMso(idMso)**

express   一个代表 **CommandBars** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| idMso | 必选 | string | 控件的标识符。 |

## 返回值

String

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，显示名为“Bold”的控件的屏幕提示。*/
function test() {
    alert(Application.CommandBars.GetScreentipMso("Bold"))
}
```


```JavaScript
/*本示例运行于表格组件，判断如果活动工作簿的名称为“example.xlsx”，则将名为“Italic”的命令栏控件的屏幕提示赋值给 A1 单元格。*/
function test() {
    if (ActiveWorkbook.Name == "example.xlsx") {
        Range("A1").Value2 = ActiveWorkbook.CommandBars.GetScreentipMso("Italic")
    }
}
```
