# Application.NetworkTemplatesPath

返回保存模板的网络路径。网络路径不存在时，该属性返回一个空的字符串。 **String** 类型，只读。



## 语法

express.**NetworkTemplatesPath**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示保存模板的网络路径。*/
function test() {
    alert(Application.NetworkTemplatesPath)
}
```


```JavaScript
/*本示例将保存模板的网络路径赋值给A1单元格。*/
function test() {
    Range("A1").Value2 = Application.NetworkTemplatesPath
}
```
