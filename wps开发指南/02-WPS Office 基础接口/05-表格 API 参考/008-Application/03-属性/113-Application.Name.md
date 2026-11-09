# Application.Name

返回一个代表对象名称的 **String** 值。



## 语法

express.**Name**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作簿的名称。*/
function test() {
    alert("活动工作簿的名称为：" + Application.ActiveWorkbook.Name)
}
```


```JavaScript
/*本示例显示 Name 的数据类型。*/
function test() {
    alert("Name的数据类型为：" + typeof (Application.Name))
}
```
