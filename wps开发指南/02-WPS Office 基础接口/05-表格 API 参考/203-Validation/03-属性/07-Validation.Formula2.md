# Validation.Formula2

返回与条件格式或数据有效性验证第二部分相关联的值或表达式。仅用于数据有效性条件格式 **Operator** 属性为 **xlBetween** 或 **xlNotBetween** 的情况。可为常量值、字符串值、单元格引用或公式。 **String** 类型，只读。



## 语法

express.**Formula2**

express   一个代表 **Validation** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示单元格 B2 的数据有效性验证的第二部分相关联的值。*/
function test() {
    alert(Range("B2").Validation.Formula2)
}
```


```JavaScript
/*本示例将活动工作表上单元格 B2 的数据有效性验证的第二部分相关联的值赋值给 C1 单元格。*/
function test() {
    let validation = ActiveSheet.Range("B2").Validation
    Range("C1").Value2 = validation.Formula2
}
```
