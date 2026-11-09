# Font.Size

返回或设置字符大小（以磅为单位）。可读写。



## 语法

express.**Size**

express   一个代表 **Font** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将第一张幻灯片第一个形状的附加文本的大小设为 24 磅。*/
function test() {
    Application.ActivePresentation.Slides(1).Shapes(1).TextFrame.TextRange.Font.Size = 24
}
```


```JavaScript
/*以下示例在选择的文本前添加文本并将字号全部设置为 20 磅。*/
function test() {
    let textRange = ActiveWindow.Selection.TextRange
    textRange.InsertBefore("This is a demonstration of font size.")
    textRange.Font.Size = 20
}
```
