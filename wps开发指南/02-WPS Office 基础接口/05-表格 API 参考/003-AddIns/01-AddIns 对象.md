# AddIns 对象

一个 **[AddIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/obj)** 对象的集合，这些对象代表 ET 可用的所有加载宏，不论它们是否已安装。

## 说明


此列表与 **“加载宏”** 对话框中显示的加载宏列表对应。

使用 **[AddIns](#TODO)** 属性可返回 **AddIns** 集合。


## 示例


```JavaScript
/*本示例创建了一个列表，包含所有可用加载宏的名称和安装状态。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    let addIns = Application.AddIns
    for (let i = 1; i <= addIns.Count; i++) {
        Worksheets.Item("Sheet1").Cells.Item(i, 1).Value2 = addIns.Item(i).Name
        Worksheets.Item("Sheet1").Cells.Item(i, 2).Value2 = addIns.Item(i).Installed
    }
}
```
使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIns/member/Add)** 方法可将加载宏添加到可用加载宏列表中。 **Add** 方法将加载宏添加到列表中，但不安装加载宏。将加载宏的 [Installed](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/member/Installed) 属性设为 **True** 可安装加载宏。要安装可用加载宏列表中没有的加载宏，必须先使用 **Add** 方法，然后设置 **Installed** 属性。



```JavaScript
/*本示例添加并安装未显示的加载项。*/
function test() {
    let addin = Application.AddIns.Add("D:\\示例\\ANALYS32.XLL")
    addin.Installed = true
}
```
使用 **AddIns** (_index_)（其中 _index_ 是加载宏标题或索引号）可返回单个 **AddIn** 对象。



```JavaScript
/*本示例安装 ANALYS32 加载宏。*/
function test() {
    Application.AddIns.Item("ANALYS32").Installed = true
}
```
请勿混淆加载宏标题（出现在 **“加载宏”** 对话框中）与加载宏名称（加载宏的文件名）。必须严格按照 **“加载宏”** 对话框中的标题书写加载宏标题，但不必匹配大小写。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIns/member/Add) | 将新加载宏文件添加到加载宏列表中。返回 **[AddIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/obj)** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIns/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIns/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |