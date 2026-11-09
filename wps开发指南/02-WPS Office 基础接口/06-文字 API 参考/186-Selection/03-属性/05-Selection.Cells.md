# Selection.Cells

返回一个 **Cells** 集合，该集合代表选定内容中的表格单元格。只读。



## 语法

express.**Cells**

express   一个代表 **Selection** 对象的变量。

## 类型

Cells

## 示例


```JavaScript
/*本示例将选中区域的第一个单元格的底纹背景色设置为红色。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Cells.Item(1).Shading.BackgroundPatternColorIndex = wdRed
    } else {
        alert("The insertion point is not in a table.")
    }
}
```


```JavaScript
/*本示例显示选中区域的单元格的数量。*/
function test() {
    alert(Application.Selection.Cells.Count)
}
```
