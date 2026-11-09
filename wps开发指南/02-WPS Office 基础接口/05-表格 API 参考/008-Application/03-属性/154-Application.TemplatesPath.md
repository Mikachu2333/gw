# Application.TemplatesPath

返回模板所存储的本地路径。 **String** 类型，只读。



## 语法

express.**TemplatesPath**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例返回模板所存储的本地路径。*/
function test() {
    MsgBox(Application.TemplatesPath)
}
```


```JavaScript
/*本示例显示TemplatesPath属性的数据类型。*/
function test() {
    alert("TemplatesPath属性的数据类型为：" + typeof Application.TemplatesPath)
}
```
