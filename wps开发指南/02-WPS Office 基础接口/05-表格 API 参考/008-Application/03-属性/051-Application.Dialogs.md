# Application.Dialogs

返回一个 **[Dialogs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialogs/obj)** 集合，该集合代表所有内置对话框。只读。



## 语法

express.**Dialogs**

express   一个代表 **Application** 对象的变量。

## 类型

Dialogs

## 示例


```JavaScript
/*本示例显示Dialogs集合中对象的数量*/
function test() {
    alert(Application.Dialogs.Count)
}
```


```JavaScript
/*本示例显示“文件”菜单的“打开”对话框。*/
function test() {
    Application.Dialogs.Item(xlDialogOpen).Show()
}
```
