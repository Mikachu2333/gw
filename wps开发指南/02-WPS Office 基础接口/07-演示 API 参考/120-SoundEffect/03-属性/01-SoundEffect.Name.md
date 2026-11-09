# SoundEffect.Name

返回或设置指定对象的名称。可读/写。



## 语法

express.**Name**

express   一个代表 **SoundEffect** 对象的变量。

## 类型

string

## 说明


如果包含某对象的集合的 **Item** 方法采用 **Variant** 类型的参数，则可以将该对象的名称与 **Item** 方法联合使用来返回对该对象的引用。例如，如果某个形状的 **Name** 属性值为“Rectangle 2”，则 `.Shapes("Rectangle 2")` 将返回对该形状的引用。



## 示例


```JavaScript
/*本示例将活动演示文稿切换到第二张幻灯片时播放的声音设置为“coin.wav”*/
function test() {
    let slideShowTransition = ActivePresentation.Slides.Item(2).SlideShowTransition
    slideShowTransition.SoundEffect.Name = "coin.wav"
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片在切换期间播放的音频名称。*/
function test() {
    let slideShowTransition = Presentations.Item(1).Slides.Item(1).SlideShowTransition
    alert(slideShowTransition.SoundEffect.Name)
}
```
