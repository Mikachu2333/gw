# AddIns2 对象

 **[AddIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIn/obj)** 对象组成的集合，这些对象表示 ET 中当前可用或打开的所有加载项，而不考虑它们是否已安装。

## 说明


 **AddIns2** 集合的内容对应于 **“加载项”** 对话框（ **“开发工具”** 选项卡上的 **“加载项”** 命令）中显示的加载项列表，以及当前打开的任何加载项。


## 示例


```JavaScript
/*本示例创建了一个列表，包含所有可用加载宏的名称和安装状态。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    let addIns = Application.AddIns2
    for (let i = 1; i <= addIns.Count; i++) {
        Worksheets.Item("Sheet1").Cells.Item(i, 1).Value2 = addIns.Item(i).Name
        Worksheets.Item("Sheet1").Cells.Item(i, 2).Value2 = addIns.Item(i).Installed
    }
}
```


```JavaScript
/*本示例添加并安装未显示的加载项。*/
function test() {
    let addin = Application.AddIns2.Add("D:\\示例\\ANALYS32.XLL")
    addin.Installed = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIns2/member/Add) | 将新加载项添加到加载项列表。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIns2/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIns2/member/Count) | 返回一个 **Long** 值，该值表示集合中对象的数量。 |