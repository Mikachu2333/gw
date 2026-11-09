# Dictionaries.ClearAll

卸载所有的自定义或转换词典。



## 语法

express.**ClearAll()**

express   一个代表 **Dictionaries** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例卸载所有的自定义词典。*/
function test() {
    Application.CustomDictionaries.ClearAll()
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
