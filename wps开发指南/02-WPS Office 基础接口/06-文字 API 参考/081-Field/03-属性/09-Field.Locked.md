# Field.Locked

如果指定域已被锁定，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**Locked**

express   一个代表 **Field** 对象的变量。

## 类型

boolean

## 说明


当域处于锁定状态时，无法更新该域的结果。



## 示例


```JavaScript
/*本示例在所选内容的开头插入一个 DATE 域，然后锁定该域。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    let field = ActiveDocument.Fields.Add(Selection.Range, wdFieldDate)
    field.Locked = true
}
```


```JavaScript
/*本示例显示所选内容中第二个域是否处于锁定状态。*/
function test() {
    alert(Selection.Fields.Item(2).Locked)
}
```
