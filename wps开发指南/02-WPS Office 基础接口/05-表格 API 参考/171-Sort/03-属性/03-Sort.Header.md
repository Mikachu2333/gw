# Sort.Header

指定第一行是否包含标题信息。可读/写 **[XlYesNoGuess](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlYesNoGuess)** 类型。



## 语法

express.**Header**

express   一个代表 **Sort** 对象的变量。

## 类型

XlYesNoGuess

## 说明


默认值为 **xlNo** 。如果希望 ET 确定标题，可以指定 **xlGuess** 。



## 示例


```JavaScript
/*本示例将活动工作表设置为由 ET 确定排序时是否包含标题。*/
function test() {
    Application.ActiveSheet.Sort.Header = xlGuess
}
```


```JavaScript
/*本示例设置第一张工作表排序时第一行包含标题信息。*/
function test() {
    Application.Sheets.Item(1).Sort.Header = xlYes
}
```
