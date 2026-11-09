# Slide.MoveTo

将指定对象移动到同一集合中的指定位置，并适当地对集合中所有其他项目进行重新编号。



## 语法

express.**MoveTo(toPos)**

express   一个代表 **Slide** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| toPos | 必选 | number（int 精度） | 幻灯片要移动到的索引。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动演示文稿中的第二张幻灯片移动到第一张幻灯片的位置上。*/
function test() {
    ActivePresentation.Slides.Item(2).MoveTo(1)
}
```


```JavaScript
/*本示例将第一个演示文稿的最后一张幻灯片移动到第一张幻灯片的位置上。*/
function test() {
    let slides = Presentations.Item(1).Slides
    slides.Item(slides.Count).MoveTo(1)
}
```
