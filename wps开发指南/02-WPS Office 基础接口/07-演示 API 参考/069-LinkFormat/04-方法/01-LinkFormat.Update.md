# LinkFormat.Update

更新指定的链接 OLE 对象。



## 语法

express.**Update()**

express   一个代表 **LinkFormat** 对象的变量。

## 返回值

void

## 说明


要一次更新演示文稿中的所有链接，可使用 **[UpdateLinks](#TODO)** 方法。



## 示例


```JavaScript
/*本示例更新活动演示文稿所有幻灯片上所有链接的 OLE 对象。*/
function test() {
    for (let i = 1; i <= ActivePresentation.Slides.Count; i++) {
        let shapes = ActivePresentation.Slides.Item(i).Shapes
        for (let j = 1; j <= shapes.Count; j++) {
            let shape = shapes.Item(j)
            if (shape.Type == msoLinkedOLEObject) {
                shape.LinkFormat.Update()
            }
        }
    }
}
```


```JavaScript
/*本示例更新活动窗口所选的第一张幻灯片的第一个链接的 OLE 对象。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1)
    shape.LinkFormat.Update()
}
```
