# Application.ExtendList

如果 ET 自动将格式和公式扩展到清单中新增的数据上，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ExtendList**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


要实现格式和公式的扩展，则清单中新行或新列前五行或五列中至少应有三行或三列必须具有这些格式和公式，且数据必须添加到清单的底部或右方。



## 示例


```JavaScript
/*本示例设置 ET ，使其不对以后添加到清单中的数据应用格式和公式。*/
function test() {
    Application.ExtendList = false
}
```


```JavaScript
/*本示例演示 ExtendList 属性的数据类型，并将 ExtendList 属性的值设置为true。*/
function test() {
    alert("ExtendList属性的数据类型为：" + typeof Application.ExtendList)
    Application.ExtendList = true
}
```
