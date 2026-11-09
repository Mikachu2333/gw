# LineFormat.Weight

返回或设置一个 **Single** 值，它代表线条的粗细。



## 语法

express.**Weight**

express   一个代表 **LineFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动工作表的第一个形状线条的粗细。*/
function test() {
    let line = ActiveSheet.Shapes.Item(1).Line
    alert(line.Weight)
}
```


```JavaScript
/*本示例设置第一张工作表中第二个形状线条的粗细为3磅。*/
function test() {
    let line = Worksheets.Item(1).Shapes.Item(2).Line
    line.Weight = 3
}
```
