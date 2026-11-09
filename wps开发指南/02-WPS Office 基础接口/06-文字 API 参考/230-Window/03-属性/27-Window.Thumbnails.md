# Window.Thumbnails

设置或返回一个 **Boolean** 类型的值，该值代表是否沿 WPS 文档窗口的左侧显示文档页面的缩略图。



## 语法

express.**Thumbnails**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*下列示例显示活动文档中页面的缩略图。*/
function test() {
    ActiveDocument.ActiveWindow.Thumbnails = true
}
```


```JavaScript
/*本示例通知用户活动窗口中是否显示导航窗格。*/
function test() {
    alert(ActiveDocument.ActiveWindow.Thumbnails)
}
```
