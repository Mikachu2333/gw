# Workbook.Activate

激活与工作簿相关的第一个窗口。



## 语法

express.**Activate()**

express   一个代表 **Workbook** 对象的变量。

## 返回值

void

## 说明


这样不会运行可能附加在工作簿上的 Auto\_Activate 或 Auto\_Deactivate 宏（使用 **RunAutoMacros** 方法可运行这些宏）。



## 示例


```JavaScript
/*本示例激活工作簿 工作簿1。如果工作簿 工作簿1 有若干窗口，本示例激活第一个，即工作簿1:1。*/
function test() {
    Application.Workbooks.Item("工作簿1").Activate()
}
```


```JavaScript
/*本示例演示添加一个工作簿并重新激活之前的活动工作簿。*/
function test() {
    let wb = Application.ActiveWorkbook
    Application.Workbooks.Add()
    newbook.Activate()
}
```
