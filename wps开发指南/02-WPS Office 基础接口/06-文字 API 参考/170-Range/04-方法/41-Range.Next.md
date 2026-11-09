# Range.Next

返回一个 **Range** 对象，该对象代表相对于指定范围的指定单位。



## 语法

express.**Next(Unit, Count)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 要计算的单位类型。可以是任意 **WdUnits** 常量 |
| Count | 可选 | any | 要向前移动的单位数。默认值为 1。 |

## 返回值

Range

## 说明


如果该范围恰好在指定的 _Unit_ 之前，则该范围移至下一个单位。



## 示例


```JavaScript
/*本示例将所选文本向前移动到下一个单词。*/
function test() {
    Selection.Range.Next(wdWord, 1).Select()
}
```


```JavaScript
/*本示例显示活动文档上第二个段落的文本内容。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    alert(range.Next(wdParagraph, 1).Text)
}
```
