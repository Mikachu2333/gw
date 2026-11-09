# Workbook.FullName

返回对象的名称（以字符串表示），包括其磁盘路径。 **String** 型，只读。



## 语法

express.**FullName**

express   一个代表 **Workbook** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示当前工作簿的路径及文件名。*/
function test() {
    alert("当前工作簿的路径及文件名为：" + Application.ActiveWorkbook.FullName)
}
```


```JavaScript
/*本示例演示FullName属性的数据类型。*/
function test() {
    alert("FullName属性的数据类型为：" + typeof (Application.ActiveWorkbook.FullName))
}
```
