# Workbooks.Add

新建一个工作簿。新工作簿将成为活动工作簿。



## 语法

express.**Add(Template)**

express   一个代表 **Workbooks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Template | 可选 | any | 确定如何创建新工作簿。如果此参数为指定现有 ET 文件名的字符串，那么创建新工作簿将以该指定的文件作为模板。如果此参数为常量，新工作簿将包含一个指定类型的工作表。可为以下 XlWBATemplate 常量之一：xlWBATChart、xlWBATExcel4IntlMacroSheet、xlWBATExcel4MacroSheet 或 xlWBATWorksheet。如果省略此参数，ET 将创建包含一定数目空白工作表的新工作簿（该数目由 SheetsInNewWorkbook 属性设置）。 |

## 返回值

一个代表新工作簿的 [Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj) 对象。

## 说明


如果 *Template* 参数指定的是文件，则该文件名可包含路径。



## 示例


```JavaScript
/*本示例演示新建一个新工作簿。*/
function test() {
    Application.Workbooks.Add()
}
```


```JavaScript
/*本示例新建一个包含图表工作表的工作簿。，并通知用户其名字。*/
function test() {
    let wb = Application.Workbooks.Add(xlWBATChart)
    alert(wb.Name)
}
```
