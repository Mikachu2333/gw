# Category.Name

返回指定对象的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **Category** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一个模板的自动文本条目构建基块中第一个类别的名称。*/
function test() {
    let category = Application.Templates.Item(1).BuildingBlockTypes(wdTypeAutoText).Categories.Item(1)
    alert(category.Name)
}
```


```JavaScript
/*本示例显示第一个模板的自动文本条目构建基块中所有类别的名称。*/
function test() {
    let categories = Application.Templates.Item(1).BuildingBlockTypes(wdTypeAutoText).Categories
    for (let i = 1; i <= categories.Count; i++) {
        alert(categories.Item(i).Name)
    }
}
```
