# SmartArtLayouts.Count

检索包含在 **[SmartArtLayouts](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtLayouts/obj)** 集合中的 **SmartArtLayout** 对象数的计数。只读。



## 语法

express.**Count**

express   一个代表 **SmartArtLayouts** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于各组件，显示 SmartArt 布局的数量。*/
function test() {
    alert(Application.SmartArtLayouts.Count)
}
```
