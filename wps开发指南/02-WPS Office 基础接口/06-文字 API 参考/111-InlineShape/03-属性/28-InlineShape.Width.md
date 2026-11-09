# InlineShape.Width

返回或设置指定内嵌形状的宽度（以磅为单位）。可读写 **Long** 类型。



## 语法

express.**Width**

express   一个代表 **InlineShape** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置活动文档上第一个内嵌形状的宽度。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    inlineShape.Width = 300
}
```


```JavaScript
/*本示例显示所选的第二个内嵌形状的宽度。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(2)
    alert(inlineShape.Width)
}
```
