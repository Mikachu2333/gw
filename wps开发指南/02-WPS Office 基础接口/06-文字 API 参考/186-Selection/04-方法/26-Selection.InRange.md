# Selection.InRange

如果应用此方法的所选内容包含在 *Range* 参数所指定的范围内，则该方法为 **True** 。



## 语法

express.**InRange(Range)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 要与所选内容进行比较的范围。 |

## 返回值

Boolean

## 说明


此方法通过比较起始字符和结束字符的位置以及文章的类型，来确定表达式返回的区域或所选内容是否包含在指定的 **Range** 内。



## 示例


```JavaScript
/*本示例确定所选内容是否包含在活动文档的第一段中，如果在第一段中，则通知用户。*/
function test() {
    let status = Selection.InRange(ActiveDocument.Paragraphs(1).Range)
    if (status) {
        alert("选中的内容在第一段")
    }
}
```


```JavaScript
/*本示例判断如果所选内容位于脚注部分，则显示一条消息。*/
function test() {
    if (Selection.InRange(ActiveDocument.StoryRanges(wdFootnotesStory))) {
        alert("Selection in footnotes")
    }
}
```
