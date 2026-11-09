# Application.Path

返回 **String** ，该值代表到指定的 **Application** 对象的路径，只读。



## 语法

express.**Path**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 说明


路径不包括最终反斜杠或指定对象的名称。使用 **Presentation** 对象的 **Name** 属性返回的文件名不包含路径，并使用 **FullName** 属性返回的文件名和路径组合在一起。



## 示例


```JavaScript
/*本示例显示WPP程序的路径。*/
function test() {
    alert(Application.Path)
}
```


```JavaScript
/*本示例将加载的演示文稿另存到应用程序文件夹下名为“TestFile.pptx”的文件中。*/
function test() {
    let path = Application.Path + "\\TestFile.pptx"
    Application.ActivePresentation.SaveAs(path)
}
```
