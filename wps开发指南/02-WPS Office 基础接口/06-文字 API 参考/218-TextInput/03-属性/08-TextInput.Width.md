# TextInput.Width

返回或设置指定文本输入字段的宽度（以磅为单位）。可读写 **Long** 类型。



## 语法

express.**Width**

express   一个代表 **TextInput** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个文本型窗体域的输入字段的宽度。*/
function test() {
    alert(ActiveDocument.FormFields.Item(1).TextInput.Width)
}
```


```JavaScript
/*本示例设置所选内容中第二个文本型窗体域的输入字段的宽度。*/
function test() {
    let textInput = Selection.FormFields.Item(2).TextInput
    textInput.Width = 5
}
```
