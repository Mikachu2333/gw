# Range.FlashFill

对指定区域进行快速填充。



## 语法

express.**FlashFill()**

express   一个代表 **Range** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例对第一张工作表的单元格区域 B1:B4 进行快速填充。*/
function test() {
    Worksheets.Item(1).Range("B1:B4").FlashFill()
}
```


```JavaScript
/*此示例对活动工作表的单元格区域 B6:B9 进行快速填充。*/
function test() {
    ActiveSheet.Range("B6:B9").FlashFill()
}
```
