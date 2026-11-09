# PrintOptions.PrintColorType

返回或设置指定文档的打印方式：黑白方式、纯黑色和纯白色（亦称为高对比度）方式或彩色方式。可读/写。



## 语法

express.**PrintColorType**

express   一个代表 **PrintOptions** 对象的变量。

## 类型

PpPrintColorType

## 说明


 **PrintColorType** 属性的值可以是下列 **PpPrintColorType** 常量之一。默认值由打印机设置。

| 常量 |
| ----------------------------------------------- |
| **ppPrintBlackAndWhite**                        |
| **ppPrintColor**                                |
| **ppPrintPureBlackAndWhite**                    |



## 示例


```JavaScript
/*本示例以彩色方式打印活动演示文稿的幻灯片。*/
function test() {
    ActivePresentation.PrintOptions.PrintColorType = ppPrintColor
    ActivePresentation.PrintOut()
}
```


```JavaScript
/*本示例显示第一篇演示文稿的打印方式是否为ppPrintPureBlackAndWhite。*/
function test() {
    let printOptions = Presentations.Item(1).PrintOptions
    alert(printOptions.PrintColorType == ppPrintPureBlackAndWhite)
}
```
