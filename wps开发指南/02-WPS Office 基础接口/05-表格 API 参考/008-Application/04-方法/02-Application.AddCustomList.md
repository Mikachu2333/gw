# Application.AddCustomList

为自定义自动填充和/或自定义排序添加自定义列表。



## 语法

express.**AddCustomList(ListArray, ByRow)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ListArray | 必选 | any | 将源数据指定为字符串数组或 **Range** 对象。 |
| ByRow | 可选 | any | 仅当 _ListArray_ 为 **Range** 对象时使用。如果为 **True** ，则使用区域中的每一行创建自定义列表；如果为 **False** ，则使用区域中的每一列创建自定义列表。如果省略该参数，并且区域中的行数比列数多（或者行数与列数相等），则 ET 使用区域中的每一列创建自定义列表。如果省略该参数，并且区域中的列数比行数多，则 ET 使用区域中的每一行创建自定义列表。 |

## 返回值

void

## 说明


如果要添加的列表已经存在，则本方法不起作用。



## 示例


```JavaScript
/*本示例将一个字符串数组添加到自定义列表中。*/
function test() {
    Application.AddCustomList(["cogs", "sprockets", "widgets", "gizmos"])
}
```


```JavaScript
/*本示例演示在A1:D1区域中分别赋值英文单词，并设置自定义列表。*/
function test() {
    Range("A1").Value2 = "apple"
    Range("B1").Value2 = "banana"
    Range("C1").Value2 = "watermelon"
    Range("D1").Value2 = "lemon"
    Application.AddCustomList(Range("A1:D1"), true)
}
```
