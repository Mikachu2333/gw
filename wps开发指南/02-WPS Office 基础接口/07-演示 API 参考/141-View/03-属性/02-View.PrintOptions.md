# View.PrintOptions

返回一个 **[PrintOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/obj)** 对象，该对象代表与指定演示文稿共同保存的打印选项。只读。



## 语法

express.**PrintOptions**

express   一个代表 **View** 对象的变量。

## 类型

PrintOptions

## 示例


```JavaScript
/*本示例打印第一个窗口视图中的隐藏幻灯片，并调整幻灯片的尺寸以适应纸张大小。*/
function test() {
    let printOptions = Windows.Item(1).View.PrintOptions
    printOptions.PrintHiddenSlides = msoTrue
    printOptions.FitToPage = msoTrue
    ActivePresentation.PrintOut()
}
```


```JavaScript
/*本示例打印当前活动窗口视图的当前幻灯片。*/
function test() {
    ActiveWindow.View.PrintOptions.RangeType = ppPrintCurrent
    ActivePresentation.PrintOut()
}
```
