# Category.Type

返回一个 **[BuildingBlockType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlockType/obj)** 对象，该对象代表构建基块类别的构建基块类型。只读。



## 语法

express.**Type**

express   一个代表 **Category** 对象的变量。

## 类型

BuildingBlockType

## 示例


```JavaScript
/*本示例显示第一个模板的自动文本条目构建基块中第一个类别的构建基块类型的名称。*/
function test() {
    let category = Application.Templates.Item(1).BuildingBlockTypes(wdTypeAutoText).Categories.Item(1)
    alert(category.Type.Name)
}
```


```JavaScript
/*本示例显示第一个模板的自动文本条目构建基块中名为“General”的类别的构建基块类型的索引。*/
function test() {
    let category = Application.Templates.Item(1).BuildingBlockTypes(wdTypeAutoText).Categories.Item("General")
    alert(category.Type.Index)
}
```
