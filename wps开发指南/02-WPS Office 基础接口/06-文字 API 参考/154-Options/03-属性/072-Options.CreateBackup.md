# Options.CreateBackup

如果 WPS 在每次保存文档时都建立一个备份，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CreateBackup**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


 **CreateBackup** 和 **AllowFastSave** 属性不能同时设置为 **True** 。



## 示例


```JavaScript
/*本示例设置 WPS 自动创建一个备份，然后开始保存活动文档。*/
function test() {
    Options.CreateBackup = true
    ActiveDocument.Save()
}
```


```JavaScript
/*本示例显示 WPS 是否在每次保存文档时都建立一个备份。*/
function test() {
    alert(Options.CreateBackup)
}
```
