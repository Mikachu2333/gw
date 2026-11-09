# Document.XMLHideNamespaces

返回一个 **Boolean** 类型的值，该值表示是否隐藏 XML 命名空间，该命名空间位于“XML 结构”任务窗格的元素列表中。




## 语法

express.**XMLHideNamespaces**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


如果为 **True** ，则显示元素，并在元素名称右侧显示该元素 XML 架构命名空间。如果为 **False** ，则不显示 XML 架构命名空间。

当包含相似或相同元素名称的多个架构附加到同一文档时，将 **XMLHideNamespaces** 属性值设置为 **False** 可能会很有帮助。




## 示例


```JavaScript
/*下列示例中， WPS 不显示活动文档中的 XML 架构命名空间。*/
ActiveDocument.XMLHideNamespaces = false
```
