# Range.MoveStart

移动指定范围的起始位置。



## 语法

express.**MoveStart(Unit, Count)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 指定范围的起始位置要移动的单位。 |
| Count | 可选 | any | 指定区域要移动的最大单位数。如果 _Count_ 是正数，则该区域的起始位置在文档中向前移动。如果为负数，则起始位置向后移动。如果起始位置向前移至结束位置之前，则折叠该区域，并将起始位置和结束位置移至同一位置。默认值为 1。 |

## 返回值

Integer

## 说明


此方法返回一个整数，该整数表明起始位置或该范围实际移动的单位数，如果移动不成功，则此方法返回 0（零）。



## 示例


```JavaScript
/*本示例将 range 设为活动文档中的第二个单词，然后使用 MoveStart 方法将 range（一个 Range 对象）的起始位置向后移动一个单词。运行该宏后，会选定文档中的第一个和第二个单词。*/
function test() {
    if (ActiveDocument.Words.Count >= 2) {
        let range = ActiveDocument.Words.Item(2)
        range.MoveStart(wdWord, -1)
        range.Select()
    }
}
```


```JavaScript
/*本示例将所选区域的起始位置向前移动一个字符，然后选中该区域。*/
function test() {
    let range = Selection.Range
    range.MoveStart(wdCharacter, 1)
    range.Select()
}
```
