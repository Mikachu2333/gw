# Validation.Type

返回一个包含 **XlDVType** 常量的 **Long** 值，它代表区域的数据类型有效性验证。



## 语法

express.**Type**

express   一个代表 **Validation** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表上单元格 B1 的数据有效性验证的类型是否为xlValidateWholeNumber。*/
function test() {
    let validation = Application.Worksheets.Item(1).Range("B1").Validation
    alert(validation.Type == xlValidateWholeNumber)
}
```


```JavaScript
/*本示例判断活动工作表上 B1 单元格的数据有效性验证的类型是否为xlValidateDate，并通知用户。*/
function test() {
    let validation = Application.ActiveSheet.Range("B1").Validation
    if (validation.Type == xlValidateDate) {
        alert("数据有效性验证的类型为xlValidateDate")
    } else {
        alert("数据有效性验证的类型不为xlValidateDate")
    }
}
```
