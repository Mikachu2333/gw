# TextFrame2.VerticalAnchor

返回或设置指定文本的垂直定位类型。可读/写 **MsoVerticalAnchor** 类型。



## 语法

express.**VerticalAnchor**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoVerticalAnchor

## 示例


```JavaScript
/*本示例显示活动工作表中第二个形状的文本框内文本是否为垂直居中。*/
function test() {
    let textFrame = ActiveSheet.Shapes.Item(2).TextFrame2
    alert(textFrame.VerticalAnchor == msoAnchorMiddle)
}
```


```JavaScript
/*本示例使第一张工作表中第一个形状的文本与文本框的底部对齐。*/
function test() {
    Application.Worksheets.Item(1).Shapes.Item(1).TextFrame2.VerticalAnchor = msoAnchorBottom
}
```
