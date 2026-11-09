# Application.CheckSpelling

对单个单词进行拼写检查。



## 语法

express.**CheckSpelling(Word, CustomDictionary, IgnoreUppercase)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Word | 必选 | string | （仅应用于 **Application** 对象）要检查的单词。 |
| CustomDictionary | 可选 | any | 一个字符串，它表示自定义词典的文件名，如果在主词典中找不到单词，则会到此词典中查找。如果省略此参数，则使用当前指定的词典。 |
| IgnoreUppercase | 可选 | any | 如果为 **True** ，则 ET 忽略所有字母都是大写的单词。如果为 **False** ，则 ET 检查所有字母都是大写的单词。如果省略此参数，将使用当前的设置。 |

## 返回值

如果在任一词典中找到单词，则为 **True** ；否则为 **False** 。

## 说明


要检查工作表中的页眉、页脚和对象，可对 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 对象使用此方法。

要仅检查单元格和批注，可对 **[Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Cells)** 属性返回的对象使用此方法。



## 示例


```JavaScript
/*此示例演示CheckSpelling方法对单个单词拼写检查。*/
function test() {
    alert("Hello是否拼写正确：" + Application.CheckSpelling("Hello"))
}
```


```JavaScript
/*此示例演示检查A1单元格上的大写单词KING。*/
function test() {
    Application.Range("A1").Value2 = "KING"
    alert("检查结果：" + Application.CheckSpelling(Cells(1, 1).Value2, undefined, false))
}
```
