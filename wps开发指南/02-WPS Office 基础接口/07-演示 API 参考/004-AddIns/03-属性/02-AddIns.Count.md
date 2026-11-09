# AddIns.Count

返回指定集合中的对象数目。只读。



## 语法

express.**Count**

express   一个代表 **AddIns** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示应用程序中加载项的数量。*/
function test() {
    alert(Application.AddIns.Count)
}
```
