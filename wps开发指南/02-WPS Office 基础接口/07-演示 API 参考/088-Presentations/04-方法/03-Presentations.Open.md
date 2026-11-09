# Presentations.Open

打开指定的演示文稿。返回一个 **[Presentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/obj)** 对象，该对象代表已打开的演示文稿。



## 语法

express.**Open(FileName, ReadOnly, Untitled, WithWindow)**

express   一个代表 **Presentations** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 要打开的文件名。 |
| ReadOnly | 可选 | MsoTriState | 指定是以可读/写状态还是以只读状态打开文件。 |
| Untitled | 可选 | MsoTriState | 指定文件是否有标题。 |
| WithWindow | 可选 | MsoTriState | 指定文件是否可见。 |

## 返回值

Presentation

## 说明


安装适当的文件转换程序后，WPP 可打开具有下列 MS-DOS 文件扩展名的文件：.ch3、.cht、.doc、.htm、.html、.mcw、.pot、.ppa、.pps、.ppt、.pre、.rtf、.sh3、.shw、.txt、.wk1、.wk3、.wk4、.wpd、.wpf、.wps 和 .xls。WPP 还会打开扩展名为以下的文件：.docm、.docx、.mhtml、.potm、.potx、.ppam、.pptm、.pptx、.ppsm、.ppsx、.thmx、.xlsm 和 .xlsx。

*ReadOnly* 可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| --- | --- |
| **msoFalse** | 默认值。以可读/写状态打开文件。 |
| **msoTrue** | 以只读状态打开文件。 |

*Untitled* 可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| --- | --- |
| **msoFalse** | 默认值。文件名自动成为打开的演示文稿的标题。 |
| **msoTrue** | 打开一个没有标题的文件。这等同于创建该文件的副本。 |

*WithWindow* 可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| --- | --- |
| **msoFalse** | 隐藏打开的演示文稿。 |
| **msoTrue** | 默认值。在可视窗口中打开文件。 |



## 示例


```JavaScript
/*本示例以只读状态打开一个演示文稿。*/
function test() {
    Application.Presentations.Open("C:\\Document\\pres1.pptx", msoTrue)
}
```


```JavaScript
/*本示例打开由“pres1.pptx”演示文稿创建的副本，并显示打开的演示文稿的名称。*/
function test() {
    let presentation = Presentations.Open("D:\\pres1.pptx", msoFalse, msoTrue, msoTrue)
    alert(presentation.Name)
}
```
