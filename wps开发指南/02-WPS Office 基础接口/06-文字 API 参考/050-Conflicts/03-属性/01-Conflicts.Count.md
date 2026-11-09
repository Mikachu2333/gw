# Conflicts.Count

返回 **Conflicts** 集合中的项目数。只读。



## 语法

express.**Count**

express   一个代表 **Conflicts** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档中的 Conflict 对象的数量。*/
function test() {
    alert(ActiveDocument.CoAuthoring.Conflicts.Count)
}
```
