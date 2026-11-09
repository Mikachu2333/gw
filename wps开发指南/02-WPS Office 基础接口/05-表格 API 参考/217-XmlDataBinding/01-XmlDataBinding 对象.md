# XmlDataBinding 对象

代表用于某个 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象的源数据连接。

## 说明


使用 **[LoadSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlDataBinding/member/LoadSettings)** 方法可初始化 **XmlDataBinding** 对象的设置。

使用 **[Refresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlDataBinding/member/Refresh)** 方法可刷新数据绑定。

使用 **[ClearSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlDataBinding/member/ClearSettings)** 方法可删除数据绑定。


## 示例


```JavaScript
/*此示例显示活动工作簿中第一项XmlMap关联绑定的SourceUrl属性值。*/
function test() {
    let dataBinding = ActiveWorkbook.XmlMaps.Item(1).DataBinding
    alert(`XmlMap关联绑定的SourceUrl属性值: ${dataBinding.SourceUrl}`)
}
```


```JavaScript
/*此示例删除活动工作簿中每项XmlMap关联的数据绑定。*/
function test() {
    let xmlmaps = ActiveWorkbook.XmlMaps
    for (let i = 1; i <= xmlmaps.Count; i++) {
        let dataBinding = xmlmaps.Item(i).DataBinding
        dataBinding.ClearSettings()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ClearSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlDataBinding/member/ClearSettings) | 删除指定的数据绑定。 |
| [LoadSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlDataBinding/member/LoadSettings) | 使用 XML 数据文件或数据检索服务连接 (.uxdc) 文件中的设置初始化指定的数据绑定。 |
| [Refresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlDataBinding/member/Refresh) | 使用指定的 **[XmlDataBinding](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlDataBinding/obj)** 对象的当前连接设置检索 XML 数据。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [SourceUrl](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlDataBinding/member/SourceUrl) | 返回一个 **String** 值，它代表为指定数据绑定提供源数据的 XML 数据文件或 Web 服务的路径。只读。 |