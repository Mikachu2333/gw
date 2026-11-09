# TextFrame2.AutoSize

指定的对象的大小，可自动调整大小以适应其中包含的文字。可读/写 **MsoAutoSize** 。



## 语法

express.**AutoSize**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoAutoSize

## 示例


```JavaScript
/*本示例使第一张工作表中第一个形状根据文本调整形状。*/
function test() {
    Application.Worksheets.Item(1).Shapes.Item(1).TextFrame2.AutoSize = msoAutoSizeShapeToFitText
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状是否根据形状调整文本。*/
function test() {
    let textFrame = ActiveSheet.Shapes.Item(2).TextFrame2
    alert(textFrame.AutoSize == msoAutoSizeTextToFitShape)
}
```
