# PrintRanges.Parent

返回指定对象的父对象。




## 语法

express.**Parent**

express   一个代表 **PrintRanges** 对象的变量。

## 类型

Object

## 示例


```JavaScript
/*以下示例在活动演示文稿的第一张幻灯片中添加一个包含文本的椭圆并将该椭圆及文本旋转 45 度。文本框的父对象就是包含文本的 Shape 对象。*/
function test(){
        let myShapes = ActivePresentation.Slides.Item(1).Shapes
        let addshape = myShapes.AddShape(msoShapeOval, 50, 50, 300, 150).TextFrame
            addshape.TextRange.Text = "Test text"
            addshape.Parent.Rotation = 45
}
```
