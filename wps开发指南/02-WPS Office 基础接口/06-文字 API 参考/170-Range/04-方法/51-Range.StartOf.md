# Range.StartOf

将指定的区域的开始位置移动或扩展至最近的指定文字单位的开头。该方法返回 **Long** 类型的值表明了区域移动或扩展的字符数。如果是在文档中向后移动，则该方法返回负数。



## 语法

express.**StartOf(Unit, Extend)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 移动指定区域的起始位置时所基于的单位。可以是任意 **WdUnits** 常量，但 **wdLine** 除外。默认值为 **wdWord** 。 |
| Extend | 可选 | any | 指定是移动还是扩展区域开头。如果使用 **wdMove** ，则区域的末尾都移至指定单位的开头。如果使用 **wdExtend** ，则区域的起点将扩展到指定单位的开头。默认值为 **wdMove** 。 |

## 返回值

number（int4 精度）

## 说明


如果指定区域的开始已经位于指定单位的开始，则该方法不移动或扩展区域。



## 示例


```JavaScript
/*本示例将选定从插入点至该段落开始之间的文本。选定字符数保存在 charMoved 中。*/
function test() {
    let range = Selection.Range
    range.Collapse(wdCollapseStart)
    let charmoved = range.StartOf(wdParagraph, wdExtend)
    range.Select()
}
```


```JavaScript
/*本示例将选定内容的Range属性移至段落的开头。*/
function test() {
    Selection.Range.StartOf(wdParagraph, wdMove)
}
```


```JavaScript
/*本示例将 range 移至文档第二句的开头（折叠 range，并放在第二句的开头）。本示例使用 Select 方法来表明 range 的位置。*/
function test() {
    let range = ActiveDocument.Sentences.Item(2)
    range.StartOf(wdSentence, wdMove)
    range.Select()
}
```
