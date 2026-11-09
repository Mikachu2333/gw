# Characters.Count

返回 **Characters** 集合中的字符数。 **Long** 类型，只读。



## 语法

express.**Count**

express   一个代表 **Characters** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上字符的数量。*/
function test() {
    alert(Application.ActiveDocument.Characters.Count)
}
```
