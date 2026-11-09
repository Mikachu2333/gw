# Shape.Hyperlink

返回一个 **[Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlink/obj)** 对象，该对象表示该形状的超链接。



## 语法

express.**Hyperlink**

express   一个代表 **Shape** 对象的变量。

## 类型

Hyperlink

## 示例


```JavaScript
/*本示例加载附于（第一张工作表中）第一个形状的超链接的文档。*/
function test() {
    Worksheets(1).Shapes(1).Hyperlink.Follow(true)
}
```


```JavaScript
/*本示例显示附于活动工作表第一个形状的超链接地址。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    alert(shape.Hyperlink.Address)
}
```
