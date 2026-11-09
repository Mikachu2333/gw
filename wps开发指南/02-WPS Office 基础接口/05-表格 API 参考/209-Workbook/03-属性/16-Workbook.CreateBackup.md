# Workbook.CreateBackup

如果保存文件时创建备份文件，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**CreateBackup**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例检查在保存当前工作簿时是否创建备份文件。如果创建，则显示一条消息。*/
function test() {
    if (ActiveWorkbook.CreateBackup) {
        MsgBox("Remember, there is a backup copy of this workbook")
    }
}
```


```JavaScript
/*本示例演示CreateBackup属性的数据类型。*/
function test() {
    alert(typeof ActiveWorkbook.CreateBackup)
}
```
