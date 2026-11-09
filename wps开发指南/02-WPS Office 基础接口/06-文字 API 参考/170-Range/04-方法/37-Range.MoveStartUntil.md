# Range.MoveStartUntil

移动指定范围的起始位置，直到在文档中找到一个指定的字符。



## 语法

express.**MoveStartUntil(Cset, Count)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Cset | 必选 | any | 一个或多个字符。此参数区分大小写。 |
| Count | 可选 | any | 指定区域要移动的最大字符数。可以是一个数字，也可以是 **wdForward** 或 **wdBackward** 常量。如果 _Count_ 是正数，则该区域在文档中向前移动。如果是负数，则该区域向后移动。默认值为 **wdForward** 。 |

## 返回值

number（int4 精度）

## 说明


如果在文档中是向后移动，则扩展该范围。

此方法将指定范围的起始位置移动的字符数作为 **Long** 类型的值返回。如果 _Count_ 大于 0（零），则此方法返回移动的字符数加 1。如果 _Count_ 小于 0（零），则此方法返回移动的字符数减 1。如果未找到 _Cset_ 字符，则不改变指定范围，并且该方法返回 0（零）。如果起始位置向前移至结束位置之前，则折叠该范围，并将起始位置和结束位置移至同一位置。



## 示例


```JavaScript
/*如果所选文本的第一段中有美元符号（$），本示例将 range 移至该美元符号的前面。*/
function test() {
    let range = Selection.Paragraphs.Item(1).Range
    let leng = range.End - range.Start
    range.Collapse(wdCollapseStart)
    range.MoveStartUntil("$", leng)
}
```


```JavaScript
/*本示例向后扩展所选区域，直到找到空格。*/
function test() {
    let range = Selection.Range
    range.MoveStartUntil(" ", wdBackward)
    range.Select()
}
```
