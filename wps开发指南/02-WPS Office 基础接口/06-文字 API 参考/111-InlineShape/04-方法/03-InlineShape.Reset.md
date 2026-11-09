# InlineShape.Reset

删除对内嵌形状所做的更改。



## 语法

express.**Reset()**

express   一个代表 **InlineShape** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例首先将一幅图片作为内嵌形状插入，并更改其亮度，然后再将其亮度重新设置为初始的亮度。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.AddPicture("D:\\示例\\img1.png", Selection.Range)
    inlineShape.PictureFormat.Brightness = 0.5
    alert("Changing brightness back")
    inlineShape.Reset()
}
```


```JavaScript
/*本示例删除对选中的第二个内嵌形状所做的更改。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(2)
    inlineShape.Reset()
}
```
