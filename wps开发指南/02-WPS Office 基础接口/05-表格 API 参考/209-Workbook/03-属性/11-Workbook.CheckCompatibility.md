# Workbook.CheckCompatibility

控制在保存工作簿时是否自动运行兼容性检查器。可读/写 **Boolean** 类型。



## 语法

express.**CheckCompatibility**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例演示在保存工作簿时自动运行兼容性检查器。*/
function test() {
    Workbooks.Item(1).CheckCompatibility = true
}
```


```JavaScript
/*本示例演示 CheckCompatibility 属性的数据类型。*/
function test() {
    alert(typeof ActiveWorkbook.CheckCompatibility)
}
```
