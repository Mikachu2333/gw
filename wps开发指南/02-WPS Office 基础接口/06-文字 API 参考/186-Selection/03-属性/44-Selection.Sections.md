# Selection.Sections

返回一个 **[Sections](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sections/obj)** 集合,该集合代表指定选定内容中的各节。只读。



## 语法

express.**Sections**

express   一个代表 **Selection** 对象的变量。

## 类型

Sections

## 示例


```JavaScript
/*本示例在选定内容中的最后一节的末尾插入文本。*/
function test() {
    let range = Selection.Sections.Last.Range
    range.Collapse(wdCollapseEnd)
    range.InsertAfter("结尾")
}
```


```JavaScript
/*本示例在选定区域添加一个“下一页”的分节符。*/
function test() {
    Selection.Sections.Add(Selection.Range, wdSectionNewPage)
}
```
