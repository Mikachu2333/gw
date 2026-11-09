# Font.Position

返回或设置相对于基准线的文本位置（以磅为单位）。可读写 **Long** 类型。



## 语法

express.**Position**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


正值将文本提升，负值将文本降低。



## 示例


```JavaScript
/*本示例将选中文本相对于基准线的位置降低2磅。*/
function test() {
    Selection.Font.Position = -2
}
```


```JavaScript
/*本示例将选中文本相对于基准线的位置提升10磅。*/
function test() {
    Selection.Font.Position = 10
}
```
