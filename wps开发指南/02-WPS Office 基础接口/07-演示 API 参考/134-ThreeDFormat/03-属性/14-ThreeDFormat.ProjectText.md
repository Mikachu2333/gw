# ThreeDFormat.ProjectText

指定 **ThreeDFormat** 对象上的文本是否随对象一起旋转。可读/写。



## 语法

express.**ProjectText**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例设置活动演示文稿上第一张幻灯片中第一个形状三维格式上的文本随该三维格式一起旋转。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let threeDFormat = slide.Shapes.Item(1).ThreeD
    threeDFormat.ProjectText = msoTrue
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片中第一个形状三维格式上的文本是否随三维格式旋转。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.ThreeD.ProjectText == msoTrue)
}
```
