# Document.ClosePrintPreview

将指定文档从打印预览视图切换到以前的视图。




## 语法

express.**ClosePrintPreview()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 说明


如果指定文档未处于打印预览视图，将出现错误。




## 示例


```JavaScript
/*本示例将活动窗口从打印预览视图切换至普通视图。*/
function test() {
    if (Application.ActiveDocument.PrintPreview == true) {
        Application.ActiveDocument.ClosePrintPreview()
    }
    Application.ActiveDocument.ActiveWindow.View.Type = wdNormalView
}

```
