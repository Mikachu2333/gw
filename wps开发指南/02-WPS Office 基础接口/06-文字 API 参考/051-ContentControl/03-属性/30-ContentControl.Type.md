# ContentControl.Type

返回或设置 **[WdContentControlType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdContentControlType)** ，它表示内容控件的类型。可读/写。



## 语法

express.**Type**

express   一个代表 **ContentControl** 对象的变量。

## 类型

WdContentControlType

## 说明


可以使用 **Type** 属性将内容控件的类型从一种类型更改为另一种类型。但是，能否更改控件的类型将取决于原始类型和更改时内容控件中的内容。所有内容控件都可以更改为格式文本或构建基块库类型的内容控件，因为这些类型允许任意内容。对于其他类型，如果内容对于要更改为的目标类型来说是有效的，则允许更改类型。否则，将拒绝更改，并导致运行时错误。



## 示例


```JavaScript
/*本示例判断活动文档上第一个内容控件是否为下拉列表框或组合框。如果它是这两种类型之一，则上移列表的最后一项，使它成为列表的第一项。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(1)
    if (control.Type == wdContentControlComboBox || control.Type == wdContentControlDropdownList) {
        let listEntry = control.DropdownListEntries.Item(control.DropdownListEntries.Count)
        for (let i = 1; i <= control.DropdownListEntries.Count - 1; i++) {
            listEntry.MoveUp()
        }
    }
}
```


```JavaScript
/*本示例设置所选内容中第三个内容控件的类型。*/
function test() {
    let control = Selection.ContentControls.Item(3)
    control.Type = wdContentControlDate
}
```
