# Range.MoveEnd

移动范围的结束字符位置。



## 语法

express.**MoveEnd(Unit, Count)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 结束字符位置要移动的单位。 |
| Count | 可选 | any | 要移动的单位数。如果该值为正，则结束字符在文档中向前移动；如果该值为负，则结束字符向后移动。如果结束位置超过了起始位置，则折叠该范围并将首末两个字符的位置移至同一位置。默认值为 1。 |

## 返回值

number（int4 精度）

## 说明


如果此方法返回一个整数，该整数表示范围实际移动的单位数，如果移动不成功，则返回 0（零）。



## 示例


```JavaScript
/*本示例将 range 设为活动文档中的第二个单词，使用 MoveEnd 方法将 range（一个 range 对象）的结束位置向前移动一个单词，然后选定文档中的第二个和第三个单词。*/
function test() {
    if (ActiveDocument.Words.Count >= 3) {
        let range = ActiveDocument.Words.Item(2)
        range.MoveEnd(wdWord, 1)
        range.Select()
    }
}
```


```JavaScript
/*本示例先添加一个表格，选择第一行第一个单元格，再将选定内容的Range属性的结束位置向前移动一个单元格，并显示该Range属性的表格列的数量。*/
function test() {
    let range1 = ActiveDocument.Range(0, 0)
    let table = ActiveDocument.Tables.Add(range1, 5, 3)
    table.Cell(1, 1).Select()
    let range2 = Selection.Range
    range2.MoveEnd(wdCell, 1)
    alert(range2.Columns.Count)
}
```
