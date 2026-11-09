# ContentControl.BuildingBlockType

返回或设置一个 **WdBuildingBlockTypes** 常量，该常量代表构建基块库内容控件的构建基块的类型。可读写。



## 语法

express.**BuildingBlockType**

express   一个代表 **ContentControl** 对象的变量。

## 类型

WdBuildingBlockTypes

## 说明


此属性仅适用于构建基块库内容控件，并且相当于 **“内容控件属性”** 对话框中的 **“库”** 选项。您只能为下列生成块类型设置此属性：

* 自定义 1 到自定义 5
* 自动图文集
* 文档部件
* 自定义自动图文集
* 自定义文档部件
* 公式



## 示例


```JavaScript
/*本示例创建一个新的构建基块库内容控件，并且指定该内容控件的类型和类别。*/
function test() {
    let control = Selection.ContentControls.Add(wdContentControlBuildingBlockGallery)
    control.BuildingBlockType = wdTypeEquations
    control.BuildingBlockCategory = "常规"
}
```


```JavaScript
/*本示例显示活动文档上第三个（构建基块库）内容控件的类型是否为wdTypeQuickParts。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(3)
    alert(control.BuildingBlockType == wdTypeQuickParts)
}
```
