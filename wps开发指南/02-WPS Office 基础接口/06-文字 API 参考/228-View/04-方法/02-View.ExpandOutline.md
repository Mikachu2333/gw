# View.ExpandOutline

按照一个标题级别展开选定内容下的文本。



## 语法

express.**ExpandOutline(Range)**

express   一个代表 **View** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 可选 | any | 要展开的段落的范围。如果省略此参数，则展开全部选定内容。 |

## 返回值

void

## 说明


如果文档未处于大纲或主控文档视图，将导致出错。



## 示例


```JavaScript
/*本示例将文档中每个标题展开一个级别。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdOutlineView
    view.ExpandOutline(ActiveDocument.Content)
}
```


```JavaScript
/*本示例将第一个窗口中所选内容的每个标题展开一个级别。*/
function test() {
    Windows.Item(1).Activate()
    let view = Windows.Item(1).View
    view.Type = wdOutlineView
    view.ExpandOutline(Selection.Range)
}
```
