# XmlDataBinding.LoadSettings

使用 XML 数据文件或数据检索服务连接 (.uxdc) 文件中的设置初始化指定的数据绑定。



## 语法

express.**LoadSettings(Url)**

express   一个代表 **XmlDataBinding** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Url | 必选 | string | XML 数据文件的路径。路径以统一资源定位符 (URL) 或通用命名约定 (UNC)（通用命名约定 (UNC)：一种对文件的命名约定，它提供了独立于机器的文件定位方式。UNC 名称使用 "\\\\server\\share\\path\\filename" 这一语法格式，而不是指定驱动器符和路径。）格式指定。 |

## 返回值

void

## 示例


```JavaScript
/*此示例对活动工作簿中最后一项XmlMap关联的数据绑定的设置进行初始化，并刷新该绑定。*/
function test() {
    let xmlmaps = ActiveWorkbook.XmlMaps
    let dataBinding = xmlmaps.Item(xmlmaps.Count).DataBinding
    dataBinding.LoadSettings("D:\\test.xml")
    dataBinding.Refresh()
}
```


```JavaScript
/*此示例对活动工作簿中每项XmlMap关联的数据绑定设置，分别用不同的XML文件进行初始化。*/
function test() {
    let xmlmaps = ActiveWorkbook.XmlMaps
    for (let i = 1; i <= xmlmaps.Count; i++) {
        let dataBinding = xmlmaps.Item(i).DataBinding
        dataBinding.LoadSettings(`D:/data${i}.xml`)
    }
}
```
