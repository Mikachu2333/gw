# TabStops.DefaultSpacing

返回或设置指定文本的默认制表位间隔（以磅为单位）。可读/写。



## 语法

express.**DefaultSpacing**

express   一个代表 **TabStops** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个形状中文本的默认制表位间隔设为 0.5 英寸（36 磅）。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let tabStops = shape.TextFrame.Ruler.TabStops
    tabStops.DefaultSpacing = 36
}
```


```JavaScript
/*本示例显示活动窗口所选形状中文本的默认制表位间隔。*/
function test() {
    let textFrame = ActiveWindow.Selection.ShapeRange.TextFrame
    let tabStops = textFrame.Ruler.TabStops
    alert(tabStops.DefaultSpacing + " 磅")
}
```
