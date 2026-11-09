# SlideRange.MoveTo

将指定对象移动到同一集合中的指定位置，并适当地对集合中所有其他项目进行重新编号。



## 语法

express.**MoveTo(toPos)**

express   一个代表 **SlideRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| toPos | 必选 | number（int 精度） | 动画效果要移动到的索引位置。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动演示文稿第一个窗口中选定的幻灯片移动到第一张幻灯片的位置上。*/
function test() {
    let slideRange = ActivePresentation.Windows.Item(1).Selection.SlideRange
    slideRange.MoveTo(1)
}
```


```JavaScript
/*本示例将活动演示文稿中的第二张幻灯片移动到第一张幻灯片的位置上。*/
function test() {
    ActivePresentation.Slides.Range(2).MoveTo(1)
}
```
