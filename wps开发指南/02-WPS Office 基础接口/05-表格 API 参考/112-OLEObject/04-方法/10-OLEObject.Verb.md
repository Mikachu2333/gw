# OLEObject.Verb

向指定的 OLE 对象服务器发送动词。



## 语法

express.**Verb(Verb)**

express   一个代表 **OLEObject** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Verb | 可选 | XlOLEVerb | OLE 对象服务器将执行其操作的动词。如果省略此参数，则发送默认动词。对象的源应用程序决定哪些动词可用。OLE 对象的典型动词为 Open 和 Primary（由 XlOLEVerb 常量 xlOpen 和 xlPrimary 表示）。 |

## 返回值

Variant

## 示例


```JavaScript
/*本示例向工作表 Sheet1 的第一个 OLE 对象的服务器发送默认动词。*/
function test() {
    Application.Worksheets.Item("Sheet1").OLEObjects(1).Verb()
}
```


```JavaScript
/*此示例向活动工作表中的第二个 OLE 对象的服务器发送动词。*/
function test() {
    ActiveSheet.OLEObjects(2).Verb(xlVerbPrimary)
}
```
