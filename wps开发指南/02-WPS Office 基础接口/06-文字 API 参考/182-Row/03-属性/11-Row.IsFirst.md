# Row.IsFirst

如果指定的行是表格中的首行，则该属性值为 **True** 。只读 **Boolean** 类型。



## 语法

express.**IsFirst**

express   一个代表 **Row** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示所选内容的首行是否为表格中的首行。*/
function test() {
    alert(Selection.Rows.Item(1).IsFirst)
}
```


```JavaScript
/*本示例判断如果所选内容的首行为表格的首行，则删除首行。*/
function test() {
    if (Selection.Rows.Item(1).IsFirst) {
        Selection.Rows.Item(1).Delete()
    }
}
```
