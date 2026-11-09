# Application.DeferAsyncQueries

获取或设置在工作表由 VBA 代码计算时是否执行对 OLAP 数据源的异步查询。可读/写 **Boolean** 类型。



## 语法

express.**DeferAsyncQueries**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


将 **DeferAsyncQueries** 属性设置为 **True** 将阻止执行任何异步查询，直到 **[CalculateUntilAsyncQueriesDone](#TODO)** 方法被调用为止。



## 示例


```JavaScript
/*本示例设置DeferAsyncQueries属性的值为false。*/
function test() {
    Application.DeferAsyncQueries = false
}
```


```JavaScript
/*本示例演示DeferAsyncQueries属性的数据类型，并设置DeferAsyncQueries属性的值为true。*/
function test() {
    alert("DeferAsyncQueries属性的数据类型为：" + typeof Application.DeferAsyncQueries)
    Application.DeferAsyncQueries = true
}
```
