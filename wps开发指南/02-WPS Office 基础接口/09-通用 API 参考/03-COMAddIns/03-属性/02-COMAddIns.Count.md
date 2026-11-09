# COMAddIns.Count

获取宿主应用程序中 COM 加载项的数量。只读。



## 语法

express.**Count**

express   一个代表 **COMAddIns** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例运行于各组件，显示应用程序中 COM 加载项的数量。*/
function test() {
    alert(Application.COMAddIns.Count)
}
```
