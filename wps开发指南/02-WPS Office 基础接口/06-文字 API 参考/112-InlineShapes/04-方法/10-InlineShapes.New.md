# InlineShapes.New

插入一个空白的 WPS 图片对象，该对象是边长为一英寸的正方形，四周带有边框。此方法以 **InlineShape** 对象的形式返回新图形。



## 语法

express.**New(Range)**

express   一个代表 **InlineShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 新图形的位置。 |

## 返回值

InlineShape

## 示例


```JavaScript
/*以下示例在活动文档中插入一个新的空白图片，并在该图片周围应用阴影边框。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.New(Selection.Range)
    inlineShape.Borders.Shadow = true
    ActiveDocument.ActiveWindow.View.ShowFieldCodes = false
}
```


```JavaScript
/*本示例在第一个文档第一个段落插入一个空白图片。*/
function test() {
    let range = Documents.Item(1).Paragraphs.Item(1).Range
    Documents.Item(1).InlineShapes.New(range)
}
```
