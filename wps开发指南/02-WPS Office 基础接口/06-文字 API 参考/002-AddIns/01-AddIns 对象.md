# AddIns 对象

 **AddIn** 对象的集合，表示 WPS 可用的所有加载项，无论它们当前是否加载。 **AddIns** 集合包括显示在 **“模板和加载项”** 对话框中的全局模板或 WPS 加载项库 （WLL）。

## 说明


使用 **AddIns** 属性返回 **AddIns** 集合。


## 示例


```JavaScript
/*本示例显示每个可用的加载项的名称和安装的状态。*/
function test() {
    for (let i = 1; i <= Application.AddIns.Count; i++) {
        let addIn = Application.AddIns.Item(i)
        if (addIn.Installed) {
            alert(addIn.Name + " is installed")
        } else {
            alert(addIn.Name + " is available but not installed")
        }
    }
}
```
使用 **Add** 方法将加载项添加到可用加载项列表中，并使用 **Install** 参数（可选）安装它。



```JavaScript
/*本示例安装名为 example.dot 的模板并将其添加至“模板和加载项”对话框中的加载项列表中。*/
function test() {
    Application.AddIns.Add("D:\\示例2\\example.dot", true)
}
```
要安装可用加载项列表中显示的加载项，请使用 **Installed** 属性。



```JavaScript
/*此示例安装名为“example.dot”的全局模板。*/
function test() {
    Application.AddIns.Item("example.dot").Installed = true
}
```
可以使用 **AddIns** ( *index*) 返回单个 **AddIn** 对象（其中 *index* 是加载项的名称或索引编号）。名称的拼写必须和 **“模板和加载项”** 对话框中显示的完全一样（但大小写可以不一样）。要安装可用加载项列表中显示的加载项，请使用 **Installed** 属性。



```JavaScript
/*此示例卸载第一个加载项。*/
function test() {
    Application.AddIns.Item(1).Installed = false
}
```
如果加载项不位于用户模板、工作组模板或启动文件夹，则在通过名称索引时必需指定完整路径和文件名。

使用 **Compiled** 属性判断一个 **AddIn** 对象是模板还是 WLL。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIns/member/Add) | 返回一个 **AddIn** 对象，该对象表示一个添加到可用加载项列表中的加载项。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIns/member/Item) | 返回集合中的单个对象。 |
| [Unload](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIns/member/Unload) | 卸载所有已加载的加载项，并根据 *RemoveFromList* 参数值删除 **AddIns** 集合中相应的加载项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIns/member/Application) | 返回一个 **Application** 对象，该对象代表 WPS 应用程序。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIns/member/Count) | 返回 **AddIns** 集合中 **AddIn** 对象的数目。 **Long** 类型，只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIns/member/Creator) | 返回一个 32 位整数，该整数指出用于创建指定对象的应用程序。 **Long** 类型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIns/member/Parent) | 返回一个 **Object** 类型的值，该值代表 **Addins** 集合中的父对象。通常为 **Application** 对象。 |