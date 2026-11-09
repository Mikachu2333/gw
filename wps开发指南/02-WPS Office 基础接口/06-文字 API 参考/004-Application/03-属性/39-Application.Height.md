# Application.Height

返回或设置活动文档窗口的高度，以磅为单位。 **Long** 类型，可读写。



## 语法

express.**Height**

express   一个代表 **Application** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档窗口的高度。*/
function test() {
    alert('活动文档窗口高度为：' + Application.Height)
}
```


```JavaScript
/*本示例将活动文档窗口的高度设置为300磅，并显示。*/
function test() {
    Application.Height = 300
    alert('活动文档窗口高度为：' + Application.Height)
}
```
