# Sparkline.ModifyLocation

修改单个迷你图的位置。



## 语法

express.**ModifyLocation(Range)**

express   一个代表 **Sparkline** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 包含迷你图的单元格。 |

## 返回值

void

## 示例


```JavaScript
/*本示例修改单元格 I1 中第一个迷你图组的第一个迷你图的位置。*/
function test() {
    Range("I1").SparklineGroups(1).Item(1).ModifyLocation(Range("F1"))
}
```


```JavaScript
/*本示例修改活动工作表上单元格 I1 中第一个迷你图组的第一个迷你图的位置。*/
function test() {
    let sparkline = ActiveSheet.Range("I1").SparklineGroups(1).Item(1)
    sparkline.ModifyLocation(Range("A10"))
}
```
