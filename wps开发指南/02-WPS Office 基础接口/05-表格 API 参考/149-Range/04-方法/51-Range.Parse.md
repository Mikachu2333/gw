# Range.Parse

分列区域内的数据并将这些数据分散放置于若干单元格中。将区域内容分配于多个相邻接的列中；该区域只能包含一列。



## 语法

express.**Parse(ParseLine, Destination)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ParseLine | 可选 | any | 包含方括号的字符串，用以指明在何处拆分单元格。 |
| Destination | 可选 | any | 一个代表用于放置分列数据的目标区域的左上角的 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj) 对象。如果省略该参数，ET 将在原处进行分列。 |

## 返回值

Variant

## 说明


“`[xxx][xxx]`”将前三个字符置于目标区域的第一列中，将后三个字符置于第二列中。如果省略该参数，ET 将根据区域左上角单元格中的空格来猜测在何处拆分列。如果您希望用其他区域来猜测分列线，请将 **Range** 对象作为 _ParseLine_ 参数。该区域必须为进行分列处理的单元格之一。_ParseLine_ 参数不能超过 255 个字符，包括方括号和空格。



## 示例


```JavaScript
/*本示例将 206-555-1212 形式的电话号码分解到两列中。第一列仅包含地区代码，第二列包含七个数字的电话号码及内嵌的连字符。*/
function test() {
    Worksheets.Item("Sheet1").Columns.Item("A").Parse("[xxx] [xxxxxxxx]", Worksheets.Item("Sheet1").Range("B1"));
}
```


```JavaScript
/*本示例将 A3 单元格的值设置为“金山办公研发部”，并拆分为“金山办公”和“研发部”，填入 B3 单元格*/
function test() {
    Range("A3").Value2 = "金山办公研发部"
    Range("A3").Parse("[xxxx][xxx]", Range("B3"));
}
```
