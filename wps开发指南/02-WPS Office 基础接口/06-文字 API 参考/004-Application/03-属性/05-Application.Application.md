# Application.Application

返回一个 **Application** 对象，该对象代表 WPS 应用程序。




## 语法

express.**Application**

express   一个代表 **Application** 对象的变量。

## 类型

Application

## 示例


```JavaScript
/*本示例使 WPS 显示滚动条、屏幕提示和状态栏。*/
function test() {
    let app = Application
    app.DisplayScrollBars = true
    app.DisplayScreenTips = true
    app.DisplayStatusBar = true
}

```
