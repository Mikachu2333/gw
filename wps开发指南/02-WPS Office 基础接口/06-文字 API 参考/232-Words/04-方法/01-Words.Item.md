# Words.Item

返回集合中的单个 **Range** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Words** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

Range

## 示例


```JavaScript
/*本示例将活动文档的第二个单词设置为加粗格式。*/
function test() {
    ActiveDocument.Words.Item(2).Bold = true
}
```


```JavaScript
/*本示例为活动文档的第一个单词添加阴影。*/
function test() {
    ActiveDocument.Words.Item(1).Font.Shadow = true
}
```
