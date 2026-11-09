# Document.ContentControls

返回一个 **[ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/obj)** 集合，该集合代表文档中的所有内容控件。只读。



## 语法

express.**ContentControls**

express   一个代表 **Document** 对象的变量。

## 类型

ContentControls

## 示例


```JavaScript
/*本示例在活动文档中插入新的下拉列表内容控件，并在列表中添加几个新项。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Add(wdContentControlDropdownList)

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
/*本示例设置第一个文档上第二个内容控件的颜色。*/
function test() {
    let contentControl = Documents.Item(1).ContentControls.Item(2)
    contentControl.Color = wdColorBlue
}
```
