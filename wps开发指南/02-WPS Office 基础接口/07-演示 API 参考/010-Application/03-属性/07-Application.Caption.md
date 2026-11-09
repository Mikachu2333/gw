# Application.Caption

返回在应用程序窗口的标题栏中显示的文本。可读/写。



## 语法

express.**Caption**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示应用程序窗口的标题。*/
function test() {
    alert(Application.Caption)
}
```


```JavaScript
/*本示例将应用程序窗口标题更改为“CaptionTest”，并将演示文稿另存在指定目录。*/
function test() {
    Application.Caption = "CaptionTest"
    Application.ActivePresentation.SaveAs("D:\\Caption.pptx")
}
```
