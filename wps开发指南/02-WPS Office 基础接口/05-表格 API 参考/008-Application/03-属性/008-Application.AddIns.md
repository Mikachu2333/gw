# Application.AddIns

返回一个 **[AddIns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AddIns/obj)** 集合，该集合表示 **“加载项”** 对话框（ **“工具”** 选项卡上的 **“加载项”** 命令）中列出的所有加载项。只读。



## 语法

express.**AddIns**

express   一个代表 **Application** 对象的变量。

## 类型

AddIns

## 说明


在不使用对象识别符的情况下使用这种方法等价于 `Application.Addins`。



## 示例


```JavaScript
/*本示例显示“Analys32”加载宏的状态。注意，用作AddIns集合索引的字符串是加载宏的标题，而不是加载宏的文件名。*/
function test() {
    if (Application.AddIns("Analys32").Installed) {
        alert("Analys32 add-in is installed")
    } else {
        alert("Analys32 add-in is not installed")
    }
}
```


```JavaScript
/*本示例显示ET可用的所有加载项的数量。*/
function test() {
    alert(Application.AddIns.Count)
}
```
