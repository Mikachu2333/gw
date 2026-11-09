# XmlSchemas 对象

代表 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象包含的 **[XmlSchema](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlSchema/obj)** 对象的集合。

## 说明


使用 **XmlMap** 对象的 **[Schemas](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/member/Schemas)** 属性可返回 **XmlSchemas** 集合。

使用 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlSchemas/member/Item)** 方法可从 **XmlSchemas** 集合返回一个 **XmlSchema** 对象。


## 示例


```JavaScript
/*本示例显示活动工作簿上第一项XmlMap所包含的第二个XML架构的命名空间的前缀。*/
function test() {
    let xmlSchemas = ActiveWorkbook.XmlMaps.Item(1).Schemas
    alert(xmlSchemas.Item(2).Namespace.Prefix)
}
```


```JavaScript
/*本示例显示第一张工作簿上第一项XmlMap所包含XML架构的数量。*/
function test() {
    let xmlSchemas = Workbooks.Item(1).XmlMaps.Item(1).Schemas
    alert(`XML架构的数量：${xmlSchemas.Count}`)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlSchemas/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlSchemas/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |