# HeadingStyles.Add

返回一个 **HeadingStyle** 对象，该对象代表添加到文档中的新标题样式。在编译目录或图表目录时，都会包含该新标题样式。



## 语法

express.**Add(Style, Level)**

express   一个代表 **HeadingStyles** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Style | 必选 | any | 要添加的样式。要指定该参数，可以使用该样式的字符串名称或 **Style** 对象。 |
| Level | 必选 | number（short 精度） | 代表标题级别的数值。 |

## 返回值

HeadingStyle

## 示例


```JavaScript
/*本示例在活动文档的开始处添加一个目录，然后向用于创建目录的样式列表添加 Title 样式。*/
function test() {
    let tableOfContents = ActiveDocument.TablesOfContents.Add(ActiveDocument.Range(0, 0), true, 1, 3)
    tableOfContents.HeadingStyles.Add("Title", 2)
}
```


```JavaScript
/*本示例向第一个文档上第二个图表目录的 HeadingStyles 集合中添加样式。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(2)
    tableOfFigures.HeadingStyles.Add("Title", 3)
}
```
