# Application.HinstancePtr

返回由指定的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象表示的 ET 实例的句柄。只读 **Variant** 。



## 语法

express.**HinstancePtr**

express   一个代表 **Application** 对象的变量。

## 类型

any

## 说明


此属性在 32 位和 64 位版本的 ET 中均返回正确的句柄。它扩展了 **Application** 对象的 **[Hinstance](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Hinstance)** 属性的功能，Hinstance 属性仅适用于 32 位版本的 ET 。

用于此属性的理想数据类型为 **LongPtr** 数据类型。按照预期，将此属性返回的值分配给 **LongPtr** 变量同样适用于 32 位和 64 位版本的 ET。出于内部实现原因，此属性被定义为 **Variant** 。不过，在 32 位系统上它始终返回 32 位的值，在 64 位系统上始终返回 64 位的值。



## 示例


```JavaScript
/*本示例显示ET实例的句柄。*/
function test() {
    alert(Application.HinstancePtr)
}
```


```JavaScript
/*本示例将ET实例的句柄赋值给A2单元格。*/
function test() {
    Range("A2").Value2 = Application.HinstancePtr
}
```
