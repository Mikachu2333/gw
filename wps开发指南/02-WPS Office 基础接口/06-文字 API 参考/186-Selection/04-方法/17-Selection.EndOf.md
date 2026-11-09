# Selection.EndOf

将区域或选定内容的结束字符位置移动或扩展至最近的一个指定文本单元末尾。



## 语法

express.**EndOf(Unit, Extend)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 移动结束字符位置时所基于的单位。WdUnits。 |
| Extend | 可选 | any | 可以是任意 **WdMovementType** 常量。如果该参数值为 **wdMove** ，则区域和选定内容对象的结尾都移至指定单位的末尾。如果使用 **wdExtend** ，则区域或选定内容的末尾将扩展到指定单位的末尾。默认值为 **wdMove** 。 |

## 返回值

number（int4 精度）

## 说明


本方法返回该区域或所选内容所移动或扩展的字符位置数（移动方向为向前）。  

如果区域或选定内容的开始和结束位置都已在指定单位的末尾，则该方法不移动或扩展此区域或选定内容。



## 示例


```JavaScript
/*本示例将选定内容移动至单词的末尾。如果所选内容位于单词的末尾且尾随空格，则以下指令不会更改所选内容（num 等于 0（零））*/
function test() {
    let num = Selection.EndOf(wdWord, wdMove)
}
```


```JavaScript
/*本示例将选定内容扩展至段落末尾。*/
function test() {
    let charMoved = Selection.EndOf(wdParagraph, wdExtend)
    if (charMoved == 0) {
        alert("Selection unchanged")
    }
}
```


```JavaScript
/*本示例先添加一个表格，选择第二行第一个单元，再将选定内容扩展到列末。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    let table = ActiveDocument.Tables.Add(range, 5, 3)
    table.Cell(2, 1).Select()
    Selection.EndOf(wdColumn, wdExtend)
}
```
