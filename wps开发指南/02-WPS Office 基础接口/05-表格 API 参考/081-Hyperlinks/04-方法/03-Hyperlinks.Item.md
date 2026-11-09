# Hyperlinks.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **Hyperlinks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

Hyperlink

## 示例


```JavaScript
/*下例激活 E5 单元格的第一个超链接。*/
function test() {
    Application.Worksheets.Item(1).Range("E5").Hyperlinks.Item(1).Follow()
}
```


```JavaScript
/*本示例取消工作表Sheet1中的第一个超链接。*/
function test() {
    Application.Worksheets.Item("Sheet1").Hyperlinks.Item(1).Delete()
}
```
