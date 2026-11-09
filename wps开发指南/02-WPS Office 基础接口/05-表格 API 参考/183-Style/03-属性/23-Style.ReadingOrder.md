# Style.ReadingOrder

返回或设置指定对象的阅读次序。可为以下常量之一： **xlRTL** （从右到左）、 **xlLTR** （从左到右）或 **xlContext** 。 **Long** 类型，可读写。



## 语法

express.**ReadingOrder**

express   一个代表 **Style** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置C2单元格的阅读次序为从右到左。*/
function test() {
    Range("C2").Style.ReadingOrder = xlRTL
}
```


```JavaScript
/*本示例显示活动工作簿第一个样式的阅读顺序是否从左到右。*/
function test() {
    alert(ActiveWorkbook.Styles.Item(1).ReadingOrder == xlLTR)
}
```
