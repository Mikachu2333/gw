# Options.UseNormalStyleForList

返回或设置 **Boolean** 类型的值，该值表示 WPS 是否对项目符号和编号使用“正文”样式。可读写。



## 语法

express.**UseNormalStyleForList**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 对项目符号和编号使用“正文”样式。*/
function test() {
    Options.UseNormalStyleForList = true
}
```


```JavaScript
/*本示例判断如果 WPS 对项目符号和编号使用“正文”样式，则通知用户。*/
function test() {
    if (Options.UseNormalStyleForList) {
        alert("WPS 对项目符号和编号使用“正文”样式")
    }
}
```
