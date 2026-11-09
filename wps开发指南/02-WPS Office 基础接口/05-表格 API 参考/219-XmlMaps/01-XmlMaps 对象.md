# XmlMaps 对象

代表已添加到工作簿的 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象的集合。

## 说明


使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMaps/member/Add)** 方法可将 XML 映射添加到工作簿。


## 示例


```JavaScript
/*本示例向活动工作簿添加XML映射。*/
function test() {
    ActiveWorkbook.XmlMaps.Add("D:\\example.xsd", "Root")
}
```


```JavaScript
/*本示例显示活动工作簿上第一项XmlMap被刷新时是否自动调整列宽为最适合的宽度。*/
function test() {
    let xmlMap = Application.ActiveWorkbook.XmlMaps.Item(1)
    alert(xmlMap.AdjustColumnWidth)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMaps/member/Add) | 添加 XML 映射到指定的工作簿。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMaps/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMaps/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |