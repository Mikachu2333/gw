# NamedSlideShow.Name

不能使用该属性设置自定义幻灯片放映的名称。使用 **Add** 方法可以新名称再定义一个自定义幻灯片放映。只读。



## 语法

express.**Name**

express   一个代表 **NamedSlideShow** 对象的变量。

## 类型

string

## 说明


如果包含某对象的集合的 **Item** 方法采用 **Variant** 类型的参数，则可以将该对象的名称与 **Item** 方法联合使用来返回对该对象的引用。例如，如果某个形状的 **Name** 属性值为“Rectangle 2”，则 `.Shapes("Rectangle 2")` 将返回对该形状的引用。



## 示例


```JavaScript
/*本示例显示第一篇演示文稿的第一个自定义幻灯片放映的名称。*/
function test() {
    let namedSlideShows = Presentations.Item(1).SlideShowSettings.NamedSlideShows
    alert(namedSlideShows.Item(1).Name)
}
```


```JavaScript
/*本示例显示活动演示文稿所有自定义幻灯片放映的名称。*/
function test() {
    let str = ""
    let namedSlideShows = ActivePresentation.SlideShowSettings.NamedSlideShows
    for (let i = 1; i <= namedSlideShows.Count; i++) {
        str += namedSlideShows.Item(i).Name + "\n"
    }
    alert(str)
}
```
