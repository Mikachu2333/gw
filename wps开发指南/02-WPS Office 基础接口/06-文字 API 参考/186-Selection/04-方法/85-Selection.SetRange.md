# Selection.SetRange

设置所选内容的起始字符和结束字符的位置。



## 语法

express.**SetRange(Start, End)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Start | 必选 | number（int4 精度） | 所选内容的起始字符位置。 |
| End | 必选 | number（int4 精度） | 所选内容的结束字符位置。 |

## 返回值

void

## 说明


字符位置的值从文档该部分开头计起，起始值为 0（零）。将计算所有的字符，包括非打印字符和未显示的隐藏字符。

 **SetRange** 方法用于重新定义现有 **Selection** 对象的起始和结束位置。此方法不同于 **Range** 方法，后者用于在给定起始和结束位置的情况下创建 **Range** 对象。



## 示例


```JavaScript
/*本示例选择文档中的前 10 个字符。*/
function test() {
    Selection.SetRange(0, 10)
}
```


```JavaScript
/*本示例将所选内容扩展至文档末尾。*/
function test() {
    Selection.SetRange(Selection.Start, ActiveDocument.Content.End)
}
```
