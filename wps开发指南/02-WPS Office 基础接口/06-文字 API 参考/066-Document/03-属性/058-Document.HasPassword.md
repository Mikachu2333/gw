# Document.HasPassword

如果需要密码才能打开指定文档，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**HasPassword**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例首先将“Y6dh!et5”设置为活动文档的密码，然后显示确认信息。*/
function test() {
    ActiveDocument.Password = "Y6dh!et5"
    if (ActiveDocument.HasPassword) {
        alert("The password is set.")
    }
}
```


```JavaScript
/*本示例显示是否需要密码才能打开第一个文档。*/
function test() {
    if (Documents.Item(1).HasPassword) {
        alert("打开第一个文档需要密码")
    } else {
        alert("打开第一个文档不需要密码")
    }
}
```
