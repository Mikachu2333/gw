# Style.ShrinkToFit

返回或设置一个 **Boolean** 值，它指明文本是否可以自动收缩为适当尺寸以适应可用列宽。



## 语法

express.**ShrinkToFit**

express   一个代表 **Style** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作簿第一个样式的文本是否可以自动适应列宽。*/
function test() {
    alert(ActiveWorkbook.Styles.Item(1).ShrinkToFit)
}
```


```JavaScript
/*本示例为单元格 B1 赋值，并设置单元格的文本可以自动收缩为适当尺寸以适应可用列宽。*/
function test() {
    Range("B1").Value2 = "这是示例文本"
    Range("B1").Style.ShrinkToFit = true
}
```
