# Category.BuildingBlocks

返回一个 **[BuildingBlocks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlocks/obj)** 集合，该集合代表类别的构建基块。只读。



## 语法

express.**BuildingBlocks**

express   一个代表 **Category** 对象的变量。

## 类型

BuildingBlocks

## 示例


```JavaScript
/*本示例显示第一个模板的自动文本条目构建基块中名为“General”的类别的构建基块的数量。*/
function test() {
    alert(Application.Templates.Item(1).BuildingBlockTypes(wdTypeAutoText).Categories.Item("General").BuildingBlocks.Count)
}
```


```JavaScript
/*本示例显示第一个模板的自动文本条目构建基块中第一个类别的所有构建基块的说明。*/
function test() {
    let buildingBlocks = Application.Templates.Item(1).BuildingBlockTypes(wdTypeAutoText).Categories.Item(1).BuildingBlocks
    for (let i = 1; i <= buildingBlocks.Count; i++) {
        alert(buildingBlocks.Item(i).Description)
    }
}
```
