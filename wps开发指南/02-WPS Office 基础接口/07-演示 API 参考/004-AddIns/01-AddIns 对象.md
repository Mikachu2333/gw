# AddIns 对象

 **[AddIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIn/obj)** 对象的集合，这些对象代表与 WPP 相关的对 WPP 可用的所有加载项，而无论这些加载项是否已加载。这里不包含组件对象模型（COM）加载项（COM 加载项：通过添加自定义命令和指定的功能来扩展 WPS Office 程序的功能的补充程序。COM 加载项可在一个或多个 Office 程序中运行。COM 加载项使用文件扩展名 .dll 或 .exe。）。

## 说明


使用 **AddIns** 方法返回 **AddIns** 集合。


## 示例


```JavaScript
/*本示例显示 WPP 中所有当前已加载的加载项的名称。*/
function test() {
    for (let i = 1; i <= Application.AddIns.Count; i++) {
        if (Application.AddIns.Item(i).Loaded) {
            alert(Application.AddIns.Item(i).Name)
        }
    }
}
```
使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIns/member/Add)** 方法将特定于 WPP 的加载项添加到可用加载项列表中。但请注意，使用此方法不会加载加载项。若要加载加载项，请在使用 **Add** 方法后将加载项的 **[Loaded](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIn/member/Loaded)** 属性设置为 **msoTrue** 。



```JavaScript
/*本示例将“addin.ppam”添加到“加载项”对话框的列表中，然后加载它（请注意，调用Add方法是传入加载项的文件名，而不是其标题）。*/
function test() {
    Application.AddIns.Add("D:\\addin.ppam").Loaded = msoTrue
}
```
使用 **AddIns** (*index*)（其中 *index* 是加载项的标题或索引号）返回单个 **AddIn** 对象。



```JavaScript
/*本示例加载标题为“addin”的加载项。*/
function test() {
    Application.AddIns.Item("addin").Loaded = msoTrue
}
```
不要将加载项标题与加载项的文件名相混淆。必须严格按照 **“加载项”** 对话框中列表框内的标题拼写加载项标题，但不必匹配大小写。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIns/member/Add) | 返回一个 **AddIn** 对象，该对象代表一个添加到加载项列表中的加载项文件。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIns/member/Item) | 从指定的 **AddIns** 集合中返回单个 **AddIn** 对象。 |
| [Remove](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIns/member/Remove) | 从加载宏集合中删除一个加载宏。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIns/member/Application) | 返回一个 Application 对象，该对象表示指定对象的创建者。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIns/member/Count) | 返回指定集合中的对象数目。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIns/member/Parent) | 返回指定对象的父对象。 |