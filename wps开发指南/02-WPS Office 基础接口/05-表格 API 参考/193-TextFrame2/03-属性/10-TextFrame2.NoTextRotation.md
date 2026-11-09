# TextFrame2.NoTextRotation

返回或设置在指定的对象旋转时，文本是否保持扁平。可读/写



## 语法

express.**NoTextRotation**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoTriState

## 说明


如果文本框旋转时，文本仍保持扁平，则为 **msoTrue** (-1)；否则为 **msoFalse** (0)。



## 示例


```JavaScript
/*本示例将活动工作表中第一个文本框的文本设置为随文本框旋转。*/
function test() {
    let textFrame2 = Application.ActiveSheet.Shapes.Item(1).TextFrame2
    textFrame2.NoTextRotation = msoFalse
}
```


```JavaScript
/*本示例显示第一张工作表中第二个形状的文本框旋转时，文本是否保持水平。*/
function test() {
    let textFrame2 = Application.Worksheets.Item(1).Shapes.Item(2).TextFrame2
    alert(textFrame2.NoTextRotation == msoTrue)
}
```
