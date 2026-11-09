# Application.Hinstance

返回由 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象表示的 ET 实例的句柄。只读 **Long** 类型。



## 语法

express.**Hinstance**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **要点** 此属性只在 32 位版 ET 中返回正确的句柄。ET 中引入了 **[HinstancePtr](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/HinstancePtr)** 属性，该属性在 32 位和 64 位版 ET 中都可正确运行。



## 示例


```JavaScript
/*本示例显示ET实例的句柄。*/
function test() {
    alert(Application.Hinstance)
}
```


```JavaScript
/*本示例将ET实例的句柄赋值给A1单元格。*/
function test() {
    Range("A1").Value2 = Application.Hinstance
}
```
