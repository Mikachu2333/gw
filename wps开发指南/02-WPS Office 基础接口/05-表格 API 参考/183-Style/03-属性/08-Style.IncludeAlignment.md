# Style.IncludeAlignment

如果样式包含 **AddIndent** 、 **HorizontalAlignment** 、 **VerticalAlignment** 、 **WrapText** 、 **IndentLevel** 和 **Orientation** 属性，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**IncludeAlignment**

express   一个代表 **Style** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在 Sheet1 的 A1 单元格样式中加入对齐格式。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1").Style.IncludeAlignment = true
}
```


```JavaScript
/*本示例在活动工作表中B1单元格添加文本，并显示单元格样式是否加入对齐格式。*/
function test() {
    let range = ActiveSheet.Range("B1")
    range.Value2 = "这是示例文本"
    alert(range.Style.IncludeAlignment)
}
```
