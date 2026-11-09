# Range.Move

将指定范围折叠到其起始位置或结束位置，然后将折叠后的对象移动指定的单位数。



## 语法

express.**Move(Unit, Count)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 范围要移动的单位。 |
| Count | 可选 | any | 指定范围要移动的单位数。如果 _Count_ 是一个正数，则对象折叠到其结束位置，并在文档中向后移动指定的单位数；如果 _Count_ 是一个负数，则对象折叠到其起始位置，并向前移动指定的单位数。默认值为 1。您也可以在使用 **Move** 方法之前通过使用 **Collapse** 方法来控制折叠的方向。如果该范围位于一个单位的中间，或者不能折叠，则可以认为将范围移动到单位的开始或结束位置也就是将范围移动了一个完整单位。 |

## 返回值

Long

## 说明


此方法返回一个 **Long** 类型的值，该值表示对象实际移动的单位数，如果移动不成功，则返回 0（零）。

折叠范围的开始和结束位置相同。

对一个范围应用 **Move** 方法不会重排文档中的文本，而是重新定义该范围，以引用文档中的一个新位置。



## 示例


```JavaScript
/*本示例将 range 设置为活动文档的第一段，然后将该范围向前移动三个段落，使插入点将位于第四段的开头。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.Collapse(wdCollapseStart)
    range.Move(wdParagraph, 3)
    range.Select()
}
```


```JavaScript
/*本示例判断如果所选范围向后移动三个单词，则移动插入点的位置，然后在插入点插入文本。*/
function test() {
    let range = Selection.Range
    range.Collapse(wdCollapseEnd)
    if (range.Move(wdWord, -3) != 0) {
        range.Select()
        Selection.TypeText("example\n")
    }
}
```
