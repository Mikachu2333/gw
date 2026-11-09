# Selection.MoveLeft

将选定内容向左移动，并返回移动距离的单位数。



## 语法

express.**MoveLeft(Unit, Count, Extend)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 移动选定内容时所基于的单位。默认值为 **wdCharacter** 。 |
| Count | 可选 | any | 选定内容移动的单位数。默认值为 1。 |
| Extend | 可选 | any | 可以是 **wdMove** 或 **wdExtend** 。如果使用 **wdMove** ，则所选内容折叠到结束位置并向左移动。如果使用 **wdExtend** ，则所选内容向左扩展。默认值为 **wdMove** 。 |

## 返回值

number（int4 精度）

## 说明


如果 *Unit* 为 **wdCell** ，则 *Extend* 参数只能是 **wdMove** 。



## 示例


```JavaScript
/*本示例将选定内容向左移动一个字符。如果移动成功，则 MoveLeft 方法返回 1。*/
function test() {
    if (Selection.MoveLeft() == 1) {
        MsgBox("Move was successful")
    }
}
```


```JavaScript
/*本示例激活选定域的域底纹功能，插入 Date 域，然后将选定内容向左移动，以选定该域。*/
function test() {
    ActiveDocument.ActiveWindow.View.FieldShading = wdFieldShadingWhenSelected
    Selection.Fields.Add(Selection.Range, wdFieldDate)
    Selection.MoveLeft(wdWord, 1)
}
```


```JavaScript
/*本示例将选定内容移至表格的前一个单元格。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.MoveLeft(wdCell, 1, wdMove)
    }
}
```
