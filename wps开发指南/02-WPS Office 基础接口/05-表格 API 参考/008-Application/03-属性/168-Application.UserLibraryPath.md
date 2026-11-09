# Application.UserLibraryPath

返回用户计算机上 COM 加载宏安装位置的路径。 **String** 类型，只读。



## 语法

express.**UserLibraryPath**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例确定 COM 加载项在用户计算机上安装的位置，并将字符串分配给变量strLibPath。*/
function test() {
    let strLibPath = Application.UserLibraryPath
}
```


```JavaScript
/*本示例演示UserLibraryPath属性的数据类型。*/
function test() {
    alert("UserLibraryPath属性的数据类型：" + typeof Application.UserLibraryPath)
}
```
