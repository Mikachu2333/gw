# VPageBreak.Extent

返回指定分页符的类型：全屏或仅在打印区域内。可为以下任一 **[XlPageBreakExtent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPageBreakExtent)** 常量： **[xlPageBreakFull](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPageBreakExtent)** 或 **[xlPageBreakPartial](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPageBreakExtent)** 。 **Long** 类型，只读。



## 语法

express.**Extent**

express   一个代表 **VPageBreak** 对象的变量。

## 类型

XlPageBreakExtent

## 示例


```JavaScript
/*本示例显示第一个工作表的全屏垂直分页符和打印区垂直分页符的总数*/
function test() {
    let cFull = 0
    let cPartial = 0
    for (let i = 1; i <= Application.Worksheets.Item(1).VPageBreaks.Count; i++) {
        if (Application.Worksheets.Item(1).VPageBreaks.Item(i).Extent == xlPageBreakFull) {
            ++cFull
        } else {
            ++cPartial
        }
    }
    alert(cFull + " full-screen page breaks, " + cPartial + " print-area page breaks")
}
```


```JavaScript
/*本示例显示活动工作表的第3个垂直分页符是否为全屏应用*/
function test() {
    let vPageBreak = ActiveSheet.VPageBreaks.Item(3)
    alert(vPageBreak.Extent == xlPageBreakFull)
}
```
