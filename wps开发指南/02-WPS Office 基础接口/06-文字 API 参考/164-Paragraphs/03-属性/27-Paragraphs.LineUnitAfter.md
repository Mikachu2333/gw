# Paragraphs.LineUnitAfter

返回或设置指定段落的段后间距（以网格线为单位）。可读写 **Single** 类型。



## 语法

express.**LineUnitAfter**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中所有段落的段后间距设置为 1 个网格线。*/
function test() {
    ActiveDocument.Paragraphs.LineUnitAfter = 1
}
```


```JavaScript
/*本示例显示所选区域所有段落的段后间距（以网格线为单位）。*/
function test() {
    alert(Selection.Paragraphs.LineUnitAfter)
}
```
