# Selection.MoveStartWhile

当在文档中找到任何指定的字符时，移动指定的所选内容的起始位置。



## 语法

express.**MoveStartWhile(Cset, Count)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Cset | 必选 | any | 一个或多个字符。此参数区分大小写。 |
| Count | 可选 | any | 指定的所选内容要移动的最大字符数。可以是一个数字，也可以是 **wdForward** 或 **wdBackward** 常量。如果 Count 为正数，则所选内容在文档中向前移动。如果为负数，则所选内容向后移动。默认值为 **wdForward** 。 |

## 返回值

number（int4 精度）

## 说明


当找到 *Cset* 中的任何字符时，就移动所选内容的起始位置。此方法将该所选内容的起始位置移动的字符数作为 **Long** 类型的值返回。如果没有找到 *Cset* 字符，则不改变该所选内容，并且此方法返回 0（零）。如果起始位置向前移至原来的结束位置之前，则将该结束位置设置为新的起始位置。



## 示例


```JavaScript
/*当找到空格时，本示例在文档中向后移动所选内容的起始位置。*/
function test() {
    Selection.MoveStartWhile(" ", wdBackward)
}
```


```JavaScript
/*当 Count 小于或等于10，并且找到从“a”到“h”之间的一个字母时，本示例将所选内容的起始位置向后移动。*/
function test() {
    Selection.MoveStartWhile("abcdefgh", -10)
}
```
