# Slide.MoveToSectionStart

将当前幻灯片移到指定节的开头。



## 语法

express.**MoveToSectionStart(toSection)**

express   一个代表 **Slide** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| toSection | 必选 | number（int 精度） | 要移到的节。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动演示文稿的第二张幻灯片移到第一个节。*/
function test() {
    let slides = ActivePresentation.Slides
    slides.Item(2).MoveToSectionStart(1)
}
```


```JavaScript
/*本示例将第一个演示文稿的最后一张幻灯片移到第二个节。*/
function test() {
    let slides = Presentations.Item(1).Slides
    slides.Item(slides.Count).MoveToSectionStart(2)
}
```
