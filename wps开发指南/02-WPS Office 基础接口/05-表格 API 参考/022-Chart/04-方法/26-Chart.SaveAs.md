# Chart.SaveAs

将对图表或工作表的更改保存到另一不同文件中。



## 语法

express.**SaveAs(Filename, FileFormat, Password, WriteResPassword, ReadOnlyRecommended, CreateBackup, AddToMru, TextCodepage, TextVisualLayout, Local)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | Variant。一个字符串，表示要保存的文件名。可包含完整路径。如果不指定路径，ET 将文件保存到当前文件夹中。 |
| FileFormat | 可选 | any | 保存文件时使用的文件格式。要查看有效的选项列表，请参阅 FileFormat 属性。对于现有文件，默认采用上一次指定的文件格式；对于新文件，默认采用当前所用 ET 版本的格式。 |
| Password | 可选 | any | 它是一个区分大小写的字符串（最长不超过 15 个字符），用于指定文件的保护密码。 |
| WriteResPassword | 可选 | any | 一个表示文件写保护密码的字符串。如果文件保存时带有密码，但打开文件时不输入密码，则该文件以只读方式打开。 |
| ReadOnlyRecommended | 可选 | any | 如果为 True，则在打开文件时显示一条消息，提示该文件以只读方式打开。 |
| CreateBackup | 可选 | any | 如果为 True，则创建备份文件。 |
| AddToMru | 可选 | any | 如果为 True，则将该工作簿添加到最近使用的文件列表中。默认值是 False。 |
| TextCodepage | 可选 | any | 不在美国英语版的 ET 中使用。 |
| TextVisualLayout | 可选 | any | 不在美国英语版的 ET 中使用。 |
| Local | 可选 | any | 如果为 True，则以 ET（包括控制面板设置）的语言保存文件。如果为 False（默认值），则以 示例代码 (VBA) 的语言保存文件，其中 示例代码 (VBA) 通常为美国英语版本，除非从中运行 Workbooks.Open 的 VBA 项目是旧的已国际化的 XL5/95 VBA 项目。 |

## 返回值

void

## 说明


请使用同时包含大小写字母、数字和符号的强密码。弱密码不混合使用这些元素。强密码：Y6dh!et5。弱密码：House27。请使用您可以记住的强密码，这样就不必将它写下来。



## 示例


```JavaScript
/*本示例将图表工作表 Chart1 保存到Chart1.xlsx，并指定打开密码。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.SaveAs("Chart1.xlsx", null, "Y6dh!et5")
}
```


```JavaScript
/*本示例将图表工作表 Chart2 保存到 myChart.xlsx，并设置为以只读方式打开。*/
function test() {
    let chart = Application.Charts.Item("Chart2")
    chart.SaveAs("myChart.xlsx", null, null, null, true, false, true)
}
```
