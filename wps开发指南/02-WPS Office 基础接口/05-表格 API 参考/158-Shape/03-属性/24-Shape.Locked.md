# Shape.Locked

返回或设置一个 **Boolean** 值，它指明对象是否已被锁定。



## 语法

express.**Locked**

express   一个代表 **Shape** 对象的变量。

## 类型

boolean

## 说明


如果对象已被锁定，此属性将返回 **True** ；如果在工作表处于受保护状态时仍能修改对象，则返回 **False** 。



## 示例


```JavaScript
/*本示例显示活动工作表第一个形状的锁定状态。*/
function test() {
    let shapes = ActiveSheet.Shapes
    if (shapes.Item(1).Locked == true) {
        alert("形状已锁定")
    } else {
        alert("形状未锁定")
    }
}
```


```JavaScript
/*本示例将第一张工作表中的所有形状锁定状态改为未锁定。*/
function test() {
    let shapes = Worksheets.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        shapes.Item(i).Locked = false
    }
}
```
