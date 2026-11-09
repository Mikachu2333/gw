# Selection.MoveEndUntil

移动指定的所选内容的结束位置，直到在文档中找到任何指定的字符。



## 语法

express.**MoveEndUntil(Cset, Count)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Cset | 必选 | any | 一个或多个字符。此参数区分大小写。 |
| Count | 可选 | any | 指定的所选内容要移动的最大字符数。可以是一个数字，也可以是 **wdForward** 或 **wdBackward** 常量。如果 Count 为正数，则所选内容在文档中向前移动。如果为负数，则所选内容向后移动。默认值为 **wdForward** 。 |

## 返回值

Long

## 说明


此方法返回一个 **Long** 类型的值，该值代表指定的所选内容的结束位置要移动的字符数。如果 *Count* 大于 0（零），则此方法返回移动的字符数加 1。如果 *Count* 小于 0（零），则此方法返回移动的字符数减 1。如果没有找到 *Cset* 字符，则不改变所选内容，并且此方法返回 0（零）。如果结束位置向后移至原来的起始位置之前，则将该起始位置设置为新的结束位置。  

如果是在文档中向前移动，则扩展所选内容。



## 示例


```JavaScript
/*本示例在文档中向前扩展所选内容，直到找到字母“a”。然后将所选文本扩展一个字符，以使其包含字母“a”。*/
function test() {
    Selection.MoveEndUntil("a", wdForward)
    Selection.MoveRight(wdCharacter, 1, wdExtend)
}
```


```JavaScript
/*本示例在文档中向前扩展所选内容，直到找到制表符。如果在其后的 100 个字符中没有找到任何制表符，则不移动所选内容。*/
function test() {
    let returnNum = Selection.MoveEndUntil("\t", 100)
    if (returnNum == 0) {
        Application.StatusBar = "Selection not moved"
    }
}
```
