# LineNumbering.CountBy

返回或设置行号的间隔数值。 **Long** 类型，可读写。



## 语法

express.**CountBy**

express   一个代表 **LineNumbering** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果 **CountBy** 属性设置为 5，则每隔五行就会显示一次行号。只有在页面视图和打印预览中才显示行号。仅当 **LineNumbering** 对象的 **[Active](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineNumbering/member/Active)** 属性设置为 **True** 时，该属性才有效。



## 示例


```JavaScript
/*本示例将显示活动文档的行号。每五行显示一次行号，并且每节重新编号*/
function test() {
    let lineNumbering = Application.ActiveDocument.PageSetup.LineNumbering
    lineNumbering.Active = true
    lineNumbering.CountBy = 5
    lineNumbering.RestartMode = wdRestartSection
}
```


```JavaScript
/*本示例显示活动文档的行号间隔数值。*/
function test() {
    let lineNumbering = Application.ActiveDocument.PageSetup.LineNumbering
    alert("当前行号间隔数值为：" + lineNumbering.CountBy)
}
```
