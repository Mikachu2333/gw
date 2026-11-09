# Application.Path

返回指定对象的磁盘或 Web 路径。只读 **String** 类型。



## 语法

express.**Path**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 说明


此路径不包括尾部字符，例如，“C:\\WPSOffice”或“http\://MyServer”使用 **PathSeparator** 属性可添加分隔文件夹与驱动器号的字符。使用 **Document** 对象的 **Name** 属性可返回不带路径的文件名，而用 **FullName** 属性可同时返回文件名和路径。

可以用 **PathSeparator** 属性建立网站地址，即使此地址中会包含正斜线 (/)，而 **PathSeparator** 属性默认使用反斜线 (\\)。



## 示例


```JavaScript
/*本示例显示wps的路径。*/
function test() {
    alert(Application.Path)
}
```


```JavaScript
/*本示例将wps的路径插入到文档中。*/
function test() {
    Selection.TypeText(Application.Path)
}
```
