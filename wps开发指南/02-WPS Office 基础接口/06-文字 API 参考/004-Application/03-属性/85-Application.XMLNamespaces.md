# Application.XMLNamespaces

返回一个 **XMLNamespaces** 集合，代表“架构库”中的 XML 架构。



## 语法

express.**XMLNamespaces**

express   一个代表 **Application** 对象的变量。

## 类型

XMLNamespaces

## 示例


```JavaScript
/*本示例显示架构库中第一个架构的 URI。*/
function test() {
    let xmlNamespace = Application.XMLNamespaces.Item(1)
    alert(xmlNamespace.URI)
}
```


```JavaScript
/*本示例显示第一个架构在架构库的物理位置。*/
function test() {
    alert(Application.XMLNamespaces.Item(1).Location())
}
```
