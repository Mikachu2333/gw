# ParagraphFormat2.TabStops

获取一个代表指定段落的所有自定义制表位的 **TabStops2** 集合。只读。



## 语法

express.**TabStops**

express   一个代表 **ParagraphFormat2** 对象的变量。

## 类型

TabStops2

## 示例


```JavaScript
/*本示例运行于演示组件，在活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本段落添加一个制表位，然后显示制表位的数量。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let paragraphFormat2 = shapes.Item(1).TextFrame2.TextRange.ParagraphFormat
    paragraphFormat2.TabStops.Add(msoTabStopCenter, 100)
    alert(paragraphFormat2.TabStops.Count)
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）的文本段落的制表位的默认间隔。*/
function test() {
    let textRange2 = ActiveWindow.Selection.ShapeRange.TextFrame2.TextRange
    let paragraphFormat2 = textRange2.ParagraphFormat
    alert(paragraphFormat2.TabStops.DefaultSpacing)
}
```
