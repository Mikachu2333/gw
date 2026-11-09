# VPageBreaks.Add

添加垂直分页符。返回一个代表新垂直分页符的 **[VPageBreak](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreak/obj)** 对象。



## 语法

express.**Add(Before)**

express   一个代表 **VPageBreaks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Before | 必选 | Object | 一个 Range 对象。新的分页符将添加到该区域左侧。 |

## 返回值

VPageBreak

## 示例


```JavaScript
/*本示例在第一个工作表的单元格 F25 上方添加水平分页符，在其左侧添加垂直分页符*/
function test() {
    Application.Worksheets.Item(1).HPageBreaks.Add(Worksheets.Item(1).Range("F25"))
    Application.Worksheets.Item(1).VPageBreaks.Add(Worksheets.Item(1).Range("F25"))
}
```


```JavaScript
/*本示例在工作表Sheet1中G列添加一条垂直分页符，并显示垂直分页符总数。*/
function test() {
    let sheet1 = Application.Worksheets.Item("Sheet1")
    sheet1.VPageBreaks.Add(sheet1.Columns.Item("G"))
    alert(`垂直分页符的数量是 ${sheet1.VPageBreaks.Count}`)
}
```
