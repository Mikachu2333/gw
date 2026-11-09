# Shape.Tags

返回一个代表指定对象的标签的 **[Tags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Tags/obj)** 对象。只读。



## 语法

express.**Tags**

express   一个代表 **Shape** 对象的变量。

## 类型

Tags

## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加名为"REGION"和"PRIORITY"的标签。*/
function test() {
    let tags = ActivePresentation.Slides(1).Tags
    tags.Add("Region", "East") //Adds "Region" tag with value "East"
    tags.Add("Priority", "Low") //Adds "Priority" tag with value "Low"
}
```
在本例中，标签值是以大写形式添加和保存在文本中的。因此，应使用大写形式的文本对标签值进行测试，如第二个例子所示。



```JavaScript
/*本示例在当前演示文稿的所有幻灯片中搜索名为“PRIORITY”的标签，并弹出消息框显示标签值。如果不存在名为“PRIORITY”的标签，则将标签的值设为“Unknown”。*/
function test() {
    let slides = ActivePresentation.Slides
    for (let i = slides.Count; i > 0; i--) {
        let tags = slides.Item(i).Tags
        let found = false
        for (let j = tags.Count; j > 0; j--) {
            if (tags.Name(j) === "PRIORITY") {
                found = true
                MsgBox("Slide " + i + " Priority: " + tags.Value(j))
            }
        }
        if (!found) {
            tags.Add("Priority", "Unknown")
            MsgBox("Slide " + i + " Priority tag added: Unknown")
        }
    }
}
```
