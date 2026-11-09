# FormField.Delete

删除指定窗体域。



## 语法

express.**Delete()**

express   一个代表 **FormField** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档上第二个窗体域。*/
function test() {
    ActiveDocument.FormFields.Item(2).Delete()
}
```


```JavaScript
/*本示例删除第一个文档上所有复选框窗体域。*/
function test() {
    let formFields = Documents.Item(1).FormFields
    for (let i = formFields.Count; i >= 1; i--) {
        if (formFields.Item(i).Type == wdFieldFormCheckBox) {
            formFields.Item(i).Delete()
        }
    }
}
```
