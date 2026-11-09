# Workbook.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **Workbook** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例演示当前活动工作簿的名称。*/
function test() {
    alert("当前活动工作簿的名称为：" + Application.ActiveWorkbook.Name)
}
```


```JavaScript
/*本示例显示 Name 的数据类型。*/
function test() {
    alert("Name的数据类型为：" + typeof (Application.Workbooks.Item(1).Name))
}
```
