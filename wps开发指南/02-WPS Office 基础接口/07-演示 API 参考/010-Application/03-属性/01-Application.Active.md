# Application.Active

返回 WPP 应用程序是否处于激活的状态。只读。



## 语法

express.**Active**

express   一个代表 **Application** 对象的变量。

## 类型

MsoTriState

## 说明


 **Active** 属性返回的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ---------------------------- | ----------------------------- |
| **msoFalse** | WPP 应用程序处于非活动状态。 |
| **msoTrue** | WPP 应用程序处于活动状态。 |



## 示例


```JavaScript
/*本示例显示 WPP 应用程序是否处于激活状态。*/
function test() {
    alert(Application.Active === msoTrue)
}
```


```JavaScript
/*本示例判断 WPP 应用程序是否处于活动状态，并通知用户。*/
function test() {
    if (Application.Active == msoTrue) {
        alert("应用程序处于活动状态。")
    } else {
        alert("应用程序处于非活动状态。")
    }
}
```
