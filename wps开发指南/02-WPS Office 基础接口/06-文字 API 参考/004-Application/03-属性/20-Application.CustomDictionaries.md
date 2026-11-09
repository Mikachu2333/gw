# Application.CustomDictionaries

返回一个 **[Dictionaries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionaries/obj)** 对象，该对象代表活动自定义词典的集合。只读。



## 语法

express.**CustomDictionaries**

express   一个代表 **Application** 对象的变量。

## 类型

Dictionaries

## 说明


在 **“自定义词典”** 对话框中选中复选框的词典即为活动自定义词典。



## 示例


```JavaScript
/*本示例在自定义词典集合中添加一个新的空白自定义词典，然后显示该自定义词典的路径和文件名。*/
function test() {
    let dictionary = Application.CustomDictionaries.Add("D:\\Dict\\Home.dic")
    alert(dictionary.Path + dictionary.Name)
}
```


```JavaScript
/*此示例删除所有自定义词典，以便没有自定义词典处于活动状态。但自定义词典文件不会被删除。*/
function test() {
    Application.CustomDictionaries.ClearAll()
}
```


```JavaScript
/*本示例显示所有自定义词典的名称。*/
function test() {
    for (let i = 1; i <= Application.CustomDictionaries.Count; i++) {
        alert(Application.CustomDictionaries.Item(i).Name)
    }
}
```
