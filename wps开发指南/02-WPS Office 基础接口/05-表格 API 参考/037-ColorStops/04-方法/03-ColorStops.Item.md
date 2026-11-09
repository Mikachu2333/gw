# ColorStops.Item

从指定集合中返回单个对象。



## 语法

express.**Item(Index)**

express   一个代表 **ColorStops** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

一个包含在集合中的 **ColorStops** 对象。

## 示例


```JavaScript
/*本示例删除活动单元格第三个ColorStop对象。*/
function test() {
    let colorStop = ActiveCell.Interior.Gradient.ColorStops.Item(3)
    colorStop.Delete()
}
```


```JavaScript
/*本示例将当前选定区域的第一个ColorStop对象的TintAndShade属性设置为-1。*/
function test() {
    Range("A1:A10").Select()
    let colorStop = Selection.Interior.Gradient.ColorStops.Item(1)
    colorStop.TintAndShade = -1
}
```
