# Selection.MoveUp

将所选内容向上移动，并返回移动的单位数。



## 语法

express.**MoveUp(Unit, Count, Extend)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 移动选定内容时所基于的单位。可以是下列 **WdUnits** 常量之一： **wdLine** 、 **wdParagraph** 、 **wdWindow** 或 **wdScreen** 。默认值为 **wdLine** 。可以将 **wdWindow** 常量用于 Unit 参数，以便移至活动窗口的顶部或底部。不管 Count 的值是多少（大于 1 还是小于 -1）， **wdWindow** 常量只移动一个单位。可使用 **wdScreen** 常量移动多屏。 |
| Count | 可选 | any | 选定内容移动的单位数。默认值为 1。 |
| Extend | 可选 | any | 指定是移动还是扩展所选内容。可以是 **wdMove** 或 **wdExtend** 。如果使用 **wdMove** ，则所选内容折叠到结束位置并向上移动。如果使用 **wdExtend** ，则所选内容向上扩展。默认值为 **wdMove** 。 |

## 返回值

Long

## 示例


```JavaScript
/*本示例将选定内容移至前一个段落的开头。*/
function test() {
    Selection.MoveRight()
    Selection.MoveUp(wdParagraph, 2, wdMove)
}
```


```JavaScript
/*本示例显示当前行号，将选定内容向上移动三行，并再次显示当前行号。*/
function test() {
    MsgBox("Line " + Selection.Information(wdFirstCharacterLineNumber))
    Selection.MoveUp(wdLine, 3, wdMove)
    MsgBox("Line " + Selection.Information(wdFirstCharacterLineNumber))
}
```
