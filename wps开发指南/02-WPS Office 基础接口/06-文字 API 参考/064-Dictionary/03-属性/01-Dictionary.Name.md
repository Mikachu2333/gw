# Dictionary.Name

返回指定对象的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **Dictionary** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一个自定义词典的名称。*/
function test() {
    let dictionary = Application.CustomDictionaries.Item(1)
    alert(dictionary.Name)
}
```


```JavaScript
/*本示例显示所有自定义词典的名称。*/
function test() {
    for (let i = 1; i <= Application.CustomDictionaries.Count; i++) {
        let dictionary = Application.CustomDictionaries.Item(i)
        alert(dictionary.Name)
    }
}
```
