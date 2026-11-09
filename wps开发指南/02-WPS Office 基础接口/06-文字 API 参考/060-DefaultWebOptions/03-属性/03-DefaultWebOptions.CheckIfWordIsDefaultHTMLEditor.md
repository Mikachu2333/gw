# DefaultWebOptions.CheckIfWordIsDefaultHTMLEditor

如果在启动 WPS 时，WPS 检查自己是否为默认 HTML 编辑器，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CheckIfWordIsDefaultHTMLEditor**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

boolean

## 说明


如果 WPS 不执行此检查，则 **CheckIfWordIsDefaultHTMLEditor** 属性返回 **False** 。默认值为 **True** 。

仅当所使用的 Web 浏览器支持 HTML 编辑和 HTML 编辑器时，才使用该属性。如果需要使用其他 HTML 编辑器，则必须将该属性设置为 **False** ，然后将该编辑器注册为默认的系统 HTML 编辑器。



## 示例


```JavaScript
/*本示例检查 WPS 是否为默认的 HTML 编辑器。*/
function test() {
    Application.DefaultWebOptions().CheckIfWordIsDefaultHTMLEditor = true
}
```


```JavaScript
/*本示例显示是否检查 WPS 为默认的 HTML 编辑器。*/
function test() {
    alert(Application.DefaultWebOptions().CheckIfWordIsDefaultHTMLEditor)
}
```
