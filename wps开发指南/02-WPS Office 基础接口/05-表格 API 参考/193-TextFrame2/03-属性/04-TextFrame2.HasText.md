# TextFrame2.HasText

返回指定文本框是否有文本。只读 **MsoTriState** 类型。



## 语法

express.**HasText**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例如果文本框包含文本，则设置文本框中的文本字体为“Arial”。*/
function test() {
    let textFrame2 = Application.ActiveSheet.Shapes.Item(1).TextFrame2
    if (textFrame2.HasText) {
        textFrame2.TextRange.Font.Name = "Arial"
    }
}
```


```JavaScript
/*本示例显示第一张工作表中第二个形状的文本框是否包含文本。*/
function test() {
    let textFrame2 = Application.Worksheets.Item(1).Shapes.Item(2).TextFrame2
    alert(textFrame2.HasText == msoTrue)
}
```
