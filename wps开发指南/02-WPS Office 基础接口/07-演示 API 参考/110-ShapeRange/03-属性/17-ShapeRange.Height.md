# ShapeRange.Height

以磅为单位返回或设置指定对象的高度。可读/写， **Single** 类型。



## 语法

express.**Height**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 说明


 **ShapeRange** 对象的 **Height** 属性返回或设置指定形状前向表面的高度。此度量不包括阴影或三维效果。



## 示例


```JavaScript
/*本示例设置第一篇演示文稿上第一张幻灯片中所有形状的高度。*/
function test() {
    Presentations.Item(1).Slides.Item(1).Shapes.SelectAll()
    ActiveWindow.Selection.ShapeRange.Height = 50
}
```


```JavaScript
/*本示例显示活动演示文稿上第二张幻灯片中第三个形状的高度。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(2).Shapes.Range(3)
    alert(shapeRange.Height)
}
```
