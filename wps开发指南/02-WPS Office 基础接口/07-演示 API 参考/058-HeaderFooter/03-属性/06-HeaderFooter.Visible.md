# HeaderFooter.Visible

返回或设置指定对象或应用于指定对象的格式的可见性。可读/写。



## 语法

express.**Visible**

express   一个代表 **HeaderFooter** 对象的变量。

## 类型

MsoTriState

## 说明


 **Visible** 属性的值可以是下列 **MsoTriState** 常量之一。

| **常量** | **说明** |
| ----- | ----- |
| **msoFalse** | 指定的对象或对象格式不可见。 |
| **msoTrue** | 指定的对象或对象格式可见。 |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的日期和时间设置为不可见。*/
function test() {
    let headerFooter = ActivePresentation.Slides.Item(1).HeadersFooters.DateAndTime
    headerFooter.Visible = msoFalse
}
```


```JavaScript
/*本示例显示活动窗口所选的第一张幻灯片的页脚是否可见。*/
function test() {
    let headerFooter = ActiveWindow.Selection.SlideRange.Item(1).HeadersFooters.Footer
    alert(headerFooter.Visible === msoTrue)
}
```
