# KeyBindings.Count

返回一个 **Long** 类型的值，该值代表集合中键绑定的数量。只读。



## 语法

express.**Count**

express   一个代表 **KeyBindings** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示自定义按键方案中键绑定的数量。*/
function test() {
    alert(Application.KeyBindings.Count)
}
```
