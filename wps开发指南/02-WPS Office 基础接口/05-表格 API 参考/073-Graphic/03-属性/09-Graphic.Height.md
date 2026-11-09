# Graphic.Height

返回或设置一个 **Single** 值，它代表对象的高度（以磅为单位）。



## 语法

express.**Height**

express   一个代表 **Graphic** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将 C:\ 驱动器中Pictures文件夹中名为“Sample.jpg”的图片添加到活动工作表左页眉部分，并将高度设置为260磅。*/
function test() {
    let graphic = ActiveSheet.PageSetup.LeftHeaderPicture
    graphic.Filename = "C:\\Pictures\\Sample.jpg"
    graphic.Height = 260
    ActiveSheet.PageSetup.LeftHeader = "&G"
}
```


```JavaScript
/*本示例显示 Sheet1 中右页脚图片的高度。*/
function test() {
    let graphic = Worksheets.Item("Sheet1").PageSetup.RightFooterPicture
    alert(graphic.Height)
}
```
