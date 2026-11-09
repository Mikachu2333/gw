# Window.Selection

返回一个 **Selection** 对象，该对象代表一个选定范围或插入点。只读。



## 语法

express.**Selection**

express   一个代表 **Window** 对象的变量。

## 类型

Selection

## 示例


```JavaScript
/*本示例将第一个窗口的所选内容复制到下一个窗口。*/
function test() {
    if (Windows.Count >= 2) {
        Windows.Item(1).Selection.Copy()
        Windows.Item(1).Next.Activate()
        Selection.Paste()
    }
}
```


```JavaScript
/*本示例改变活动窗口的所选内容的颜色。*/
function test() {
    ActiveDocument.ActiveWindow.Selection.Font.Color = RGB(0, 200, 0)
}
```
