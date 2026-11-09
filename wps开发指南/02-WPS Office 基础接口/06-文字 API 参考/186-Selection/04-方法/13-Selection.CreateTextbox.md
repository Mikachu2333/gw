# Selection.CreateTextbox

在选定内容周围添加一个默认大小的文本框。



## 语法

express.**CreateTextbox()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


如果所选内容是一个插入点，本方法将鼠标指针设为十字型指针，以便绘制一个文本框。  

该方法与单击 **“绘图”** 工具栏上的 **“文本框”** 按钮等效。文本框是一个具有关联文本框架的矩形。



## 示例


```JavaScript
/*本示例在选定内容周围添加一个文本框，然后改变该文本框样式。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        Selection.CreateTextbox()
        Selection.ShapeRange.Item(1).Line.DashStyle = msoLineDashDot
    }
}
```


```JavaScript
/*本示例在活动文档第三个段落周围添加一个文本框。*/
function test() {
    ActiveDocument.Paragraphs.Item(3).Range.Select()
    Selection.CreateTextbox()
}
```
