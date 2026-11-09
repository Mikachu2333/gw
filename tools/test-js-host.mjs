import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { Script, createContext } from 'node:vm';

// 只运行宿主适配和入口守卫，不打开或修改任何真实文档。
const util = new Script(readFileSync(new URL('../wps-js/js/util.js', import.meta.url), 'utf8'));
const ribbon = new Script(readFileSync(new URL('../wps-js/js/ribbon.js', import.meta.url), 'utf8'));
let calls = 0;
const application = { Documents: { Count: 1 }, ActiveDocument: { ProtectionType: -1, ReadOnly: false } };
for (const window of [{ wps: { Application: application } }, { wps: { WpsApplication: () => application } }, { Application: application }]) {
    const context = createContext({ window, alert() {}, gwSetBody() { calls++; } });
    util.runInContext(context);
    ribbon.runInContext(context);
    assert.equal(context.app(), application);
    assert.equal(context.OnAddinLoad({}), true);
    application.ActiveDocument.ReadOnly = false;
    assert.equal(context.OnAction({ Id: 'btnBody' }), true);
    application.ActiveDocument.ReadOnly = true;
    assert.equal(context.OnAction({ Id: 'btnBody' }), false);
    application.ActiveDocument.ReadOnly = false;
    application.ActiveDocument.ProtectionType = 0;
    assert.equal(context.OnAction({ Id: 'btnBody' }), false);
    application.ActiveDocument.ProtectionType = -1;
    application.Documents.Count = 0;
    assert.equal(context.OnGetEnabled({ Id: 'btnBody' }), false);
    assert.equal(context.OnGetEnabled({ Id: 'btnAbout' }), true);
    application.Documents.Count = 1;
}
assert.equal(calls, 3);
console.log('PASS: 3 host API layouts; editing blocked for read-only/protected/absent documents.');
