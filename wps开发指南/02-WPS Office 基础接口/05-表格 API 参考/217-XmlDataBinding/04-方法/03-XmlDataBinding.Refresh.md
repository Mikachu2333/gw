# XmlDataBinding.Refresh

使用指定的 **[XmlDataBinding](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlDataBinding/obj)** 对象的当前连接设置检索 XML 数据。



## 语法

express.**Refresh()**

express   一个代表 **XmlDataBinding** 对象的变量。

## 返回值

一个表示该方法结果的 **[XlXmlImportResult](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlXmlImportResult)** 值。

## 示例


```JavaScript
/*此示例刷新活动工作簿中第一项XmlMap关联的数据绑定，并判断如果成功导入数据文件，则通知用户。*/
function test() {
    let xmlmaps = ActiveWorkbook.XmlMaps
    let dataBinding = xmlmaps.Item(1).DataBinding
    if (dataBinding.Refresh() == xlXmlImportSuccess) {
        alert("XML 数据文件已成功导入。")
    }
}
```


```JavaScript
/*此示例对活动工作簿中第一项XmlMap关联的数据绑定的设置进行初始化，并刷新该绑定。*/
function test() {
    let dataBinding = ActiveWorkbook.XmlMaps.Item(1).DataBinding
    dataBinding.LoadSettings("D:\\示例\\example.xml")
    dataBinding.Refresh()
}
```
