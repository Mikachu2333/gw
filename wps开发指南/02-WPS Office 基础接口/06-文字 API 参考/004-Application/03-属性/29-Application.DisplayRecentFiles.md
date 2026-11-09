# Application.DisplayRecentFiles

如果在 **“文件”** 菜单中显示最近使用的文件名，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayRecentFiles**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使 WPS 在“文件”菜单上显示至多 6 个文件名。*/
function test() {
    Application.DisplayRecentFiles = true
    Application.RecentFiles.Maximum = 6
}
```


```JavaScript
/*本示例用于从“文件”菜单中删除最近使用的文件列表。*/
function test() {
    Application.DisplayRecentFiles = false
}
```
