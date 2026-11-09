# DefaultWebOptions.FolderSuffix

返回一个 **String** 类型的值，该值代表 WPS 在将文档另存为网页、使用长文件名或将支持文件保存在单独的文件夹中时使用的文件夹后缀。只读。



## 语法

express.**FolderSuffix**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

string

## 说明


要将支持文件保存在单独的文件夹，请将 **UseLongFileNames** 和 **OrganizeInFolder** 属性设置为 **True** 。

新创建的文档使用 **DefaultWebOptions** 对象的 **FolderSuffix** 属性返回的后缀。如果以前曾在 WPS 的不同语言版本中编辑过该文档，则 **WebOptions** 对象的 **FolderSuffix** 属性值可能与 **DefaultWebOptions** 对象的该属性值不同。可用 **UseDefaultFolderSuffix** 方法将后缀更改为当前在 WPS Office 中所用语言的后缀。

默认情况下，支持文件夹的名称是网页的名称加下划线 (\_)、句号 (.) 或连字符 (-) 和单词“files”组成（以文件另存为网页时所用的 WPS 版本的语言显示“files”）。例如，假定用 WPS 的荷兰语版本将名为“Page1”的文件保存为网页，则默认的支持文件夹名为“Page1\_bestanden”。

下表列出了 Office 的各种语言版本，并赋予相应的属性值和文件夹后缀。未列在表中的语言使用“.files”作为后缀。

| 语言          | 语言ID | 文件夹后缀         |
| ----------- | ---- | ------------- |
| 阿拉伯语        | 1025 | .files        |
| 巴斯克语        | 1069 | \_fitxategiak |
| 巴西语         | 1046 | \_arquivos    |
| 保加利亚语       | 1026 | .files        |
| 加泰罗尼亚语      | 1027 | \_fitxers     |
| 中文 - 简体     | 2052 | .files        |
| 中文 - 繁体     | 1028 | .files        |
| 克罗地亚语       | 1050 | \_datoteke    |
| 捷克语         | 1029 | \_soubory     |
| 丹麦语         | 1030 | \-filer       |
| 荷兰语         | 1043 | \_bestanden   |
| 英语          | 1033 | \_files       |
| 爱沙尼亚语       | 1061 | \_failid      |
| 芬兰语         | 1035 | \_tiedostot   |
| 法语          | 1036 | \_fichiers    |
| 德语          | 1031 | \-Dateien     |
| 希腊语         | 1032 | .files        |
| 希伯来语        | 1037 | .files        |
| 匈牙利语        | 1038 | \_elemei      |
| 意大利语        | 1040 | \_file        |
| 日语          | 1041 | .files        |
| 朝鲜语         | 1042 | .files        |
| 拉脱维亚语       | 1062 | \_fails       |
| 立陶宛语        | 1063 | \_bylos       |
| 挪威语         | 1044 | \-filer       |
| 波兰语         | 1045 | \_pliki       |
| 葡萄牙语        | 2070 | \_ficheiros   |
| 罗马尼亚语       | 1048 | .files        |
| 俄语          | 1049 | .files        |
| 塞尔维亚语(西里尔文) | 3098 | .files        |
| 塞尔维亚语(拉丁文)  | 2074 | \_fajlovi     |
| 斯洛伐克语       | 1051 | .files        |
| 斯洛文尼亚语      | 1060 | \_datoteke    |
| 西班牙语        | 3082 | \_archivos    |
| 瑞典语         | 1053 | \-filer       |
| 泰语          | 1054 | .files        |
| 土耳其语        | 1055 | \_dosyalar    |
| 乌克兰语        | 1058 | .files        |
| 越南语         | 1066 | .files        |



## 示例


```JavaScript
/*本示例将文档另存为网页时（Web全局选项）使用的文件夹后缀放置于一个 String 变量中。*/
function test() {
    let folderSuffix = Application.DefaultWebOptions().FolderSuffix
}
```


```JavaScript
/*本示例将所选内容的文本替换为将文档另存为网页时使用的文件夹后缀。*/
function test() {
    Selection.Range.Text = Application.DefaultWebOptions().FolderSuffix
}
```
