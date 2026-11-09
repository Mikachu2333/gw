# Application.MoveAfterReturn

如果按 Enter (Return) 键后活动单元格的位置改变，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MoveAfterReturn**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


使用 **[MoveAfterReturnDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MoveAfterReturnDirection)** 属性可指定活动单元格的移动方向。



## 示例


```JavaScript
/*本示例将 MoveAfterReturn 属性设置为true。*/
function test() {
    Application.MoveAfterReturn = true
}
```


```JavaScript
/*本示例演示 MoveAfterReturn 属性的数据类型，并将 MoveAfterReturn 属性的值设置为false。*/
function test() {
    alert("MoveAfterReturn属性的数据类型为：" + typeof Application.MoveAfterReturn)
    Application.MoveAfterReturn = false
}
```
