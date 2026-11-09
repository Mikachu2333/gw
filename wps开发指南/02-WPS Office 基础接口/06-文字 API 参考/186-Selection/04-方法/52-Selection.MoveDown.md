# Selection.MoveDown

将选定内容向下移动，并返回移动距离的单位数。



## 语法

express.**MoveDown(Unit, Count, Extend)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 移动选定内容时所基于的单位。默认值为 **wdLine** 。 |
| Count | 可选 | any | 选定内容移动的单位数。默认值为 1。 |
| Extend | 可选 | any | 可以是 **wdMove** 或 **wdExtend** 。如果使用 **wdMove** ，则所选内容折叠到结束位置并向下移动。如果使用 **wdExtend** ，则所选内容向下扩展。默认值为 **wdMove** 。 |

## 返回值

number（int4 精度）

## 示例


```JavaScript
/*本示例将选定内容向下扩展一行。*/
function test() {
    Selection.MoveDown(wdLine, 1, wdExtend)
}
```


```JavaScript
/*本示例将所选内容向下移动三个段落。如果移动成功，则在插入点插入"Company"。*/
function test() {
    let unitsMoved = Selection.MoveDown(wdParagraph, 3, wdMove)
    if (unitsMoved == 3) {
        Selection.Text = "Company"
    }
}
```


```JavaScript
/*本示例显示当前的行编号，将选定内容向下移动三行，并再次显示当前行编号。*/
function test() {
    MsgBox("Line" + Selection.Information(wdFirstCharacterLineNumber))
    Selection.MoveDown(wdLine, 3, wdMove)
    MsgBox("Line" + Selection.Information(wdFirstCharacterLineNumber))
}
```
