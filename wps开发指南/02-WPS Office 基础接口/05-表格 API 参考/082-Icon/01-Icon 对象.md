# Icon 对象

代表用于条件格式规则的图标集中的单个图标。

## 说明


 **Icon** 对象是从 **[IconSet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconSet/obj)** 对象的 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconSet/member/Item)** 属性中返回的。


## 示例


```JavaScript
/*本示例显示第一张工作表上区域 B1:B10 中第一个图标集条件格式的图标集中所有图标的索引。*/
function test() {
    let iconSet = Worksheets.Item(1).Range("B1:B10").FormatConditions.Item(1).IconSet
    for (let i = 1; i <= iconSet.Count; i++) {
        alert(iconSet.Item(i).Index)
    }
}
```


```JavaScript
/*本示例显示第一张工作表上区域 B1:B10 中第二个图标集条件格式的图标集中第一个图标的实际类型。*/
function test() {
    let icon = Worksheets.Item(1).Range("B1:B10").FormatConditions.Item(2).IconSet.Item(1)
    alert(icon.constructor.name)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Icon/member/Index) | 返回一个 **Long** 值，该值指明 **[IconSet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconSet/obj)** 对象中 **Icon** 对象的索引号。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Icon/member/Parent) | 返回指定对象的父对象。只读。 |