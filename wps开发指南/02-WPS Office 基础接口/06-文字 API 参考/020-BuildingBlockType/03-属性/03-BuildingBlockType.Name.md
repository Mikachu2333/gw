# BuildingBlockType.Name

返回一个 **String** ，代表生成块类型的本地化名称。只读。



## 语法

express.**Name**

express   一个代表 **BuildingBlockType** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示附加到第一个文档的模板中页码编号构建基块的名称。*/
function test() {
    let buildingBlockType = Documents.Item(1).AttachedTemplate.BuildingBlockTypes.Item(wdTypePageNumber)
    alert(buildingBlockType.Name)
}
```


```JavaScript
/*本示例显示数组 arr 中的构建基块类型关联的本地化名称。*/
function test() {
    let arr = [wdTypeEquations, wdTypeFooters, wdTypeHeaders, wdTypePageNumber]
    let str = ""
    let bdbTypes = Application.Templates.Item(1).BuildingBlockTypes
    for (let i = 0; i < arr.length; i++) {
        str += bdbTypes.Item(arr[i]).Name + "\n"
    }
    alert(str)
}
```
