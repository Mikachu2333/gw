# Selection.MoveUntil

移动指定的所选内容，直到在文档中找到一个指定的字符。



## 语法

express.**MoveUntil(Cset, Count)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Cset | 必选 | any | 一个或多个字符。如果在 Count 值终止之前找到了 Cset 中的任何字符，则指定的所选内容作为插入点紧靠在该字符之前放置。此参数区分大小写。 |
| Count | 可选 | any | 指定的所选内容要移动的最大字符数。可以是一个数字，也可以是 **wdForward** 或 **wdBackward** 常量。如果 Count 为正数，则所选内容在文档中从结束位置开始向前移动。如果为负数，则所选内容从起始位置开始向后移动。默认值为 **wdForward** 。 |

## 返回值

number（int4 精度）

## 说明


此方法将指定的所选内容移动的字符数作为 **Long** 类型的值返回。如果 *Count* 大于 0（零），则此方法返回字符数加 1；如果 *Count* 小于 0（零），则此方法返回字符数减 1。如果没有找到 *Cset* 字符，则不改变所选内容，并且此方法返回 0（零）。



## 示例


```JavaScript
/*本示例将所选内容移至活动段落的末尾，然后显示所选内容移动的字符数。*/
function test() {
    let x = Selection.MoveUntil("\r", wdForward)
    MsgBox(`${x - 1} character positions were moved`)
}
```


```JavaScript
/*本示例向后移动所选内容，直到在文档中找到小写字母“a”。*/
function test() {
    Selection.MoveUntil("a", wdBackward)
}
```
