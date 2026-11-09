# Font2.NameFarEast

获取或设置一种东亚字体名称。可读写。



## 语法

express.**NameFarEast**

express   一个代表 **Font2** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框架）中的东亚字体设置为宋体。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.NameFarEast = "宋体"
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框架）中的东亚字体的名称。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.Font
    alert(font2.NameFarEast)
}
```
