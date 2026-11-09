# Range.MergeArea

返回一个 **Range** 对象，该对象代表包含指定单元格的合并区域。如果指定的单元格不在合并区域内，则该属性返回指定的单元格。只读。 **Variant** 类型。



## 语法

express.**MergeArea**

express   一个代表 **Range** 对象的变量。

## 类型

Range

## 说明


 **MergeArea** 属性只应用于单个单元格区域。



## 示例


```JavaScript
/*本示例为包含单元格 A3 的合并区域赋值。*/
function test() {
    let ma = Application.Range("A3").MergeArea
    if (ma.Address() == "$A$3") {
        MsgBox("not merged")
    } else {
        ma.Cells.Item(1, 1).Value2 = "42"
    }
}
```


```JavaScript
/*本示例将 A1：A3 单元格合并，并显示包含 A3 单元格的合并区域的地址*/
function test() {
    Range("A1:A3").Merge()
    alert(Range("A3").MergeArea.Address())
}
```
