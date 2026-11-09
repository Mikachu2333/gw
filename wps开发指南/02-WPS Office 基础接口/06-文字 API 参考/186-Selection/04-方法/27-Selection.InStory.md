# Selection.InStory

如果应用此方法的选择范围与 *Range* 参数指定的范围位于相同的文字部分中，则该方法为 **True** 。



## 语法

express.**InStory(Range)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 其文字部分与当前选择范围的文字部分进行比较的范围。 |

## 返回值

Boolean

## 说明


一个范围只能属于一个文字部分。



## 示例


```JavaScript
/*本示例判定选择范围是否与活动文档第一段属于同一文字部分。因为选择范围位于主页眉部分，而第一段位于文档正文部分，所以消息框显示"false"。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdPrintView
    view.SeekView = wdSeekCurrentPageHeader
    let same = Selection.InStory(ActiveDocument.Paragraphs.Item(1).Range)
    MsgBox(same)
}
```


```JavaScript
/*本示例判断选中的内容是否为页眉，并通知用户。*/
function test() {
    let sections = ActiveDocument.Sections
    let range = sections.Item(1).Headers.Item(wdHeaderFooterPrimary).Range
    if (Selection.InStory(range)) {
        alert("选中内容为页眉")
    } else {
        alert("选中内容不为页眉")
    }
}
```
