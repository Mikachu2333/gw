# Range.MoveStartWhile

当在文档中找到任何指定的字符时，移动指定范围的起始位置。



## 语法

express.**MoveStartWhile(Cset, Count)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Cset | 必选 | any | 一个或多个字符。此参数区分大小写。 |
| Count | 可选 | any | 指定区域要移动的最大字符数。可以是一个数字，也可以是 **wdForward** 或 **wdBackward** 常量。如果 _Count_ 是正数，则该区域在文档中向前移动。如果是负数，则该区域向后移动。默认值为 **wdForward** 。 |

## 返回值

number（int4 精度）

## 说明


当找到 _Cset_ 中的任何字符时，就移动范围的起始位置。此方法将该范围的起始位置移动的字符数作为 **Long** 类型的值返回。如果没有找到 _Cset_ 字符，则不改变该范围，并且此方法返回 0（零）。如果起始位置向前移至原来的结束位置之前，则将该结束位置设置为新的起始位置。



## 示例


```JavaScript
/*当找到空格时，本示例将所选范围的起始位置在文档中向后移动。*/
function test() {
    Selection.Range.MoveStartWhile(" ", wdBackward)
}
```


```JavaScript
/*当 Count 小于或等于 10 且找到了“a”到“h”之间的任意一个字母时，本示例将所选范围的起始位置在文档中向后移动。*/
function test() {
    Selection.Range.MoveStartWhile("abcdefgh", -10)
}
```
