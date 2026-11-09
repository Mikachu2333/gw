# ContentControl.BuildingBlockCategory

返回或设置一个 **String** ，代表构建基块库内容控件的类别。可读写。



## 语法

express.**BuildingBlockCategory**

express   一个代表 **ContentControl** 对象的变量。

## 类型

string

## 说明


此属性仅适用于构建基块库内容控件，并且相当于 **“内容控件属性”** 对话框中的 **“类别”** 选项。您可以将此属性设置为任何字符串；但如果您将它设置为不存在相应类别的字符串，则 **“类别”** 选项的值被设置为“（所有类别）”。



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
/*本示例显示活动文档上第三个（构建基块库）内容控件的类别。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(3)
    alert(control.BuildingBlockCategory)
}
```
