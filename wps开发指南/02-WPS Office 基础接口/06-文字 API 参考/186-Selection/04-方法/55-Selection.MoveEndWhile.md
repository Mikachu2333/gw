# Selection.MoveEndWhile

当在文档中找到任何指定的字符时，移动所选内容的结束字符位置。



## 语法

express.**MoveEndWhile(Cset, Count)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Cset | 必选 | any | 一个或多个字符。此参数区分大小写。 |
| Count | 可选 | any | 所选内容要移动的最大字符数。可以是一个数字，也可以是 **wdForward** 或 **wdBackward** 常量。如果 Count 为正数，则所选内容在文档中向前移动。如果为负数，则所选内容向后移动。默认值为 **wdForward** 。 |

## 返回值

number（int4 精度）

## 说明


在找到 *Cset* 中的任何字符时，就移动指定所选内容的结束位置。此方法将该所选内容的结束位置移动的字符数作为 **Long** 类型的值返回。如果没有找到 *Cset* 字符，则不改变所选内容，并且此方法返回 0（零）。如果结束位置向后移至原来的起始位置之前，则将该起始位置设置为新的结束位置。



## 示例


```JavaScript
/*当找到空格时，本示例将所选内容的结束位置向前移动。*/
function test() {
    Selection.MoveEndWhile(" ", wdForward)
}
```


```JavaScript
/*当 Count 小于或等于 10 且找到从"a"到"h"之间的一个字母时，本示例将所选内容的结束位置向前移动。*/
function test() {
    Selection.MoveEndWhile("abcdefgh", 10)
}
```
