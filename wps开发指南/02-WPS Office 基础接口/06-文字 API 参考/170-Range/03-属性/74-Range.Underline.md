# Range.Underline

返回或设置应用于范围的下划线的类型。可读写 **WdUnderline** 类型。



## 语法

express.**Underline**

express   一个代表 **Range** 对象的变量。

## 类型

WdUnderline

## 示例


```JavaScript
/*本示例对活动文档中的第四个单词应用双下划线。*/
function test() {
    ActiveDocument.Words.Item(4).Underline = wdUnderlineDouble
}
```


```JavaScript
/*本示例显示所选区域的下划线的类型是否为wdUnderlineWavy。*/
function test() {
    alert(Selection.Range.Underline == wdUnderlineWavy)
}
```
