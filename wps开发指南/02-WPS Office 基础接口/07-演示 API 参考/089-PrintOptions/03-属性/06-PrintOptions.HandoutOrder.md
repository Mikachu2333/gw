# PrintOptions.HandoutOrder

返回或设置在打印的讲义上显示幻灯片的页面版式顺序，其中可在一个页面上显示多张幻灯片。可读/写。



## 语法

express.**HandoutOrder**

express   一个代表 **PrintOptions** 对象的变量。

## 类型

PpPrintHandoutOrder

## 说明


 **HandoutOrder** 属性的值可以是下列 **PpPrintHandoutOrder** 常量之一：

| 常量 |
| ------------------- | ----------------------- |
| **ppPrintHandoutHorizontalFirst** | 幻灯片水平排序，第一张幻灯片位于左上角，第二张位于其右侧。如果语言设置指定的是从右向左的语言，则第一张幻灯片位于右上角，第二张位于其左侧。 |
| **ppPrintHandoutVerticalFirst** | 幻灯片垂直排序，第一张幻灯片位于左上角，第二张位于其下。如果语言设置指定的是从右向左的语言，则第一张幻灯片位于右上角，第二张位于其下。     |



## 示例


```JavaScript
/*本示例将活动演示文稿的讲义设置为每页包含六张幻灯片，并在讲义上水平排列幻灯片，然后打印出来。*/
function test() {
    let printOptions = ActivePresentation.PrintOptions
    printOptions.OutputType = ppPrintOutputSixSlideHandouts
    printOptions.HandoutOrder = ppPrintHandoutHorizontalFirst
    ActivePresentation.PrintOut()
}
```


```JavaScript
/*本示例显示第一篇演示文稿在打印讲义上展示幻灯片的页面布局顺序是否为 ppPrintHandoutVerticalFirst。*/
function test() {
    let printOptions = Presentations.Item(1).PrintOptions
    alert(printOptions.HandoutOrder == ppPrintHandoutVerticalFirst)
}
```
