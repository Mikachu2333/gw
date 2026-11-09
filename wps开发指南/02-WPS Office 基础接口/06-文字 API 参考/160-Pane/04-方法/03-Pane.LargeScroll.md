# Pane.LargeScroll

将窗口或窗格滚动指定的屏数。



## 语法

express.**LargeScroll(Down, Up, ToRight, ToLeft)**

express   一个代表 **Pane** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Down | 可选 | any | 向下滚动窗口的屏数。 |
| Up | 可选 | any | 向上滚动窗口的屏数。 |
| ToRight | 可选 | any | 向右滚动窗口的屏数。 |
| ToLeft | 可选 | any | 向左滚动窗口的屏数。 |

## 返回值

void

## 说明


此方法等效于在水平和垂直滚动条上单击滚动块以外的位置。  

如果指定了 Down 和 Up 两个参数，则窗口滚动屏数为这两个参数的差。例如，如果 Down 为 2，Up 为 4，则窗口向上滚动两屏。同样，如果指定了 ToLeft 和 ToRight 两个参数，则窗口滚动屏数也为这两个参数的差。

这四个参数都可以取负值。如果没有指定参数，窗口将向下滚动一屏。



## 示例


```JavaScript
/*本示例将活动窗格下滚两屏。*/
function test() {
    ActiveWindow.ActivePane.LargeScroll(2)
}
```


```JavaScript
/*本示例将活动窗格上滚一屏，左滚一屏。*/
function test() {
    ActiveWindow.ActivePane.LargeScroll(null, 1, null, 1)
}
```
