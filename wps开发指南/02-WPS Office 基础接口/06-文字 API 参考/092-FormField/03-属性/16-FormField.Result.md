# FormField.Result

返回一个代表指定的窗体域的结果的 **String** 。可读写。



## 语法

express.**Result**

express   一个代表 **FormField** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档中每个窗体域的结果。*/
function test() {
    let formFields = ActiveDocument.FormFields
    for (let i = 1; i <= formFields.Count; i++) {
        alert(formFields.Item(i).Result)
    }
}
```


```JavaScript
/*本示例设置所选内容中第四个窗体域的结果。*/
function test() {
    Selection.FormFields.Item(4).Result = "example"
}
```
