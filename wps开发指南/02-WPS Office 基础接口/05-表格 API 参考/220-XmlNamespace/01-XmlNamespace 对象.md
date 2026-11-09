# XmlNamespace 对象

代表已添加到工作簿的命名空间。

## 说明


使用 **[Prefix](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlNamespace/member/Prefix)** 属性可返回 **XmlNamespace** 对象的前缀。

使用 **[Uri](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlNamespace/member/Uri)** 属性可返回 **XmlNamespace** 对象的“统一资源标识符”(URI)。


## 示例


```JavaScript
/*此示例显示活动工作簿中第一项XML命名空间的前缀和Uri。*/
function test() {
    const xmlns = ActiveWorkbook.XmlNamespaces.Item(1)
    alert(`第一项XML命名空间的前缀为：${xmlns.Prefix}，Uri为：${xmlns.Uri}`)
}
```


```JavaScript
/*此示例显示第一个工作簿中每项XML命名空间的前缀和Uri。*/
function test() {
    const namespaces = Workbooks.Item(1).XmlNamespaces
    for (let i = 1; i <= namespaces.Count; i++) {
        let xmlns = namespaces.Item(i)
        alert(`第${i}项XML命名空间的前缀为：${xmlns.Prefix}，Uri为：${xmlns.Uri}`)
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Prefix](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlNamespace/member/Prefix) | 返回一个 **String** 类型的数值，该数值表示指定的 XML 命名空间 （命名空间：一种唯一限定元素名称与关系的方法，以避免具有同一名称但来自多个来源的元素发生名称冲突。）的前缀。只读。 |
| [Uri](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlNamespace/member/Uri) | 返回一个 **String** 类型的数值，该数值表示指定 XML 命名空间 （命名空间：一种唯一限定元素名称与关系的方法，以避免具有同一名称但来自多个来源的元素发生名称冲突。）的统一资源标识符 (URI) （统一资源标识符 (URI)：通过类型和位置标识 Internet 上资源的字符串。）。只读。 |