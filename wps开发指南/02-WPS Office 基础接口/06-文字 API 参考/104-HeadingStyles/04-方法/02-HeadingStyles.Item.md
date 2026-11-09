# HeadingStyles.Item

返回集合中的单个 **HeadingStyle** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **HeadingStyles** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

HeadingStyle

## 示例


```JavaScript
/*本示例显示活动文档上第一个图表目录的第一个标题样式的级别。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Item(1)
    alert(tableOfFigures.HeadingStyles.Item(1).Level)
}
```


```JavaScript
/*本示例删除第一个文档上第二个图表目录的第一个标题样式。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(2)
    tableOfFigures.HeadingStyles.Item(1).Delete()
}
```
