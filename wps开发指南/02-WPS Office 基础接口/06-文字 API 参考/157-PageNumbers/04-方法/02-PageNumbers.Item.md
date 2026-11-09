# PageNumbers.Item

返回集合中的单个 **PageNumber** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **PageNumbers** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

PageNumber

## 示例


```JavaScript
/*本示例选中第一个文档上第一节的主页脚的第一个页码，并将选中区域的字体设置为红色。*/
function test() {
    let pageNumber = Documents.Item(1).Sections.Item(1).Footers.Item(wdHeaderFooterPrimary).PageNumbers.Item(1)
    pageNumber.Select()
    Selection.Font.ColorIndex = wdRed
}
```


```JavaScript
/*本示例显示所选页眉的第一个页码的索引。*/
function test() {
    let pageNumber = Selection.HeaderFooter.PageNumbers.Item(1)
    alert(pageNumber.Index)
}
```
