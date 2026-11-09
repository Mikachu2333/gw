# Worksheet.ClearArrows

清除指定工作表的追踪箭头。使用审核功能可添加追踪箭头。



## 语法

express.**ClearArrows()**

express   一个代表 **Worksheet** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例清除 Sheet1 的追踪箭头。*/
function test() {
    Worksheets.Item("Sheet1").ClearArrows()
}
```


```JavaScript
/*本示例清除所有工作表中的追踪箭头。*/
function test() {
    for (let i = 1; i <= Worksheets.Count; i++) {
        Worksheets.Item(i).ClearArrows()
    }
}
```
