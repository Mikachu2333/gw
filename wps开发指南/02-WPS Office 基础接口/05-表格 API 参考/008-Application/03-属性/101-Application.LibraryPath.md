# Application.LibraryPath

返回 Library 文件夹的路径，不带末尾分隔符。 **String** 类型，只读。



## 语法

express.**LibraryPath**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例打开 Library 文件夹中的 example.xla 文件。*/
function test() {
    let pathSeparator = Application.PathSeparator
    let libraryPath = (`${Application.LibraryPath}${pathSeparator}example.xla`)
    Workbooks.Open(libraryPath)
}
```


```JavaScript
/*本示例将 Library 文件夹的路径赋值给 A1 单元格。*/
function test() {
    Range("A1").Value2 = Application.LibraryPath
}
```
