# OLEObjects.Locked

返回或设置一个 **Boolean** 值，它指明对象是否已被锁定。



## 语法

express.**Locked**

express   一个代表 **OLEObjects** 对象的变量。

## 类型

boolean

## 说明


如果对象已被锁定，此属性将返回 **True** ；如果在工作表处于受保护状态时仍能修改对象，则返回 **False** 。



## 示例


```JavaScript
/*此示例显示活动工作表中所有 OLE 对象是否已被锁定。*/
function test() {
    alert(ActiveSheet.OLEObjects().Locked)
}
```


```JavaScript
/*此示例取消第一张工作表中所有 OLE 对象的锁定。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects().Locked = false
}
```
