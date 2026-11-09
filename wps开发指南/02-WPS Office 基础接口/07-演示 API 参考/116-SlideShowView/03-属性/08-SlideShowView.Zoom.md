# SlideShowView.Zoom

以正常大小的百分比形式返回指定幻灯片放映窗口视图的缩放设置。只读。



## 语法

express.**Zoom**

express   一个代表 **SlideShowView** 对象的变量。

## 类型

number（int 精度）

## 说明


 **Zoom** 属性值可以是 10% 到 400% 之间的值。



## 示例


```JavaScript
/*本示例显示第一篇演示文稿幻灯片放映窗口视图的缩放属性值。*/
function test() {
    let slideShowView = Presentations.Item(1).SlideShowWindow.View
    Console.log(slideShowView.Zoom + "%")
}
```


```JavaScript
/*本示例显示活动演示文稿幻灯片放映窗口视图的缩放属性值。*/
function test() {
    let slideShowView = ActivePresentation.SlideShowSettings.Run().View
    Console.log(slideShowView.Zoom + "%")
}
```
