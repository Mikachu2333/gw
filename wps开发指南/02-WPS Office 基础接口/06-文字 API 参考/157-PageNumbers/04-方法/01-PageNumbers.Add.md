# PageNumbers.Add

返回一个 **PageNumber** 对象，该对象代表添加到节中的页眉或页脚中的页码。



## 语法

express.**Add(PageNumberAlignment, FirstPage)**

express   一个代表 **PageNumbers** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PageNumberAlignment | 可选 | any | 可以是任意 **WdPageNumberAlignment** 常量。 |
| FirstPage | 可选 | any | 如果该属性值为 **False** ，则文档中的第一页的页眉和页脚与后面各页的页眉和页脚都不相同；如果将 _FirstPage_ 设置为 **False** ，则在第一页不添加页码；如果省略该参数，则由 **DifferentFirstPageHeaderFooter** 属性控制该设置。 |

## 返回值

PageNumber

## 说明


如果将 **HeaderFooter** 对象的 **LinkToPrevious** 属性设置为 **True** ，则文档中各节的页码都将连续编号。



## 示例


```JavaScript
/*本示例为活动文档第一节的主页脚添加页码*/
function test() {
    let section = ActiveDocument.Sections.Item(1)
    section.Footers.Item(wdHeaderFooterPrimary).PageNumbers.Add(wdAlignPageNumberLeft, true)
}
```


```JavaScript
/*本示例在活动文档第一节的主页眉中创建页码并进行格式设置。*/
function test() {
    let pageNumber = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).PageNumbers.Add(wdAlignPageNumberCenter, true)
    pageNumber.Select()
    Selection.Range.Italic = msoTrue
    Selection.Range.Bold = msoTrue
}
```
