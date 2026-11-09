# Validation.Formula1

返回与条件格式或者数据有效性相关联的值或表达式。可为常量值、字符串值、单元格引用或公式。 **String** 型，只读。



## 语法

express.**Formula1**

express   一个代表 **Validation** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示单元格 B1 的数据有效性验证的第一部分相关联的表达式。*/
function test() {
    let validation = ActiveSheet.Range("B1").Validation
    alert(validation.Formula1)
}
```


```JavaScript
/*本示例判断如果活动工作表上单元格 B1 的数据有效性验证的第一部分相关联的表达式为“=A1”，则删除该数据有效性验证。*/
function test() {
    let validation = ActiveSheet.Range("B1").Validation
    if (validation.Formula1 == "=A1") {
        validation.Delete()
    }
}
```
