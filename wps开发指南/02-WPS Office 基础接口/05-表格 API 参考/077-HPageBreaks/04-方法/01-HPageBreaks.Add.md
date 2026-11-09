# HPageBreaks.Add

添加水平分页符。返回一个 **[HPageBreak](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreak/obj)** 对象，它代表新的水平分页符。



## 语法

express.**Add(Before)**

express   一个代表 **HPageBreaks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Before | 必选 | Object | 一个 Range 对象。新的分页符将添加到该区域上方。 |

## 返回值

HPageBreak

## 示例


```JavaScript
/*本示例在第一个工作表的单元格 F25 上方添加水平分页符，在其左侧添加垂直分页符*/
function test() {
    let sheet1 = Application.Worksheets.Item(1)
    sheet1.HPageBreaks.Add(sheet1.Range("F25"))
    sheet1.VPageBreaks.Add(sheet1.Range("F25"))
}
```


```JavaScript
/*本示例在工作表Sheet1中第8行添加一条水平分页符，并显示水平分页符总数。*/
function test() {
    let sheet1 = Application.Worksheets.Item("Sheet1")
    sheet1.HPageBreaks.Add(sheet1.Rows.Item(8))
    alert(`水平分页符的数量是 ${sheet1.HPageBreaks.Count}`)
}
```
