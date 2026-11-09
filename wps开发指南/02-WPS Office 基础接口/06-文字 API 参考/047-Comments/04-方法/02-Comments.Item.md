# Comments.Item

返回集合中的单个 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Comment/obj)** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Comments** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

Comment

## 示例


```JavaScript
/*本示例显示活动文档上第一个批注的插入日期和时间。*/
function test() {
    alert(ActiveDocument.Comments.Item(1).Date)
}
```


```JavaScript
/*本示例删除活动文档的第二个批注以及与它关联的所有答复。*/
function test() {
    ActiveDocument.Comments.Item(2).DeleteRecursively()
}
```
