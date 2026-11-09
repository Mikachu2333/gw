# ContentControlListEntry.Value

返回或设置 **String** 值，该值表示某项在下拉列表或组合框内容控件中的编程值。可读/写。



## 语法

express.**Value**

express   一个代表 **ContentControlListEntry** 对象的变量。

## 类型

string

## 说明


使用 **Value** 属性可以存储在处理时间时需要使用的数据。例如， **Text** 属性可能包含要显示的字符串， **Value** 属性可能包含可用来在数据库中查找信息的数字，如项编号。此外，如果内容控件映射到数据存储中的 XML 数据，则 **Value** 属性的值是发送到自定义 XML 数据的值。

不能为从附加到映射到此控件的自定义 XML 的 XML 架构自动填充的列表条目设置 **Value** 属性。



## 示例


```JavaScript
/*本示例基于显示文本的内容设置项的值。*/
function test() {
    let contentControl = Application.ActiveDocument.ContentControls.Item(3)
    let dropdownListEntries = contentControl.DropdownListEntries
    for (let i = 1; i < dropdownListEntries.Count; i++) {
        let listEntry = dropdownListEntries.Item(i)
        if (listEntry.Text !== "Other") {
            let text = listEntry.Text
            listEntry.Value = "My favorite animal is the " + text + "."
        }
    }
}
```


```JavaScript
/*本示例判断如果活动文档的第一个内容控件中的第一个下拉列表项的值为空，则设置该值。*/
function test() {
    let dropdownListEntries = Application.ActiveDocument.ContentControls.Item(1).DropdownListEntries
    let listEntry = dropdownListEntries.Item(1)
    if (listEntry.Value == "") {
        listEntry.Value = "example"
    } else {
        alert(listEntry.Value)
    }
}
```
