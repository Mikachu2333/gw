# Categories.Count

返回 **Categories** 集合中的项目数。 **Long** 类型，只读。



## 语法

express.**Count**

express   一个代表 **Categories** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一个模板的自动文本条目构建基块中类别的数量。*/
function test() {
    alert(Application.Templates.Item(1).BuildingBlockTypes(wdTypeAutoText).Categories.Count)
}
```
