# Selection.MoveRight

将选定内容向右移动，并返回移动距离的单位数。



## 语法

express.**MoveRight(Unit, Count, Extend)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 移动选定内容时所基于的单位。默认值为 **wdCharacter** 。 |
| Count | 可选 | any | 选定内容移动的单位数。默认值为 1。 |
| Extend | 可选 | any | 可以是 **wdMove** 或 **wdExtend** 。如果使用 **wdMove** ，则所选内容折叠到结束位置并向右移动。如果使用 **wdExtend** ，则所选内容向右扩展。默认值为 **wdMove** 。 |

## 返回值

Long

## 说明


如果 *Unit* 为 **wdCell** ，则 *Extend* 参数只能是 **wdMove** 。



## 示例


```JavaScript
/*本示例先将选定内容移到上一个字段前面，再选择此字段。*/
function test() {
    let range = Selection.GoTo(wdGoToField, wdGoToPrevious)
    Selection.MoveRight(wdWord, 1, wdExtend)
    if (Selection.Fields.Count == 1) {
        Selection.Fields.Item(1).Update()
    }
}
```


```JavaScript
/*本示例将选定内容向右移动一个字符。如果移动成功，MoveRight 返回 1。*/
function test() {
    if (Selection.MoveRight() == 1) {
        MsgBox("Move was successful")
    }
}
```


```JavaScript
/*本示例将选定内容移到下一个表格单元格。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.MoveRight(wdCell, 1, wdMove)
    }
}
```
