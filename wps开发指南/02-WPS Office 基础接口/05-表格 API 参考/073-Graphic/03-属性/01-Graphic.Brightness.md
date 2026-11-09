# Graphic.Brightness

返回或设置指定图片或 OLE 对象的亮度。该属性的值必须是 0.0（最暗）到 1.0（最亮）之间的数。 **Single** 型，可读写。



## 语法

express.**Brightness**

express   一个代表 **Graphic** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将 C:\Pictures\Sample.jpg 添加到活动工作表右页眉，并将亮度设置为0.3。*/
function test() {
    let graphic = ActiveSheet.PageSetup.RightHeaderPicture
    graphic.Filename = "C:\\Pictures\\Sample.jpg"
    ActiveSheet.PageSetup.RightHeader = "&G"
    graphic.Brightness = 0.3
}
```


```JavaScript
/*本示例显示 Sheet1 中右页脚图片的亮度。*/
function test() {
    let graphic = Worksheets.Item("Sheet1").PageSetup.RightFooterPicture
    alert(graphic.Brightness)
}
```
