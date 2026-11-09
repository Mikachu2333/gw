# Document.DefaultTabStop

以磅为单位返回或设置指定文档中的默认制表位间隔。 **Single** 类型，可读写。



## 语法

express.**DefaultTabStop**

express   一个代表 **Document** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中的默认制表位设置为 1 英寸。其中 InchesToPoints 方法用来将英寸转化为磅值。*/
function test() {
    ActiveDocument.DefaultTabStop = InchesToPoints(1)
}
```


```JavaScript
/*本示例显示第一个文档中默认制表位之间的间隔。*/
function test() {
    alert(Documents.Item(1).DefaultTabStop + " 磅")
}
```
