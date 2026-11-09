# XMLMapping.Creator

返回一个 32 位的整数，该整数表示在其中创建加载项的应用程序。只读 **Long** 类型。



## 语法

express.**Creator**

express   一个代表 **XMLMapping** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果对象是在 WPS 中创建的，则 **Creator** 属性返回十六进制数 4D535744，代表字符串“WPS”。

该值也可用常量 **wdCreatorCode** 表示。

