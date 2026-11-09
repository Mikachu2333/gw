# Window.SmallScroll

按行或按列滚动窗口内容。



## 语法

express.**SmallScroll(Down, Up, ToRight, ToLeft)**

express   一个代表 **Window** 对象的变量。

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


如果同时指定了 _Down_ 和 _Up_，窗口内容的滚动量由这两个参数的差值决定。例如，如果 _Down_ 为 3，_Up_ 为 6，则窗口向上滚动三行。

如果同时指定了 _ToLeft_ 和 _ToRight_，窗口内容的滚动量由这两个参数的差值决定。例如，如果 _ToLeft_ 为 3，_ToRight_ 为 6，则窗口内容向右滚动三列。

任何参数均可为负数。



## 示例


```JavaScript
/*此示例将工作表 Sheet1 的活动窗口内容向下滚动三行。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    Application.ActiveWindow.SmallScroll(3)
}
```


```JavaScript
/*此示例将活动窗口向上滚动五十行向左滚动五列。*/
function test() {
    ActiveWindow.SmallScroll(null, 50, null, 5)
}
```
