# ShapeRange.AlternativeText

返回或设置与 Web 演示文稿中的形状关联的可选文字。可读/写。



## 语法

express.**AlternativeText**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例为活动窗口中选定的图形设定可选文字。选定图形是一个矩形。*/
function test() {
    ActiveWindow.Selection.ShapeRange.AlternativeText = "This is a rectangle."
}
```


```JavaScript
/*本示例显示活动演示文稿上第一张幻灯片中的第一个形状的可选文字。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range(1)
    alert(shapeRange.AlternativeText)
}
```
