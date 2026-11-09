# Application.MaxIterations

返回或设置 ET 处理循环引用的最大迭代次数。 **Long** 类型，可读写。



## 语法

express.**MaxIterations**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **[MaxChange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/MaxChange)** 属性设置 ET 在处理循环引用时各迭代之间的最大变化量。



## 示例


```JavaScript
/*本示例设置最大迭代次数为1000。*/
function test() {
    Application.MaxIterations = 1000
}
```


```JavaScript
/*本示例演示将MaxIterations属性的值设置为500，并显示属性的值。*/
function test() {
    Application.MaxIterations = 500
    alert("MaxIterations属性的值为：" + Application.MaxIterations)
}
```
