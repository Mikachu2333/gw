# Application.ListCommands

创建一个新文档，然后插入一个包含 WPS 命令及其相关快捷键和菜单分配的表格。



## 语法

express.**ListCommands(ListAllCommands)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ListAllCommands | 必选 | boolean | 如果该参数值为 **True** ，则包括所有的 WPS 命令及其设定（不论是自定义的还是内置的）。如果该参数值为 **False** ，则只包括内置的命令。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将新建文档，该文档将列出所有的 WPS 命令及其快捷键和菜单设定，然后打印并关闭新文档，不保存所进行的修改。*/
function test() {
    Application.ListCommands(true)
    Application.ActiveDocument.PrintOut()
    Application.ActiveDocument.Close(wdDoNotSaveChanges)
}
```


```JavaScript
/*本示例将新建文档，该文档将列出 WPS 所有的内置命令。*/
function test() {
    Application.ListCommands(false)
}
```
