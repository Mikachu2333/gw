# Slides.AddSlide

创建新的幻灯片，将其添加到 **Slides** 集合，然后返回幻灯片。



## 语法

express.**AddSlide(Index, pCustomLayout)**

express   一个代表 **Slides** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 要添加的幻灯片的索引。 |
| pCustomLayout | 必选 | CustomLayout | 幻灯片的版式。 |

## 返回值

Slide

## 示例


```JavaScript
/*以下示例说明如何使用 AddSlide 方法将新幻灯片添加到 Slides 集合。它在索引位置 2 处添加一张新幻灯片，该幻灯片具有与当前演示文稿中第一张幻灯片同样的版式。*/
function test() {
    let customLayout = ActivePresentation.Slides.Item(1).CustomLayout
    ActivePresentation.Slides.AddSlide(2, customLayout)
}
```


```JavaScript
/*本示例在第一篇演示文稿中添加一张幻灯片，并将其中的标题文本设置为“title”。*/
function test() {
    let customLayout = Presentations.Item(1).Slides.Item(1).Master.CustomLayouts.Item(1)
    let slide = Presentations.Item(1).Slides.AddSlide(1, customLayout)
    slide.Shapes.Title.TextFrame.TextRange.Text = "title"
}
```
