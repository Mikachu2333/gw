# Application.OperatingSystem

返回当前操作系统的名称和版本号。例如，“Windows (32-bit) 4.00”。 **String** 类型，只读。



## 语法

express.**OperatingSystem**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示操作系统的名称和版本号。*/
function test() {
    alert(`ET is using ${Application.OperatingSystem}`)
}
```


```JavaScript
/*本示例将操作系统的名称和版本号赋值给B1单元格。*/
function test() {
    Range("B1").Value2 = Application.OperatingSystem
}
```
