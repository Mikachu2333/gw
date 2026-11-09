# Pane.PageScroll

将指定的窗口按页滚动。



## 语法

express.**PageScroll(Down, Up)**

express   一个代表 **Pane** 对象的变量。

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
/*本示例使活动窗格向上滚动一页。*/
function test() {
    ActiveDocument.ActiveWindow.View.Type = wdPrintView
    ActiveDocument.ActiveWindow.ActivePane.PageScroll(null, 1)
}
```


```JavaScript
/*本示例使活动窗格向下滚动两页。*/
function test() {
    ActiveWindow.ActivePane.PageScroll(4, 2)
}
```
