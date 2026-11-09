# Selection.SlideRange

返回一个 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 对象，该对象代表选定的幻灯片范围。只读。



## 语法

express.**SlideRange**

express   一个代表 **Selection** 对象的变量。

## 类型

SlideRange

## 说明


可以在幻灯片视图、幻灯片浏览视图、普通视图、备注页视图或大纲视图中构造幻灯片范围。在幻灯片视图中， **SlideRange** 返回当前放映的幻灯片。



## 示例


```JavaScript
/*本示例显示第一个窗口中所有选定幻灯片的数量。*/
function test() {
    alert(Application.Windows.Item(1).Selection.SlideRange.Count)
}
```


```JavaScript
/*本示例设置第一个窗口中所有选定幻灯片的背景配色方案。*/
function test() {
    Windows.Item(1).Selection.SlideRange.ColorScheme.Colors(ppBackground).RGB = RGB(0, 0, 255)
}
```
