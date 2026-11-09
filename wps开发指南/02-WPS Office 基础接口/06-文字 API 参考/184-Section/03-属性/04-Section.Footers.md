# Section.Footers

返回一个 **HeadersFooters** 集合，该集合代表指定节的页脚。只读。



## 语法

express.**Footers**

express   一个代表 **Section** 对象的变量。

## 类型

HeadersFooters

## 说明


要返回代表指定节的页眉的 **HeadersFooters** 集合，请使用 **Headers** 属性。



## 示例


```JavaScript
/*本示例向活动文档第一节中的主页脚添加一个右对齐的页码。*/
function test() {
    let headerFooter = ActiveDocument.Sections.Item(1).Footers.Item(wdHeaderFooterPrimary)
    headerFooter.PageNumbers.Add(wdAlignPageNumberRight)
}
```


```JavaScript
/*本示例显示活动文档第一节中主页脚的文本内容。*/
function test() {
    let headerFooter = ActiveDocument.Sections.Item(1).Footers.Item(wdHeaderFooterPrimary)
    alert(headerFooter.Range.Text)
}
```
