# OLEFormat.Activate

激活指定的 **OLEFormat** 对象。



## 语法

express.**Activate()**

express   一个代表 **OLEFormat** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例激活活动文档上第一个形状中的 OLEFormat 对象。*/
function test() {
    ActiveDocument.Shapes.Item(1).OLEFormat.Activate()
}
```


```JavaScript
/*本示例激活第一个文档上第一个内嵌形状中的 OLEFormat 对象。*/
function test() {
    let oleFormat = Documents.Item(1).InlineShapes.Item(1).OLEFormat
    oleFormat.Activate()
}
```
