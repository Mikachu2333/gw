# WebOptions.LocationOfComponents

返回或设置中央 URL（对于 Intranet 或 Web）或路径（对于本地或网络而言），授权用户可以在查看保存的文档时，从这些位置下载“WPS Office Web 组件”。默认值是 WPS Office 的本地或网络安装路径。 **String** 型，可读写。



## 语法

express.**LocationOfComponents**

express   一个代表 **WebOptions** 对象的变量。

## 类型

string

## 说明


如果 **DownloadComponents** 属性设置为 **True** ，Office Web 组件尚未安装，路径是有效路径且指向包含必要组件的位置，同时用户还具有有效的 WPS Office 许可，则会从指定网页自动下载这些组件。



## 示例


```JavaScript
/*此示例设置路径，用户可以从该位置下载“WPS Office Web 组件”。*/
function test() {
    Workbooks.Item(1).WebOptions.DownloadComponents = true
    Workbooks.Item(1).WebOptions.LocationOfComponents = Application.Path + Application.PathSeparator + "foo"
}
```


```JavaScript
/*本示例显示活动工作簿“WPS Office Web 组件”的安装路径。*/
function test() {
    alert(ActiveWorkbook.WebOptions.LocationOfComponents)
}
```
