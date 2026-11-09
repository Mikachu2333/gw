# Window.View

返回或设置在窗口中显示的视图。 **[XlWindowView](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlWindowView)** 类型，可读写。



## 语法

express.**View**

express   一个代表 **Window** 对象的变量。

## 类型

XlWindowView

## 说明


| **XlWindowView** 可为以下 **XlWindowView** 常量之一。 |
| -------------------------------------------- |
| **xlNormalView**                             |
| **xlPageBreakPreview**                       |
| **xlPageLayoutView**                         |



## 示例


```JavaScript
/*本示例将活动窗口中的视图切换为分页预览。*/
function test() {
    ActiveWindow.View = xlPageBreakPreview
}
```


```JavaScript
/*本示例将第一个窗口中的视图切换为页面视图，并显示View属性的枚举值。*/
function test() {
    Windows.Item(1).View = xlPageLayoutView
    if (Windows.Item(1).View == xlPageLayoutView) {
        alert("View属性的枚举值为：xlPageLayoutView")
    }
}
```
