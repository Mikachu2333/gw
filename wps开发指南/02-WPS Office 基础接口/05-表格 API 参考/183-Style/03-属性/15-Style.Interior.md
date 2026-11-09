# Style.Interior

返回一个 **Interior** 对象，它代表指定对象的内部。



## 语法

express.**Interior**

express   一个代表 **Style** 对象的变量。

## 类型

Interior

## 示例


```JavaScript
/*本示例将单元格 A1 的内部设置为红色。*/
function test() {
    Worksheets("Sheet1").Range("A1").Interior.ColorIndex = 3
}
```


```JavaScript
/*本示例将活动工作簿第一个样式内部设置为蓝色。*/
function test() {
    ActiveWorkbook.Styles.Item(1).Interior.Color = RGB(0, 0, 255)
}
```
