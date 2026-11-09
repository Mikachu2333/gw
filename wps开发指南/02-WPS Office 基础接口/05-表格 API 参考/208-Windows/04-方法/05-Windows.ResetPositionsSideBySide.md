# Windows.ResetPositionsSideBySide

重置正在进行并排比较的两个工作表窗口的位置。



## 语法

express.**ResetPositionsSideBySide()**

express   一个代表 **Windows** 对象的变量。

## 返回值

void

## 说明


使用 **ResetPositionsSideBySide** 方法可重置正在进行并排比较的两个工作表的位置。例如，如果用户将正在进行比较的两个工作表窗口中的其中一个窗框最小化或最大化，就可以使用 **ResetPositionsSideBySide** 方法重置显示，以便这两个窗口再次并排显示。



## 示例


```JavaScript
/*此示例重置正在进行并排比较的两个工作表窗口的位置。*/
function test() {
    Application.Windows.ResetPositionsSideBySide()
}
```


```JavaScript
/*此示例重置当前活动工作簿正在进行并排比较的两个工作表窗口的位置。*/
function test() {
    ActiveWorkbook.Windows.ResetPositionsSideBySide()
}
```
