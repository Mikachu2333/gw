# Shapes.SelectAll

选择形状集合中的所有形状。



## 语法

express.**SelectAll()**

express   一个代表 **Shapes** 对象的变量。

## 返回值

void

## 说明


此方法不能选择 **InlineShape** 对象。不能使用此方法选择多个画布。



## 示例


```JavaScript
/*本示例选择活动文档中的所有形状。*/
function test() {
    ActiveDocument.Shapes.SelectAll()
}
```


```JavaScript
/*本示例选择活动文档的页眉和页脚中的所有形状，并给每一个形状添加红色阴影。*/
function test() {
    let window = ActiveDocument.ActiveWindow
    window.View.Type = wdPrintView
    window.ActivePane.View.SeekView = wdSeekCurrentPageHeader
    ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).Shapes.SelectAll()
    let shadow = Selection.ShapeRange.Shadow
    shadow.Type = msoShadow10
    shadow.ForeColor.RGB = RGB(220, 0, 0)
}
```
