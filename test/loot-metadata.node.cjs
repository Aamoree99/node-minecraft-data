const test=require('node:test'),assert=require('node:assert/strict');
test('repaired26.1 drops and tools refer to real translated items',()=>{
 const blocks=require('../minecraft-data/data/pc/26.1/blocks.json'),items=require('../minecraft-data/data/pc/26.1/items.json');
 const ids=new Set(items.map(i=>i.id));let populated=0;
 for(const b of blocks){for(const id of b.drops||[]){assert.ok(ids.has(id),b.name);populated++;}for(const id of Object.keys(b.harvestTools||{}))assert.ok(ids.has(Number(id)),b.name);}
 assert.ok(populated>900);assert.ok(blocks.find(b=>b.name==='oak_log').drops.includes(items.find(i=>i.name==='oak_log').id));
});
test('native26.3 drop references remain valid',()=>{
 const blocks=require('../minecraft-data/data/pc/26.3/blocks.json'),ids=new Set(require('../minecraft-data/data/pc/26.3/items.json').map(i=>i.id));
 for(const b of blocks)for(const id of b.drops||[])assert.ok(ids.has(id),b.name);
});
