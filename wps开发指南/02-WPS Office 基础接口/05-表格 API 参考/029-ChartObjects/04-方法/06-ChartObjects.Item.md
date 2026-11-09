# ChartObjects.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **ChartObjects** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

Object

## 说明


对象的文本名称就是 **Name** 和 **Value** 属性的值。



## 示例


```JavaScript
/*此示例激活工作表 Sheet1 上第一张图表。*/
function test() {
    Application.Worksheets.Item("Sheet1").ChartObjects().Item(1).Activate()
}
```


```JavaScript
/*此示例为第一张工作表上图表 Chart 2 添加圆角。*/
function test() {
    let chartobject = Application.Worksheets.Item(1).ChartObjects().Item("Chart 2")
    chartobject.RoundedCorners = true
}
```
