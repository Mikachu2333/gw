# PageSetup.FooterDistance

返回或设置页脚与页面底边之间的距离（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**FooterDistance**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将页脚与页底边之间的距离设置为 0.5 英寸。InchesToPoints 方法用来将英寸转换为磅值。*/
function test() {
    ActiveDocument.PageSetup.FooterDistance = InchesToPoints(0.5)
}
```


```JavaScript
/*本示例将选定的所有节的页脚与页底边的距离设置为 1 英寸。*/
function test() {
    Selection.Range.PageSetup.FooterDistance = 72
}
```
