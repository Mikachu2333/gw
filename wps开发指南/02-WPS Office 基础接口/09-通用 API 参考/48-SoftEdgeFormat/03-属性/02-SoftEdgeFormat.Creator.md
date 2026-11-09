# SoftEdgeFormat.Creator

返回表示用于创建指定对象的应用程序的 32 位整数。只读 **。** 




## 语法

express.**Creator**

express   一个代表 **SoftEdgeFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果对象是在 WPS 中创建的，则 **Creator** 属性返回十六进制数 4D535744，代表 **string** “WPS”。该属性主要设计用于 Apple Macintosh 平台，在该平台上，每个应用程序都有一个由四个字符组成的创建者代码。例如， WPS 的创建者代码是 WPS。有关该属性的详细信息，请参考 WPS OfficeMacintosh Edition 附带的语言参考帮助。

|                               |
| ----------------------------- |
| 该值也可用常量 **wdCreatorCode** 表示。 |

