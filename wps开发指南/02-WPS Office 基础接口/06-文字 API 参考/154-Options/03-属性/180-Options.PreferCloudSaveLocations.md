# Options.PreferCloudSaveLocations

如果为 **True** ，则默认将新文档保存在 Web 位置。 **Boolean** 类型，可读写。



## 语法

express.**PreferCloudSaveLocations**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 默认将新文档保存在 Web 位置。*/
function test() {
    Options.PreferCloudSaveLocations = true
}
```


```JavaScript
/*本示例判断如果 WPS 默认将新文档保存在 Web 位置，则通知用户。*/
function test() {
    if (Options.PreferCloudSaveLocations) {
        alert("WPS 默认将新文档保存在 Web 位置。")
    }
}
```
