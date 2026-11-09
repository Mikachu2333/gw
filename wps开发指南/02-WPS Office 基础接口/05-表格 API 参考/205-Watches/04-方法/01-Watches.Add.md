# Watches.Add

添加在重新计算工作表时要跟踪的区域。



## 语法

express.**Add(Source)**

express   一个代表 **Watches** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Source | 必选 | any | 单元格区域的源。 |

## 返回值

一个代表新区域的 **[Watch](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Watch/obj)** 对象。

## 示例


```JavaScript
/*本示例在单元格 A3 中创建求和公式，并将该单元格添加至监视工具中。*/
function test() {
    Application.Range("A1").Formula = 1
    Application.Range("A2").Formula = 2
    Application.Range("A3").Formula = "=Sum(A1:A2)"
    Application.Range("A3").Select()
    Application.Watches.Add(ActiveCell)
}
```


```JavaScript
/*本示例为单元格 A1 赋值，并将该单元格添加至监视工具中。*/
function test() {
    Range("A1").Value2 = 1
    Range("A1").Select()
    Application.Watches.Add(ActiveCell)
}
```
