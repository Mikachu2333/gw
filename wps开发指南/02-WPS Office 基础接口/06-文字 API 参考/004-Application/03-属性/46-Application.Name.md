# Application.Name

返回指定对象的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示应用程序的名称。*/
function test() {
    alert(Application.Name)
}
```


```JavaScript
/*本示例将应用程序的名称赋值给选中内容的文本。*/
function test() {
    Selection.Range.Text = Application.Name
}
```
