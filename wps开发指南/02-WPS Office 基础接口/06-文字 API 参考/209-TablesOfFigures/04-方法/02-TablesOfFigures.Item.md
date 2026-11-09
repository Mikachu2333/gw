# TablesOfFigures.Item

返回集合中的单个 **TableOfFigures** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **TablesOfFigures** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

TableOfFigures

## 示例


```JavaScript
/*本示例显示向网站发布时是否隐藏活动文档上第一个图表目录的页码。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Item(1)
    alert(tableOfFigures.HidePageNumbersInWeb)
}
```


```JavaScript
/*本示例删除活动文档上第一个图表目录。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Item(1)
    tableOfFigures.Delete()
}
```
