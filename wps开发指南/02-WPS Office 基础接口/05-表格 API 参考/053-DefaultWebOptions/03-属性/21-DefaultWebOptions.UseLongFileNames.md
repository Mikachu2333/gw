# DefaultWebOptions.UseLongFileNames

如果该属性值为 **True** ，则将文档保存为网页时使用长文件名。如果该属性值为 **False** ，则不使用长文件名，而使用 DOS 文件名格式（8.3）。默认值是 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**UseLongFileNames**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

boolean

## 说明


如果不使用长文件名且文档还具有支持文件，ET 会自动将那些文件组织到单独的文件夹中。另外，使用 **OrganizeInFolder** 属性可确定支持文件是否组织在单独的文件夹中。



## 示例


```JavaScript
/*此示例禁止将长文件名用作应用程序的全局默认设置。*/
function test() {
    Application.DefaultWebOptions.UseLongFileNames = false
}
```


```JavaScript
/*此示例显示是否将长文件名用作应用程序的全局默认设置。*/
function test() {
    alert(Application.DefaultWebOptions.UseLongFileNames)
}
```
