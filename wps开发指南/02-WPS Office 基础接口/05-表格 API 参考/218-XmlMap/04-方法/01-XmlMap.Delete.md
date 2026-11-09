# XmlMap.Delete

从工作簿中删除指定的 XML 映射。



## 语法

express.**Delete()**

express   一个代表 **XmlMap** 对象的变量。

## 返回值

void

## 说明


删除 XML 映射将把所有 XML 列表转换为普通列表，并删除所有单个单元格映射（仍保留数据）。此外， **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象将从 **[XmlMaps](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMaps/obj)** 集合中删除。映射和架构信息将从工作簿中删除（不再保留在 XLS 文件和 XMLSS 中）。对已删除对象的所有引用都无效。



## 示例


```JavaScript
/*此示例删除活动工作簿的最后一项XmlMap，并检查前后数量再通知用户。*/
function test() {
    let mapLastCount = ActiveWorkbook.XmlMaps.Count
    ActiveWorkbook.XmlMaps.Item(mapLastCount).Delete()
    if (mapLastCount - 1 == ActiveWorkbook.XmlMaps.Count) {
        alert(`XmlMap删除成功，XmlMap原有${mapLastCount}项，当前${ActiveWorkbook.XmlMaps.Count}项`)
    }
}
```


```JavaScript
/*此示例删除第一个工作簿中所有的XmlMap，并检查删除后XmlMap总数是否为0。*/
function test() {
    let xmlMaps = Workbooks.Item(1).XmlMaps
    for (let i = 1; i <= xmlMaps.Count; i++) {
        xmlMaps.Item(i).Delete()
    }
    if (xmlMaps.Count == 0) {
        alert("工作簿中所有XmlMap均已删除")
    }
}
```
