# ThreeDFormat.ProjectText

返回或设置一个表示形状上的文本是否随同形状一起旋转的 **MsoTriState** 常量。 **msoTrue** 表示旋转文本。可读/写。



## 语法

express.**ProjectText**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例设置活动文档中第一个形状上的文本随形状一起旋转。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    threeDFormat.ProjectText = msoTrue
}
```


```JavaScript
/*本示例显示所选形状上的文本是否随同形状一起旋转。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    alert(threeDFormat.ProjectText == msoTrue)
}
```
