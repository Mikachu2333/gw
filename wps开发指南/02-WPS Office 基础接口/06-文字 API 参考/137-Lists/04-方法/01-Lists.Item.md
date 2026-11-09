# Lists.Item

返回集合中的单个 **List** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Lists** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

List

## 示例


```JavaScript
/*本示例显示活动文档上第一个列表文档范围的文本。*/
function test() {
    let list = ActiveDocument.Lists.Item(1)
    alert(list.Range.Text)
}
```


```JavaScript
/*本示例显示第一个文档上第一个列表是否使用相同的列表模板。*/
function test() {
    let list = Documents.Item(1).Lists.Item(1)
    alert(list.SingleListTemplate)
}
```
