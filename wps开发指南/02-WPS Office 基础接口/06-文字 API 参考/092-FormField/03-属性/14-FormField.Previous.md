# FormField.Previous

返回集合中的前一窗体域。只读。



## 语法

express.**Previous**

express   一个代表 **FormField** 对象的变量。

## 类型

FormField

## 示例


```JavaScript
/*本示例显示活动文档中倒数第二个窗体域的结果。*/
function test() {
    let formField = ActiveDocument.FormFields.Item(ActiveDocument.FormFields.Count).Previous
    alert(`Form field Result = ${formField.Result}`)
}
```


```JavaScript
/*本示例显示所选内容中第一个窗体域的帮助文字。*/
function test() {
    alert(Selection.FormFields.Item(2).Previous.HelpText)
}
```
