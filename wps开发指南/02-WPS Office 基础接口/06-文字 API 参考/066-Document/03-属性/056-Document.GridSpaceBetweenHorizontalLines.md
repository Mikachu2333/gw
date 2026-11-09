# Document.GridSpaceBetweenHorizontalLines

返回或设置 WPS 在页面视图中显示的水平字符网格的间隔。 **Long** 类型，可读写。



## 语法

express.**GridSpaceBetweenHorizontalLines**

express   一个代表 **Document** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置 WPS 每隔四格显示一个水平字符网格线。*/
function test() {
    ActiveDocument.GridSpaceBetweenHorizontalLines = 5
}
```


```JavaScript
/*本示例显示第一个文档在页面视图中展示水平字符网格线的间隔。*/
function test() {
    alert(Documents.Item(1).GridSpaceBetweenHorizontalLines)
}
```
