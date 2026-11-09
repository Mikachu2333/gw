# Pane.LargeScroll

按页滚动窗口内容。



## 语法

express.**LargeScroll(Down, Up, ToRight, ToLeft)**

express   一个代表 **Pane** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Down | 可选 | any | 向下滚动内容的页数。 |
| Up | 可选 | any | 向上滚动内容的页数。 |
| ToRight | 可选 | any | 向右滚动内容的页数。 |
| ToLeft | 可选 | any | 向左滚动内容的页数。 |

## 返回值

Variant

## 说明


如果同时指定了 *Down* 和 *Up*，窗口内容的滚动量由这两个参数的差值决定。例如，如果 *Down* 为 3，*Up* 为 6，则窗口向上滚动三页。

如果同时指定了 *ToLeft* 和 *ToRight*，窗口内容的滚动量由这两个参数的差值决定。例如，如果 *ToLeft* 为 3，*ToRight* 为 6，则窗口向右滚动三页。

以上任何参数均可为负数。



## 示例


```JavaScript
/*本示例将活动窗口中活动窗格向下滚动一页。*/
function test() {
    ActiveWindow.ActivePane.LargeScroll(1)
}
```


```JavaScript
/*本示例将活动窗口中第一个窗格向下滚动两页，向右滚动三页。*/
function test() {
    ActiveWindow.Panes.Item(1).LargeScroll(3, 1, 4, 1)
}
```
