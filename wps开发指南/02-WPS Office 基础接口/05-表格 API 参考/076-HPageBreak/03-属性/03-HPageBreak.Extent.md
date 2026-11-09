# HPageBreak.Extent

返回指定分页符的类型：全屏或仅在打印区域内。可为以下 任一 **[XlPageBreakExtent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPageBreakExtent)** 常量： **xlPageBreakFull** 或 **xlPageBreakPartial** 。 **Long** 类型，只读。



## 语法

express.**Extent**

express   一个代表 **HPageBreak** 对象的变量。

## 类型

XlPageBreakExtent

## 示例


```JavaScript
/*本示例显示全屏水平分页符和打印区水平分页符的总数*/
function test() {
    let cFull = 0
    let cPartial = 0
    for (let pb = 1; pb <=  Application.Worksheets.Item(1).HPageBreaks.Count; pb++) {
        if (Application.Worksheets.Item(1).HPageBreaks.Item(pb).Extent == xlPageBreakFull) {
            cFull++
        } else {
            cPartial++
        }
    }
    alert(cFull + " full-screen page breaks, " + cPartial + " print-area page breaks")
}
```


```JavaScript
/*本示例显示第一个工作表的第2个水平分页符是否为全屏应用*/
function test() {
    let hPageBreak = Application.Worksheets.Item(1).HPageBreaks.Item(2)
    alert(hPageBreak.Extent == xlPageBreakFull)
}
```
