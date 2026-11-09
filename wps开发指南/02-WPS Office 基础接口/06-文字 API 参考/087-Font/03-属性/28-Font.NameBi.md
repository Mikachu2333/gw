# Font.NameBi

返回或设置使用从右向左语言的文档中的字体的名称。 **String** 类型，可读写。



## 语法

express.**NameBi**

express   一个代表 **Font** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将从右到左语言的文档中选定内容的字体设置为“Arial”字体。*/
function test() {
    Selection.Font.NameBi = "Arial"
}
```


```JavaScript
/*本示例显示从右到左语言的文档中字体的名称。*/
function test() {
    alert(ActiveDocument.Content.Font.NameBi)
}
```
