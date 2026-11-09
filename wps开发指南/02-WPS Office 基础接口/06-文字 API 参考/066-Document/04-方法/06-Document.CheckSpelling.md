# Document.CheckSpelling

开始对指定的文档或区域进行拼写检查。



## 语法

express.**CheckSpelling(CustomDictionary, IgnoreUppercase, AlwaysSuggest, CustomDictionary2, CustomDictionary3, CustomDictionary4, CustomDictionary5, CustomDictionary6, CustomDictionary7, CustomDictionary8, CustomDictionary9, CustomDictionary10)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| CustomDictionary | 可选 | any | 返回 **Dictionary** 对象的表达式或自定义词典的文件名。 |
| IgnoreUppercase | 可选 | any | 如果忽略大小写，则该属性值为 **True** 。如果省略该参数，则使用 **IgnoreUppercase** 属性的当前值。 |
| AlwaysSuggest | 可选 | any | 如果该属性值为 **True** ，则 WPS 总是给出建议的拼写。如果省略该参数，则使用 **SuggestSpellingCorrections** 属性的当前值。 |
| CustomDictionary2 | 可选 | any | 返回 **Dictionary** 对象的表达式或自定义词典的文件名。您可以指定多达 9 个其他词典。 |
| CustomDictionary3 | 可选 | any | 返回 **Dictionary** 对象的表达式或自定义词典的文件名。您可以指定多达 9 个其他词典。 |
| CustomDictionary4 | 可选 | any | 返回 **Dictionary** 对象的表达式或自定义词典的文件名。您可以指定多达 9 个其他词典。 |
| CustomDictionary5 | 可选 | any | 返回 **Dictionary** 对象的表达式或自定义词典的文件名。您可以指定多达 9 个其他词典。 |
| CustomDictionary6 | 可选 | any | 返回 **Dictionary** 对象的表达式或自定义词典的文件名。您可以指定多达 9 个其他词典。 |
| CustomDictionary7 | 可选 | any | 返回 **Dictionary** 对象的表达式或自定义词典的文件名。您可以指定多达 9 个其他词典。 |
| CustomDictionary8 | 可选 | any | 返回 **Dictionary** 对象的表达式或自定义词典的文件名。您可以指定多达 9 个其他词典。 |
| CustomDictionary9 | 可选 | any | 返回 **Dictionary** 对象的表达式或自定义词典的文件名。您可以指定多达 9 个其他词典。 |
| CustomDictionary10 | 可选 | any | 返回 **Dictionary** 对象的表达式或自定义词典的文件名。您可以指定多达 9 个其他词典。 |

## 返回值

void

## 说明


如果该文档或区域中包含错误，则该方法显示 **“拼写和语法”** 对话框（ **“工具”** 菜单），其中 **“检查语法”** 复选框处于清除状态。该方法应用于文档时，将检查文档中所有可用文字的拼写（如页眉、页脚和文本框）。



## 示例


```JavaScript
/*本示例检查活动文档中的拼写。*/
function test() {
    ActiveDocument.CheckSpelling()
}
```


```JavaScript
/*本示例判断如果第一个文档上拼写错误的单词大于等于1，则检查第一个文档中的拼写，否则通知用户。*/
function test() {
    if (Documents.Item(1).SpellingErrors.Count >= 1) {
        Documents.Item(1).CheckSpelling(Application.CustomDictionaries.Item(1), false, true)
    } else {
        alert('文档中没有拼写错误')
    }
}
```
