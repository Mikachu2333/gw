# Paragraphs.OutlineLevel

返回或设置指定段落的大纲级别。可读写 **WdOutlineLevel** 类型。



## 语法

express.**OutlineLevel**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

WdOutlineLevel

## 说明


如果段落应用了一种标题样式（从“标题 1”到“标题 9”），则大纲级别与该标题样式相同，并且不能更改。大纲级别仅在大纲视图或文档结构图窗格中可见。



## 示例


```JavaScript
/*本示例显示活动文档中所有段落的大纲级别是否为大纲级别 3。*/
function test() {
    alert(ActiveDocument.Paragraphs.OutlineLevel == wdOutlineLevel3)
}
```


```JavaScript
/*本示例将第一个文档中段落的大纲级别设置为大纲级别 1。*/
function test() {
    Documents.Item(1).Paragraphs.OutlineLevel = wdOutlineLevel1
}
```
