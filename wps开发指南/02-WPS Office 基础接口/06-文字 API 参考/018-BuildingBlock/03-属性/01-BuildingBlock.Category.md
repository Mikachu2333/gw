# BuildingBlock.Category

返回一个 **[Category](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Category/obj)** 对象，该对象代表构建基块的类别。只读。



## 语法

express.**Category**

express   一个代表 **BuildingBlock** 对象的变量。

## 类型

Category

## 示例


```JavaScript
/*本示例显示第一个模板的第一个构建基块类别的名称。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockEntries.Item(1)
    alert(buildingBlock.Category.Name)
}
```


```JavaScript
/*本示例显示附加到活动文档的模板的第二个构建基块类别的构建基块类型的名称。*/
function test() {
    let buildingBlock = ActiveDocument.AttachedTemplate.BuildingBlockEntries.Item(2)
    alert(buildingBlock.Category.Type.Name)
}
```
