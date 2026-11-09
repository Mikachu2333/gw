# Range.ContentControls

返回一个 **[ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/obj)** 集合，该集合代表一个区域中包含的内容控件。只读。



## 语法

express.**ContentControls**

express   一个代表 **Range** 对象的变量。

## 类型

ContentControls

## 示例


```JavaScript
/*本示例在活动文档中的指定位置插入下拉列表内容控件。*/
function test() {
    let contentControl = ActiveDocument.Range(200, 200).ContentControls.Add(wdContentControlDropdownList)

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
/*本示例设置所选内容中第二个内容控件的颜色。*/
function test() {
    let contentControl = Selection.Range.ContentControls.Item(2)
    contentControl.Color = wdColorBlue
}
```
