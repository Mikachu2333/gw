# Hyperlinks.Item

返回集合中的单个 **Hyperlink** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Hyperlinks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 Long 类型值，或代表单个对象名称的 String 类型值。 |

## 返回值

Hyperlink

## 示例


```JavaScript
/*本示例显示活动文档中第二个超链接的名称*/
function test() {
    alert(Application.ActiveDocument.Hyperlinks.Item(2).Name)
}
```


```JavaScript
/*本示例删除活动文档中最后一个超链接*/
function test() {
    let num = Application.ActiveDocument.Hyperlinks.Count
    Application.ActiveDocument.Hyperlinks.Item(num).Delete()
}
```
