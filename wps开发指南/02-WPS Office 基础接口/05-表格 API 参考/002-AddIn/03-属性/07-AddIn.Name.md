# AddIn.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **AddIn** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将第一个加载宏的名称赋值给B1单元格。*/
function test() {
    let addin = Application.AddIns.Item(1)
    Range("B1").Value2 = addin.Name
}
```


```JavaScript
/*本示例显示第二个加载宏的名称。*/
function test() {
    let addin = Application.AddIns.Item(2)
    alert(`加载宏的名称：${addin.Name}`)
}
```
