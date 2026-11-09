# Slide.HeadersFooters

返回一个 **HeadersFooters** 集合，该集合代表与幻灯片、幻灯片母版或幻灯片区域相关联的页眉、页脚、日期和时间以及幻灯片编号。只读。



## 语法

express.**HeadersFooters**

express   一个代表 **Slide** 对象的变量。

## 类型

HeadersFooters

## 示例


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片中设置页脚文本、日期和时间的格式，并将日期和时间设定为可自动修改。*/
function test() {
    let headersFooters = ActivePresentation.Slides.Item(1).HeadersFooters
    headersFooters.Footer.Text = "Regional Sales"
    let headerFooter = headersFooters.DateAndTime
    headerFooter.UseFormat = msoTrue
    headerFooter.Format = ppDateTimeHmmss
}
```


```JavaScript
/*本示例清除活动演示文稿的第一张幻灯片的页眉页脚。*/
function test() {
    ActivePresentation.Slides.Item(1).HeadersFooters.Clear()
}
```
