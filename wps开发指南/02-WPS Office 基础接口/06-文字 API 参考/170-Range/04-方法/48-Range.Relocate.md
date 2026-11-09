# Range.Relocate

在大纲视图中，将指定区域中各段移至下一个可见段落之后或上一个可见段落之前。



## 语法

express.**Relocate(Direction)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Direction | 必选 | number（int4 精度） | 移动的方向。 |

## 返回值

void

## 说明


仅当正文文本在大纲视图中已经折叠或是该区域的一部分时，正文文本才与标题同时移动。



## 示例


```JavaScript
/*本示例将活动文档的第三、四、五段移至下一段（第六段）之后。*/
function test() {
    let start = ActiveDocument.Paragraphs.Item(3).Range.Start
    let end = ActiveDocument.Paragraphs.Item(5).Range.End
    let range = ActiveDocument.Range(start, end)
    ActiveDocument.ActiveWindow.View.Type = wdOutlineView
    range.Relocate(wdRelocateDown)
}
```


```JavaScript
/*本示例将选定区域的首段移至上一段之前。*/
function test() {
    ActiveDocument.ActiveWindow.View.Type = wdOutlineView
    Selection.Paragraphs.Item(1).Range.Relocate(wdRelocateUp)
}
```
