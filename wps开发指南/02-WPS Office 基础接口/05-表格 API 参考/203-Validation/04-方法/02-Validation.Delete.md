# Validation.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Validation** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除单元格 A1 的数据有效性验证。*/
function test() {
    Range("A1").Validation.Delete()
}
```


```JavaScript
/*本示例判断如果单元格 A1 的数据有效性验证的警告样式为xlValidAlertWarning，则删除该数据有效性验证。*/
function test() {
    let validation = ActiveSheet.Range("A1").Validation
    if (validation.AlertStyle == xlValidAlertWarning) {
        validation.Delete()
    }
}
```
