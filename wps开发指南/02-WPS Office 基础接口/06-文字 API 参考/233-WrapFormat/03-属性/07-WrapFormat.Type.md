# WrapFormat.Type

返回指定形状的换行类型。可读/写 **[WdWrapType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdWrapType)** 类型。



## 语法

express.**Type**

express   一个代表 **WrapFormat** 对象的变量。

## 类型

WdWrapType

## 示例


```JavaScript
/*本示例设置活动文档中的第一个图形的换行类型。*/
function test() {
    ActiveDocument.Shapes.Item(1).WrapFormat.Type = wdWrapInline
}
```


```JavaScript
/*本示例显示选中的一组形状的换行类型是否为wdWrapFront。*/
function test() {
    alert(Selection.ShapeRange.WrapFormat.Type == wdWrapFront)
}
```
