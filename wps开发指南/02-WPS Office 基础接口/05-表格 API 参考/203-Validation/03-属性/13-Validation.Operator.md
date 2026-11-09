# Validation.Operator

返回一个 **Long** 值，它代表数据有效性的运算符。



## 语法

express.**Operator**

express   一个代表 **Validation** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示单元格 B1 的数据有效性的运算符是否为xlBetween。*/
function test() {
    alert(Range("B1").Validation.Operator == xlBetween)
}
```


```JavaScript
/*本示例判断活动工作表上 B1 单元格的数据有效性的运算符是否为xlGreater，并通知用户。*/
function test() {
    let validation = Application.ActiveSheet.Range("B1").Validation
    if (validation.Operator == xlGreater) {
        alert("数据有效性的运算符为xlGreater")
    } else {
        alert("数据有效性的运算符不为xlGreater")
    }
}
```
