# Application.Windows

返回一个代表所有打开的文档窗口的 [ **DocumentWindows** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindows/obj) 集合。只读。



## 语法

express.**Windows**

express   一个代表 **Application** 对象的变量。

## 类型

DocumentWindows

## 示例


```JavaScript
/*以下示例关闭除当前窗口外的所有窗口。*/
function test() {
    let windows = Application.Windows
    for (let i = windows.Count; i >= 2; i--) {
        windows.Item(i).Close()
    }
}
```


```JavaScript
/*本示例显示应用程序窗口的数量。*/
function test() {
    alert(Application.Windows.Count)
}
```
