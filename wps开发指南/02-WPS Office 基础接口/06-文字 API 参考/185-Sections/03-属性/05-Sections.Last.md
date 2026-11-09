# Sections.Last

将 **Sections** 集合中的最后一项作为 **Section** 对象返回。



## 语法

express.**Last**

express   一个代表 **Sections** 对象的变量。

## 类型

Section

## 示例


```JavaScript
/*本示例将活动文档中最后一节的页面方向设置为横向。*/
function test() {
    Application.ActiveDocument.Sections.Last.PageSetup.Orientation = wdOrientLandscape
}
```


```JavaScript
/*本示例在活动文档最后一节的末尾插入文本“End of section”。*/
function test() {
    let range = Application.ActiveDocument.Sections.Last.Range
    range.InsertAfter("End of section")
}
```
