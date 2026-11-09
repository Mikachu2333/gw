# Selection.MoveStartUntil

移动指定的所选内容的起始位置，直到在文档中找到一个指定的字符。如果是在文档中向后移动，则扩展所选内容。



## 语法

express.**MoveStartUntil(Cset, Count)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Cset | 必选 | any | 一个或多个字符。此参数区分大小写。 |
| Count | 可选 | any | 指定的所选内容要移动的最大字符数。可以是一个数字，也可以是 **wdForward** 或 **wdBackward** 常量。如果 Count 为正数，则所选内容在文档中向前移动。如果为负数，则所选内容向后移动。默认值为 **wdForward** 。 |

## 返回值

number（int4 精度）

## 说明


此方法将指定的所选内容的起始位置移动的字符数作为 **Long** 类型的值返回。如果 *Count* 大于 0（零），则此方法返回移动的字符数加 1。如果 *Count* 小于 0（零），则此方法返回移动的字符数减 1。如果未找到 *Cset* 字符，则指定的所选内容不更改，并且此方法返回 0（零）。如果起始位置向前移至结束位置的前面，则折叠所选内容，并且开始和结束位置移至同一位置。



## 示例


```JavaScript
/*本示例向后扩展所选内容，直到找到大写字母“I”。*/
function test() {
    Selection.MoveStartUntil("I", wdBackward)
}
```


```JavaScript
/*本示例移动指定的所选内容的起始位置，直到找到小写字母“a”。*/
function test() {
    Selection.MoveStartUntil("a", wdForward)
}
```
