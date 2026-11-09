# Application.PluginStorage

返回一个[PluginStorage](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/PluginStorage/obj)对象，该对象与 **LocalStorage** 的用法类似，但该对象的数据不会被持久化，在wps的jsapi插件中，该对象在一个插件中对应着同一个实例，因此该对象可以在一个jsapi插件的不同网页间共享数据，有关该对象的详细介绍，可以参考 [PluginStorage](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/PluginStorage/obj) 对象。

## 语法

express.PluginStorage

express   一个代表 Application 对象的变量。