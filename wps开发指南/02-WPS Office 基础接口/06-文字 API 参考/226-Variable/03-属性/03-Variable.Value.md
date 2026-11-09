# Variable.Value

返回或设置文档变量的值。可读写 **String** 类型。



## 语法

express.**Value**

express   一个代表 **Variable** 对象的变量。

## 类型

string

## 说明


 **Variable** 对象的值不能设置为长度为零的字符串。将 **Variable** 对象设置为长度为零的字符串会导致运行时错误。



## 示例


```JavaScript
/*本示例在活动文档中添加一个文档变量，然后显示新变量的值。*/
function test() {
    let variable = ActiveDocument.Variables.Add("Temp2", "10")
    alert(variable.Value)
}
```


```JavaScript
/*本示例显示第一个文档上第二个文档变量的值。*/
function test() {
    alert(Documents.Item(1).Variables.Item(2).Value)
}
```
