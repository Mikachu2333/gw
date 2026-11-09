# EndnoteOptions.StartingNumber

返回或设置尾注的起始编号。 **Long** 类型，可读写。



## 语法

express.**StartingNumber**

express   一个代表 **EndnoteOptions** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示所选内容中尾注的起始编号。*/
function test() {
    alert(Selection.EndnoteOptions.StartingNumber)
}
```


```JavaScript
/*本示例将活动文档上第一节的文档部分中所有尾注的起始编号设置为3。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    range.EndnoteOptions.StartingNumber = 3
}
```
