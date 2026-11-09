# Chart.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Chart** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例遍历工作簿上所有图表工作表，判断如果标题为成绩表，则删除该图表工作表。*/
function test() {
    for (let i = 1; i <= Charts.Count; i++) {
        if (Charts.Item(i).HasTitle && Charts.Item(i).ChartTitle.Text == "成绩表") {
            Charts.Item(i).Delete()
        }
    }
}
```


```JavaScript
/*本示例删除图表工作表 Chart1。*/
function test() {
    Application.Charts.Item("Chart1").Delete()
}
```
