# SlideShowView.GotoSlide

在幻灯片放映期间切换到指定幻灯片。可指定是否要重运行动画效果。



## 语法

express.**GotoSlide(Index, ResetSlide)**

express   一个代表 **SlideShowView** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 要切换到的幻灯片的编号。 |
| ResetSlide | 可选 | MsoTriState | 当返回第一张幻灯片时是否应重新运行动画效果。 |

## 返回值

void

## 说明


ResetSlide 参数的值可以是下列 **MsoTriState** 常量之一。默认值为 **msoTrue** 

|                                     |
| ----------------------------------- |
| **msoFalse**                        |
| **msoTrue**                         |

如果将 ResetSlide 设置为 **msoFalse** ，那么在幻灯片放映期间，当您从一张幻灯片切换到另一张，再返回到第一张幻灯片时，动画将从刚刚中断的位置继续播放。如果将 ResetSlide 设置为 **msoTrue** ，当从一张幻灯片切换到另一张幻灯片，再返回到第一张幻灯片时，将重新播放整个动画。



## 示例


```JavaScript
/*本示例在活动演示文稿的放映视图中从当前幻灯片切换到第三张幻灯片。如果在幻灯片放映过程中切换回当前幻灯片，将重新播放整个动画。*/
function test() {
    ActivePresentation.SlideShowWindow.View.GotoSlide(3)
}
```


```JavaScript
/*本示例在第一个幻灯片放映窗口中从当前幻灯片切换到第三张幻灯片。如果在幻灯片放映过程中切换回当前幻灯片，动画将从中断位置重新播放。*/
function test() {
    Application.SlideShowWindows.Item(1).View.GotoSlide(3, msoFalse)
}
```
