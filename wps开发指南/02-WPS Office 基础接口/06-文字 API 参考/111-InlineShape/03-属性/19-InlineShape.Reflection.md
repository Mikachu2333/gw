# InlineShape.Reflection

返回一个 **ReflectionFormat** 对象，该对象代表形状的反射格式。只读。



## 语法

express.**Reflection**

express   一个代表 **InlineShape** 对象的变量。

## 类型

ReflectionFormat

## 示例


```JavaScript
/*本示例设置选中的第二个内嵌形状的反射大小。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(2)
    inlineShape.Reflection.Size = 20
}
```


```JavaScript
/*本示例设置活动文档中第二个内嵌形状的反射效果的透明度。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(2)
    inlineShape.Reflection.Transparency = 0.7
}
```
