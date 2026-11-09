# TextFrame.ReadingOrder

返回或设置指定对象的阅读次序。可为以下常量之一： **xlRTL** （从右到左）、 **xlLTR** （从左到右）或 **xlContext** 。 **Long** 类型，可读写。



## 语法

express.**ReadingOrder**

express   一个代表 **TextFrame** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例在活动工作表中添加一个文本框，然后将文本框的阅读顺序设置为从右到左。*/
function test() {
    let textFrame = ActiveSheet.Shapes.AddTextbox(msoTextOrientationHorizontal, 100, 100, 200, 100).TextFrame
    textFrame.ReadingOrder = xlRTL
}
```


```JavaScript
/*本示例在第一张工作表中添加一个平行四边形，然后显示阅读次序是否为从左到右。*/
function test() {
    let textFrame = Application.Worksheets.Item(1).Shapes.AddShape(msoShapeParallelogram, 0, 0, 250, 140).TextFrame
    alert(textFrame.ReadingOrder == xlLTR)
}
```
