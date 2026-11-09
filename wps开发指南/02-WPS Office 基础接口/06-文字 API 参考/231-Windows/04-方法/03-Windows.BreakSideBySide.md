# Windows.BreakSideBySide

如果两个窗口以并排方式排列，则终止该模式。返回一个代表该方法是否成功的 **Boolean** 类型的值。



## 语法

express.**BreakSideBySide()**

express   一个代表 **Windows** 对象的变量。

## 返回值

Boolean

## 示例


```JavaScript
/*本示例结束窗口并排模式。*/
function test() {
    ActiveDocument.Windows.BreakSideBySide()
}
```


```JavaScript
/*本示例判断是否结束窗口并排模式，并通知用户。*/
function test() {
    if (ActiveDocument.Windows.BreakSideBySide()) {
        alert("成功结束并排模式")
    } else {
        alert("未成功结束并排模式")
    }
}
```
