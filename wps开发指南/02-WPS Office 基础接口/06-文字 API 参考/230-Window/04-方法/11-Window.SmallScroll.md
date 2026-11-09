# Window.SmallScroll

将窗口或窗格滚动指定的行数。



## 语法

express.**SmallScroll(Down, Up, ToRight, ToLeft)**

express   一个代表 **Window** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Down | 可选 | any | 向下滚动窗口的行数。一“行”对应于单击一次垂直滚动条上的向下滚动箭头所滚动的距离。 |
| Up | 可选 | any | 向上滚动窗口的行数。一“行”对应于单击一次垂直滚动条上的向上滚动箭头所滚动的距离。 |
| ToRight | 可选 | any | 向右滚动窗口的行数。一“行”对应于单击一次水平滚动条上的向右滚动箭头所滚动的距离。 |
| ToLeft | 可选 | any | 向左滚动窗口的行数。一“行”对应于单击一次水平滚动条上的向左滚动箭头所滚动的距离。 |

## 返回值

void

## 说明


此方法等效于单击水平和垂直滚动条上的滚动箭头。

如果指定了 Down 和 Up 两个参数，则窗口滚动行数为这两个参数的差。例如，如果 Down 为 3，Up 为 6，则窗口将向上滚动三行。同样，如果指定了 ToLeft 和 ToRight 两个参数，则窗口滚动行数也为这两个参数的差。

这四个参数都可以取负值。如果没有指定参数，窗口将下滚一行。



## 示例


```JavaScript
/*本示例将活动窗口下滚一行。*/
function test() {
    ActiveDocument.ActiveWindow.SmallScroll(1)
}
```


```JavaScript
/*本示例拆分活动窗口，并上滚及左滚窗口。*/
function test() {
    ActiveDocument.ActiveWindow.Split = true
    ActiveDocument.ActiveWindow.SmallScroll(null, 5, null, 5)
}
```
