# Options.IgnoreInternetAndFileAddresses

如果为 **True** ，则进行拼写检查时忽略文件扩展名、MS-DOS 路径、电子邮件地址、服务器名称、共享名（也称为 UNC 路径）和 Internet 地址（也称为 URL）。 **Boolean** 类型，可读写。



## 语法

express.**IgnoreInternetAndFileAddresses**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 忽略文件名和 Internet 地址，然后对活动文档进行拼写检查。*/
function test() {
    Options.IgnoreInternetAndFileAddresses = true
    ActiveDocument.CheckSpelling()
}
```


```JavaScript
/*本示例显示“选项”对话框中“拼写检查”选项卡上“忽略 Internet 或网络路径”选项的当前状态。*/
function test() {
    alert(Options.IgnoreInternetAndFileAddresses)
}
```
