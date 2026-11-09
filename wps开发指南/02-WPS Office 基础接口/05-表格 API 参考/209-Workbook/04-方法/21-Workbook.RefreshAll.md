# Workbook.RefreshAll

刷新指定工作簿中的所有外部数据区域和数据透视表。



## 语法

express.**RefreshAll()**

express   一个代表 **Workbook** 对象的变量。

## 返回值

void

## 说明


 **[BackgroundQuery](#TODO)** 属性设置为 **True** 的对象在后台进行刷新。



## 示例


```JavaScript
/*本示例刷新第三个工作簿中的所有外部数据区域和数据透视表。*/
function test() {
    Application.Workbooks.Item(3).RefreshAll()
}
```


```JavaScript
/*本示例刷新所有工作簿中的所有外部数据区域和数据透视表。*/
function test() {
    for (let i = 1; i <= Workbooks.Count; i++) {
        Application.Workbooks.Item(i).RefreshAll()
    }
}
```
