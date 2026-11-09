# Windows.BreakSideBySide

使用此方法可结束两个窗口的并排模式。返回一个表明此方法是否成功的 **Boolean** 值。



## 语法

express.**BreakSideBySide()**

express   一个代表 **Windows** 对象的变量。

## 返回值

Boolean

## 示例


```JavaScript
/*此示例结束正在进行比较的两个窗口的并排模式。*/
function test() {
    Application.Windows.BreakSideBySide()
}
```


```JavaScript
/*此示例结束当前活动工作簿正在进行的并排模式，并判断执行成功通知用户。*/
function test() {
    if (ActiveWorkbook.Windows.BreakSideBySide()) {
        alert("已结束当前活动工作簿正在进行并排比较的两个工作表窗口的并排模式")
    }
}
```
