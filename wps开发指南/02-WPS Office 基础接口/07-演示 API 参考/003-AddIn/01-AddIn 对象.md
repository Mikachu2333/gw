# AddIn 对象

代表已加载或未加载的单个加载项。

## 说明


 **AddIn** 对象是 **[AddIns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIns/obj)** 集合的成员。 **AddIns** 集合包含与 WPP 相关的所有可用加载项，无论这些加载项是否加载。该集合不包含组件对象模型（COM）加载项（COM 加载项：通过添加自定义命令和指定的功能来扩展 WPS Office 程序的功能的补充程序。COM 加载项可在一个或多个 Office 程序中运行。COM 加载项使用文件扩展名 .dll 或 .exe。）。

使用 **AddIns** (*index*)（其中 *index* 是加载项的标题或索引号）返回单个 **AddIn** 对象。


## 示例


```JavaScript
/*本示例加载标题为“addin”的加载项。*/
function test() {
    Application.AddIns.Item("addin").Loaded = msoTrue
}
```
不要将以上显示的加载项标题与加载项的文件名相混淆。必须严格按照“加载项”对话框中列表框内的标题拼写加载项标题，但不必匹配大小写。

索引编号代表加载项在“ **加载项** ”对话框中列表框内的位置。



```JavaScript
/*本示例显示当前在 WPP 中加载的所有加载项的名称。*/
function test() {
    for (let i = 1; i <= Application.AddIns.Count; i++) {
        if (Application.AddIns.Item(i).Loaded) {
            alert(Application.AddIns.Item(i).Name)
        }
    }
}
```
使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIns/member/Add)** 方法将特定于 WPP 的加载项添加到可用加载项列表中。但请注意，使用此方法不会加载加载项。若要加载加载项，请在使用 **Add** 方法后将加载项的 **Loaded** 属性设置为 **msoTrue** 。



```JavaScript
/*本示例将“addin.ppam”添加到“加载项”对话框的列表中，然后加载它（请注意，调用Add方法是传入加载项的文件名，而不是其标题）。*/
function test() {
    Application.AddIns.Add("D:\\addin.ppam").Loaded = msoTrue
}
```
使用 **AddIns** (*index*)（其中 *index* 是加载项的标题）返回对已加载的加载项的引用。



```JavaScript
/*本示例显示加载项“addin”的名称。*/
function test() {
    let addin = Application.AddIns.Item("addin")
    let name = addin.Name
    alert(name)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIn/member/Application) | 返回一个 Application 对象，该对象表示指定对象的创建者。 |
| [AutoLoad](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIn/member/AutoLoad) | 决定指定的加载宏是否在每次启动 WPP 时自动加载。可读/写。 |
| [FullName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIn/member/FullName) | 返回指定的加载宏或保存的演示文稿的名称，包括路径、当前文件系统分隔符和文件扩展名。只读。 |
| [Loaded](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIn/member/Loaded) | 确定是否已加载指定加载项。可读/写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIn/member/Name) | 已注册的文件类型的加载项名称（标题）。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIn/member/Parent) | 返回指定对象的父对象。 |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIn/member/Path) | 返回 **String** ，该值代表到指定的 **[AddIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIn/obj)** 对象的路径。只读。 |
| [Registered](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AddIn/member/Registered) | 返回指定的加载项是否注册到 Windows 注册表中。可读/写。 |