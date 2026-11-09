# AddIn.Installed

如果为 **True** ，则指定的加载项已安装（即加载）。可在 **“工具”** 菜单的 **“模板和加载项”** 对话框中选择需要加载的加载项。可读/写 **Boolean** 类型。



## 语法

express.**Installed**

express   一个代表 **AddIn** 对象的变量。

## 类型

boolean

## 说明


已卸载的加载项包含在 **AddIns** 集合中。若要从 **AddIns** 集合中删除模板或 WLL，可对 **AddIn** 对象应用 **Delete** 方法（加载项名称从 **“模板和加载项”** 对话框中删除）。若要卸载所有的模板和 WLL，可对 **AddIns** 集合应用 **Unload** 方法。



## 示例


```JavaScript
/*此示例卸载名为“example.dot”的全局模板。*/
function test() {
    Application.AddIns.Item("example.dot").Installed = false
}
```


```JavaScript
/*此示例加载 FindAll.wll。*/
function test() {
    Application.AddIns.Item("D:\\Templates\\FindAll.wll").Installed = true
}
```


```JavaScript
/*此示例加载 example.dot 模板。*/
function test() {
    Application.AddIns.Item("D:\\示例2\\example.dot").Installed = true
}
```


```JavaScript
/*本示例判断如果 example.dot 作为全局模板加载，则显示一条消息。*/
function test() {
    if (Application.AddIns.Item("example.dot").Installed) {
        alert("example.dot is loaded")
    }
}
```
