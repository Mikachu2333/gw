# Application.AddIns2

返回一个 **[AddIns2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIns2/obj)** 集合，该集合表示 ET 中当前可用或打开的所有加载项，而不考虑它们是否已安装。只读。



## 语法

express.**AddIns2**

express   一个代表 **Application** 对象的变量。

## 类型

AddIns2

## 示例


```JavaScript
/*本示例显示“Analys32”加载宏的状态。注意，用作AddIns2集合索引的字符串是外接程序的标题，而不是外接程序的文件名。*/
function test() {
    if (Application.AddIns2("Analys32").Installed) {
        alert("Analys32 add-in is installed")
    } else {
        alert("Analys32 add-in is not installed")
    }
}
```


```JavaScript
/*本示例显示ET中第一个加载项的名称，包括其磁盘路径。*/
function test() {
    alert(Application.AddIns2.Item(1).FullName)
}
```
