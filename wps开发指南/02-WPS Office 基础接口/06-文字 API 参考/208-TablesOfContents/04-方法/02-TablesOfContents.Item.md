# TablesOfContents.Item

返回集合中的单个 **TableOfContents** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **TablesOfContents** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

TableOfContents

## 示例


```JavaScript
/*本示例删除活动文档中的第一个目录。*/
function test() {
    ActiveDocument.TablesOfContents.Item(1).Delete()
}
```


```JavaScript
/*本示例显示第一个文档中的第一个目录文档部分的文本。*/
function test() {
    alert(Documents.Item(1).TablesOfContents.Item(1).Range.Text)
}
```
