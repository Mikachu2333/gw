# TextFrame2.Orientation

返回或设置一个值，该值代表文本框方向。可读/写 **MsoTextOrientation** 类型。



## 语法

express.**Orientation**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoTextOrientation

## 说明


此属性值可设置为从 -90 到 90 度的整数值，或者以下 **MsoTextOrientation** 常量之一。



## 示例


```JavaScript
/*本示例显示活动工作表中第二个形状的文本框方向是否为水平。*/
function test() {
    let textFrame = ActiveSheet.Shapes.Item(2).TextFrame2
    alert(textFrame.Orientation == msoTextOrientationHorizontal)
}
```


```JavaScript
/*本示例将第一张工作表中第一个形状的文本框方向设置为向下。*/
function test() {
    Application.Worksheets.Item(1).Shapes.Item(1).TextFrame2.Orientation = msoTextOrientationDownward
}
```
