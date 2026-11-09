# Ranges.Count

返回集合中对象的数目。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **Ranges** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示包含活动工作簿上第一个连接的范围数量。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1)
    alert(connection.Ranges.Count)
}
```
