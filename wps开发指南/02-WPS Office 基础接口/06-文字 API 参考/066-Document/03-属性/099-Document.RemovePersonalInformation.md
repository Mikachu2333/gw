# Document.RemovePersonalInformation

如果 WPS 在保存文档时从批注、修订和“属性”对话框中删除所有用户信息，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**RemovePersonalInformation**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置活动文档在用户下一次保存文档时删除所有的个人信息。*/
function test() {
    ActiveDocument.RemovePersonalInformation = true
}
```


```JavaScript
/*本示例显示 WPS 在保存第一个文档时是否从批注、修订和“属性”对话框中删除所有用户信息。*/
function test() {
    alert(Documents.Item(1).RemovePersonalInformation)
}
```
