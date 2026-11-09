# HeadingStyle.Level

返回或设置目录或图表目录中标题样式的级别。可读写 **Integer** 类型。



## 语法

express.**Level**

express   一个代表 **HeadingStyle** 对象的变量。

## 类型

number（short 精度）

## 示例


```JavaScript
/*本示例在活动文档中的插入点处添加一个目录，然后更改标题样式的级别。*/
function test() {
    let tableOfContents = ActiveDocument.TablesOfContents.Add(ActiveDocument.Range(0, 0), true, 1, 3, null, wdTOCFormal, true, true)
    let headingStyles = tableOfContents.HeadingStyles
    headingStyles.Add("Title", 1)
    headingStyles.Add("正文", 2)
    headingStyles.Add("目录 2", 3)
    headingStyles.Item(1).Level = 2
    headingStyles.Item(2).Level = 4
    headingStyles.Item(3).Level = 6
}
```


```JavaScript
/*本示例显示活动文档上第一个图表目录的第一个标题样式的级别。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Item(1)
    alert(tableOfFigures.HeadingStyles.Item(1).Level)
}
```
