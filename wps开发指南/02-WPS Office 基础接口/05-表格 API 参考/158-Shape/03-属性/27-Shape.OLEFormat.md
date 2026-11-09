# Shape.OLEFormat

返回一个 **[OLEFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEFormat/obj)** 对象，该对象包含 OLE 对象属性。只读。



## 语法

express.**OLEFormat**

express   一个代表 **Shape** 对象的变量。

## 类型

OLEFormat

## 示例


```JavaScript
/*本示例将第一张工作表的第一个OLE对象激活。工作表中第一个形状必须是OLE对象。*/
function test() {
    Worksheets.Item(1).Shapes.Item(1).OLEFormat.Activate()
}
```


```JavaScript
/*本示例显示活动工作表的第二个OLE对象的程序标识符。工作表中第二个形状必须是OLE对象。*/
function test() {
    alert(ActiveSheet.Shapes.Item(2).OLEFormat.progID)
}
```
