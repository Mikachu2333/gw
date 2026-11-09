# WebOptions.OrganizeInFolder

如果在将指定文档另存为网页时，所有的支持文件（如背景纹理和图形）组织在一个单独的文件夹中，则该属性值为 **True** ；如果支持文件和网页保存在同一文件夹中，则该属性值为 **False** 。默认值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**OrganizeInFolder**

express   一个代表 **WebOptions** 对象的变量。

## 类型

boolean

## 说明


新文件夹在保存网页的文件夹中创建，与文档同名。如果文档使用长文件名，则为文件夹名称添加一个后缀。 **[FolderSuffix](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/FolderSuffix)** 属性将返回您所选择或安装的语言支持的文件夹后缀或默认文件夹后缀。

在保存一个文档时，如果设置的 **OrganizeInFolder** 属性值与以前保存此文档时相应的属性值不同，WPS 将根据情况自动将支持文件移入或移出文件夹。

如果没有使用长文件名（即 **[UseLongFileNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/UseLongFileNames)** 属性设置为 **False** ），WPS 会自动将所有支持文件保存在一个单独的文件夹中。这些文件不能与网页保存在同一文件夹中。



## 示例


```JavaScript
/*此示例设置当活动文档另存为网页时，所有支持文件都保存在同一文件夹中。*/
function test() {
    ActiveDocument.WebOptions.OrganizeInFolder = false
}
```


```JavaScript
/*此示例显示当第一个文档另存为网页时所有支持文件是否保存在单独的文件夹中。*/
function test() {
    alert(Documents.Item(1).WebOptions.OrganizeInFolder)
}
```
