# Application.Build

返回 WPS 应用程序的版本号及编译序号。 **String** 类型，只读。



## 语法

express.**Build**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示 WPS 的版本号和编译序号。*/
function test() {
    MsgBox(Application.Build, null, "WPS Version")
}
```


```JavaScript
/*本示例在所选区域插入 WPS 的版本号和编译序号。*/
function test() {
    Selection.TypeText(Application.Build)
}
```
