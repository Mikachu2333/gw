# XmlDataBinding.ClearSettings

删除指定的数据绑定。



## 语法

express.**ClearSettings()**

express   一个代表 **XmlDataBinding** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例删除活动工作簿中第一项XmlMap关联的数据绑定。*/
function test() {
    let xmlmaps = ActiveWorkbook.XmlMaps
    let dataBinding = xmlmaps.Item(1).DataBinding
    dataBinding.ClearSettings()
}
```


```JavaScript
/*此示例删除第一张工作簿中最后一项XmlMap关联的数据绑定，然后用XML文件对该绑定进行初始化。*/
function test() {
    let xmlmaps = Workbooks.Item(1).XmlMaps
    let dataBinding = xmlmaps.Item(xmlmaps.Count).DataBinding
    dataBinding.ClearSettings()
    dataBinding.LoadSettings("D:\\示例\\example.xml")
    dataBinding.Refresh()
}
```
