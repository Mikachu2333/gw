# Range.CheckSpelling

开始对指定的文档或区域进行拼写检查。



## 语法

express.**CheckSpelling(CustomDictionary, IgnoreUppercase, AlwaysSuggest, CustomDictionary2, CustomDictionary3, CustomDictionary4, CustomDictionary5, CustomDictionary6, CustomDictionary7, CustomDictionary8, CustomDictionary9, CustomDictionary10)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| CustomDictionary | 可选 | any | 或为返回 **Dictionary** 对象的表达式，或为自定义词典的文件名。 |
| IgnoreUppercase | 可选 | any | 如果忽略大小写，则该属性值为 **True** 。如果省略该参数，则使用 **IgnoreUppercase** 属性的当前值。 |
| AlwaysSuggest | 可选 | any | 如果该属性值为 **True** ，则 WPS 总是给出建议的拼写。如果省略该参数，则使用 **SuggestSpellingCorrections** 属性的当前值。 |
| CustomDictionary2 | 可选 | any | 或为返回 **Dictionary** 对象的表达式，或为自定义词典的文件名。最多可以指定 9 个附加词典。 |
| CustomDictionary3 | 可选 | any | 或为返回 **Dictionary** 对象的表达式，或为自定义词典的文件名。最多可以指定 9 个附加词典。 |
| CustomDictionary4 | 可选 | any | 或为返回 **Dictionary** 对象的表达式，或为自定义词典的文件名。最多可以指定 9 个附加词典。 |
| CustomDictionary5 | 可选 | any | 或为返回 **Dictionary** 对象的表达式，或为自定义词典的文件名。最多可以指定 9 个附加词典。 |
| CustomDictionary6 | 可选 | any | 或为返回 **Dictionary** 对象的表达式，或为自定义词典的文件名。最多可以指定 9 个附加词典。 |
| CustomDictionary7 | 可选 | any | 或为返回 **Dictionary** 对象的表达式，或为自定义词典的文件名。最多可以指定 9 个附加词典。 |
| CustomDictionary8 | 可选 | any | 或为返回 **Dictionary** 对象的表达式，或为自定义词典的文件名。最多可以指定 9 个附加词典。 |
| CustomDictionary9 | 可选 | any | 或为返回 **Dictionary** 对象的表达式，或为自定义词典的文件名。最多可以指定 9 个附加词典。 |
| CustomDictionary10 | 可选 | any | 或为返回 **Dictionary** 对象的表达式，或为自定义词典的文件名。最多可以指定 9 个附加词典。 |

## 返回值

void

## 说明


如果该文档或区域中包含错误，则该方法显示 **“拼写和语法”** 对话框，并且 **“检查语法”** 复选框处于清除状态。



## 示例


```JavaScript
/*本示例开始对第一篇文档的第一节进行拼写检查。*/
function test() {
    let range = Documents.Item(1).Sections.Item(1).Range
    range.CheckSpelling("D:\\示例\\Work.Dic", false, null, "D:\\示例\\Technical.Dic")
}
```


```JavaScript
/*本示例开始对所选内容进行拼写检查。*/
function test() {
    Selection.Range.CheckSpelling(CustomDictionaries.Item(1), true, true)
}
```
