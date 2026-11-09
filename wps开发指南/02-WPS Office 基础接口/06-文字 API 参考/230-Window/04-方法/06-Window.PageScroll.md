# Window.PageScroll

使指定的窗格或窗口逐页滚动。



## 语法

express.**PageScroll(Down, Up)**

express   一个代表 **Window** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Down | 可选 | any | 向下滚动的页数。 |
| Up | 可选 | any | 向上滚动的页数。 |

## 返回值

void

## 说明


 **PageScroll** 方法仅用于页面视图或 Web 版式视图。此方法不影响插入点的位置。

如果指定了 Down 和 Up 两个参数，则窗口滚动页数为这两个参数的差。例如，如果 Down 为 2，Up 为 4，则窗口向上滚动两页。



## 示例


```JavaScript
/*本示例使活动窗口向下滚动三页。*/
function test() {
    ActiveDocument.ActiveWindow.View.Type = wdPrintView
    ActiveDocument.ActiveWindow.PageScroll(3)
}
```


```JavaScript
/*本示例使第一个窗口向上滚动一页。*/
function test() {
    Windows.Item(1).View.Type = wdPrintView
    Windows.Item(1).PageScroll(1, 2)
}
```
