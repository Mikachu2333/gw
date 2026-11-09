# Range.Areas

返回一个 **[Areas](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Areas)** 集合，该集合表示多重区域选择中的所有区域。只读。



## 语法

express.**Areas**

express   一个代表 **Range** 对象的变量。

## 类型

Areas

## 说明


对于单一选择区域， **Areas** 属性返回只包含一个对象的集合，即原始 **Range** 对象本身。对于多重选择区域， **Areas** 属性返回一个集合，该集合包含与每个选定区域相对应的对象。



## 示例


```JavaScript
/*本示例在用户选定多个区域并试图执行某一命令时显示提示信息。该示例必须在工作表上运行。*/
function test() {
    if (Application.Selection.Areas.Count > 1) {
        alert("Cannot do this to a multi-area selection.")
    }
}
```


```JavaScript
/*此示例选中A1,C1,E1单元格，并展示选中了几个区域*/
function test() {
    Union(Range("A1"), Range("C1"), Range("E1")).Select()
    alert(Application.Selection.Areas.Count)
}
```
