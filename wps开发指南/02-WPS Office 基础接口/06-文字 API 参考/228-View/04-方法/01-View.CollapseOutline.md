# View.CollapseOutline

将选定内容或指定范围内的正文折叠一个标题级别。



## 语法

express.**CollapseOutline(Range)**

express   一个代表 **View** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 可选 | any | 需要折叠的段落范围。如果省略此参数，则折叠全部选定内容。 |

## 返回值

void

## 说明


如果文档未处于大纲或主控文档视图，将导致出错。



## 示例


```JavaScript
/*本示例为活动文档的第二段设置“标题 2”样式，将活动窗口切换至大纲视图，并折叠第二段的正文。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).Style = wdStyleHeading2
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdOutlineView
    view.CollapseOutline(ActiveDocument.Paragraphs.Item(2).Range)
}
```


```JavaScript
/*本示例将文档中每个标题折叠一个级别。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdOutlineView
    view.CollapseOutline(ActiveDocument.Content)
}
```
