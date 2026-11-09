# Worksheets.HPageBreaks

返回一个 [HPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/obj)集合，它代表工作表上的水平分页符。只读。



## 语法

express.**HPageBreaks**

express   一个代表 **Worksheets** 对象的变量。

## 类型

HPageBreaks

## 说明


每张工作表最多有 1026 个水平分页符。



## 示例


```JavaScript
/*此示例显示全屏水平分页符和打印区水平分页符的个数。*/
function test() {
    let cFull = 0
    let cPartial = 0
    for (let i = 1; i <= Application.Worksheets.HPageBreaks.Count; i++) {
        if (Application.Worksheets.HPageBreaks.Extent == xlPageBreakFull) {
            cFull++
        } else {
            cPartial++
        }
    }
    alert(cFull + " full-screen page breaks, " + cPartial + " print-area page breaks")
}
```


```JavaScript
/*本示例在F12单元格上方添加一条水平分页符。*/
function test() {
    Application.Worksheets.HPageBreaks.Add(Range("F12"))
}
```
