# Application.AutoCorrect

返回一个 **[AutoCorrect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AutoCorrect/obj)** 对象，该对象包含当前“自动更正”的选项、词条和例外项。只读。



## 语法

express.**AutoCorrect**

express   一个代表 **Application** 对象的变量。

## 类型

AutoCorrect

## 示例


```JavaScript
/*本示例设置 WPS 以使其自动大写星期日期单词的首字母。*/
function test() {
    Application.AutoCorrect.CorrectDays = true
}
```


```JavaScript
/*本示例显示是否自动将表格单元格中键入内容的首字母大写。*/
function test() {
    alert(Application.AutoCorrect.CorrectTableCells)
}
```
