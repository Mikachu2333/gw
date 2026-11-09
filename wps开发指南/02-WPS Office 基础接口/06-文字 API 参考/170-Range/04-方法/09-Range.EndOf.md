# Range.EndOf

将区域的结束字符位置移动或扩展到最近的一个指定文本单位末尾。



## 语法

express.**EndOf(Unit, Extend)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 移动结束字符位置时所基于的单位。可以是任意 **WdUnits** ，但 **wdLine** 除外。默认值为 **wdWord** 。 |
| Extend | 可选 | any | 指定是移动还是扩展区域末尾。如果该参数值为 **wdMove** ，则区域对象的末尾都移到指定单位的末尾。如果使用 **wdExtend** ，则区域的末尾将扩展到指定单位的末尾。默认值为 **wdMove** 。 |

## 返回值

number（int4 精度）

## 说明


本方法返回该区域所移动或扩展的字符位置数（移动方向为向前）。

如果区域的开始和结束位置都已在指定单位的末尾，则该方法不移动或扩展此区域。例如，如果区域位于单词的末尾且尾随空格，则以下指令不会更改该区域（_char_ 等于 0（零））。

```JavaScript
let char = Selection.Range.EndOf(wdWord, wdMove)
```



## 示例


```JavaScript
/*本示例将选定内容的Range属性扩展至段落末尾。*/
function test() {
    if (Selection.Range.EndOf(wdParagraph, wdExtend) == 0) {
        alert("选定内容的Range属性已是段落末尾")
    }
}
```


```JavaScript
/*本例将字符串 range 移动到选定内容的第一个单词的末尾。*/
function test() {
    let range = Selection.Characters.Item(1)
    range.EndOf(wdWord, wdMove)
}
```


```JavaScript
/*本示例先添加一个表格，选择第二行第一个单元，再将选定内容的Range属性扩展到列末。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    let table = ActiveDocument.Tables.Add(range, 5, 3)
    table.Cell(2, 1).Select()
    Selection.Range.EndOf(wdColumn, wdExtend)
}
```
