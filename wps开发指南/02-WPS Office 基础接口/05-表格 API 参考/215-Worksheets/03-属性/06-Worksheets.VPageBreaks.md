# Worksheets.VPageBreaks

返回一个 [VPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/obj)集合，它代表工作表上的垂直分页符。只读。



## 语法

express.**VPageBreaks**

express   一个代表 **Worksheets** 对象的变量。

## 类型

VPageBreaks

## 示例


```JavaScript
/*此示例显示全屏垂直分页符和打印区域垂直分页符的总数。*/
function test() {
    let cFull = 0
    let cPartial = 0
    for (let i = 1; i <= Application.Worksheets.VPageBreaks.Count; i++) {
        if (Application.Worksheets.VPageBreaks.Extent == xlPageBreakFull) {
            cFull++
        } else {
            cPartial++
        }
    }
    alert(cFull + " full-screen page breaks, " + cPartial + " print-area page breaks")
}
```


```JavaScript
/*本示例在C3单元格左侧添加一条垂直分页符。*/
function test() {
    Application.Worksheets.VPageBreaks.Add(Range("C3"))
}
```
