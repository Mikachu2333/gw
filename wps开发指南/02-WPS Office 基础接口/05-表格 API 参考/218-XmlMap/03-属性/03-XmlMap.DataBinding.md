# XmlMap.DataBinding

返回一个 **[XmlDataBinding](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlDataBinding/obj)** 对象，该对象表示与指定的架构映射相关的绑定。只读。



## 语法

express.**DataBinding**

express   一个代表 **XmlMap** 对象的变量。

## 类型

XmlDataBinding

## 示例


```JavaScript
/*此示例显示活动工作簿中第一项XmlMap关联绑定的SourceUrl属性值。*/
function test() {
    let dataBinding = ActiveWorkbook.XmlMaps.Item(1).DataBinding
    alert(`XmlMap关联绑定的SourceUrl属性值: ${dataBinding.SourceUrl}`)
}
```


```JavaScript
/*此示例删除第一个工作簿中第一项XmlMap关联的数据绑定，并检查其SourceUrl长度。*/
function test() {
    let dataBinding = Workbooks.Item(1).XmlMaps.Item(1).DataBinding
    dataBinding.ClearSettings()
    if (dataBinding.SourceUrl.length == 0) {
        alert("第一项XmlMap关联的数据绑定已被删除")
    }
}
```
