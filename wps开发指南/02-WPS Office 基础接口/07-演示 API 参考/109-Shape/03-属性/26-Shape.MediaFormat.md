# Shape.MediaFormat

允许访问新音频或视频对象。只读。



## 语法

express.**MediaFormat**

express   一个代表 **Shape** 对象的变量。

## 类型

MediaFormat

## 说明


所有 msoMedia 类型的形状都具有 MediaFormat。



## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片中第一个音频对象的总长度*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.MediaFormat.Length)
}
```


```JavaScript
/*本示例显示第一张演示文稿第二张幻灯片中第一个音频对象的每秒采样率*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    alert(shape.MediaFormat.AudioSamplingRate)
}
```
