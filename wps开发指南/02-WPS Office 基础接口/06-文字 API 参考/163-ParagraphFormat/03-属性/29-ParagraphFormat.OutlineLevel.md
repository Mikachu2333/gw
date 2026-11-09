# ParagraphFormat.OutlineLevel

返回或设置指定段落的大纲级别。可读写 **[WdOutlineLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdOutlineLevel)** 类型。



## 语法

express.**OutlineLevel**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

WdOutlineLevel

## 说明


如果段落应用了一种标题样式（从“标题 1”到“标题 9”），则大纲级别与该标题样式相同，并且不能更改。大纲级别仅在大纲视图或文档结构图窗格中可见。



## 示例


```JavaScript
/*本示例显示活动文档中第一个段落的大纲级别。*/
function test() {
    alert(ActiveDocument.Paragraphs.Item(1).Format.OutlineLevel)
}
```


```JavaScript
/*本示例设置所选段落的大纲级别，然后将视图切换至大纲视图。*/
function test() {
    Selection.Range.ParagraphFormat.OutlineLevel = wdOutlineLevel3
    ActiveDocument.ActiveWindow.View.Type = wdOutlineView
}
```
