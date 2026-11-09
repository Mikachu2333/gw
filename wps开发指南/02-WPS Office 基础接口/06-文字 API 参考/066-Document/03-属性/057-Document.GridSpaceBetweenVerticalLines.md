# Document.GridSpaceBetweenVerticalLines

返回或设置 WPS 在页面视图中显示的垂直字符网格线间隔。 **Long** 类型，可读写。



## 语法

express.**GridSpaceBetweenVerticalLines**

express   一个代表 **Document** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置 WPS 每隔一格显示一个垂直字符网格线。*/
function test() {
    ActiveDocument.GridSpaceBetweenVerticalLines = 2
}
```


```JavaScript
/*本示例显示第一个文档在页面视图中展示垂直字符网格线的间隔。*/
function test() {
    alert(Documents.Item(1).GridSpaceBetweenVerticalLines)
}
```
