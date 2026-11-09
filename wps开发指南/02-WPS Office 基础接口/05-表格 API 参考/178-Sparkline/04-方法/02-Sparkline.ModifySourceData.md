# Sparkline.ModifySourceData

修改单个迷你图的源数据。



## 语法

express.**ModifySourceData(Formula)**

express   一个代表 **Sparkline** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Formula | 必选 | string | 包含源数据的区域。 |

## 返回值

void

## 说明


单个迷你图的数据源区域必须是连续的。



## 示例


```JavaScript
/*本示例修改单元格 I1 中第一个迷你图组的第一个迷你图的源数据。*/
function test() {
    Range("I1").SparklineGroups(1).Item(1).ModifySourceData("Sheet1!A1:C1")
}
```


```JavaScript
/*本示例修改活动工作表上单元格 I1 中第一个迷你图组的第一个迷你图的源数据，并显示修改前后的源数据区域。*/
function test() {
    let sparkline = ActiveSheet.Range("I1").SparklineGroups(1).Item(1)
    alert(`修改前的源数据区域：${sparkline.SourceData}`)
    sparkline.ModifySourceData("B1:D1")
    alert(`修改后的源数据区域：${sparkline.SourceData}`)
}
```
