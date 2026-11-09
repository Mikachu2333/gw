# Window.Type

返回窗口的类型。只读 **[WdWindowType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdWindowType)** 类型。



## 语法

express.**Type**

express   一个代表 **Window** 对象的变量。

## 类型

WdWindowType

## 示例


```JavaScript
/*本示例判断活动窗口的类型，并通知用户。*/
function test() {
    switch (ActiveWindow.Type) {
        case wdWindowDocument:
            alert("文档窗口")
            break
        case wdWindowTemplate:
            alert("模板窗口")
            break
    }
}
```

```JavaScript
/*本示例判断活动窗口的类型是否为wdWindowDocument，如果是则将窗口最大化。*/
function test() {
    if (ActiveWindow.Type == wdWindowDocument) {
        ActiveWindow.WindowState = wdWindowStateMaximize
    }
}
```
