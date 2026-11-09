# TextFrame2.ThreeD

返回一个 **ThreeDFormat** 对象，该对象包含指定文本的三维效果格式属性。只读。



## 语法

express.**ThreeD**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

ThreeDFormat

## 示例


```JavaScript
/*本示例将活动工作表中第二个形状的文本框内的文本突出的深度设置为10磅。*/
function test() {
    let textFrame2 = ActiveSheet.Shapes.Item(2).TextFrame2
    textFrame2.ThreeD.Depth = 10
}
```


```JavaScript
/*本示例显示第一张工作表中第一个形状的文本框三维格式是否可见。*/
function test() {
    let textFrame2 = Application.Worksheets.Item(1).Shapes.Item(1).TextFrame2
    alert(textFrame2.ThreeD.Visible == msoTrue)
}
```
