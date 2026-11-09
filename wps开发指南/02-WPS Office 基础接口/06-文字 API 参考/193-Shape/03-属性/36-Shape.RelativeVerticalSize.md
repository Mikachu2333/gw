# Shape.RelativeVerticalSize

返回或设置一个 **WdRelativeVerticalSize** 常量，该常量代表形状的相对垂直大小。可读写。



## 语法

express.**RelativeVerticalSize**

express   一个代表 **Shape** 对象的变量。

## 类型

WdRelativeVerticalSize

## 说明


此属性可与 **HeightRelative** 属性一起使用。



## 示例


```JavaScript
/*本示例设置活动文档中第一个形状的相对高度，高度以页面高度为基准。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    shape.RelativeVerticalSize = wdRelativeVerticalSizePage
    shape.HeightRelative = 30
}
```


```JavaScript
/*本示例显示第一个文档中第三个形状的 RelativeVerticalSize 属性值是否为 wdRelativeVerticalSizeMargin。*/
function test() {
    alert(Documents.Item(1).Shapes.Item(3).RelativeVerticalSize == wdRelativeVerticalSizeMargin)
}
```
