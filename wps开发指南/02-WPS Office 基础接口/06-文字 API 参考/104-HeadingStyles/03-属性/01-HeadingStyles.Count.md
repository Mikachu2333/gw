# HeadingStyles.Count

返回一个 **Long** 类型的值，该值代表集合中标题样式的数量。只读。



## 语法

express.**Count**

express   一个代表 **HeadingStyles** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个图表目录的标题样式的数量。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Item(1)
    alert(tableOfFigures.HeadingStyles.Count)
}
```
