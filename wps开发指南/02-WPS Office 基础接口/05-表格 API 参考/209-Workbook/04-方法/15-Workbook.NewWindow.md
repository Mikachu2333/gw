# Workbook.NewWindow

新建一个窗口或者创建指定窗口的副本。

返回值类型为Window。



## 语法

express.**NewWindow()**

express   一个代表 **Workbook** 对象的变量。

## 返回值

Window

## 示例


```JavaScript
/*此示例为当前活动工作簿新建一个窗口。*/
function test() {
    Application.ActiveWorkbook.NewWindow()
}
```


```JavaScript
/*此示例演示创建指定工作簿的窗口副本并显示新建窗口的Caption*/
function test() {
    let win = Application.Workbooks.Item(1).NewWindow()
    alert("新建窗口名称为：" + win.Caption)
}
```
