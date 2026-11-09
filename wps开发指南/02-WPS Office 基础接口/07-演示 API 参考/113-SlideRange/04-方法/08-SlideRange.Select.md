# SlideRange.Select

选择指定的对象。



## 语法

express.**Select()**

express   一个代表 **SlideRange** 对象的变量。

## 返回值

void

## 说明


如果做出不适用于当前视图的选择，此代码将失败。例如，可以在幻灯片浏览视图中而不能在幻灯片视图中选择幻灯片。



## 示例


```JavaScript
/*本示例选择活动演示文稿第一张幻灯片的备注页。*/
function test() {
    ActivePresentation.Slides.Item(1).NotesPage.Select()
}
```


```JavaScript
/*本示例选择活动演示文稿中的第一张和第三张幻灯片。*/
function test() {
    Application.ActivePresentation.Slides.Range([1, 3]).Select()
}
```
