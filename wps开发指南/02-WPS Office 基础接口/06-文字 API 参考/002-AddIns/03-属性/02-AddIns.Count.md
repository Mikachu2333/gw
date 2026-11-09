# AddIns.Count

返回 **AddIns** 集合中 **AddIn** 对象的数目。 **Long** 类型，只读。



## 语法

express.**Count**

express   一个代表 **AddIns** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例显示加载项的数量。*/
function test() {
    alert("加载项的数量：" + Application.AddIns.Count)
}
```
