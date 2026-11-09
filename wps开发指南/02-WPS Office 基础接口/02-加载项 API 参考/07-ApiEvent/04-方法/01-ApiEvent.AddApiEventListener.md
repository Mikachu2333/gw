# ApiEvent.AddApiEventListener

注册wps事件的回调。

## 语法

express.AddApiEventListener(eventName, func)

express   一个代表 ApiEvent 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| eventName | 必选 | String | 代表事件类型，事件类型由wps内部规定，有关wps支持的事件类型，可以参数ApiEvent对象说明相关文档。 |
| func | 必选 | js函数 | 代表要注册的事件回调，当事件发生时，此函数被调用到。 |