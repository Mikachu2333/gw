# ShapeRange.Delete

删除指定的 **ShapeRange** 对象。



## 语法

express.**Delete()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动演示文稿上第一张幻灯片中第三个形状删除。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Range(3).Delete()
}
```


```JavaScript
/*本示例将第一篇演示文稿上第二张幻灯片中所有的形状删除。*/
function test() {
    Presentations.Item(1).Slides.Item(2).Shapes.SelectAll()
    ActiveWindow.Selection.ShapeRange.Delete()
}
```
