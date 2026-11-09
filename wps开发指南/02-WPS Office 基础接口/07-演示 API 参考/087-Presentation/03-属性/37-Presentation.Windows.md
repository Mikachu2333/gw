# Presentation.Windows

返回一个 **[DocumentWindows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindows/obj)** 集合，该集合代表与指定演示文稿相关联的所有文档窗口。只读。



## 语法

express.**Windows**

express   一个代表 **Presentation** 对象的变量。

## 类型

DocumentWindows

## 说明


该属性不返回与该演示文稿相关联的任何幻灯片放映窗口。

如果Visual Studio解决方案包含 Kingsoft.Office.Interop.Wppapi 的引用，该属性将映射到以下类型：

* Kingsoft.Office.Interop.Wppapi._Presentation.Windows



## 示例


```JavaScript
/*以下示例关闭活动演示文稿的所有窗口。*/
function test() {
    let windows = ActivePresentation.Windows
    for (let i = windows.Count; i > 0; i--) {
        windows.Item(i).Close()
    }
}
```


```JavaScript
/*本示例判断第一篇演示文稿的第一个窗口的状态，并通知用户。*/
function test() {
    let windowState = Presentations.Item(1).Windows(1).WindowState
    switch (windowState) {
        case ppWindowMaximized:
            alert("该窗口处于最大化状态。")
            break
        case ppWindowMinimized:
            alert("该窗口处于最小化状态。")
            break
        case ppWindowNormal:
            alert("该窗口处于一般化状态。")
            break
    }
}
```
