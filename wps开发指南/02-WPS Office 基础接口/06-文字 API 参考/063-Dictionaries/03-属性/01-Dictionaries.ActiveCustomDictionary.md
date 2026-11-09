# Dictionaries.ActiveCustomDictionary

返回或设置一个 **[Dictionary](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionary/obj)** 对象，该对象代表加入单词的自定义词典。可读写。



## 语法

express.**ActiveCustomDictionary**

express   一个代表 **Dictionaries** 对象的变量。

## 类型

Dictionary

## 示例


```JavaScript
/*本示例显示活动自定义词典的完整路径和文件名。*/
function test() {
    let dictionary = Application.CustomDictionaries.ActiveCustomDictionary
    alert(dictionary.Path + Application.PathSeparator + dictionary.Name)
}
```


```JavaScript
/*本示例清除所有现有的自定义词典，然后添加一个名为“example.DIC”的自定义词典并加载该新词典。*/
function test() {
    Application.CustomDictionaries.ClearAll()
    let dictionary = Application.CustomDictionaries.Add("D:\\示例\\example.DIC")
    Application.CustomDictionaries.ActiveCustomDictionary = dictionary
}
```
