# Shading.Texture

返回或设置指定对象的底纹纹理。 **WdTextureIndex** 类型，可读写。



## 语法

express.**Texture**

express   一个代表 **Shading** 对象的变量。

## 类型

WdTextureIndex

## 示例


```JavaScript
/*本示例将网格纹理应用于活动文档第一个段落。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.Shading.Texture = wdTextureCross
}
```


```JavaScript
/*本示例在插入点添加一个表格，然后将竖线纹理应用于表格。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    let table = ActiveDocument.Tables.Add(Selection.Range, 2, 2)
    table.Shading.Texture = wdTextureVertical
}
```


```JavaScript
/*本示例将活动文档中第一个单词的底纹设置为 10%。*/
function test() {
    ActiveDocument.Words.Item(1).Shading.Texture = wdTexture10Percent
}
```
