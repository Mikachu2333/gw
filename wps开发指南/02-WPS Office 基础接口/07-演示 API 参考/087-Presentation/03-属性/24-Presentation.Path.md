# Presentation.Path

返回 **String** ，该值代表到指定的 **Presentation** 对象的路径，只读。



## 语法

express.**Path**

express   一个代表 **Presentation** 对象的变量。

## 类型

string

## 说明


如果使用此属性返回一个尚未保存的演示文稿的路径，则会得到一个空字符串。

路径中不包括最后的反斜线 (\\) 或指定对象的名称。使用 **Presentation** 对象的 **Name** 属性可返回不带路径的文件名，使用 **FullName** 属性则可返回带路径的文件名。



## 示例


```JavaScript
/*本示例将活动演示文稿另存到活动演示文稿所在文件夹下名为“TestFile.pptx”的文件中。*/
function test() {
    let path = ActivePresentation.Path + "\\TestFile.pptx"
    Application.ActivePresentation.SaveAs(path)
}
```


```JavaScript
/*本示例显示第一篇演示文稿的路径。*/
function test() {
    alert(Presentations.Item(1).Path)
}
```
