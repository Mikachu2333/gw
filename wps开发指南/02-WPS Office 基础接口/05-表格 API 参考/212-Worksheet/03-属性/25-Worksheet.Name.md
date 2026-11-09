# Worksheet.Name

返回或设置一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **Worksheet** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例演示第一个工作表的名称。*/
function test() {
    alert(Worksheets.Item(1).Name)
}
```


```JavaScript
/*本示例设置活动工作表的名称。*/
function test() {
    let newName = InputBox("请输入名称")
    ActiveSheet.Name = newName
}
```
