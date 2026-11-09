# CommandBars.GetLabelMso

将 *idMso* 参数标识的控件的标签作为 **String** 类型的值返回。



## 语法

express.**GetLabelMso(idMso)**

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
/*本示例运行于各组件，显示名为“Paste”的命令栏控件的标签。*/
function test() {
    alert(Application.CommandBars.GetLabelMso("Paste"))
}
```


```JavaScript
/*本示例运行于表格组件，判断如果活动工作簿的名称为“example.xlsx”，则将名为“Copy”的命令栏控件的标签赋值给 A1 单元格。*/
function test() {
    if (ActiveWorkbook.Name == "example.xlsx") {
        Range("A1").Value2 = ActiveWorkbook.CommandBars.GetLabelMso("Copy")
    }
}
```
