# PageSetup.CharsLine

返回或设置文档网格中每行的字符数。 **Single** 类型，可读写。



## 语法

express.**CharsLine**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档每行字符数设置为 42。*/
function test() {
    ActiveDocument.PageSetup.CharsLine = 42
}
```


```JavaScript
/*本示例显示所选内容的每行字符数。*/
function test() {
    alert(Selection.PageSetup.CharsLine)
}
```
