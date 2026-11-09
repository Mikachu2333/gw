# Window.Type

返回一个代表窗口类型的 **[XlWindowType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlWindowType)** 值，只读。



## 语法

express.**Type**

express   一个代表 **Window** 对象的变量。

## 类型

XlWindowType

## 示例


```JavaScript
/*本示例显示当前活动窗口的窗口类型是不是xlClipboard。*/
function test() {
    alert(ActiveWindow.Type == xlClipboard)
}
```


```JavaScript
/*本示例判断第一个窗口的类型是否为 xlWorkbook ，并通知用户。*/
function test() {
    if (Windows.Item(1).Type == xlWorkbook) {
        alert("第一个窗口类型是xlWorkbook")
    } else {
        alert("第一个窗口类型不是xlWorkbook")
    }
}
```
