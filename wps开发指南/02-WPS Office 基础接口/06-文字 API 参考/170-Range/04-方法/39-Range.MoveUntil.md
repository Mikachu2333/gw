# Range.MoveUntil

移动指定范围，直到在文档中找到指定字符中的一个为止。



## 语法

express.**MoveUntil(Cset, Count)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Cset | 必选 | any | 一个或多个字符。如果在 _Count_ 值无效之前，找到了 _Cset_ 中的任何一个字符，则指定范围将作为一个插入点放在紧靠该字符前面的位置。此参数区分大小写。 |
| Count | 可选 | any | 指定区域要移动的最大字符数。可以是一个数字，也可以是 **wdForward** 或 **wdBackward** 常量。如果 _Count_ 是正数，则该区域在文档中从结束位置开始向前移动。如果是负数，则该区域从起始位置开始向后移动。默认值为 **wdForward** 。 |

## 返回值

number（int4 精度）

## 说明


此方法将该范围移动的字符数作为 **Long** 类型的值返回。如果 _Count_ 大于 0（零），则此方法返回移动的字符数加 1；如果 _Count_ 小于 0（零），则此方法返回移动的字符数减 1。如果找不到 _Cset_ 字符，则该范围不移动，此方法返回 0（零）。



## 示例


```JavaScript
/*本示例将 range 在文档中向前移动 100 个字符，直到找到字符“t”为止。*/
function test() {
    let range = ActiveDocument.Words.Item(1)
    range.MoveUntil("t", 100)
}
```


```JavaScript
/*本示例将所选区域折叠到结束位置，再向后移动所选区域，直到在文档中找到空格，然后更改插入点。*/
function test() {
    let range = Selection.Range
    range.Collapse(wdCollapseEnd)
    range.MoveUntil(" ", wdBackward)
    range.Select()
}
```
