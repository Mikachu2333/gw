# Application.Name

返回应用程序的名称"Microsoft PowerPoint"。只读。



## 语法

express.**Name**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将选择的文本替换为应用程序名。*/
function test() {
    ActiveWindow.Selection.TextRange.Text = Application.Name
}
```


```JavaScript
/*本示例显示应用程序名。*/
function test() {
    alert(Application.Name)
}
```
