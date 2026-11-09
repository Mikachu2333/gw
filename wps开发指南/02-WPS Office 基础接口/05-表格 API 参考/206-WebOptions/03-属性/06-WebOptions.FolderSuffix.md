# WebOptions.FolderSuffix

返回文件夹后缀，当您将文档保存为网页、使用长文件名，以及选择将支持文件单独保存在某个文件夹中（即，如果 **UseLongFileNames** 和 **OrganizeInFolder** 属性设置为 **True** ）时，ET 使用该后缀。 **String** 型，只读。



## 语法

express.**FolderSuffix**

express   一个代表 **WebOptions** 对象的变量。

## 类型

string

## 说明


新建的文档将使用 **DefaultWebOptions** 对象的 **FolderSuffix** 属性所返回的后缀。如果文档曾在其他语言版本的 ET 中进行过编辑，则 **WebOptions** 对象的 **FolderSuffix** 属性的值可能会与 **DefaultWebOptions** 对象中该属性的值不同。可以使用 **UseDefaultFolderSuffix** 方法将后缀更改为当前在 WPS Office 中所使用的语言。

默认情况下，支持文件夹名由网页的名称加上一个下划线 (\_)、一个句点 (.) 或连字号 (-)，再加上单词“files”（将文件保存为网页的 ET 版本的语言形式）组成。例如，如果使用荷兰语版本的 ET 将名为“Page1”的文件保存为网页，则支持文件夹的默认名称为“Page1\_bestanden”。

下表列出 Office 的各个语言版本及相应的 **LanguageID** 属性值和文件夹后缀。对于表中没有列出的语言，其后缀为“.files”。

| 语言          | LanguageID | 文件夹后缀         |
| ----------- | ---------- | ------------- |
| 阿拉伯语        | 1025       | .files        |
| 巴斯克语        | 1069       | \_fitxategiak |
| 巴西葡萄牙语      | 1046       | \_arquivos    |
| 保加利亚语       | 1026       | .files        |
| 加泰罗尼亚语      | 1027       | \_fitxers     |
| 中文 - 简体     | 2052       | .files        |
| 中文 - 繁体     | 1028       | .files        |
| 克罗地亚语       | 1050       | \_datoteke    |
| 捷克语         | 1029       | \_soubory     |
| 丹麦语         | 1030       | \-filer       |
| 荷兰语         | 1043       | \_bestanden   |
| 英语          | 1033       | \_files       |
| 爱沙尼亚语       | 1061       | \_failid      |
| 芬兰语         | 1035       | \_tiedostot   |
| 法语          | 1036       | \_fichiers    |
| 德语          | 1031       | \-Dateien     |
| 希腊语         | 1032       | .files        |
| 希伯来语        | 1037       | .files        |
| 匈牙利语        | 1038       | \_elemei      |
| 意大利语        | 1040       | \-file        |
| 日语          | 1041       | .files        |
| 朝鲜语         | 1042       | .files        |
| 拉脱维亚语       | 1062       | \_fails       |
| 立陶宛语        | 1063       | \_bylos       |
| 挪威语         | 1044       | \-filer       |
| 波兰语         | 1045       | \_pliki       |
| 葡萄牙语        | 2070       | \_ficheiros   |
| 罗马尼亚语       | 1048       | .files        |
| 俄语          | 1049       | .files        |
| 塞尔维亚语(西里尔文) | 3098       | .files        |
| 塞尔维亚语（拉丁文）  | 2074       | \_fajlovi     |
| 斯洛伐克语       | 1051       | .files        |
| 斯洛文尼亚语      | 1060       | \_datoteke    |
| 西班牙语        | 3082       | \_archivos    |
| 瑞典语         | 1053       | \-filer       |
| 泰语          | 1054       | .files        |
| 土耳其语        | 1055       | \_dosyalar    |
| 乌克兰语        | 1058       | .files        |
| 越南语         | 1066       | .files        |



## 示例


```JavaScript
/*此示例返回第一个工作簿所使用的文件夹后缀。该后缀将返回到字符串变量 strFolderSuffix 中。*/
function test() {
    let strFolderSuffix = Application.Workbooks.Item(1).WebOptions.FolderSuffix
}
```


```JavaScript
/*本示例显示活动工作簿所使用的文件夹后缀。*/
function test() {
    alert(ActiveWorkbook.WebOptions.FolderSuffix)
}
```
