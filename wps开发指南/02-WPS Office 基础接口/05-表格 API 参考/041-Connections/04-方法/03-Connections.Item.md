# Connections.Item

此方法返回一个连接项。



## 语法

express.**Item(Index)**

express   一个代表 **Connections** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 项的索引值。 |

## 返回值

WorkbookConnection

## 示例


```JavaScript
/*此示例显示第一张工作簿上第一个连接的名称。*/
function test() {
    let wbConnection = Workbooks.Item(1).Connections.Item(1)
    alert(wbConnection.Name)
}
```


```JavaScript
/*本示例设置活动工作簿上连接“test1”的简要说明。*/
function test() {
    let wbConnection = ActiveWorkbook.Connections.Item("test1")
    wbConnection.Description = "example1"
}
```
