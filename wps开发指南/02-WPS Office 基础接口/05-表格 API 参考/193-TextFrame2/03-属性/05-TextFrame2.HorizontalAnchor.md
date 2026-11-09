# TextFrame2.HorizontalAnchor

返回或设置指定文本的水平定位类型。可读/写 **MsoHorizontalAnchor** 类型。



## 语法

express.**HorizontalAnchor**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoHorizontalAnchor

## 示例


```JavaScript
/*本示例将活动工作表中第一个文本框的文本设置成文本水平居中。*/
function test() {
    let textFrame2 = Application.ActiveSheet.Shapes.Item(1).TextFrame2
    textFrame2.HorizontalAnchor = msoAnchorCenter
}
```


```JavaScript
/*本示例显示第一张工作表中第二个形状的文本框的文本水平对齐方式是否是不对齐。*/
function test() {
    let textFrame2 = Application.Worksheets.Item(1).Shapes.Item(2).TextFrame2
    alert(textFrame2.HorizontalAnchor == msoAnchorNone)
}
```
