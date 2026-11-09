# XmlMaps.Add

添加 XML 映射到指定的工作簿。



## 语法

express.**Add(Schema, RootElementName)**

express   一个代表 **XmlMaps** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Schema | 必选 | string | 要作为 XML 映射添加的架构。该字符串可以是架构文件的路径，也可以是架构本身。路径以通用命名约定 (UNC) 或统一资源定位符 (URL) 格式进行指定。 |
| RootElementName | 可选 | any | 根元素的名称。如果架构仅包含一个根元素，则此参数可忽略。 |

## 返回值

一个代表新的 XML 映射的 **[XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlMap/obj)** 对象。

## 示例


```JavaScript
/*本示例向活动工作簿添加 XML 映射。*/
function test() {
    ActiveWorkbook.XmlMaps.Add("D:\\example.xml")
}
```


```JavaScript
/*本示例向第一张工作簿添加 XML 映射，并显示该映射的名称。*/
function test() {
    let xmlMap = Workbooks.Item(1).XmlMaps.Add("D:\\example1.xml", "Invoice")
    alert(xmlMap.Name)
}
```
