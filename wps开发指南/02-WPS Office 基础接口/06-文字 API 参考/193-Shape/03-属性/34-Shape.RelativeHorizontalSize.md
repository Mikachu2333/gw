# Shape.RelativeHorizontalSize

返回或设置一个 **WdRelativeHorizontalSize** 常量，该常量代表形状区域相对的对象。可读写。



## 语法

express.**RelativeHorizontalSize**

express   一个代表 **Shape** 对象的变量。

## 类型

WdRelativeHorizontalSize

## 说明


此属性可与 **WidthRelative** 属性一起使用。



## 示例


```JavaScript
/*本示例设置活动文档中第一个形状的相对宽度。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    shape.RelativeHorizontalSize = wdRelativeHorizontalSizePage
    shape.WidthRelative = 20
}
```


```JavaScript
/*本示例显示第一个文档中第三个形状的 RelativeHorizontalSize 属性值是否为 wdRelativeHorizontalSizeMargin*/
function test() {
    alert(Documents.Item(1).Shapes.Item(3).RelativeHorizontalSize == wdRelativeHorizontalSizeMargin)
}
```
