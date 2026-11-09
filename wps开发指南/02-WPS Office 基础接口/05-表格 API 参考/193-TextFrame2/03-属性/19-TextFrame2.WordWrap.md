# TextFrame2.WordWrap

返回或设置形状边界内外的文本换行。可读/写 **MsoTriState** 类型。



## 语法

express.**WordWrap**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例显示活动工作表中第二个形状的文本是否支持自动换行。*/
function test() {
    let textFrame = ActiveSheet.Shapes.Item(2).TextFrame2
    alert(textFrame.WordWrap == msoTrue)
}
```


```JavaScript
/*本示例将第一张工作表中第一个形状的文本设置为不支持自动换行。*/
function test() {
    Application.Worksheets.Item(1).Shapes.Item(1).TextFrame2.WordWrap = msoFalse
}
```
