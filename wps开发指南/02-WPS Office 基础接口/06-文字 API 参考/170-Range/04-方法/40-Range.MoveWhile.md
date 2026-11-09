# Range.MoveWhile

当在文档中找到任何指定的字符时，移动指定范围。



## 语法

express.**MoveWhile(Cset, Count)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Cset | 必选 | any | 一个或多个字符。此参数区分大小写。 |
| Count | 可选 | any | 指定区域要移动的最大字符数。可以是一个数字，也可以是 **wdForward** 或 **wdBackward** 常量。如果 _Count_ 是正数，则指定区域在文档中从结束位置开始向前移动。如果是负数，则该区域从起始位置开始向后移动。默认值为 **wdForward** 。 |

## 返回值

number（int4 精度）

## 说明


当找到 _Cset_ 中的任何字符时，就移动指定范围。在找到任何 _Cset_ 字符之后，结果 **Range** 对象将作为一个插入点放置。此方法将指定范围移动的字符数作为 **Long** 类型的值返回。如果没有找到 _Cset_ 字符，则不改变范围，并且该方法返回 0（零）。



## 示例


```JavaScript
/*当找到大写或小写字母“a”、“t”或“i”时，本示例将移动 range。*/
function test() {
    let range = ActiveDocument.Characters.Item(1)
    range.MoveWhile("atiATI", wdForward)
}
```


```JavaScript
/*当Count小于或等于10，并且向后找到字母“c”时，本示例将选择范围移至指定字符之前。*/
function test() {
    let range = Selection.Range
    if (range.MoveWhile("c", -10) != 0) {
        range.Select()
    }
}
```
