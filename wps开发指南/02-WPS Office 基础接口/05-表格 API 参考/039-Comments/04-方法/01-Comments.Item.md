# Comments.Item

从集合中返回一个对象，包含在集合中的一个 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/obj)** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Comments** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 对象的索引号。 |

## 返回值

Comment

## 示例


```JavaScript
/*本示例隐藏第二条批注。*/
function test() {
    Application.Worksheets.Item(1).Comments.Item(2).Visible = false
}
```


```JavaScript
/*本示例显示活动工作表中第一条批注的内容。*/
function test() {
    alert(Application.ActiveSheet.Comments.Item(1).Text())
}
```
