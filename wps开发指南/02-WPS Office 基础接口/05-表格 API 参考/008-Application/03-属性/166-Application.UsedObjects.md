# Application.UsedObjects

返回一个 **[UsedObjects](#TODO)** 对象，该对象表示在工作簿中分配的对象。只读。



## 语法

express.**UsedObjects**

express   一个代表 **Application** 对象的变量。

## 类型

UsedObjects

## 示例


```JavaScript
/*本示例为ET确定已分配的对象的个数，并通知用户。本示例假定在应用程序中执行重新计算，并且在完成前中断重新计算*/
function test() {
    alert(`The number of used objects in this application is: ${Application.UsedObjects.Count}`)
}
```


```JavaScript
/*本示例显示UsedObjects的父对象名称。*/
function test() {
    alert(Application.UsedObjects.Parent.Name)
}
```
