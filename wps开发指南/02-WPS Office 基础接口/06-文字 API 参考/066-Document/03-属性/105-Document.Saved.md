# Document.Saved

如果指定的文档或模板从上次保存后一直没有更改，则该属性值为 **True** 。如果关闭文档时，WPS 提示保存对文档所做的更改，则该属性值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**Saved**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在活动文档含有以前未保存的更改的情况下保存该文档。*/
function test() {
    if (!ActiveDocument.Saved) {
        ActiveDocument.Save()
    }
}
```


```JavaScript
/*本示例显示关闭第一个文档时，WPS 是否提示保存对文档所做的更改。*/
function test() {
    alert(!Documents.Item(1).Saved)
}
```
