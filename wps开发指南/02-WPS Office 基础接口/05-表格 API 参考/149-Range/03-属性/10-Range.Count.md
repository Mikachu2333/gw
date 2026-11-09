# Range.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **Range** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例显示 Sheet1 上选定区域中的列数。此示例还将检测选定区域中是否包含多重选定区域，如果包含，则对多重选定区域中每一子区域进行循环。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    let iAreaCount = Application.Selection.Areas.Count
    if (iAreaCount <= 1) {
        MsgBox("The selection contains " + Application.Selection.Columns.Count + " columns.")
    } else {
        for (let i = 1; i <= iAreaCount; i++) {
            MsgBox("Area " + i + " of the selection contains " + Application.Selection.Areas.Item(i).Columns.Count + " columns.")
        }
    }
}
```


```JavaScript
/*此示例选中 A1 和 B1 单元格，显示选中单元格的数量*/
function test() {
    Union(Range("A1"), Range("B1")).Select()
    alert(Selection.Count)
}
```
