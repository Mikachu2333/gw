# PageSetup.LinesPage

返回或设置文档网格中每页的行数。 **Single** 类型，可读写。



## 语法

express.**LinesPage**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设定活动文档的每页具有 15 行。*/
function test() {
    ActiveDocument.PageSetup.LinesPage = 15
}
```


```JavaScript
/*本示例显示第一个文档的每页的行数。*/
function test() {
    alert(Documents.Item(1).PageSetup.LinesPage)
}
```
