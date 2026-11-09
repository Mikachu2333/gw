# Template.Path

返回指定文档模板的路径。只读 **String** 类型。



## 语法

express.**Path**

express   一个代表 **Template** 对象的变量。

## 类型

string

## 说明


该路径不包括尾部字符，例如，“C:\\KSOffice”或“http\://MyServer”。使用 **PathSeparator** 属性可添加分隔文件夹与驱动器号的字符。使用 **Name** 属性可返回不带路径的文件名，而使用 **FullName** 属性可同时返回文件名和路径。



## 示例


```JavaScript
/*本示例显示第一个模板的路径。*/
function test() {
    alert(Application.Templates.Item(1).Path)
}
```


```JavaScript
/*本示例将所选内容替换为附加到活动文档的模板的路径。*/
function test() {
    Selection.Range.Text = ActiveDocument.AttachedTemplate.Path
}
```
