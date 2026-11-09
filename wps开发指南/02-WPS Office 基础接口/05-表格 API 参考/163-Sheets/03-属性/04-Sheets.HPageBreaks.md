# Sheets.HPageBreaks

返回一个 **[HPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/obj)** 集合，它代表工作表上的水平分页符。只读。



## 语法

express.**HPageBreaks**

express   一个代表 **Sheets** 对象的变量。

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
    for (let i = 1; i <= Sheets.HPageBreaks.Count; i++) {
        if (Sheets.HPageBreaks.Item(i).Extent == xlPageBreakFull) {
            ++cFull
        } else {
            ++cPartial
        }
    }
    alert(cFull + " full-screen page breaks, " + cPartial + " print-area page breaks")
}
```


```JavaScript
/*此示例显示活动工作簿中索引为1和2的工作表的水平分页符类型是否是手动插入分页符。*/
function test() {
    let array = [1, 2]
    let type = Application.Sheets.Item(array).HPageBreaks.Item(1).Type
    alert(type == xlPageBreakManual)
}
```
