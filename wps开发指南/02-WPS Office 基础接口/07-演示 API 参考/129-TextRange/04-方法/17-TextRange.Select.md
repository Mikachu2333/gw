# TextRange.Select

选择指定的对象。



## 语法

express.**Select()**

express   一个代表 **TextRange** 对象的变量。

## 返回值

void

## 说明


如果做出不适用于当前视图的选择，此代码将失败。例如，可以在幻灯片浏览视图中而不能在幻灯片视图中选择幻灯片。



## 示例


```JavaScript
/*本示例选择活动演示文稿中第一张幻灯片标题的前五个字符。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Title.TextFrame.TextRange.Characters(1, 5).Select()
}
```


```JavaScript
/*本示例判断如果活动演示文稿中第一张幻灯片的第二个形状的文本为“test”，则将其选中。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    if (shape.TextFrame.TextRange.Text == "test") {
        shape.TextFrame.TextRange.Select()
    }
}
```
