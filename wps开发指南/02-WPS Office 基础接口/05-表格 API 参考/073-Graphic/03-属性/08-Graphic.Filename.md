# Graphic.Filename

返回或设置保存指定源对象位置的 URL（Intranet 或网站上）或路径（本地或网络）。 **String** 型，可读写。



## 语法

express.**Filename**

express   一个代表 **Graphic** 对象的变量。

## 类型

string

## 说明


如果指定路径中的文件夹不存在，则 **FileName** 属性将产生一个错误。



## 示例


```JavaScript
/*本示例将 C:\Pictures\Sample.jpg 添加到活动工作表右页眉。*/
function test() {
    let graphic = ActiveSheet.PageSetup.RightHeaderPicture
    graphic.Filename = "C:\\Pictures\\Sample.jpg"
    ActiveSheet.PageSetup.RightHeader = "&G"
}
```


```JavaScript
/*本示例显示 Sheet1 中右页脚图片的文件名。*/
function test() {
    let graphic = Worksheets.Item("Sheet1").PageSetup.RightFooterPicture
    alert(graphic.Filename)
}
```
