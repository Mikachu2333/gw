# Workbook.XmlNamespaces

返回一个 **[XmlNamespaces](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlNamespaces/obj)** 集合，该集合表示包含在指定工作簿中的 XML 命名空间。只读。



## 语法

express.**XmlNamespaces**

express   一个代表 **Workbook** 对象的变量。

## 类型

XmlNamespaces

## 示例


```JavaScript
/*本示例显示活动工作簿上XML命名空间的数量。*/
function test() {
    alert(Application.ActiveWorkbook.XmlNamespaces.Count)
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
