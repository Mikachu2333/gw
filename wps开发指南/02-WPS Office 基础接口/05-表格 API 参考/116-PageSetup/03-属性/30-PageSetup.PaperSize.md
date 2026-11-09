# PageSetup.PaperSize

返回或设置纸张的大小。XlPaperSize 类型，可读写。



## 语法

express.**PaperSize**

express   一个代表 **PageSetup** 对象的变量。

## 类型

XlPaperSize

## 说明


| **XlPaperSize** 可为以下 **XlPaperSize** 常量之一。                 |
| ---------------------------------------------------------- |
| **xlPaper11x17** ：11 in. x 17 in.                           |
| **xlPaperA4** ：A4 (210 mm x 297 mm)                         |
| **xlPaperA5** ：A5 (148 mm x 210 mm)                         |
| **xlPaperB5** ：A5 (148 mm x 210 mm)                         |
| **xlPaperDsheet** ：D 型纸                                     |
| **xlPaperEnvelope11** ：信封 #11 (4-1/2 in. x 10-3/8 in.)      |
| **xlPaperEnvelope14** ：信封 #14 (5 in. x 11-1/2 in.)          |
| **xlPaperEnvelopeB4** ：信封 B4 (250 mm x 353 mm)              |
| **xlPaperEnvelopeB6** ：信封 (176 mm x 125 mm)                 |
| **xlPaperEnvelopeC4** ：信封 C4 (229 mm x 324 mm)              |
| **xlPaperEnvelopeC6** ：信封 C6 (114 mm x 162 mm)              |
| **xlPaperEnvelopeDL** ：信封 DL (110 mm x 220 mm)              |
| **xlPaperEnvelopeMonarch** ：君主式信封 (3-7/8 in. x 7-1/2 in.)   |
| **xlPaperEsheet** ：E 型纸                                     |
| **xlPaperFanfoldLegalGerman** ：德国正规复写簿 (8-1/2 in. x 13 in.) |
| **xlPaperFanfoldUS** ：美国标准复写簿 (14-7/8 in. x 11 in.)         |
| **xlPaperLedger** ：帐单 (17 in. x 11 in.)                     |
| **xlPaperLetter** ：信函 (8-1/2 in. x 11 in.)                  |
| **xlPaperNote** ：便笺 (8-1/2 in. x 11 in.)                    |
| **xlPaperStatement** ：报告单 (5-1/2 in. x 8-1/2 in.)           |
| **xlPaperUser** ：用户自定义                                      |
| **xlPaper10x14** ：10 in. x 14 in.                           |
| **xlPaperA3** ：A3 (297 mm x 420 mm)                         |
| **xlPaperA4Small** ：A4（小）(210 mm x 297 mm)                  |
| **xlPaperB4** ：B4 (250 mm x 354 mm)                         |
| **xlPaperCsheet** ：C 型纸                                     |
| **xlPaperEnvelope10** ：信封 #10 (4-1/8 in. x 9-1/2 in.)       |
| **xlPaperEnvelope12** ：信封 #12 (4-1/2 in. x 11 in.)          |
| **xlPaperEnvelope9** ：信封 #9 (3-7/8 in. x 8-7/8 in.)         |
| **xlPaperEnvelopeB5** ：信封 B5 (176 mm x 250 mm)              |
| **xlPaperEnvelopeC3** ：信封 C3 (324 mm x 458 mm)              |
| **xlPaperEnvelopeC5** ：信封 C5 (162 mm x 229 mm)              |
| **xlPaperEnvelopeC65** ：信封 C65 (114 mm x 229 mm)            |
| **xlPaperEnvelopeItaly** ：信封 (110 mm x 230 mm)              |
| **xlPaperEnvelopePersonal** ：信封 (3-5/8 in. x 6-1/2 in.)     |
| **xlPaperExecutive** ：行政公文纸 (7-1/2 in. x 10-1/2 in.)        |
| **xlPaperFanfoldStdGerman** ：德国正规复写簿 (8-1/2 in. x 13 in.)   |
| **xlPaperFolio** ：对开 (8-1/2 in. x 13 in.)                   |
| **xlPaperLegal** ：正式信封 (8-1/2 in. x 14 in.)                 |
| **xlPaperLetterSmall** ：简式信纸 (8-1/2 in. x 11 in.)           |
| **xlPaperQuarto** ：四开 (215 mm x 275 mm)                     |
| **xlPaperTabloid** ：文摘 (11 in. x 17 in.)                    |

上面这些纸张大小可能不为所有打印机支持。



## 示例


```JavaScript
/*本示例将 Sheet1 的纸张大小设置为正式信封。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.PaperSize = xlPaperLegal
}
```


```JavaScript
/*本示例将活动工作表的纸张大小设置为C型纸。*/
function test() {
    ActiveSheet.PageSetup.PaperSize = xlPaperCsheet
}
```
