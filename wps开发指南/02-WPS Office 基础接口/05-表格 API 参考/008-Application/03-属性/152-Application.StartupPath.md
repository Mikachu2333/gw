# Application.StartupPath

返回启动文件夹的完整路径，不包括尾部分隔符。 **String** 类型，只读。



## 语法

express.**StartupPath**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示 ET 启动文件夹的完整路径。*/
function test() {
    MsgBox(Application.StartupPath)
}
```


```JavaScript
/*本示例显示StartupPath属性的数据类型。*/
function test() {
    alert("StartupPath属性的数据类型：" + typeof Application.StartupPath)
}
```
