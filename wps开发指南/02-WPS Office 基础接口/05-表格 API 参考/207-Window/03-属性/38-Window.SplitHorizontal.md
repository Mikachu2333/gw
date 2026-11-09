# Window.SplitHorizontal

以磅（磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）为单位返回或设置窗口水平拆分线的位置。 **Double** 类型，可读写。



## 语法

express.**SplitHorizontal**

express   一个代表 **Window** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例设置活动窗口的水平拆分线位置为216磅（3 英寸）。*/
function test() {
    Application.Workbooks.Item("BOOK1.XLS").Worksheets.Item("Sheet1").Activate()
    ActiveWindow.SplitHorizontal = 216
}
```


```JavaScript
/*本示例显示第一个窗口现在的水平拆分线位置，再将该窗口的水平拆分线位置设置为648磅（9英寸）。*/
function test() {
    alert(`水平拆分线位置为${Windows.Item(1).SplitHorizontal}磅，弹框关闭后则设置为648磅`)
    Windows.Item(1).SplitHorizontal = 648
}
```
