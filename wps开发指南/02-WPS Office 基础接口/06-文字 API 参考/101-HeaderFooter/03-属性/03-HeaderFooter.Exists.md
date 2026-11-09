# HeaderFooter.Exists

如果存在指定的 **HeaderFooter** 对象，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Exists**

express   一个代表 **HeaderFooter** 对象的变量。

## 类型

boolean

## 说明


默认情况下，主页眉和页脚存在于所有新文档中。使用此方法可以确定首页或奇数页是否使用页眉或页脚。还可以使用 **DifferentFirstPageHeaderFooter** 或 **OddAndEvenPagesHeaderFooter** 属性返回或设置指定文档或节中的页眉和页脚数目。



## 示例


```JavaScript
/*本示例判断如果活动文档上第一节包含首页页眉，则设置页眉的文档部分的文本。*/
function test() {
    let headerFooter = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterFirstPage)
    if (headerFooter.Exists) {
        headerFooter.Range.Text = "First Page"
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一节是否包含偶数页页脚。*/
function test() {
    let headerFooter = Documents.Item(1).Sections.Item(1).Footers.Item(wdHeaderFooterEvenPages)
    alert(headerFooter.Exists)
}
```
