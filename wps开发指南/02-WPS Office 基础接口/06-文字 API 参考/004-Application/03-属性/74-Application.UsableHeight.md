# Application.UsableHeight

返回 WPS 文档窗口高度可设置的最大值（以磅为单位）。 **Long** 类型，只读。



## 语法

express.**UsableHeight**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将活动文档窗口的尺寸设置为屏幕最大区域的四分之一。*/
function test() {
    let window = Application.ActiveDocument.ActiveWindow
    window.WindowState = wdWindowStateNormal
    window.Top = 5
    window.Left = 5
    window.Height = Application.UsableHeight * 0.5
    window.Width = Application.UsableWidth * 0.5
}
```


```JavaScript
/*本示例显示文档窗口的最大高度和最大宽度。*/
function test() {
    alert(`The maximum height of the document window = ${Application.UsableHeight}\nThe maximum width of the document window = ${Application.UsableWidth}`)
}
```
