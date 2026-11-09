# HeadersFooters.DisplayOnTitleSlide

决定标题幻灯片上是否显示页脚、日期和时间以及幻灯片编号。适用于幻灯片母版。可读/写。



## 语法

express.**DisplayOnTitleSlide**

express   一个代表 **HeadersFooters** 对象的变量。

## 类型

MsoTriState

## 说明


 **DisplayOnTitleSlide** 属性的值可以是下列 **MsoTriState** 常量之一：

| **常量** | **说明** |
| ----- | ----- |
| **msoFalse** | 在除标题幻灯片之外的所有幻灯片上显示页脚、日期和时间以及幻灯片编号。 |
| **msoTrue** | 在标题幻灯片上显示页脚、日期和时间以及幻灯片编号。 |



## 示例


```JavaScript
/*本示例设置活动演示文稿的幻灯片母版的标题幻灯片上不显示页脚、日期和时间及幻灯片编号。*/
function test() {
    Application.ActivePresentation.SlideMaster.HeadersFooters.DisplayOnTitleSlide = msoFalse
}
```


```JavaScript
/*本示例判断如果活动演示文稿第一张幻灯片在标题幻灯片上显示页脚、日期和时间以及幻灯片编号，则通知用户。*/
function test() {
    if (ActivePresentation.Slides.Item(1).HeadersFooters.DisplayOnTitleSlide == msoTrue) {
        alert("在标题幻灯片上显示页脚、日期和时间以及幻灯片编号。")
    }
}
```
