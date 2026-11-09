# WebOptions.UseDefaultFolderSuffix

根据所选或安装的语言支持，将含指定文档的文件夹后缀设置为默认后缀。



## 语法

express.**UseDefaultFolderSuffix()**

express   一个代表 **WebOptions** 对象的变量。

## 返回值

void

## 说明


将文档保存为网页时，ET 会使用文件夹后缀，同时还会使用长文件名，并选择是否将支持文件保存在单独的文件夹中（即，是否将 **UseLongFileNames** 和 **OrganizeInFolder** 属性设置为 **True** ）。

此后缀位于文档名后面的文件夹名中。例如，如果文档名为“Book1”，语言为“英语”，则文件夹名为“Book1\_files”。可用的文件夹后缀列在 **FolderSuffix** 属性主题中。



## 示例


```JavaScript
/*本示例将第一个工作簿的文件夹后缀设置为默认后缀。*/
function test() {
    Application.Workbooks.Item(1).WebOptions.UseDefaultFolderSuffix()
}
```


```JavaScript
/*本示例将活动工作簿的文件夹后缀设置为默认后缀，并显示活动工作簿所使用的文件夹后缀。*/
function test() {
    ActiveWorkbook.WebOptions.UseDefaultFolderSuffix()
    alert(ActiveWorkbook.WebOptions.FolderSuffix)
}
```
