# HeaderFooter.Text

返回或设置一个 **String** 类型值，该值代表指定对象中包含的文本。可读/写。



## 语法

express.**Text**

express   一个代表 **HeaderFooter** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片的日期和时间的文本。*/
function test() {
    let headerFooter = ActivePresentation.Slides.Item(1).HeadersFooters.DateAndTime
    headerFooter.Text = "2025年3月19日"
}
```


```JavaScript
/*本示例设置活动窗口所选的第一张幻灯片的页脚的文本。*/
function test() {
    let headerFooter = ActiveWindow.Selection.SlideRange.Item(1).HeadersFooters.Footer
    headerFooter.Text = "WPP"
}
```
