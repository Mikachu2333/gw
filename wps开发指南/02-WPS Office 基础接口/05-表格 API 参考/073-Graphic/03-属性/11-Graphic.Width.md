# Graphic.Width

返回或设置一个 **Single** 值，它代表对象的宽度（以磅为单位）。



## 语法

express.**Width**

express   一个代表 **Graphic** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将 C:\ 驱动器中Pictures文件夹中名为“Sample.jpg”的图片添加到活动工作表页眉的中间部分，并将宽度设置为200磅。*/
function test() {
    let graphic = ActiveSheet.PageSetup.CenterHeaderPicture
    graphic.Filename = "C:\\Pictures\\Sample.jpg"
    graphic.Width = 200
    ActiveSheet.PageSetup.CenterHeader = "&G"
}
```


```JavaScript
/*本示例显示 Sheet1 中右页脚图片的宽度。*/
function test() {
    let graphic = Worksheets.Item("Sheet1").PageSetup.RightFooterPicture
    alert(graphic.Width)
}
```
