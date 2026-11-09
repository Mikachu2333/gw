# Application.MaxChange

返回或设置 ET 处理循环引用时迭代之间的最大变化值。 **Double** 类型，可读写。



## 语法

express.**MaxChange**

express   一个代表 **Application** 对象的变量。

## 类型

number（double 精度）

## 说明


 **[MaxIterations](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MaxIterations)** 属性设置 ET 在解决循环引用时可使用的最多迭代次数。



## 示例


```JavaScript
/*本示例将每次迭代的最大变化值设为0.1。*/
function test() {
    Application.MaxChange = 0.1
}
```


```JavaScript
/*本示例演示将MaxChange属性的值设置为0.5，并显示该属性的值。*/
function test() {
    Application.MaxChange = 0.5
    alert("MaxChange属性的值为：" + Application.MaxChange)
}
```
