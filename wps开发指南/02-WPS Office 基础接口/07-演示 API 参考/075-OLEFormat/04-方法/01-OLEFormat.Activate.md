# OLEFormat.Activate

激活指定的对象。



## 语法

express.**Activate()**

express   一个代表 **OLEFormat** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例激活活动演示文稿第一张幻灯片的第一个 OLE 对象。*/
function test() {
    let oleFormat = ActivePresentation.Slides.Item(1).Shapes.Item(1).OLEFormat
    oleFormat.Activate()
}
```


```JavaScript
/*本示例判断如果活动窗口所选的第一张幻灯片的第一个形状为嵌入式 OLE 对象，则激活该 OLE 对象。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1)
    if (shape.Type == msoEmbeddedOLEObject) {
        shape.OLEFormat.Activate()
    }
}
```
