# Range.MergeCells

如果区域包含合并单元格，则为 **True** 。 **Variant** 型，可读写。



## 语法

express.**MergeCells**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


选定包含合并单元格的区域时，所选定的区域可能与所期望选定的区域不同。使用 **[Address](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Address)** 属性检验选定区域的地址。



## 示例


```JavaScript
/*本示例为包含单元格 A3 的合并区域赋值。*/
function test() {
    let ma = Application.Range("A3").MergeArea
    if (Application.Range("A3").MergeCells) {
        ma.Cells.Item(1, 1).Value2 = "42"
    }
}
```


```JavaScript
/*本示例将 A1:A3 单元格合并，并显示 A3 单元格是否在合并区域内*/
function test() {
    Range("A1:A3").Merge()
    alert(Range("A3").MergeCells)
}
```
