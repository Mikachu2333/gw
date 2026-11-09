# AnimationBehavior.Additive

设置或返回当前动画行为是否与其他正在运行的动画合并。可读/写。



## 语法

express.**Additive**

express   一个代表 **AnimationBehavior** 对象的变量。

## 类型

MsoAnimAdditive

## 说明


 **Additive** 属性的值可以是下列 **MsoAnimAdditive** 常量之一：

| 常量                         | 说明                 |
| -------------------------- | ------------------ |
| **msoAnimAdditiveAddBase** | 不将当前动画与其他动画合并。默认值。 |
| **msoAnimAdditiveAddSum**  | 将当前动画与其他运行的动画合并。   |

合并动画行为对旋转效果特别有用。例如，如果当前动画更改旋转的同时另一个动画也在更改旋转，将该属性设置为 **msoAnimAdditiveAddSum** 时，WPP 会一起添加这两个动画的旋转。



## 示例


```JavaScript
/*本示例将活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画行为添加到另一个动画行为中。*/
function test() {
    let animationBehavior = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1).Behaviors.Item(1)
    animationBehavior.Additive = msoAnimAdditiveAddSum
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的主动画序列时间线的第一个动画行为是否与其他正在运行的动画合并。*/
function test() {
    let animationBehavior = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1).Behaviors.Item(1)
    alert(animationBehavior.Additive == msoAnimAdditiveAddSum)
}
```
