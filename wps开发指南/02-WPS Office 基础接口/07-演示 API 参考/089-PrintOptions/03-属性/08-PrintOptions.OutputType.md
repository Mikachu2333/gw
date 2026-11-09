# PrintOptions.OutputType

返回或设置一个值，该值指示要打印演示文稿的哪些组件（幻灯片、讲义、备注页或大纲）。可读/写。



## 语法

express.**OutputType**

express   一个代表 **PrintOptions** 对象的变量。

## 类型

PpPrintOutputType

## 说明


 **OutputType** 可以是下列 **PpPrintOutputType** 常量之一：

| 常量 |
| ----------------------------------------------- |
| **ppPrintOutputBuildSlides**                    |
| **ppPrintOutputFourSlideHandouts**              |
| **ppPrintOutputNineSlideHandouts**              |
| **ppPrintOutputNotesPages**                     |
| **ppPrintOutputOneSlideHandouts**               |
| **ppPrintOutputOutline**                        |
| **ppPrintOutputSixSlideHandouts**               |
| **ppPrintOutputSlides**                         |
| **ppPrintOutputThreeSlideHandouts**             |
| **ppPrintOutputTwoSlideHandouts**               |



## 示例


```JavaScript
/*本示例打印活动演示文稿的讲义，每页打印六张幻灯片。*/
function test() {
    ActivePresentation.PrintOptions.OutputType = ppPrintOutputSixSlideHandouts
    ActivePresentation.PrintOut()
}
```


```JavaScript
/*本示例显示是否要打印第一篇演示文稿的备注页。*/
function test() {
    let printOptions = Presentations.Item(1).PrintOptions
    alert(printOptions.OutputType == ppPrintOutputNotesPages)
}
```
