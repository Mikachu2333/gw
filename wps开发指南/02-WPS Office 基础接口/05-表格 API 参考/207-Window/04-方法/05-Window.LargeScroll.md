# Window.LargeScroll

按页滚动窗口内容。



## 语法

express.**LargeScroll(Down, Up, ToRight, ToLeft)**

express   一个代表 **Window** 对象的变量。

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


如果同时指定了 _Down_ 和 _Up_，窗口内容的滚动量由这两个参数的差值决定。例如，如果 _Down_ 为 3，_Up_ 为 6，则窗口向上滚动三页。

如果同时指定了 _ToLeft_ 和 _ToRight_，窗口内容的滚动量由这两个参数的差值决定。例如，如果 _ToLeft_ 为 3，_ToRight_ 为 6，则窗口向右滚动三页。

以上任何参数均可为负数。



## 示例


```JavaScript
/*此示例将工作表 Sheet1 的活动窗口中的内容向下滚动三页。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    ActiveWindow.LargeScroll(3)
}
```


```JavaScript
/*本示例将第一个窗口中的内容向下滚动两页，向右滚动两页。*/
function test() {
    Windows.Item(1).LargeScroll(2, null, 2)
}
```
