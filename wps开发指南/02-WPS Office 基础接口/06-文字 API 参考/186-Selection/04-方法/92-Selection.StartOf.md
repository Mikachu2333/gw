# Selection.StartOf

将指定的区域或选定内容的开始位置移动或扩展至最近的指定文字单位的开头。该方法返回 **Long** 类型的值表明了区域或选定内容移动或扩展的字符数。如果是在文档中向后移动，则该方法返回负数。



## 语法

express.**StartOf(Unit, Extend)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 移动指定区域或选定内容的起始位置时所基于的单位。如果未指定值，则默认值是 **wdWord** 。 |
| Extend | 可选 | any | 如果使用了 **wdMove** ，则该区域或选定内容的末尾都移至指定单位的开头；如果使用了 **wdExtend** ，则该区域或选定内容的开始扩展到指定单位的开头。默认值为 **wdMove** 。 |

## 返回值

number（int4 精度）

## 说明


如果指定区域或选定内容的开始已经位于指定单位的开始，则该方法不移动或扩展区域或选定内容。



## 示例


```JavaScript
/*如果选定内容位于一行的开头，则本示例返回 0（零），并且不改变选定内容。*/
function test() {
    let char = Selection.StartOf(wdLine, wdMove)
}
```


```JavaScript
/*本示例选定从插入点至该行开始之间的文本。选定字符数保存在 charMoved 中。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    let charMoved = Selection.StartOf(wdLine, wdExtend)
}
```


```JavaScript
/*本示例将选定内容移至段落的开头。*/
function test() {
    Selection.StartOf(wdParagraph, wdMove)
}
```
