# Presentation.Tags

返回一个代表指定对象的标签的 **[Tags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/obj)** 对象。只读。



## 语法

express.**Tags**

express   一个代表 **Presentation** 对象的变量。

## 类型

Tags

## 示例


```JavaScript
/*以下示例向当前演示文稿添加名为“REGION”和“PRIORITY”的标签。*/
function test() {
    let tags = Application.ActivePresentation.Tags
    //Adds "Region" tag with value "East"
    tags.Add("Region", "East")
    //Adds "Priority" tag with value "Low"
    tags.Add("Priority", "Low")
}
```


```JavaScript
/*本示例遍历活动演示文稿上所有标记，判断如果存在名为“PRIORITY”的标记，则显示该标记的值；如果不存在名为“PRIORITY”的标记，则在该演示文稿上添加值为“Unknown”的此标记。*/
function test() {
    let found = false
    let tags = ActivePresentation.Tags
    for (let j = 1; j <= tags.Count; j++) {
        if (tags.Name(j) == "PRIORITY") {
            found = true
            alert("标记名称为“PRIORITY”的值为：" + tags.Value(j))
        }
    } if (found == false) {
        tags.Add("Priority", "Unknown")
        alert("已添加标记：Unknown")
    }
}
```
