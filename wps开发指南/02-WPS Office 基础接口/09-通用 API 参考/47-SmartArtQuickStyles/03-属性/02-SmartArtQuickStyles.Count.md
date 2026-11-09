# SmartArtQuickStyles.Count

检索包含在 **[SmartArtQuickStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SmartArtQuickStyles/obj)** 集合中的 **SmartArtQuickStyle** 对象数的计数。只读。



## 语法

express.**Count**

express   一个代表 **SmartArtQuickStyles** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于各组件，显示 SmartArt 快速样式的数量。*/
function test() {
    alert(Application.SmartArtQuickStyles.Count)
}
```
