# Document.ReadOnly

如果对文档所作修改不能保存到原始文档中，则该属性为 **True** 。只读 **Boolean** 类型。



## 语法

express.**ReadOnly**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在活动文档不是只读文档时保存该文档。*/
function test() {
    if (!ActiveDocument.ReadOnly) {
        ActiveDocument.Save()
    }
}
```


```JavaScript
/*本示例显示第一个文档是否为只读文档。*/
function test() {
    alert(Documents.Item(1).ReadOnly)
}
```
