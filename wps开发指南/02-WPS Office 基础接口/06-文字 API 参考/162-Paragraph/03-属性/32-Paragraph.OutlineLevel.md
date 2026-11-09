# Paragraph.OutlineLevel

返回或设置指定段落的大纲级别。可读写 **WdOutlineLevel** 类型。



## 语法

express.**OutlineLevel**

express   一个代表 **Paragraph** 对象的变量。

## 类型

WdOutlineLevel

## 说明


如果段落应用了一种标题样式（从“标题 1”到“标题 9”），则大纲级别与该标题样式相同，并且不能更改。大纲级别仅在大纲视图或文档结构图窗格中可见。



## 示例


```JavaScript
/*本示例显示活动文档中第一段的大纲级别是否为大纲级别 3。*/
function test() {
    alert(ActiveDocument.Paragraphs.Item(1).OutlineLevel == wdOutlineLevel3)
}
```


```JavaScript
/*本示例设置活动文档每一段的大纲级别。首先将正文样式应用于所有段落。取余操作符用来确定文档中的后继段落采用何种大纲级别（1、2 或 3），然后将视图切换至大纲视图。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    paragraphs.Style = wdStyleNormal
    for (let x = 1; x <= paragraphs.Count; x++) {
        if (x % 3 == 1) {
            paragraphs.Item(x).OutlineLevel = wdOutlineLevel1
        } else if (x % 3 == 2) {
            paragraphs.Item(x).OutlineLevel = wdOutlineLevel2
        } else {
            paragraphs.Item(x).OutlineLevel = wdOutlineLevel3
        }
    }
    ActiveDocument.ActiveWindow.View.Type = wdOutlineView
}
```
