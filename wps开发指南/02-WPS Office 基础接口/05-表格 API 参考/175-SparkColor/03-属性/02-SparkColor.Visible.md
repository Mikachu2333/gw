# SparkColor.Visible

返回或设置点是否可见。可读/写



## 语法

express.**Visible**

express   一个代表 **SparkColor** 对象的变量。

## 类型

boolean

## 说明


 **Visible** 属性的设置对应于功能区 **“迷你图工具设计”** 选项卡 **“显示”** 部分中的 **“高点”** 、 **“低点”** 、 **“负点”** 、 **“首点”** 、 **“尾点”** 和 **­“标记”** 复选框的设置。使用 **[SparkPoints](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkPoints/obj)** 对象的对应属性可设置这些复选框的状态。



## 示例


```JavaScript
/*本示例将区域 A1:A4 上第一个迷你图组的迷你图的正数据点设置为不可见。*/
function test() {
    let sparkColor = Range("A1:A4").SparklineGroups.Item(1).Points.Markers
    sparkColor.Visible = false
}
```


```JavaScript
/*本示例显示区域 A1:A4 上第一个迷你图组的迷你图的负数据点是否可见。*/
function test() {
    let sparkColor = Range("A1:A4").SparklineGroups.Item(1).Points.Negative
    alert(sparkColor.Visible)
}
```
