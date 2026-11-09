# Application.UsableHeight

返回在应用程序窗口区域中一个窗口能占有的最大高度（以磅 （磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）为单位）。 **Double** 型，只读。



## 语法

express.**UsableHeight**

express   一个代表 **Application** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例将活动窗口扩展为可用的最大值（假定指定窗口尚未最大化）。*/
function test() {
    ActiveWindow.WindowState = xlNormal
    ActiveWindow.Top = 1
    ActiveWindow.Left = 1
    ActiveWindow.Height = Application.UsableHeight
    ActiveWindow.Width = Application.UsableWidth
}
```


```JavaScript
/*本示例显示在应用程序窗口区域中一个窗口能占有的最大高度。*/
function test() {
    alert(`最大高度为：${Application.UsableHeight} 磅`)
}
```
