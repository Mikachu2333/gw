# Dictionaries.Maximum

返回允许的自定义或转换词典数目的最大值。 **Long** 类型，只读。



## 语法

express.**Maximum**

express   一个代表 **Dictionaries** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例判断如果自定义词典的数目等于允许的最大值，则显示一条信息。如果数目尚未达到最大值，则添加一个名为“example.dic”的自定义词典。*/
function test() {
    if (CustomDictionaries.Count == CustomDictionaries.Maximum) {
        alert("Cannot add another dictionary file")
    } else {
        Application.CustomDictionaries.Add("D:\\示例\\example.DIC")
    }
}
```


```JavaScript
/*本示例显示允许的自定义或转换词典的最大数量。*/
function test() {
    alert(Application.CustomDictionaries.Maximum)
}
```
