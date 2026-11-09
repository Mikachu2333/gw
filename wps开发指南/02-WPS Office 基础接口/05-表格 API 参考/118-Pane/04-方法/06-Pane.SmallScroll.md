# Pane.SmallScroll

按行或按列滚动窗口内容。



## 语法

express.**SmallScroll(Down, Up, ToRight, ToLeft)**

express   一个代表 **Pane** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Down | 可选 | any | 将内容向下滚动的行数。 |
| Up | 可选 | any | 将内容向上滚动的行数。 |
| ToRight | 可选 | any | 将内容向右滚动的列数。 |
| ToLeft | 可选 | any | 将内容向左滚动的列数。 |

## 返回值

Variant

## 说明


如果同时指定了 *Down* 和 *Up*，窗口内容的滚动量由这两个参数的差值决定。例如，如果 *Down* 为 3，*Up* 为 6，则窗口向上滚动三行。

如果同时指定了 *ToLeft* 和 *ToRight*，窗口内容的滚动量由这两个参数的差值决定。例如，如果 *ToLeft* 为 3，*ToRight* 为 6，则窗口内容向右滚动三列。

任何参数均可为负数。



## 示例


```JavaScript
/*此示例将活动窗口中活动窗格的内容向下滚动三行。*/
function test() {
    Application.ActiveWindow.ActivePane.SmallScroll(3)
}
```


```JavaScript
/*此示例将活动窗口中第一个窗格向上滚动五十行向左滚动五列。*/
function test() {
    ActiveWindow.Panes.Item(1).SmallScroll(10, 60, 4, 9)
}
```
