# AddIn.CLSID

返回一个只读的唯一标识符，或识别对象的 CLSID。 **String** 类型。



## 语法

express.**CLSID**

express   一个代表 **AddIn** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例将第一个加载宏的唯一标识符赋值给A1单元格。*/
function test() {
    Range("A1").Value2 = Application.AddIns.Item(1).CLSID
}
```


```JavaScript
/*此示例显示第二个加载宏的唯一标识符。*/
function test() {
    alert(Application.AddIns.Item(2).CLSID)
}
```
