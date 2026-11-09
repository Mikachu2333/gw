# Range.MoveEndUntil

移动指定范围的结束位置，直到在文档中找到任何指定的字符。如果在文档中是向前移动，则扩展该范围。



## 语法

express.**MoveEndUntil(Cset, Count)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Cset | 必选 | any | 一个或多个字符。此参数区分大小写。 |
| Count | 可选 | any | 指定区域要移动的最大字符数。可以是一个数字，也可以是 **wdForward** 或 **wdBackward** 常量。如果 _Count_ 是正数，则该区域在文档中向前移动。如果是负数，则该区域向后移动。默认值为 **wdForward** 。 |

## 返回值

number（int4 精度）

## 说明


此方法将指定范围的结束位置移动的字符数作为 **Long** 类型的值返回。如果 _Count_ 大于 0（零），则此方法返回移动的字符数加 1。如果 _Count_ 小于 0（零），则此方法返回移动的字符数减 1。如果没有找到 _Cset_ 字符，则不改变范围，并且该方法返回 0（零）。如果结束位置向后移至原来的起始位置之前，则将该起始位置设置为新的结束位置。



## 示例


```JavaScript
/*本示例在文档中向前扩展所选文本，直到找到字母“a”，并移动插入点的位置，然后将所选文本扩展一个字符，以使其包含字母“a”。*/
function test() {
    let range = Selection.Range
    range.MoveEndUntil("a", wdForward)
    range.Select()
    Selection.MoveRight(wdCharacter, 1, wdExtend)
}
```


```JavaScript
/*本示例将活动文档的第一个段落的区域折叠到结束位置，并移动该区域的结束位置，直到找到空格，然后更改插入点的位置并插入“！”。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.Collapse(wdCollapseEnd)
    range.MoveEndUntil(" ", wdBackward)
    range.Select()
    Selection.TypeText("！")
}
```
