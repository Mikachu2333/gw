# Workbook.IsInplace

如果指定工作簿正在适当位置上进行编辑，则该值为 **True** 。如果该工作簿已在 ET 中打开，并准备进行编辑，则该值为 **False** 。 **Boolean** 类型，只读。



## 语法

express.**IsInplace**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例表示工作簿是在适当位置上打开并正在编辑还是仅在 ET 中打开。*/
function test() {
    if (ThisWorkbook.IsInPlace) {
        MsgBox("Editing in place")
    } else {
        MsgBox("Editing in ET")
    }
}
```


```JavaScript
/*本示例演示IsInplace属性的数据类型。*/
function test() {
    alert("IsInplace属性的数据类型为：" + typeof ActiveWorkbook.IsInplace)
}
```
