# Styles.Add

创建新的用户定义样式并将其添加到 **Styles** 集合。



## 语法

express.**Add(Name, Type)**

express   一个代表 **Styles** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 新样式的名称。 |
| Type | 可选 | any | 可以是 **WdStyleType** 常量之一。默认值为段落样式。 |

## 返回值

Style

## 示例


```JavaScript
/*本示例添加了一个名为“Introduction”的新字符样式，并将其设置为 12 磅 Arial 字体，具有粗体和斜体格式，然后将此新字符样式应用于所选区域。*/
function test() {
    let style = ActiveDocument.Styles.Add("Introduction", wdStyleTypeCharacter)
    let font = style.Font
    font.Bold = true
    font.Italic = true
    font.Name = "Arial"
    font.Size = 12
    Selection.Range.Style = "Introduction"
}
```


```JavaScript
/*本示例在第一个文档上添加一个名为“example_1”的新段落样式，并设置其底纹纹理，然后将此新段落样式应用于所有段落。*/
function test() {
    let style = Documents.Item(1).Styles.Add("example_1", wdStyleTypeParagraph)
    style.Shading.Texture = wdTexture7Pt5Percent
    Documents.Item(1).Paragraphs.Style = "example_1"
}
```
