# Footnotes.Item

返回集合中的单个 **Footnote** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Footnotes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 Long 类型值。 |

## 返回值

Footnote

## 示例


```JavaScript
/*本示例显示活动文档上第一个脚注的索引。*/
function test() {
    alert(ActiveDocument.Footnotes.Item(1).Index)
}
```


```JavaScript
/*本示例删除活动文档上第二个脚注。*/
function test() {
    ActiveDocument.Footnotes.Item(2).Delete()
}
```
