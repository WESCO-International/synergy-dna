import{s as g}from"./index-d475d2ea.js";import{c as L}from"./_commonjsHelpers-042e6b4d.js";function B(c,t){for(var e=0;e<t.length;e++){const o=t[e];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in c)){const a=Object.getOwnPropertyDescriptor(o,s);a&&Object.defineProperty(c,s,a.get?a:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}const{addons:G}=__STORYBOOK_MODULE_PREVIEW_API__,{once:V,logger:Y}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{FORCE_REMOUNT:I,IGNORED_EXCEPTION:K,SET_CURRENT_STORY:W,STORY_RENDER_PHASE_CHANGED:z}=__STORYBOOK_MODULE_CORE_EVENTS__;var $=(c=>(c.DONE="done",c.ERROR="error",c.ACTIVE="active",c.WAITING="waiting",c))($||{}),y={CALL:"storybook/instrumenter/call",SYNC:"storybook/instrumenter/sync",START:"storybook/instrumenter/start",BACK:"storybook/instrumenter/back",GOTO:"storybook/instrumenter/goto",NEXT:"storybook/instrumenter/next",END:"storybook/instrumenter/end"},P=g.FEATURES?.interactionsDebugger!==!0,M={debugger:!P,start:!1,back:!1,goto:!1,next:!1,end:!1},C=new Error("This function ran after the play function completed. Did you forget to `await` it?"),T=c=>Object.prototype.toString.call(c)==="[object Object]",H=c=>Object.prototype.toString.call(c)==="[object Module]",X=c=>{if(!T(c)&&!H(c))return!1;if(c.constructor===void 0)return!0;let t=c.constructor.prototype;return!(!T(t)||Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)},J=c=>{try{return new c.constructor}catch{return{}}},b=()=>({renderPhase:void 0,isDebugging:!1,isPlaying:!1,isLocked:!1,cursor:0,calls:[],shadowCalls:[],callRefsByResult:new Map,chainedCallIds:new Set,ancestors:[],playUntil:void 0,resolvers:{},syncTimeout:void 0}),v=(c,t=!1)=>{let e=(t?c.shadowCalls:c.calls).filter(s=>s.retain);if(!e.length)return;let o=new Map(Array.from(c.callRefsByResult.entries()).filter(([,s])=>s.retain));return{cursor:e.length,calls:e,callRefsByResult:o}},q=class{constructor(){this.initialized=!1,this.channel=G.getChannel(),this.state=g.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__||{};let c=({storyId:i,isPlaying:n=!0,isDebugging:r=!1})=>{let l=this.getState(i);this.setState(i,{...b(),...v(l,r),shadowCalls:r?l.shadowCalls:[],chainedCallIds:r?l.chainedCallIds:new Set,playUntil:r?l.playUntil:void 0,isPlaying:n,isDebugging:r}),this.sync(i)};this.channel.on(I,c),this.channel.on(z,({storyId:i,newPhase:n})=>{let{isDebugging:r}=this.getState(i);this.setState(i,{renderPhase:n}),n==="preparing"&&r&&c({storyId:i}),n==="playing"&&c({storyId:i,isDebugging:r}),n==="played"&&this.setState(i,{isLocked:!1,isPlaying:!1,isDebugging:!1}),n==="errored"&&this.setState(i,{isLocked:!1,isPlaying:!1})}),this.channel.on(W,()=>{this.initialized?this.cleanup():this.initialized=!0});let t=({storyId:i,playUntil:n})=>{this.getState(i).isDebugging||this.setState(i,({calls:l})=>({calls:[],shadowCalls:l.map(u=>({...u,status:"waiting"})),isDebugging:!0}));let r=this.getLog(i);this.setState(i,({shadowCalls:l})=>{if(n||!r.length)return{playUntil:n};let u=l.findIndex(f=>f.id===r[0].callId);return{playUntil:l.slice(0,u).filter(f=>f.interceptable&&!f.ancestors.length).slice(-1)[0]?.id}}),this.channel.emit(I,{storyId:i,isDebugging:!0})},e=({storyId:i})=>{let n=this.getLog(i).filter(l=>!l.ancestors.length),r=n.reduceRight((l,u,f)=>l>=0||u.status==="waiting"?l:f,-1);t({storyId:i,playUntil:n[r-1]?.callId})},o=({storyId:i,callId:n})=>{let{calls:r,shadowCalls:l,resolvers:u}=this.getState(i),f=r.find(({id:_})=>_===n),p=l.find(({id:_})=>_===n);if(!f&&p&&Object.values(u).length>0){let _=this.getLog(i).find(h=>h.status==="waiting")?.callId;p.id!==_&&this.setState(i,{playUntil:p.id}),Object.values(u).forEach(h=>h())}else t({storyId:i,playUntil:n})},s=({storyId:i})=>{let{resolvers:n}=this.getState(i);if(Object.values(n).length>0)Object.values(n).forEach(r=>r());else{let r=this.getLog(i).find(l=>l.status==="waiting")?.callId;r?t({storyId:i,playUntil:r}):a({storyId:i})}},a=({storyId:i})=>{this.setState(i,{playUntil:void 0,isDebugging:!1}),Object.values(this.getState(i).resolvers).forEach(n=>n())};this.channel.on(y.START,t),this.channel.on(y.BACK,e),this.channel.on(y.GOTO,o),this.channel.on(y.NEXT,s),this.channel.on(y.END,a)}getState(c){return this.state[c]||b()}setState(c,t){let e=this.getState(c),o=typeof t=="function"?t(e):t;this.state={...this.state,[c]:{...e,...o}},g.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}cleanup(){this.state=Object.entries(this.state).reduce((t,[e,o])=>{let s=v(o);return s&&(t[e]=Object.assign(b(),s)),t},{});let c={controlStates:M,logItems:[]};this.channel.emit(y.SYNC,c),g.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}getLog(c){let{calls:t,shadowCalls:e}=this.getState(c),o=[...e];t.forEach((a,i)=>{o[i]=a});let s=new Set;return o.reduceRight((a,i)=>(i.args.forEach(n=>{n?.__callId__&&s.add(n.__callId__)}),i.path.forEach(n=>{n.__callId__&&s.add(n.__callId__)}),(i.interceptable||i.exception)&&!s.has(i.id)&&(a.unshift({callId:i.id,status:i.status,ancestors:i.ancestors}),s.add(i.id)),a),[])}instrument(c,t){if(!X(c))return c;let{mutate:e=!1,path:o=[]}=t;return Object.keys(c).reduce((s,a)=>{let i=c[a];return typeof i!="function"?(s[a]=this.instrument(i,{...t,path:o.concat(a)}),s):typeof i.__originalFn__=="function"?(s[a]=i,s):(s[a]=(...n)=>this.track(a,i,n,t),s[a].__originalFn__=i,Object.defineProperty(s[a],"name",{value:a,writable:!1}),Object.keys(i).length>0&&Object.assign(s[a],this.instrument({...i},{...t,path:o.concat(a)})),s)},e?c:J(c))}track(c,t,e,o){let s=e?.[0]?.__storyId__||g.__STORYBOOK_PREVIEW__?.selectionStore?.selection?.storyId,{cursor:a,ancestors:i}=this.getState(s);this.setState(s,{cursor:a+1});let n=`${i.slice(-1)[0]||s} [${a}] ${c}`,{path:r=[],intercept:l=!1,retain:u=!1}=o,f=typeof l=="function"?l(c,r):l,p={id:n,cursor:a,storyId:s,ancestors:i,path:r,method:c,args:e,interceptable:f,retain:u},_=(f&&!i.length?this.intercept:this.invoke).call(this,t,p,o);return this.instrument(_,{...o,mutate:!0,path:[{__callId__:p.id}]})}intercept(c,t,e){let{chainedCallIds:o,isDebugging:s,playUntil:a}=this.getState(t.storyId),i=o.has(t.id);return!s||i||a?(a===t.id&&this.setState(t.storyId,{playUntil:void 0}),this.invoke(c,t,e)):new Promise(n=>{this.setState(t.storyId,({resolvers:r})=>({isLocked:!1,resolvers:{...r,[t.id]:n}}))}).then(()=>(this.setState(t.storyId,n=>{let{[t.id]:r,...l}=n.resolvers;return{isLocked:!0,resolvers:l}}),this.invoke(c,t,e)))}invoke(c,t,e){let{callRefsByResult:o,renderPhase:s}=this.getState(t.storyId),a=r=>{if(o.has(r))return o.get(r);if(r instanceof Array)return r.map(a);if(r instanceof Date)return{__date__:{value:r.toISOString()}};if(r instanceof Error){let{name:l,message:u,stack:f}=r;return{__error__:{name:l,message:u,stack:f}}}if(r instanceof RegExp){let{flags:l,source:u}=r;return{__regexp__:{flags:l,source:u}}}if(r instanceof g.window.HTMLElement){let{prefix:l,localName:u,id:f,classList:p,innerText:_}=r,h=Array.from(p);return{__element__:{prefix:l,localName:u,id:f,classNames:h,innerText:_}}}return typeof r=="function"?{__function__:{name:r.name}}:typeof r=="symbol"?{__symbol__:{description:r.description}}:typeof r=="object"&&r?.constructor?.name&&r?.constructor?.name!=="Object"?{__class__:{name:r.constructor.name}}:Object.prototype.toString.call(r)==="[object Object]"?Object.fromEntries(Object.entries(r).map(([l,u])=>[l,a(u)])):r},i={...t,args:t.args.map(a)};t.path.forEach(r=>{r?.__callId__&&this.setState(t.storyId,({chainedCallIds:l})=>({chainedCallIds:new Set(Array.from(l).concat(r.__callId__))}))});let n=r=>{if(r instanceof Error){let{name:l,message:u,stack:f,callId:p=t.id}=r,_={name:l,message:u,stack:f,callId:p};if(this.update({...i,status:"error",exception:_}),this.setState(t.storyId,h=>({callRefsByResult:new Map([...Array.from(h.callRefsByResult.entries()),[r,{__callId__:t.id,retain:t.retain}]])})),t.ancestors.length)throw Object.prototype.hasOwnProperty.call(r,"callId")||Object.defineProperty(r,"callId",{value:t.id}),r;if(r!==C)throw Y.warn(r),K}throw r};try{if(s==="played"&&!t.retain)throw C;let r=(e.getArgs?e.getArgs(t,this.getState(t.storyId)):t.args).map(u=>typeof u!="function"||Object.keys(u).length?u:(...f)=>{let{cursor:p,ancestors:_}=this.getState(t.storyId);this.setState(t.storyId,{cursor:0,ancestors:[..._,t.id]});let h=()=>this.setState(t.storyId,{cursor:p,ancestors:_}),m=!1;try{let k=u(...f);return k instanceof Promise?(m=!0,k.finally(h)):k}finally{m||h()}}),l=c(...r);return l&&["object","function","symbol"].includes(typeof l)&&this.setState(t.storyId,u=>({callRefsByResult:new Map([...Array.from(u.callRefsByResult.entries()),[l,{__callId__:t.id,retain:t.retain}]])})),this.update({...i,status:l instanceof Promise?"active":"done"}),l instanceof Promise?l.then(u=>(this.update({...i,status:"done"}),u),n):l}catch(r){return n(r)}}update(c){this.channel.emit(y.CALL,c),this.setState(c.storyId,({calls:t})=>{let e=t.concat(c).reduce((o,s)=>Object.assign(o,{[s.id]:s}),{});return{calls:Object.values(e).sort((o,s)=>o.id.localeCompare(s.id,void 0,{numeric:!0}))}}),this.sync(c.storyId)}sync(c){let t=()=>{let{isLocked:e,isPlaying:o}=this.getState(c),s=this.getLog(c),a=s.filter(({ancestors:l})=>!l.length).find(l=>l.status==="waiting")?.callId,i=s.some(l=>l.status==="active");if(P||e||i||s.length===0){let l={controlStates:M,logItems:s};this.channel.emit(y.SYNC,l);return}let n=s.some(l=>["done","error"].includes(l.status)),r={controlStates:{debugger:!0,start:n,back:n,goto:!0,next:o,end:o},logItems:s,pausedAt:a};this.channel.emit(y.SYNC,r)};this.setState(c,({syncTimeout:e})=>(clearTimeout(e),{syncTimeout:setTimeout(t,0)}))}};function at(c,t={}){try{let e=!1,o=!1;return g.window.location?.search?.includes("instrument=true")?e=!0:g.window.location?.search?.includes("instrument=false")&&(o=!0),g.window.parent===g.window&&!e||o?c:(g.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__||(g.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__=new q),g.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(c,t))}catch(e){return V.warn(e),c}}var d={};Object.defineProperty(d,"__esModule",{value:!0});var A=d.spyOn=F=d.mocked=x=d.fn=j=d.ModuleMocker=void 0;function w(c,t,e){return t in c?Object.defineProperty(c,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[t]=e,c}const E="mockConstructor",N=/[\s!-\/:-@\[-`{-~]/,Q=new RegExp(N.source,"g"),Z=new Set(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]);function tt(c,t){let e;switch(t){case 1:e=function(o){return c.apply(this,arguments)};break;case 2:e=function(o,s){return c.apply(this,arguments)};break;case 3:e=function(o,s,a){return c.apply(this,arguments)};break;case 4:e=function(o,s,a,i){return c.apply(this,arguments)};break;case 5:e=function(o,s,a,i,n){return c.apply(this,arguments)};break;case 6:e=function(o,s,a,i,n,r){return c.apply(this,arguments)};break;case 7:e=function(o,s,a,i,n,r,l){return c.apply(this,arguments)};break;case 8:e=function(o,s,a,i,n,r,l,u){return c.apply(this,arguments)};break;case 9:e=function(o,s,a,i,n,r,l,u,f){return c.apply(this,arguments)};break;default:e=function(){return c.apply(this,arguments)};break}return e}function R(c){return Object.prototype.toString.apply(c).slice(8,-1)}function et(c){const t=R(c);return t==="Function"||t==="AsyncFunction"||t==="GeneratorFunction"?"function":Array.isArray(c)?"array":t==="Object"?"object":t==="Number"||t==="String"||t==="Boolean"||t==="Symbol"?"constant":t==="Map"||t==="WeakMap"||t==="Set"?"collection":t==="RegExp"?"regexp":c===void 0?"undefined":c===null?"null":null}function nt(c,t){if(t==="arguments"||t==="caller"||t==="callee"||t==="name"||t==="length"){const e=R(c);return e==="Function"||e==="AsyncFunction"||e==="GeneratorFunction"}return t==="source"||t==="global"||t==="ignoreCase"||t==="multiline"?R(c)==="RegExp":!1}class D{constructor(t){w(this,"_environmentGlobal",void 0),w(this,"_mockState",void 0),w(this,"_mockConfigRegistry",void 0),w(this,"_spyState",void 0),w(this,"_invocationCallCounter",void 0),this._environmentGlobal=t,this._mockState=new WeakMap,this._mockConfigRegistry=new WeakMap,this._spyState=new Set,this._invocationCallCounter=1}_getSlots(t){if(!t)return[];const e=new Set,o=this._environmentGlobal.Object.prototype,s=this._environmentGlobal.Function.prototype,a=this._environmentGlobal.RegExp.prototype,i=Object.prototype,n=Function.prototype,r=RegExp.prototype;for(;t!=null&&t!==o&&t!==s&&t!==a&&t!==i&&t!==n&&t!==r;){const l=Object.getOwnPropertyNames(t);for(let u=0;u<l.length;u++){const f=l[u];if(!nt(t,f)){const p=Object.getOwnPropertyDescriptor(t,f);(p!==void 0&&!p.get||t.__esModule)&&e.add(f)}}t=Object.getPrototypeOf(t)}return Array.from(e)}_ensureMockConfig(t){let e=this._mockConfigRegistry.get(t);return e||(e=this._defaultMockConfig(),this._mockConfigRegistry.set(t,e)),e}_ensureMockState(t){let e=this._mockState.get(t);return e||(e=this._defaultMockState(),this._mockState.set(t,e)),e.calls.length>0&&(e.lastCall=e.calls[e.calls.length-1]),e}_defaultMockConfig(){return{mockImpl:void 0,mockName:"jest.fn()",specificMockImpls:[],specificReturnValues:[]}}_defaultMockState(){return{calls:[],instances:[],invocationCallOrder:[],results:[]}}_makeComponent(t,e){if(t.type==="object")return new this._environmentGlobal.Object;if(t.type==="array")return new this._environmentGlobal.Array;if(t.type==="regexp")return new this._environmentGlobal.RegExp("");if(t.type==="constant"||t.type==="collection"||t.type==="null"||t.type==="undefined")return t.value;if(t.type==="function"){const o=t.members&&t.members.prototype&&t.members.prototype.members||{},s=this._getSlots(o),a=this,i=tt(function(...r){const l=a._ensureMockState(n),u=a._ensureMockConfig(n);l.instances.push(this),l.calls.push(r);const f={type:"incomplete",value:void 0};l.results.push(f),l.invocationCallOrder.push(a._invocationCallCounter++);let p,_,h=!1;try{p=(()=>{if(this instanceof n){s.forEach(S=>{if(o[S].type==="function"){const U=this[S];this[S]=a.generateFromMetadata(o[S]),this[S]._protoImpl=U}});const k=u.specificMockImpls.length?u.specificMockImpls.shift():u.mockImpl;return k&&k.apply(this,arguments)}let m=u.specificMockImpls.shift();if(m===void 0&&(m=u.mockImpl),m)return m.apply(this,arguments);if(n._protoImpl)return n._protoImpl.apply(this,arguments)})()}catch(m){throw _=m,h=!0,m}finally{f.type=h?"throw":"return",f.value=h?_:p}return p},t.length||0),n=this._createMockFunction(t,i);return n._isMockFunction=!0,n.getMockImplementation=()=>this._ensureMockConfig(n).mockImpl,typeof e=="function"&&this._spyState.add(e),this._mockState.set(n,this._defaultMockState()),this._mockConfigRegistry.set(n,this._defaultMockConfig()),Object.defineProperty(n,"mock",{configurable:!1,enumerable:!0,get:()=>this._ensureMockState(n),set:r=>this._mockState.set(n,r)}),n.mockClear=()=>(this._mockState.delete(n),n),n.mockReset=()=>(n.mockClear(),this._mockConfigRegistry.delete(n),n),n.mockRestore=()=>(n.mockReset(),e?e():void 0),n.mockReturnValueOnce=r=>n.mockImplementationOnce(()=>r),n.mockResolvedValueOnce=r=>n.mockImplementationOnce(()=>Promise.resolve(r)),n.mockRejectedValueOnce=r=>n.mockImplementationOnce(()=>Promise.reject(r)),n.mockReturnValue=r=>n.mockImplementation(()=>r),n.mockResolvedValue=r=>n.mockImplementation(()=>Promise.resolve(r)),n.mockRejectedValue=r=>n.mockImplementation(()=>Promise.reject(r)),n.mockImplementationOnce=r=>(this._ensureMockConfig(n).specificMockImpls.push(r),n),n.mockImplementation=r=>{const l=this._ensureMockConfig(n);return l.mockImpl=r,n},n.mockReturnThis=()=>n.mockImplementation(function(){return this}),n.mockName=r=>{if(r){const l=this._ensureMockConfig(n);l.mockName=r}return n},n.getMockName=()=>this._ensureMockConfig(n).mockName||"jest.fn()",t.mockImpl&&n.mockImplementation(t.mockImpl),n}else{const o=t.type||"undefined type";throw new Error("Unrecognized type "+o)}}_createMockFunction(t,e){let o=t.name;if(!o)return e;const s="bound ";let a="";if(o&&o.startsWith(s))do o=o.substring(s.length),a=".bind(null)";while(o&&o.startsWith(s));if(o===E)return e;(Z.has(o)||/^\d/.test(o))&&(o="$"+o),N.test(o)&&(o=o.replace(Q,"$"));const i="return function "+o+"() {return "+E+".apply(this,arguments);}"+a;return new this._environmentGlobal.Function(E,i)(e)}_generateMock(t,e,o){const s=this._makeComponent(t);return t.refID!=null&&(o[t.refID]=s),this._getSlots(t.members).forEach(a=>{const i=t.members&&t.members[a]||{};i.ref!=null?e.push(function(n){return()=>s[a]=o[n]}(i.ref)):s[a]=this._generateMock(i,e,o)}),t.type!=="undefined"&&t.type!=="null"&&s.prototype&&typeof s.prototype=="object"&&(s.prototype.constructor=s),s}generateFromMetadata(t){const e=[],o={},s=this._generateMock(t,e,o);return e.forEach(a=>a()),s}getMetadata(t,e){const o=e||new Map,s=o.get(t);if(s!=null)return{ref:s};const a=et(t);if(!a)return null;const i={type:a};if(a==="constant"||a==="collection"||a==="undefined"||a==="null")return i.value=t,i;a==="function"&&(i.name=t.name,t._isMockFunction===!0&&(i.mockImpl=t.getMockImplementation())),i.refID=o.size,o.set(t,i.refID);let n=null;return a!=="array"&&this._getSlots(t).forEach(r=>{if(a==="function"&&t._isMockFunction===!0&&r.match(/^mock/))return;const l=this.getMetadata(t[r],o);l&&(n||(n={}),n[r]=l)}),n&&(i.members=n),i}isMockFunction(t){return!!t&&t._isMockFunction===!0}fn(t){const e=t?t.length:0,o=this._makeComponent({length:e,type:"function"});return t&&o.mockImplementation(t),o}spyOn(t,e,o){if(o)return this._spyOnProperty(t,e,o);if(typeof t!="object"&&typeof t!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(t)+" given");const s=t[e];if(!this.isMockFunction(s)){if(typeof s!="function")throw new Error("Cannot spy the "+e+" property because it is not a function; "+this._typeOf(s)+" given instead");const a=Object.prototype.hasOwnProperty.call(t,e);let i=Object.getOwnPropertyDescriptor(t,e),n=Object.getPrototypeOf(t);for(;!i&&n!==null;)i=Object.getOwnPropertyDescriptor(n,e),n=Object.getPrototypeOf(n);let r;if(i&&i.get){const l=i.get;r=this._makeComponent({type:"function"},()=>{i.get=l,Object.defineProperty(t,e,i)}),i.get=()=>r,Object.defineProperty(t,e,i)}else r=this._makeComponent({type:"function"},()=>{a?t[e]=s:delete t[e]}),t[e]=r;r.mockImplementation(function(){return s.apply(this,arguments)})}return t[e]}_spyOnProperty(t,e,o="get"){if(typeof t!="object"&&typeof t!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(t)+" given");if(!t)throw new Error("spyOn could not find an object to spy upon for "+e);if(!e)throw new Error("No property name supplied");let s=Object.getOwnPropertyDescriptor(t,e),a=Object.getPrototypeOf(t);for(;!s&&a!==null;)s=Object.getOwnPropertyDescriptor(a,e),a=Object.getPrototypeOf(a);if(!s)throw new Error(e+" property does not exist");if(!s.configurable)throw new Error(e+" is not declared configurable");if(!s[o])throw new Error("Property "+e+" does not have access type "+o);const i=s[o];if(!this.isMockFunction(i)){if(typeof i!="function")throw new Error("Cannot spy the "+e+" property because it is not a function; "+this._typeOf(i)+" given instead");s[o]=this._makeComponent({type:"function"},()=>{s[o]=i,Object.defineProperty(t,e,s)}),s[o].mockImplementation(function(){return i.apply(this,arguments)})}return Object.defineProperty(t,e,s),s[o]}clearAllMocks(){this._mockState=new WeakMap}resetAllMocks(){this._mockConfigRegistry=new WeakMap,this._mockState=new WeakMap}restoreAllMocks(){this._spyState.forEach(t=>t()),this._spyState=new Set}_typeOf(t){return t==null?""+t:typeof t}mocked(t,e=!1){return t}}var j=d.ModuleMocker=D;const O=new D(L),rt=O.fn.bind(O);var x=d.fn=rt;const it=O.spyOn.bind(O);A=d.spyOn=it;const st=O.mocked.bind(O);var F=d.mocked=st;const lt=B({__proto__:null,get ModuleMocker(){return j},default:d,get fn(){return x},get mocked(){return F},get spyOn(){return A}},[d]);export{j as M,at as i,lt as m};
//# sourceMappingURL=index-0c9409f0.js.map