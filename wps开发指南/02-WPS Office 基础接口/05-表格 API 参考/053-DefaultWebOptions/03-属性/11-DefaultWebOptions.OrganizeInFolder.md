# DefaultWebOptions.OrganizeInFolder

如果为 **True** ，则在将指定的文档保存为网页时，所有的支持文件（如背景纹理和图形）将组织在一个单独的文件夹中；如果为 **False** ，则支持文件和网页将保存在同一文件夹中。默认值是 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**OrganizeInFolder**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

boolean

## 说明


在保存网页的文件夹中创建新文件夹，并依据文档命名。如果使用长文件名，则在文件夹名称后加后缀。 **FolderSuffix** 属性返回已选择或已安装的语言支持的文件夹后缀，或返回默认的文件夹后缀。

如果在上次保存某个文档时， **OrganizeInFolder** 属性的值与现在不同，那么现在保存该文档时，ET 会相应地将支持文件自动移进或移出该文件夹。

如果并未使用长文件名（即，如果 **UseLongFileNames** 属性设置为 **False** ），则 ET 会自动将任何支持文件保存到其他文件夹中。这些文件不能保存到与网页相同的文件夹中。



## 示例


```JavaScript
/*此示例指定（Web全局选项）在将文档保存为网页时，所有的支持文件和网页保存在同一文件夹中。*/
function test() {
    Application.DefaultWebOptions.OrganizeInFolder = false
}
```


```JavaScript
/*此示例指定（Web全局选项）在将文档保存为网页时，显示所有的支持文件是否组织在一个单独的文件夹中。*/
function test() {
    alert(Application.DefaultWebOptions.OrganizeInFolder)
}
```
