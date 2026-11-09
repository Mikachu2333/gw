# PrintOptions.FitToPage

决定是否调整幻灯片大小以适应打印页面。可读/写。



## 语法

express.**FitToPage**

express   一个代表 **PrintOptions** 对象的变量。

## 类型

MsoTriState

## 说明


 **FitToPage** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ------------------------ | ----------------------- |
| **msoFalse** | 默认值。幻灯片将使用“ **页面设置** ”对话框中指定的尺寸，不论该尺寸是否与打印页面相适应。             |
| **msoTrue** | 调整指定幻灯片的大小以适应打印页面，而不考虑“ **页面设置** ”对话框（在“设计”选项卡上，单击“幻灯片大小”）中“ **高度** ”框和“ **宽度** ”框中的值。 |



## 示例


```JavaScript
/*本示例将打印当前演示文稿并调整每张幻灯片的大小以适应打印页面。*/
function test() {
    ActivePresentation.PrintOptions.FitToPage = msoTrue
    ActivePresentation.PrintOut()
}
```


```JavaScript
/*本示例显示是否在打印第一篇演示文稿时调整幻灯片大小以适应打印页面。*/
function test() {
    let printOptions = Presentations.Item(1).PrintOptions
    alert(printOptions.FitToPage == msoTrue)
}
```
