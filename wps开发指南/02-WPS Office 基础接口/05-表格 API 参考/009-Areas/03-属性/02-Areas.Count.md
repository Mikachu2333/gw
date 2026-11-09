# Areas.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **Areas** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例显示 Sheet1 上选定区域中的列数。此示例还将检测选定区域中是否包含多重选定区域，如果包含，则对多重选定区域中每一子区域进行循环*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    let areasCount = Application.Selection.Areas.Count
    if (areasCount <= 1) {
        alert("The selection contains " + Application.Selection.Columns.Count + " columns.")
    } else {
        for (let i = 1; i <= areasCount; i++) {
            alert("Area " + i + " of the selection contains " + Application.Selection.Areas.Item(i).Columns.Count + " columns.")
        }
    }
}
```
