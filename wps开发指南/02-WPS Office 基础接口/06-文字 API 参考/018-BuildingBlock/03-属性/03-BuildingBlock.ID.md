# BuildingBlock.ID

返回一个 **String** ，代表构建基块的内部标识号。只读。



## 语法

express.**ID**

express   一个代表 **BuildingBlock** 对象的变量。

## 类型

string

## 说明


 **ID** 属性返回一个 GUID 形式的标识字符串。



## 示例


```JavaScript
/*本示例显示第一个模板的第三个构建基块的内部标识号。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockEntries.Item(3)
    alert(buildingBlock.ID)
}
```


```JavaScript
/*本示例将所选内容的文本替换为附加到第一个文档的模板的第一个构建基块的内部标识号。*/
function test() {
    let buildingBlock = Documents.Item(1).AttachedTemplate.BuildingBlockEntries.Item(1)
    Selection.Text = buildingBlock.ID
}
```
