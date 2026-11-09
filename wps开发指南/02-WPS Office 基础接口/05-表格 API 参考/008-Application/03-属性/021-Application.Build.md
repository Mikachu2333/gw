# Application.Build

返回 ET 内部版本号。 **Number** 类型，只读。



## 语法

express.**Build**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 说明


通常检测 [Version](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Version) 属性较为安全，除非必须要获知内部版本号。



## 示例


```JavaScript
/*本示例检测 Build 属性。*/
function test() {
    if (Application.Build > 2500) {
        alert("build-dependent code here")
    }
}
```


```JavaScript
/*本示例演示 Build 的数据类型。*/
function test() {
    alert("Build的数据类型为：" + typeof (Application.Build))
}
```
