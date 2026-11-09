# Characters.Insert

在所选的字符前面插入一个字符串。



## 语法

express.**Insert(String)**

express   一个代表 **Characters** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| String | 必选 | string | 要插入的字符串。 |

## 返回值

Variant

## 示例


```JavaScript
/*此示例在 C1 单元格插入字符串。*/
function test() {
    ActiveSheet.Range("C1").Characters().Insert("pear")
}
```


```JavaScript
/*此示例在 B1 单元格的第一个字符前插入字符串，并覆盖原来第一个字符。*/
function test() {
    ActiveSheet.Range("B1").Characters(1, 1).Insert("hi")
}
```
