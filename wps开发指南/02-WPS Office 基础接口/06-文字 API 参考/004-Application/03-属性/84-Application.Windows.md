# Application.Windows

返回一个 **[Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Windows/obj)** 集合，该集合代表所有文档窗口。只读。



## 语法

express.**Windows**

express   一个代表 **Application** 对象的变量。

## 类型

Windows

## 说明


此属性返回的集合中既包括可见窗口，也包括隐藏窗口。



## 示例


```JavaScript
/*本示例排列所有打开的窗口，使其不相互重叠。*/
function test() {
    Application.Windows.Arrange(wdTiled)
}
```


```JavaScript
/*本示例显示第一个窗口的标题。*/
function test() {
    alert(Application.Windows.Item(1).Caption)
}
```
