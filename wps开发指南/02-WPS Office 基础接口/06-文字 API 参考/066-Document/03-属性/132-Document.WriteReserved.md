# Document.WriteReserved

如果指定文档设有写权限密码，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**WriteReserved**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果活动文档设有写权限密码，则显示一条消息。*/
function test() {
    if (ActiveDocument.WriteReserved) {
        alert("Changes cannot be made to this document.")
    }
}
```


```JavaScript
/*本示例判断如果第一个文档没有设置密码以防修改文档，则通知用户设置该文档的写权限密码。*/
function test() {
    if (!Documents.Item(1).WriteReserved) {
        let password = InputBox("请输入密码用来保存对第一个文档所做的修改：")
        if (password) {
            Documents.Item(1).WritePassword = password
        }
    }
}
```
