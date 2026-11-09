# FormField.Next

返回集合中的下一个窗体域。只读。



## 语法

express.**Next**

express   一个代表 **FormField** 对象的变量。

## 类型

FormField

## 示例


```JavaScript
/*本示例显示活动文档上第二个窗体域的名称。*/
function test() {
    alert(ActiveDocument.FormFields.Item(1).Next.Name)
}
```


```JavaScript
/*本示例显示所选内容中第二个窗体域的帮助文字。*/
function test() {
    alert(Selection.FormFields.Item(1).Next.HelpText)
}
```
