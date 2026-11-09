# PageNumber.Delete

删除指定的页码。



## 语法

express.**Delete()**

express   一个代表 **PageNumber** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档上第一节的主页眉的第一个页码。*/
function test() {
    let pageNumber = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).PageNumbers.Item(1)
    pageNumber.Delete()
}
```


```JavaScript
/*本示例删除所选页脚的第一个页码。*/
function test() {
    let pageNumber = Selection.HeaderFooter.PageNumbers.Item(1)
    pageNumber.Delete()
}
```
