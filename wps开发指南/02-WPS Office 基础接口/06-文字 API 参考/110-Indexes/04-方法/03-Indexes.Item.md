# Indexes.Item

返回集合中的单个 **Index** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Indexes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

Index

## 示例


```JavaScript
/*本示例删除活动文档上第一个索引。*/
function test() {
    let index = ActiveDocument.Indexes.Item(1)
    index.Delete()
}
```


```JavaScript
/*本示例显示第一个文档上第二个索引中文档部分的文本。*/
function test() {
    let index = Documents.Item(1).Indexes.Item(2)
    alert(index.Range.Text)
}
```
