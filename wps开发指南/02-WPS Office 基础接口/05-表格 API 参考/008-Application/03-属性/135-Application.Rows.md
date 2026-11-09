# Application.Rows

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表活动工作表中的所有行。如果活动文档不是工作表，则 **Rows** 属性失效。 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，只读。



## 语法

express.**Rows**

express   一个代表 **Application** 对象的变量。

## 类型

Range

## 说明


在不使用对象识别符的情况下使用此属性等效于使用 `ActiveSheet.Rows`。

该属性在应用于是多个选定区域的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象时，只从该区域中第一个子区域内返回行。例如，如果 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象有两个子区域：A1:B2 和 C3:D4，则 `Selection.Rows.Count` 返回 2 而不是 4。若要在一个可能包含多个选定区域的区域中使用此属性，请测试 `Areas.Count` 以确定该区域是否包含多个选择区域。如果是，请对此区域内的每个子区域进行循环，如第 3 个示例所示。



## 示例


```JavaScript
/*此示例删除 Sheet1 的第三行。*/
function test() {
    Application.Worksheets.Item("Sheet1").Rows.Item(3).Delete()
}
```


```JavaScript
/*此示例检查第一张工作表上当前区域中的行，如果某行的第一个单元格值与前一行的第一个单元格的值相等，则删除此行。*/
function test() {
    let last = null
    let cnt = Application.Selection.Rows.Count
    for (let i = 1; i <= cnt; i++) {
        let rw = Application.Selection.Rows.Item(i)
        const cur = rw.Cells.Item(1, 1).Value()
        if (cur === last) {
            rw.Delete()
            i--
            cnt--
        }
        last = cur
    }
}
```


```JavaScript
/*此示例显示 Sheet1 选定区域中的行数。如果选择了多个子区域，此示例将对每一个子区域进行循环。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    let areas = Application.Selection.Areas
    let areaCount = areas.Count
    if (areaCount <= 1) {
        alert(`The selection contains ${Application.Selection.Rows.Count} rows.`)
    } else {
        for (let i = 1; i <= areas.Count; i++) {
            alert(`Area ${i} of the selection contains ${areas.Item(i).Rows.Count} rows.`)
        }
    }
}
```
