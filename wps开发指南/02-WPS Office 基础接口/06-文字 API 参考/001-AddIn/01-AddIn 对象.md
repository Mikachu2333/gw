# AddIn 对象

代表已经安装或尚未安装的单个加载项。 **AddIn** 对象是 **AddIns** 集合的成员。 **AddIns** 集合包含可供 WPS 使用的所有加载项，不论它们当前是否加载。 **AddIns** 集合中包括在 **“工具”** 菜单的 **“模板和加载项”** 对话框中显示的共用模板或 WPS 加载项库 (WLL)。

## 说明


可以使用 **AddIns** ( *index*) 返回单个 **AddIn** 对象（其中 *index* 是加载项的名称或索引编号）。名称的拼写必须和 **“模板和加载项”** 对话框中显示的完全一样（但大小写可以不一样）。


## 示例


```JavaScript
/*此示例安装名为“example.dot”的模板。*/
function test() {
    Application.AddIns.Item("example.dot").Installed = true
}
```
索引编号代表加载项在 **“模板和加载项”** 对话框中的加载项列表上的位置。



```JavaScript
/*本示例显示第一个加载项的路径。*/
function test() {
    if (Application.AddIns.Count >= 1) {
        alert(Application.AddIns.Item(1).Path)
    }
}
```


```JavaScript
/*本示例在活动文档开始处创建一个加载项列表。该列表包含了每一个有效加载项的名称、路径和加载状态。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    range.InsertAfter("Name\tPath\tInstalled")
    range.InsertParagraphAfter()
    for (let i = 1; i <= Application.AddIns.Count; i++) {
        let addIn = Application.AddIns.Item(i)
        range.InsertAfter(`${addIn.Name}\t${addIn.Path}\t${addIn.Installed}`)
        range.InsertParagraphAfter()
    }
    range.ConvertToTable()
}
```
使用 **Add** 方法将一个加载项添加到可用加载项列表上并且使用 *Install* 参数安装它（可选）。



```JavaScript
/*本示例添加一个加载项，并显示该加载项的索引。*/
function test() {
    let addIn = Application.AddIns.Add("D:\\示例2\\example.dot", true)
    alert(addIn.Index)
}
```
要安装可用加载项列表中显示的加载项，请使用 **Installed** 属性。



```JavaScript
/*此示例卸载名为“example.dot”的全局模板。*/
function test() {
    Application.AddIns.Item("example.dot").Installed = false
}
```
使用 **Compiled** 属性判断一个 **AddIn** 对象是模板还是 WLL。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIn/member/Delete) | 删除指定的加载项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIn/member/Application) | 返回一个 **Application** 对象，该对象代表 WPS 应用程序。 |
| [Autoload](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIn/member/Autoload) | 如果该属性为 **True** ，则在 WPS 启动时，自动加载指定的加载项。位于 WPS 程序文件夹的 Startup 子文件夹中的加载项可以自动加载。 **Boolean** 类型，只读。 |
| [Compiled](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIn/member/Compiled) | 如果为 **True** ，则指定的加载项是一个 WPS 加载项库（WLL）。如果为 **False** ，则加载项为一个模板。只读， **Boolean** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIn/member/Creator) | 返回一个 32 位的整数，该整数表示在其中创建加载项的应用程序。 **Long** 类型，只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIn/member/Index) | 返回一个 **Long** 类型的值，该值代表项在集合中的位置。只读。 |
| [Installed](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIn/member/Installed) | 如果为 **True** ，则指定的加载项已安装（即加载）。可在 **“工具”** 菜单的 **“模板和加载项”** 对话框中选择需要加载的加载项。可读/写 **Boolean** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIn/member/Name) | 返回加载项的名称。 **String** 类型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIn/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **AddIn** 对象的父对象。 |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AddIn/member/Path) | 返回已安装加载项的位置。 **String** 类型，只读。 |