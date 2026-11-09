# Dictionary.Delete

删除指定的词典。



## 语法

express.**Delete()**

express   一个代表 **Dictionary** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除第二个自定义词典。*/
function test() {
    let dictionary = Application.CustomDictionaries.Item(2)
    dictionary.Delete()
}
```


```JavaScript
/*本示例删除名为“example.DIC”的自定义词典。*/
function test() {
    for (let i = 1; i <= Application.CustomDictionaries.Count; i++) {
        let dictionary = Application.CustomDictionaries.Item(i)
        if (dictionary.Name == "example.DIC") {
            dictionary.Delete()
        }
    }
}
```
