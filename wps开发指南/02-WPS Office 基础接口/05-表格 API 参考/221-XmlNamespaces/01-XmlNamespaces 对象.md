# XmlNamespaces 对象

表示工作簿中 **[XmlNamespace](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlNamespace/obj)** 对象的集合。

## 说明


使用 **Item** 方法访问特定的 **XmlNamespace** 对象。

使用 **Value** 属性可返回一个 **String** 值，该字符串列出了已添加到工作簿的命名空间。


## 示例


```JavaScript
/*本示例判断如果第一张工作簿上XML命名空间的数量大于0，则显示该XML命名空间的值。*/
function test() {
    let xmlNamespaces = Workbooks.Item(1).XmlNamespaces
    if (xmlNamespaces.Count > 0) {
        alert(xmlNamespaces.Value)
    }
}
```


```JavaScript
/*本示例显示活动工作簿上所有XML命名空间的前缀。*/
function test() {
    let xmlNamespaces = Application.ActiveWorkbook.XmlNamespaces
    for (let i = 1; i <= xmlNamespaces.Count; i++) {
        alert(xmlNamespaces.Item(i).Prefix)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlNamespaces/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlNamespaces/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlNamespaces/member/Value) | 返回一个 **String** 值，该值代表已添加到工作簿的 XML 命名空间。 |