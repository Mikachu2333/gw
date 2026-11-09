# Range.SetRange

设置现有范围的起始字符和结束字符的位置。



## 语法

express.**SetRange(Start, End)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Start | 必选 | number（int4 精度） | 范围的起始字符位置。 |
| End | 必选 | number（int4 精度） | 范围的结束字符位置。 |

## 返回值

void

## 说明


字符位置的值从文档该部分开头计起，起始值为 0（零）。将计算所有的字符，包括非打印字符和未显示的隐藏字符。

 **SetRange** 方法用于重新定义现有的 **Range** 对象的起始和结束位置。此方法不同于 **Range** 方法，后者用于在给出起始和结束位置的情况下创建范围。



## 示例


```JavaScript
/*本示例使用 SetRange 重新定义 range 以引用活动文档中的前三个段落。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.SetRange(range.Start, ActiveDocument.Paragraphs.Item(3).Range.End)
}
```


```JavaScript
/*此示例使用 SetRange 重新定义 range，以引用从活动文档开头到当前选定内容末尾的区域。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    range.InsertAfter("Hello")
    range.SetRange(range.Start, Selection.End)
}
```
