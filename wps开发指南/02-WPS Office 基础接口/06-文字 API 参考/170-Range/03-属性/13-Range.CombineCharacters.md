# Range.CombineCharacters

如果指定区域包含合并字符，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CombineCharacters**

express   一个代表 **Range** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例合并选定区域中的字符。*/
function test() {
    Selection.Range.CombineCharacters = true
}
```


```JavaScript
/*本示例显示活动文档的主文档文章是否包含合并字符。*/
function test() {
    alert(ActiveDocument.Content.CombineCharacters)
}
```
