# Application.CheckSpelling

检查字符串的拼写错误。返回一个 **Boolean** 类型的值，以显示字符串是否包含拼写错误。如果字符串未包含拼写错误，则该值为 **True** 。



## 语法

express.**CheckSpelling(Word, CustomDictionary, IgnoreUppercase, MainDictionary, CustomDictionary2, CustomDictionary3, CustomDictionary4, CustomDictionary5, CustomDictionary6, CustomDictionary7, CustomDictionary8, CustomDictionary9, CustomDictionary10)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Word | 必选 | string | 要对其进行拼写检查的文本。 |
| CustomDictionary | 可选 | any | 可以是返回 Dictionary 对象的表达式，也可以是自定义词典的文件名。 |
| IgnoreUppercase | 可选 | any | 如果忽略大小写，则该属性值为 **True** 。如果省略该参数，则使用 **IgnoreUppercase** 属性的当前值。 |
| MainDictionary | 可选 | any | 可以是返回 **Dictionary** 对象的表达式，也可以是主词典的文件名。 |
| CustomDictionary2 | 可选 | any | 可以是返回 **Dictionary** 对象的表达式，也可以是附加的自定义词典的文件名。 |
| CustomDictionary3 | 可选 | any | 可以是返回 **Dictionary** 对象的表达式，也可以是附加的自定义词典的文件名。 |
| CustomDictionary4 | 可选 | any | 可以是返回 **Dictionary** 对象的表达式，也可以是附加的自定义词典的文件名。 |
| CustomDictionary5 | 可选 | any | 可以是返回 **Dictionary** 对象的表达式，也可以是附加的自定义词典的文件名。 |
| CustomDictionary6 | 可选 | any | 可以是返回 **Dictionary** 对象的表达式，也可以是附加的自定义词典的文件名。 |
| CustomDictionary7 | 可选 | any | 可以是返回 **Dictionary** 对象的表达式，也可以是附加的自定义词典的文件名。 |
| CustomDictionary8 | 可选 | any | 可以是返回 **Dictionary** 对象的表达式，也可以是附加的自定义词典的文件名。 |
| CustomDictionary9 | 可选 | any | 可以是返回 **Dictionary** 对象的表达式，也可以是附加的自定义词典的文件名。 |
| CustomDictionary10 | 可选 | any | 可以是返回 **Dictionary** 对象的表达式，也可以是附加的自定义词典的文件名。 |

## 返回值

Boolean

## 示例


```JavaScript
/*本示例判断指定字符串是否包含拼写错误，并通知用户。*/
function test() {
    if (Application.CheckSpelling("example")) {
        alert("字符串未包含拼写错误")
    } else {
        alert("字符串包含拼写错误")
    }
}
```


```JavaScript
/*本示例显示指定字符串是否包含拼写错误。*/
function test() {
    alert(!Application.CheckSpelling("exampl", Application.CustomDictionaries.Item(1), false))
}
```
