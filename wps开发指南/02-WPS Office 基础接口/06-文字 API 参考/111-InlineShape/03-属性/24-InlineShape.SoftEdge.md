# InlineShape.SoftEdge

返回一个 **SoftEdgeFormat** 对象，该对象代表形状的软边缘格式。只读。



## 语法

express.**SoftEdge**

express   一个代表 **InlineShape** 对象的变量。

## 类型

SoftEdgeFormat

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌形状的柔化边缘效果的类型是否为msoBevelCircle。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    alert(inlineShape.SoftEdge.Type == msoBevelCircle)
}
```


```JavaScript
/*本示例设置所选的第一个内嵌形状的柔化边缘效果的辐射长度。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(1)
    inlineShape.SoftEdge.Radius = 20
}
```
