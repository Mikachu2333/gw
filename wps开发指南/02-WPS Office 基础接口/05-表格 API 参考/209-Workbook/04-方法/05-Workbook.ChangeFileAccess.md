# Workbook.ChangeFileAccess

更改工作簿的访问权限。本方法需要从磁盘加载工作簿的更新版本。



## 语法

express.**ChangeFileAccess(Mode, WritePassword, Notify)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Mode | 必选 | XlFileAccess | 指定新的访问模式。 |
| WritePassword | 可选 | any | 如果文件设置了写保护并且 _Mode_ 为 **xlReadWrite** ，则指定写保护密码。如果文件没有密码或 _Mode_ 为 **xlReadOnly** ，则忽略此参数。 |
| Notify | 可选 | any | 如果该值为 **True** （或省略该参数），则当无法立即访问文件时通知用户。 |

## 返回值

void

## 说明


如果以只读模式打开文件，则不可独占访问此文件。如果将此文件从只读更改为可读写，ET 必须载入该文件的新副本以确认在以只读模式打开该文件后没有进行过更改。



## 示例


```JavaScript
/*本示例将活动工作簿设为只读。*/
function test() {
    ActiveWorkbook.ChangeFileAccess(xlReadOnly)
}
```


```JavaScript
/*本示例将第一张工作簿设置为可读写。*/
function test() {
    Workbooks.Item(1).ChangeFileAccess(xlReadWrite, "Y6dh!et51", true)
}
```
