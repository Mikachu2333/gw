# Font.FontStyle

返回或设置字体样式。 **String** 类型，可读写。



## 语法

express.**FontStyle**

express   一个代表 **Font** 对象的变量。

## 类型

any

## 说明


更改该属性可能会影响其他 **Font** 属性（例如 **Bold** 和 **Italic** ）。



## 示例


```JavaScript
/*本示例将 Sheet1 中 A1 单元格的字体样式设置为加粗和倾斜*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1").Font.FontStyle = "Bold Italic"
}
```


```JavaScript
/*此示例显示C1单元格的字体样式*/
function test() {
    let font = Application.Worksheets.Item(1).Range("C1").Font
    alert(`字体样式为 ${font.FontStyle}`)
}
```
