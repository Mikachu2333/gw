# Presentation.PrintOptions

返回一个 **PrintOptions** 对象，该对象代表与指定演示文稿共同保存的打印选项。只读。



## 语法

express.**PrintOptions**

express   一个代表 **Presentation** 对象的变量。

## 类型

PrintOptions

## 示例


```JavaScript
/*以下示例打印当前演示文稿中的隐藏幻灯片，并调整幻灯片的尺寸以适应纸张大小。*/
function test() {
    let presentation = Application.ActivePresentation
    let printOptions = presentation.PrintOptions
    printOptions.PrintHiddenSlides = msoTrue
    printOptions.FitToPage = msoTrue
    presentation.PrintOut()
}
```


```JavaScript
/*本示例打印第一个演示文稿中第 1、 4、 5 和 6 页幻灯片。*/
function test() {
    let presentation = Presentations.Item(1)
    let printOptions = presentation.PrintOptions
    printOptions.RangeType = ppPrintSlideRange
    printOptions.Ranges.Add(1, 1)
    printOptions.Ranges.Add(4, 6)
    presentation.PrintOut()
}
```
