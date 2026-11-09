# Selection.MoveWhile

当在文档中找到任何指定的字符时，移动指定的选择范围。



## 语法

express.**MoveWhile(Cset, Count)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Cset | 必选 | any | 一个或多个字符。此参数区分大小写。 |
| Count | 可选 | any | 指定的所选内容要移动的最大字符数。可以是一个数字，也可以是 **wdForward** 或 **wdBackward** 常量。如果 Count 为正数，则指定的所选内容在文档中从结束位置开始向前移动。如果为负数，则所选内容从起始位置开始向后移动。默认值为 **wdForward** 。 |

## 返回值

number（int4 精度）

## 说明


当找到 *Cset* 中的任何字符时，则移动指定的选择范围。找到任何 *Cset* 字符后，结果 **Selection** 对象作为插入点放置。此方法将指定的选择范围移动的字符数作为 **Long** 类型的值返回。如果没有找到 *Cset* 字符，则不改变所选内容，并且此方法返回 0（零）。



## 示例


```JavaScript
/*本示例将选择范围移至连续的制表位之后。*/
function test() {
    Selection.MoveWhile("\t", wdForward)
}
```


```JavaScript
/*当Count小于或等于10，并且找到从“a”到“c”之间的一个字母时，本示例将选择范围移至指定字符之前。*/
function test() {
    Selection.MoveWhile("abc", -10)
}
```
