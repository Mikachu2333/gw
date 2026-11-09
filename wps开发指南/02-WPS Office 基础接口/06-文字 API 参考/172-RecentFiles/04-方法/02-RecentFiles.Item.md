# RecentFiles.Item

返回集合中的单个 **RecentFile** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **RecentFiles** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

RecentFile

## 示例


```JavaScript
/*本示例显示最近使用的第一个文件的名称。*/
function test() {
    alert(Application.RecentFiles.Item(1).Name)
}
```


```JavaScript
/*本示例打开最近使用的第一个文档，并在该文档中添加一个内嵌图表。*/
function test() {
    let document = Application.RecentFiles.Item(1).Open()
    document.InlineShapes.AddChart2()
}
```
