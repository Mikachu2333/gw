# Endnotes.Item

返回集合中的单个 **Endnote** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Endnotes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

Endnote

## 示例


```JavaScript
/*本示例删除活动文档上第一个尾注。*/
function test() {
    Application.ActiveDocument.Endnotes.Item(1).Delete()
}
```


```JavaScript
/*本示例将所选内容中第二个尾注的文档部分的文本设置为加粗格式。*/
function test() {
    let endnote = Selection.Endnotes.Item(2)
    endnote.Range.Bold = true
}
```
