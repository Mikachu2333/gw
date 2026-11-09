# ContentControl.SetPlaceholderText

设置在用户输入自己的文本之前显示在内容控件中的占位符文本。



## 语法

express.**SetPlaceholderText(BuildingBlock, Range, Text)**

express   一个代表 **ContentControl** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| BuildingBlock | 可选 | BuildingBlock | 指定 **BuildingBlock** 对象，该对象包含占位符文本的内容。 |
| Range | 可选 | Range | 指定 **Range** 对象，该对象包含占位符文本的内容。 |
| Text | 可选 | string | 指定占位符文本的内容。 |

## 返回值

void

## 说明


在指定占位符文本时，只使用一个参数。如果使用多个参数，则 WPS 将使用在第一个参数中指定的文本。如果省略所有参数，则占位符文本将为空白。



## 示例


```JavaScript
/*本示例在活动文档中插入新的下拉列表内容控件，设置标题和占位符文本并在列表中添加几个新项。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Add(wdContentControlDropdownList)
    contentControl.Title = "My Favorite Animal"
    contentControl.SetPlaceholderText(null, null, "Select your favorite animal ")

    // List entries
    contentControl.DropdownListEntries.Add("Cat")
    contentControl.DropdownListEntries.Add("Dog")
    contentControl.DropdownListEntries.Add("Horse")
    contentControl.DropdownListEntries.Add("Monkey")
    contentControl.DropdownListEntries.Add("Snake")
    contentControl.DropdownListEntries.Add("Other")
}
```


```JavaScript
/*本示例设置活动文档上第一个内容控件的占位符文本并显示。*/
function test() {
    let controls = ActiveDocument.ContentControls
    controls.Item(1).SetPlaceholderText(controls.Item(3).PlaceholderText)
    alert(controls.Item(1).PlaceholderText.Value)
}
```
