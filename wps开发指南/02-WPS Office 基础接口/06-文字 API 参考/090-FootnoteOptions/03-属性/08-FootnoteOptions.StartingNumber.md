# FootnoteOptions.StartingNumber

返回或设置脚注的起始编号。 **Long** 类型，可读写。



## 语法

express.**StartingNumber**

express   一个代表 **FootnoteOptions** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示选定内容上脚注的起始编号。*/
function test() {
    alert(Selection.FootnoteOptions.StartingNumber)
}
```


```JavaScript
/*本示例更改活动文档第一节中脚注的起始编号。*/
function test() {
    ActiveDocument.Sections(1).Range.FootnoteOptions.StartingNumber = 3
}
```
