# DefaultWebOptions.CheckIfOfficeIsHTMLEditor

如果在启动 ET 时，ET 检查某个 WPS 应用程序是否为默认 HTML 编辑器，则该值为 **True** 。如果 ET 并不进行此检查，则该值为 **False** 。默认值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CheckIfOfficeIsHTMLEditor**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

boolean

## 说明


仅当所使用的 Web 浏览器支持 HTML 编辑和 HTML 编辑器时，才使用该属性。

要使用其他 HTML 编辑器，必须将该属性设置为 **False** ，然后将该编辑器注册为默认的系统 HTML 编辑器。



## 示例


```JavaScript
/*本示例使得 ET 不检查它是否为默认 HTML 编辑器。*/
function test() {
    Application.DefaultWebOptions.CheckIfOfficeIsHTMLEditor = false
}
```


```JavaScript
/*本示例显示 ET 在启动时是否检查它是不是默认 HTML 编辑器。*/
function test() {
    alert(Application.DefaultWebOptions.CheckIfOfficeIsHTMLEditor)
}
```
