# WebOptions.UseLongFileNames

如果将文档另存为网页时使用长文件名，则该属性值为 **True** 。如果不使用长文件名，而使用 DOS 文件名格式 (8.3)，则该属性值为 **False** 。默认值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**UseLongFileNames**

express   一个代表 **WebOptions** 对象的变量。

## 类型

boolean

## 说明


如果不使用长文件名，且文档有支持文件，则 WPS 自动将这些文件组织在一个单独的文件夹中。另外，使用 **[OrganizeInFolder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/OrganizeInFolder)** 属性可确定支持文件是否组织在一个单独的文件夹中。



## 示例


```JavaScript
/*本示例设置活动文档另存为网页时禁止使用长文件名。*/
function test() {
    ActiveDocument.WebOptions.UseLongFileNames = false
}
```


```JavaScript
/*本示例判断如果第一个文档另存为网页时使用长文件名，则通知用户。*/
function test() {
    if (Documents.Item(1).WebOptions.UseLongFileNames) {
        alert("文档另存为网页时使用长文件名")
    }
}
```
