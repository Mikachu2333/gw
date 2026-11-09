# Watches.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **Watches** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

Watch

## 示例


```JavaScript
/*本示例向监视窗口中添加单元格，然后删除监视窗口中第一个单元格，并显示删除后单元格的数量。*/
function test() {
    Application.Watches.Add(Range("A1"))
    Application.Watches.Add(Range("A2"))
    Application.Watches.Add(Range("A3"))
    Application.Watches.Item(1).Delete()
    alert(Application.Watches.Count)
}
```


```JavaScript
/*本示例向监视窗口中添加单元格，然后判断如果监视窗口中单元格的数量大于1，则将监视窗口中第二个单元格删除。*/
function test() {
    Application.Watches.Add(Range("A1"))
    Application.Watches.Add(Range("A2"))
    Application.Watches.Add(Range("A3"))
    if (Application.Watches.Count > 1) {
        Application.Watches.Item(2).Delete()
    }
}
```
