# InlineShape.Height

返回或设置内嵌形状的高度。 **Single** 类型，可读写。



## 语法

express.**Height**

express   一个代表 **InlineShape** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动文档上所有内嵌形状的高度。*/
function test() {
    for (let i = 1; i <= ActiveDocument.InlineShapes.Count; i++) {
        alert(ActiveDocument.InlineShapes.Item(i).Height)
    }
}
```


```JavaScript
/*本示例将第一个文档上第一个内嵌形状的高度设置为260.5磅。*/
function test() {
    let inlineShape = Application.Documents.Item(1).InlineShapes.Item(1)
    inlineShape.Height = 260.5
}
```
