# Hyperlink.ScreenTip

返回或设置超链接的屏幕提示文字。可读/写 **String** 类型。



## 语法

express.**ScreenTip**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 说明


将演示文稿保存为 HTML、在 Web 浏览器中查看 Web 演示文稿以及将鼠标指针停留在超链接之上时，会显示屏幕提示文字。有些浏览器可能不支持屏幕提示。



## 示例


```JavaScript
/*本示例为活动演示文稿第一张幻灯片的第一个超链接设置屏幕提示文字。*/
function test() {
    ActivePresentation.Slides.Item(1).Hyperlinks.Item(1).ScreenTip = "Go to the WPS home page"
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片第二个超链接的屏幕提示文字。*/
function test() {
    let hyperlink = ActiveWindow.Selection.SlideRange.Item(1).Hyperlinks.Item(2)
    alert(hyperlink.ScreenTip)
}
```
