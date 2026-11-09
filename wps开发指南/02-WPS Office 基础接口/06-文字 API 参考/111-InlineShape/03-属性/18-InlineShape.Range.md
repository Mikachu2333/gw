# InlineShape.Range

返回一个 **Range** 对象，该对象代表内嵌形状中包含的文档部分。



## 语法

express.**Range**

express   一个代表 **InlineShape** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示活动文档中第一个内嵌形状所包含的文档部分的文字部分类型是否为wdMainTextStory。*/
function test() {
    let range = ActiveDocument.InlineShapes.Item(1).Range
    alert(range.StoryType == wdMainTextStory)
}
```


```JavaScript
/*本示例显示选中的第二个内嵌形状的文档部分是否应用加粗格式。*/
function test() {
    let range = Selection.InlineShapes.Item(2).Range
    alert(range.Bold === msoTrue)
}
```
