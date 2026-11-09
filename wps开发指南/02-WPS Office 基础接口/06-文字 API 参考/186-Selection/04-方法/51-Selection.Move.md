# Selection.Move

将指定的所选内容折叠到其起始位置或结束位置，然后将折叠的对象移动指定的单位数。此方法返回一个 **Long** 类型的值，该值代表所选内容移动的单位数；如果移动失败，则返回 0（零）。



## 语法

express.**Move(Unit, Count)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 移动结束字符位置时所基于的单位。 |
| Count | 可选 | any | 指定的范围或所选内容要移动的单位数。如果 Count 为正数，则对象折叠到其结束位置，并在文档中向后移动指定的单位数；如果 Count 为负数，则对象折叠到其起始位置，并向前移动指定的单位数。默认值为 1。您也可以在使用 **Move** 方法之前通过使用 **Collapse** 方法来控制折叠的方向。如果区域或所选内容位于单位的中间位置或者未折叠，则可以认为将其移动到单位的开始或结束位置也就是将它移动了一个完整单位。 |

## 返回值

Long

## 说明


折叠的范围或所选内容的开始和结束位置相同。  

对一个范围应用 **Move** 方法不会重排文档中的文本，而是重新定义该范围，以引用文档中的一个新位置。

如果将 **Move** 方法应用于除 **Range** 对象变量以外的任意范围（例如，`Selection.Paragraphs(3).Range.Move()`），则此方法不起作用。

移动 **Selection** 对象会折叠所选内容，并在文档中向前或向后移动插入点。



## 示例


```JavaScript
/*本示例将所选内容向右移动两个单词，并将插入点放在第二个单词的尾部空格后。如果移动失败，则会显示一个消息框，表明所选内容位于文档的末尾。*/
function test() {
    if (Selection.StoryType == wdMainTextStory) {
        let move = Selection.Move(wdWord, 2)
        if (move < 2) {
            alert("Selection is at the end of the document")
        }
    }
}
```


```JavaScript
/*本示例将所选内容在表格中向前移动三个单元格。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Move(wdCell, 3)
    }
}
```
