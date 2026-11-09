# SlideShowView.SlideShowName

返回当前在指定幻灯片放映视图中运行的自定义幻灯片放映的名称。只读。



## 语法

express.**SlideShowName**

express   一个代表 **SlideShowView** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一个幻灯片放映窗口中正在运行的自定义幻灯片放映的名称。*/
function test() {
    let slideShowView = SlideShowWindows(1).View
    Console.log("Now showing in slide show window 1: " + slideShowView.SlideShowName)
}
```


```JavaScript
/*本示例显示活动演示文稿幻灯片放映视图中运行的自定义幻灯片放映的名称。*/
function test() {
    let slideShowView = ActivePresentation.SlideShowSettings.Run().View
    Console.log(slideShowView.SlideShowName)
}
```
