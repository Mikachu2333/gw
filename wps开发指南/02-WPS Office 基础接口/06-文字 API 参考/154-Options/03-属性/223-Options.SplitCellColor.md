# Options.SplitCellColor

返回或设置一个 **WdCellColor** 常量，该常量代表拆分的表格单元格的颜色。可读写。



## 语法

express.**SplitCellColor**

express   一个代表 **Options** 对象的变量。

## 类型

WdCellColor

## 说明


此属性仅适用于对其运行了 **[CompareDocuments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CompareDocuments)** 、 **[Compare](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Compare)** 或 **[Merge](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/Merge)** 方法的文档。



## 示例


```JavaScript
/*本示例设置 WPS 拆分的表格单元格的颜色为粉红色。*/
function test() {
    Options.SplitCellColor = wdCellColorPink
}
```


```JavaScript
/*本示例显示 WPS 拆分的表格单元格的颜色是否为浅黄色。*/
function test() {
    alert(Options.SplitCellColor == wdCellColorLightYellow)
}
```
