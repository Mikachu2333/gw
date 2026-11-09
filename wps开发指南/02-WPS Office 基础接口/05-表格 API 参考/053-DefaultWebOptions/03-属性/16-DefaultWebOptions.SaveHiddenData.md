# DefaultWebOptions.SaveHiddenData

当以网页保存文档时，如果也保存指定区域之外的数据，则该值为 **True** 。此数据对于维护公式是很有必要的。如果指定区域之外的数据并不与网页一起保存，则该值为 **False** 。默认值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**SaveHiddenData**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

boolean

## 说明


如果选择不保存指定区域之外的数据，则公式中对这些数据的引用都将变为静态值。如果数据位于另外的工作表或工作簿中，则公式结果将以静态值保存。



## 示例


```JavaScript
/*本示例防止将隐藏数据与网页一起保存。*/
function test() {
    Application.DefaultWebOptions.SaveHiddenData = false
}
```


```JavaScript
/*此示例显示（Web全局选项）将文档保存为网页时是否保存指定区域之外的数据。*/
function test() {
    alert(Application.DefaultWebOptions.SaveHiddenData)
}
```
