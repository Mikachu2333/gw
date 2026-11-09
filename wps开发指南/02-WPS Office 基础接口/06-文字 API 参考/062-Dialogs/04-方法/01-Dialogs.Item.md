# Dialogs.Item

返回 WPS 中的一个对话框。



## 语法

express.**Item(Index)**

express   一个代表 **Dialogs** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | WdWordDialog | 指定对话框的常量。 |

## 返回值

Dialog

## 示例


```JavaScript
/*本示例显示“页面设置”对话框。*/
function test() {
    Application.Dialogs.Item(wdDialogFileDocumentLayout).Display()
}
```


```JavaScript
/*本示例显示内置 WPS 对话框“对话连接”的类型是否为 wdDialogConnect。*/
function test() {
    alert(Application.Dialogs.Item(wdDialogConnect).Type == wdDialogConnect)
}
```
