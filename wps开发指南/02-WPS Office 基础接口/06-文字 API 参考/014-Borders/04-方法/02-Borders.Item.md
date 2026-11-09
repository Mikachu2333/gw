# Borders.Item

返回指定区域或选定内容中的一个边框。



## 语法

express.**Item(Index)**

express   一个代表 **Borders** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | WdBorderType | 返回的边框。 |

## 返回值

Border

## 示例


```JavaScript
/*本示例在活动文档的第一段之上插入0.25 磅宽的双边框。*/
function test() {
    let borders = Application.ActiveDocument.Paragraphs.Item(1).Borders
    borders.Item(wdBorderTop).LineStyle = wdLineStyleDouble
    borders.Item(wdBorderTop).LineWidth = wdLineWidth025pt
}
```


```JavaScript
/*本示例在第一个文档的第一段之下插入深红色、0.5 磅宽的单边框。*/
function test() {
    let borders = Documents.Item(1).Paragraphs.Item(1).Borders
    borders.Item(wdBorderBottom).LineStyle = wdLineStyleSingle
    borders.Item(wdBorderBottom).LineWidth = wdLineWidth050pt
    borders.Item(wdBorderBottom).Color = wdColorDarkRed
}
```
