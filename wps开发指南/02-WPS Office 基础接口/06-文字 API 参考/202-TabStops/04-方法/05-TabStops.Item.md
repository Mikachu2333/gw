# TabStops.Item

返回集合中的单个 **TabStop** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **TabStops** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值 |

## 返回值

TabStop

## 示例


```JavaScript
/*本示例将活动文档中第一段的第二个自定义制表位的前导字符变成短划线。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).TabStops.Item(2).Leader = wdTabLeaderDashes
}
```


```JavaScript
/*本示例清除活动文档中第一段的第一个自定义制表位。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).TabStops.Item(1).Clear()
}
```
