# Application.MergeInstances

如果为 True ，可将应用程序的多个实例合并到单个实例中。 读/写 Boolean。



## 语法

express.**MergeInstances**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例导致应用程序的多个实例合并到单个实例中。*/
function test() {
    Application.MergeInstances = true
}
```


```JavaScript
/*本示例演示 MergeInstances 属性的数据类型，并将 MergeInstances 属性的值设置为false。*/
function test() {
    alert("MergeInstances属性的数据类型为：" + typeof Application.MergeInstances)
    Application.MergeInstances = false
}
```
