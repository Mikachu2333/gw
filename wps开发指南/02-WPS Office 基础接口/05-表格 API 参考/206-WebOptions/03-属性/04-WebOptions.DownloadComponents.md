# WebOptions.DownloadComponents

如果必要的“WPS Office Web 组件”在您用 Web 浏览器查看已保存的文档时已经下载，但只有在尚未安装这些组件时，该值为 **True** 。如果没有下载这些组件，则为 **False** 。默认值是 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**DownloadComponents**

express   一个代表 **WebOptions** 对象的变量。

## 类型

boolean

## 说明


可将 **LocationOfComponents** 属性设置为主 URL（在 Intranet 或网站上）或路径（本地或网络），授权用户在查看已保存的文档时，可从该路径所指向的位置下载组件。该路径必须是有效路径，且指向的位置必须包含必要的组件，同时用户还必须拥有有效的 WPS Office 许可。

Office Web 组件可增强保存为网页的文档的交互性。如果在没有安装这些组件的计算机上使用 Web 浏览器查看网页，则该页上的交互部分将表现为静态的（不能交互）。



## 示例


```JavaScript
/*如果还没有安装“Office Web 组件”，此示例允许“Office Web 组件”与指定的网页一起下载。*/
function test() {
    Workbooks.Item(1).WebOptions.DownloadComponents = true
    Workbooks.Item(1).WebOptions.LocationOfComponents = Application.Path + Application.PathSeparator + "foo"
}
```


```JavaScript
/*本示例在 Web 浏览器查看已保存的文档时，显示必要的“WPS Office Web 组件”是否下载。*/
function test() {
    alert(ActiveWorkbook.WebOptions.DownloadComponents)
}
```
