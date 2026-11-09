# Range.TCSCConverter

将指定区域的文本由繁体中文转换为简体中文，或进行相反转换。



## 语法

express.**TCSCConverter(Direction, CommonTerms, UseVariants)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Direction | 可选 | WdTCSCConverterDirection | 指定文本的转换方向。如果省略，则默认值为 **wdTCSCConverterDirectionAuto** ，这将基于检测的指定区域语言在相应的方向转换。 |
| CommonTerms | 可选 | boolean | 如果该参数值为 **True** ，则完整转换常用术语。 |
| UseVariants | 可选 | boolean | 如果该属性值为 **True** ，则 WPS 使用香港特别行政区、澳门特别行政区和台湾地区的变体字。只能在简体中文向繁体中文转换时使用。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将当前选定内容从简体中文转换为繁体中文。它完整地转换常用表达式，并使用区域字符变体。*/
function test() {
    Selection.Range.TCSCConverter(wdTCSCConverterDirectionSCTC, true, true)
}
```


```JavaScript
/*本示例将活动文档的主文档文章的文本由繁体中文转换为简体中文。*/
function test() {
    ActiveDocument.Content.TCSCConverter(wdTCSCConverterDirectionTCSC)
}
```
