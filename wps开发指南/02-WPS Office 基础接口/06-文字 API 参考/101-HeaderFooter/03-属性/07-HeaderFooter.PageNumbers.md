# HeaderFooter.PageNumbers

返回一个 **PageNumbers** 集合，该集合代表指定页眉或页脚中包含的页编号字段。



## 语法

express.**PageNumbers**

express   一个代表 **HeaderFooter** 对象的变量。

## 类型

PageNumbers

## 说明


有关返回集合中单个成员的信息，请参阅返回集合中的对象。



## 示例


```JavaScript
/*本示例创建一个新文档，并向页脚中添加页码。*/
function test() {
    let document = Application.Documents.Add()
    document.Sections.Item(1).Footers.Item(wdHeaderFooterPrimary).PageNumbers.Add(wdAlignPageNumberCenter)
}
```


```JavaScript
/*本示例在活动文档上第一节的页脚和页眉中添加页码，并显示页眉中页码的数量。*/
function test() {
    let section = Application.ActiveDocument.Sections.Item(1)
    section.Footers.Item(wdHeaderFooterPrimary).PageNumbers.Add(wdAlignPageNumberInside)
    section.Headers.Item(wdHeaderFooterPrimary).PageNumbers.Add(wdAlignPageNumberRight)
    alert(section.Headers.Item(wdHeaderFooterPrimary).PageNumbers.Count)
}
```
