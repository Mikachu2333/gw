# Category.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **Category** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一个模板的自动文本条目构建基块中名为“General”的类别的索引。*/
function test() {
    let category = Application.Templates.Item(1).BuildingBlockTypes(wdTypeAutoText).Categories.Item("General")
    alert(category.Index)
}
```


```JavaScript
/*本示例显示第一个模板中所有构建基块的类别索引号。*/
function test() {
    let bdbTypes = Application.Templates.Item(1).BuildingBlockTypes
    for (let i = 1; i <= bdbTypes.Count; i++) {
        let bdbType = bdbTypes.Item(i)
        if (bdbType.Categories.Count > 0) {
            for (let j = 1; j <= bdbType.Categories.Count; j++) {
                let category = bdbType.Categories.Item(j)
                alert(category.Index)
            }
        }
    }
}
```
