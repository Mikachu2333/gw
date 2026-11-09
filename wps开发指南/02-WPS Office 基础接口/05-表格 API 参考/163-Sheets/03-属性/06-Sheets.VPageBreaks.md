# Sheets.VPageBreaks

返回一个 **[VPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/obj)** 集合，它代表工作表上的垂直分页符。只读。



## 语法

express.**VPageBreaks**

express   一个代表 **Sheets** 对象的变量。

## 类型

VPageBreaks

## 示例


```JavaScript
/*此示例显示全屏垂直分页符和打印区垂直分页符的个数。*/
function test() {
    let cFull = 0
    let cPartial = 0
    for (let i = 1; i <= Sheets.VPageBreaks.Count; i++) {
        if (Sheets.VPageBreaks.Item(i).Extent == xlPageBreakFull) {
            ++cFull
        } else {
            ++cPartial
        }
    }
    alert(cFull + " full-screen page breaks, " + cPartial + " print-area page breaks")
}
```


```JavaScript
/*此示例显示活动工作簿中索引为1和2的工作表的垂直分页符类型是否是手动插入分页符。*/
function test() {
    let array = [1, 2]
    let type = Application.Sheets.Item(array).VPageBreaks.Item(1).Type
    alert(type == xlPageBreakManual)
}
```
