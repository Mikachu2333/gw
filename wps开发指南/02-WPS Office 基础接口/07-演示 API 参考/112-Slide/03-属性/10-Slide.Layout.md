# Slide.Layout

返回或设置一个 **PpSlideLayout** 常量，该常量代表幻灯片版式。可读/写。



## 语法

express.**Layout**

express   一个代表 **Slide** 对象的变量。

## 类型

PpSlideLayout

## 说明


| **Layout** 可以是下列 PpSlideLayout 常量之一。 |
| ----------------------------------------- |
| **ppLayoutBlank**                         |
| **ppLayoutChart**                         |
| **ppLayoutChartAndText**                  |
| **ppLayoutClipartAndText**                |
| **ppLayoutClipArtAndVerticalText**        |
| **ppLayoutFourObjects**                   |
| **ppLayoutLargeObject**                   |
| **ppLayoutMediaClipAndText**              |
| **ppLayoutMixed**                         |
| **ppLayoutObject**                        |
| **ppLayoutObjectAndText**                 |
| **ppLayoutObjectOverText**                |
| **ppLayoutOrgchart**                      |
| **ppLayoutTable**                         |
| **ppLayoutText**                          |
| **ppLayoutTextAndChart**                  |
| **ppLayoutTextAndClipart**                |
| **ppLayoutTextAndMediaClip**              |
| **ppLayoutTextAndObject**                 |
| **ppLayoutTextAndTwoObjects**             |
| **ppLayoutTextOverObject**                |
| **ppLayoutTitle**                         |
| **ppLayoutTitleOnly**                     |
| **ppLayoutTwoColumnText**                 |
| **ppLayoutTwoObjectsAndText**             |
| **ppLayoutTwoObjectsOverText**            |
| **ppLayoutVerticalText**                  |
| **ppLayoutVerticalTitleAndText**          |
| **ppLayoutVerticalTitleAndTextOverChart** |



## 示例


```JavaScript
/*本示例中，如果当前演示文稿的第一张幻灯片原来只有一个标题，则改变该幻灯片的版式以包含一个标题和一个副标题。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    if (slide.Layout == ppLayoutTitleOnly) {
        slide.Layout = ppLayoutTitle
    }
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的版式是否为ppLayoutObject。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).Layout == ppLayoutObject)
}
```
