# FormField.Name

返回或设置指定对象的名称。 **String** 类型，可读写。



## 语法

express.**Name**

express   一个代表 **FormField** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档中第一个窗体域的名称*/
function test() {
    alert(ActiveDocument.FormFields.Item(1).Name)
}
```


```JavaScript
/*本示例在光标处插入第一个文档上所有窗体域的名称。*/
function test() {
    let formFields = Documents.Item(1).FormFields
    for (let i = 1; i <= formFields.Count; i++) {
        Selection.TypeText(formFields.Item(i).Name + "\n")
    }
}
```
