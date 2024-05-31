var Kf = Object.defineProperty;
var Jf = (r, t, e) => t in r ? Kf(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var m = (r, t, e) => (Jf(r, typeof t != "symbol" ? t + "" : t, e), e), Vo = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var l = (r, t, e) => (Vo(r, t, "read from private field"), e ? e.call(r) : t.get(r)), y = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, d = (r, t, e, n) => (Vo(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e);
var Rs = (r, t, e, n) => ({
  set _(s) {
    d(r, t, s, e);
  },
  get _() {
    return l(r, t, n);
  }
}), x = (r, t, e) => (Vo(r, t, "access private method"), e);
function kc(r, t, e) {
  for (var n = new Array(e), s = 0, i = t; s < e; )
    n[s] = r[i], s = s + 1 | 0, i = i + 1 | 0;
  return n;
}
function zu(r, t) {
  for (; ; ) {
    var e = t, n = r, s = n.length, i = s === 0 ? 1 : s, o = e.length, a = i - o | 0;
    if (a === 0)
      return n.apply(null, e);
    if (a >= 0)
      return /* @__PURE__ */ function(c, u) {
        return function(f) {
          return zu(c, u.concat([f]));
        };
      }(n, e);
    t = kc(e, i, -a | 0), r = n.apply(null, kc(e, 0, i));
  }
}
function zf(r, t) {
  var e = r.length;
  if (e === 1)
    return r(t);
  switch (e) {
    case 1:
      return r(t);
    case 2:
      return function(n) {
        return r(t, n);
      };
    case 3:
      return function(n, s) {
        return r(t, n, s);
      };
    case 4:
      return function(n, s, i) {
        return r(t, n, s, i);
      };
    case 5:
      return function(n, s, i, o) {
        return r(t, n, s, i, o);
      };
    case 6:
      return function(n, s, i, o, a) {
        return r(t, n, s, i, o, a);
      };
    case 7:
      return function(n, s, i, o, a, c) {
        return r(t, n, s, i, o, a, c);
      };
    default:
      return zu(r, [t]);
  }
}
try {
  self["workbox:core:6.5.0"] && _();
} catch {
}
const jf = (r, ...t) => {
  let e = r;
  return t.length > 0 && (e += ` :: ${JSON.stringify(t)}`), e;
}, Wf = jf;
let ce = class extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(t, e) {
    const n = Wf(t, e);
    super(n), this.name = t, this.details = e;
  }
};
const xe = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration < "u" ? registration.scope : ""
}, Ko = (r) => [xe.prefix, r, xe.suffix].filter((t) => t && t.length > 0).join("-"), Zf = (r) => {
  for (const t of Object.keys(xe))
    r(t);
}, vo = {
  updateDetails: (r) => {
    Zf((t) => {
      typeof r[t] == "string" && (xe[t] = r[t]);
    });
  },
  getGoogleAnalyticsName: (r) => r || Ko(xe.googleAnalytics),
  getPrecacheName: (r) => r || Ko(xe.precache),
  getPrefix: () => xe.prefix,
  getRuntimeName: (r) => r || Ko(xe.runtime),
  getSuffix: () => xe.suffix
};
function Rc(r, t) {
  const e = t();
  return r.waitUntil(e), e;
}
try {
  self["workbox:precaching:6.5.0"] && _();
} catch {
}
const Yf = "__WB_REVISION__";
function qf(r) {
  if (!r)
    throw new ce("add-to-cache-list-unexpected-type", { entry: r });
  if (typeof r == "string") {
    const i = new URL(r, location.href);
    return {
      cacheKey: i.href,
      url: i.href
    };
  }
  const { revision: t, url: e } = r;
  if (!e)
    throw new ce("add-to-cache-list-unexpected-type", { entry: r });
  if (!t) {
    const i = new URL(e, location.href);
    return {
      cacheKey: i.href,
      url: i.href
    };
  }
  const n = new URL(e, location.href), s = new URL(e, location.href);
  return n.searchParams.set(Yf, t), {
    cacheKey: n.href,
    url: s.href
  };
}
class Xf {
  constructor() {
    this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({ request: t, state: e }) => {
      e && (e.originalRequest = t);
    }, this.cachedResponseWillBeUsed = async ({ event: t, state: e, cachedResponse: n }) => {
      if (t.type === "install" && e && e.originalRequest && e.originalRequest instanceof Request) {
        const s = e.originalRequest.url;
        n ? this.notUpdatedURLs.push(s) : this.updatedURLs.push(s);
      }
      return n;
    };
  }
}
class $f {
  constructor({ precacheController: t }) {
    this.cacheKeyWillBeUsed = async ({ request: e, params: n }) => {
      const s = (n == null ? void 0 : n.cacheKey) || this._precacheController.getCacheKeyForURL(e.url);
      return s ? new Request(s, { headers: e.headers }) : e;
    }, this._precacheController = t;
  }
}
let Cs;
function th() {
  if (Cs === void 0) {
    const r = new Response("");
    if ("body" in r)
      try {
        new Response(r.body), Cs = !0;
      } catch {
        Cs = !1;
      }
    Cs = !1;
  }
  return Cs;
}
async function eh(r, t) {
  let e = null;
  if (r.url && (e = new URL(r.url).origin), e !== self.location.origin)
    throw new ce("cross-origin-copy-response", { origin: e });
  const n = r.clone(), s = {
    headers: new Headers(n.headers),
    status: n.status,
    statusText: n.statusText
  }, i = t ? t(s) : s, o = th() ? n.body : await n.blob();
  return new Response(o, i);
}
const nh = (r) => new URL(String(r), location.href).href.replace(new RegExp(`^${location.origin}`), "");
function Cc(r, t) {
  const e = new URL(r);
  for (const n of t)
    e.searchParams.delete(n);
  return e.href;
}
async function rh(r, t, e, n) {
  const s = Cc(t.url, e);
  if (t.url === s)
    return r.match(t, n);
  const i = Object.assign(Object.assign({}, n), { ignoreSearch: !0 }), o = await r.keys(t, i);
  for (const a of o) {
    const c = Cc(a.url, e);
    if (s === c)
      return r.match(a, n);
  }
}
class sh {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((t, e) => {
      this.resolve = t, this.reject = e;
    });
  }
}
const ih = /* @__PURE__ */ new Set();
async function oh() {
  for (const r of ih)
    await r();
}
function ah(r) {
  return new Promise((t) => setTimeout(t, r));
}
try {
  self["workbox:strategies:6.5.0"] && _();
} catch {
}
function Oi(r) {
  return typeof r == "string" ? new Request(r) : r;
}
class ch {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(t, e) {
    this._cacheKeys = {}, Object.assign(this, e), this.event = e.event, this._strategy = t, this._handlerDeferred = new sh(), this._extendLifetimePromises = [], this._plugins = [...t.plugins], this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const n of this._plugins)
      this._pluginStateMap.set(n, {});
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(t) {
    const { event: e } = this;
    let n = Oi(t);
    if (n.mode === "navigate" && e instanceof FetchEvent && e.preloadResponse) {
      const o = await e.preloadResponse;
      if (o)
        return o;
    }
    const s = this.hasCallback("fetchDidFail") ? n.clone() : null;
    try {
      for (const o of this.iterateCallbacks("requestWillFetch"))
        n = await o({ request: n.clone(), event: e });
    } catch (o) {
      if (o instanceof Error)
        throw new ce("plugin-error-request-will-fetch", {
          thrownErrorMessage: o.message
        });
    }
    const i = n.clone();
    try {
      let o;
      o = await fetch(n, n.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
      for (const a of this.iterateCallbacks("fetchDidSucceed"))
        o = await a({
          event: e,
          request: i,
          response: o
        });
      return o;
    } catch (o) {
      throw s && await this.runCallbacks("fetchDidFail", {
        error: o,
        event: e,
        originalRequest: s.clone(),
        request: i.clone()
      }), o;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(t) {
    const e = await this.fetch(t), n = e.clone();
    return this.waitUntil(this.cachePut(t, n)), e;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(t) {
    const e = Oi(t);
    let n;
    const { cacheName: s, matchOptions: i } = this._strategy, o = await this.getCacheKey(e, "read"), a = Object.assign(Object.assign({}, i), { cacheName: s });
    n = await caches.match(o, a);
    for (const c of this.iterateCallbacks("cachedResponseWillBeUsed"))
      n = await c({
        cacheName: s,
        matchOptions: i,
        cachedResponse: n,
        request: o,
        event: this.event
      }) || void 0;
    return n;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(t, e) {
    const n = Oi(t);
    await ah(0);
    const s = await this.getCacheKey(n, "write");
    if (!e)
      throw new ce("cache-put-with-no-response", {
        url: nh(s.url)
      });
    const i = await this._ensureResponseSafeToCache(e);
    if (!i)
      return !1;
    const { cacheName: o, matchOptions: a } = this._strategy, c = await self.caches.open(o), u = this.hasCallback("cacheDidUpdate"), f = u ? await rh(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      c,
      s.clone(),
      ["__WB_REVISION__"],
      a
    ) : null;
    try {
      await c.put(s, u ? i.clone() : i);
    } catch (h) {
      if (h instanceof Error)
        throw h.name === "QuotaExceededError" && await oh(), h;
    }
    for (const h of this.iterateCallbacks("cacheDidUpdate"))
      await h({
        cacheName: o,
        oldResponse: f,
        newResponse: i.clone(),
        request: s,
        event: this.event
      });
    return !0;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(t, e) {
    const n = `${t.url} | ${e}`;
    if (!this._cacheKeys[n]) {
      let s = t;
      for (const i of this.iterateCallbacks("cacheKeyWillBeUsed"))
        s = Oi(await i({
          mode: e,
          request: s,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      this._cacheKeys[n] = s;
    }
    return this._cacheKeys[n];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(t) {
    for (const e of this._strategy.plugins)
      if (t in e)
        return !0;
    return !1;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(t, e) {
    for (const n of this.iterateCallbacks(t))
      await n(e);
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(t) {
    for (const e of this._strategy.plugins)
      if (typeof e[t] == "function") {
        const n = this._pluginStateMap.get(e);
        yield (i) => {
          const o = Object.assign(Object.assign({}, i), { state: n });
          return e[t](o);
        };
      }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(t) {
    return this._extendLifetimePromises.push(t), t;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let t;
    for (; t = this._extendLifetimePromises.shift(); )
      await t;
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(t) {
    let e = t, n = !1;
    for (const s of this.iterateCallbacks("cacheWillUpdate"))
      if (e = await s({
        request: this.request,
        response: e,
        event: this.event
      }) || void 0, n = !0, !e)
        break;
    return n || e && e.status !== 200 && (e = void 0), e;
  }
}
class uh {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(t = {}) {
    this.cacheName = vo.getRuntimeName(t.cacheName), this.plugins = t.plugins || [], this.fetchOptions = t.fetchOptions, this.matchOptions = t.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(t) {
    const [e] = this.handleAll(t);
    return e;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(t) {
    t instanceof FetchEvent && (t = {
      event: t,
      request: t.request
    });
    const e = t.event, n = typeof t.request == "string" ? new Request(t.request) : t.request, s = "params" in t ? t.params : void 0, i = new ch(this, { event: e, request: n, params: s }), o = this._getResponse(i, n, e), a = this._awaitComplete(o, i, n, e);
    return [o, a];
  }
  async _getResponse(t, e, n) {
    await t.runCallbacks("handlerWillStart", { event: n, request: e });
    let s;
    try {
      if (s = await this._handle(e, t), !s || s.type === "error")
        throw new ce("no-response", { url: e.url });
    } catch (i) {
      if (i instanceof Error) {
        for (const o of t.iterateCallbacks("handlerDidError"))
          if (s = await o({ error: i, event: n, request: e }), s)
            break;
      }
      if (!s)
        throw i;
    }
    for (const i of t.iterateCallbacks("handlerWillRespond"))
      s = await i({ event: n, request: e, response: s });
    return s;
  }
  async _awaitComplete(t, e, n, s) {
    let i, o;
    try {
      i = await t;
    } catch {
    }
    try {
      await e.runCallbacks("handlerDidRespond", {
        event: s,
        request: n,
        response: i
      }), await e.doneWaiting();
    } catch (a) {
      a instanceof Error && (o = a);
    }
    if (await e.runCallbacks("handlerDidComplete", {
      event: s,
      request: n,
      response: i,
      error: o
    }), e.destroy(), o)
      throw o;
  }
}
class bn extends uh {
  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor(t = {}) {
    t.cacheName = vo.getPrecacheName(t.cacheName), super(t), this._fallbackToNetwork = t.fallbackToNetwork !== !1, this.plugins.push(bn.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(t, e) {
    const n = await e.cacheMatch(t);
    return n || (e.event && e.event.type === "install" ? await this._handleInstall(t, e) : await this._handleFetch(t, e));
  }
  async _handleFetch(t, e) {
    let n;
    const s = e.params || {};
    if (this._fallbackToNetwork) {
      const i = s.integrity, o = t.integrity, a = !o || o === i;
      n = await e.fetch(new Request(t, {
        integrity: o || i
      })), i && a && (this._useDefaultCacheabilityPluginIfNeeded(), await e.cachePut(t, n.clone()));
    } else
      throw new ce("missing-precache-entry", {
        cacheName: this.cacheName,
        url: t.url
      });
    return n;
  }
  async _handleInstall(t, e) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const n = await e.fetch(t);
    if (!await e.cachePut(t, n.clone()))
      throw new ce("bad-precaching-response", {
        url: t.url,
        status: n.status
      });
    return n;
  }
  /**
   * This method is complex, as there a number of things to account for:
   *
   * The `plugins` array can be set at construction, and/or it might be added to
   * to at any time before the strategy is used.
   *
   * At the time the strategy is used (i.e. during an `install` event), there
   * needs to be at least one plugin that implements `cacheWillUpdate` in the
   * array, other than `copyRedirectedCacheableResponsesPlugin`.
   *
   * - If this method is called and there are no suitable `cacheWillUpdate`
   * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
   *
   * - If this method is called and there is exactly one `cacheWillUpdate`, then
   * we don't have to do anything (this might be a previously added
   * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
   *
   * - If this method is called and there is more than one `cacheWillUpdate`,
   * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
   * we need to remove it. (This situation is unlikely, but it could happen if
   * the strategy is used multiple times, the first without a `cacheWillUpdate`,
   * and then later on after manually adding a custom `cacheWillUpdate`.)
   *
   * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
   *
   * @private
   */
  _useDefaultCacheabilityPluginIfNeeded() {
    let t = null, e = 0;
    for (const [n, s] of this.plugins.entries())
      s !== bn.copyRedirectedCacheableResponsesPlugin && (s === bn.defaultPrecacheCacheabilityPlugin && (t = n), s.cacheWillUpdate && e++);
    e === 0 ? this.plugins.push(bn.defaultPrecacheCacheabilityPlugin) : e > 1 && t !== null && this.plugins.splice(t, 1);
  }
}
bn.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response: r }) {
    return !r || r.status >= 400 ? null : r;
  }
};
bn.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response: r }) {
    return r.redirected ? await eh(r) : r;
  }
};
class lh {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor({ cacheName: t, plugins: e = [], fallbackToNetwork: n = !0 } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map(), this._urlsToCacheModes = /* @__PURE__ */ new Map(), this._cacheKeysToIntegrities = /* @__PURE__ */ new Map(), this._strategy = new bn({
      cacheName: vo.getPrecacheName(t),
      plugins: [
        ...e,
        new $f({ precacheController: this })
      ],
      fallbackToNetwork: n
    }), this.install = this.install.bind(this), this.activate = this.activate.bind(this);
  }
  /**
   * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */
  get strategy() {
    return this._strategy;
  }
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * {@link workbox-core.cacheNames|"precache cache"} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   */
  precache(t) {
    this.addToCacheList(t), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0);
  }
  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
   *     Array of entries to precache.
   */
  addToCacheList(t) {
    const e = [];
    for (const n of t) {
      typeof n == "string" ? e.push(n) : n && n.revision === void 0 && e.push(n.url);
      const { cacheKey: s, url: i } = qf(n), o = typeof n != "string" && n.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(i) && this._urlsToCacheKeys.get(i) !== s)
        throw new ce("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(i),
          secondEntry: s
        });
      if (typeof n != "string" && n.integrity) {
        if (this._cacheKeysToIntegrities.has(s) && this._cacheKeysToIntegrities.get(s) !== n.integrity)
          throw new ce("add-to-cache-list-conflicting-integrities", {
            url: i
          });
        this._cacheKeysToIntegrities.set(s, n.integrity);
      }
      if (this._urlsToCacheKeys.set(i, s), this._urlsToCacheModes.set(i, o), e.length > 0) {
        const a = `Workbox is precaching URLs without revision info: ${e.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        console.warn(a);
      }
    }
  }
  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.InstallResult>}
   */
  install(t) {
    return Rc(t, async () => {
      const e = new Xf();
      this.strategy.plugins.push(e);
      for (const [i, o] of this._urlsToCacheKeys) {
        const a = this._cacheKeysToIntegrities.get(o), c = this._urlsToCacheModes.get(i), u = new Request(i, {
          integrity: a,
          cache: c,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey: o },
          request: u,
          event: t
        }));
      }
      const { updatedURLs: n, notUpdatedURLs: s } = e;
      return { updatedURLs: n, notUpdatedURLs: s };
    });
  }
  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.CleanupResult>}
   */
  activate(t) {
    return Rc(t, async () => {
      const e = await self.caches.open(this.strategy.cacheName), n = await e.keys(), s = new Set(this._urlsToCacheKeys.values()), i = [];
      for (const o of n)
        s.has(o.url) || (await e.delete(o), i.push(o.url));
      return { deletedURLs: i };
    });
  }
  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(t) {
    const e = new URL(t, location.href);
    return this._urlsToCacheKeys.get(e.href);
  }
  /**
   * @param {string} url A cache key whose SRI you want to look up.
   * @return {string} The subresource integrity associated with the cache key,
   * or undefined if it's not set.
   */
  getIntegrityForCacheKey(t) {
    return this._cacheKeysToIntegrities.get(t);
  }
  /**
   * This acts as a drop-in replacement for
   * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
   * with the following differences:
   *
   * - It knows what the name of the precache is, and only checks in that cache.
   * - It allows you to pass in an "original" URL without versioning parameters,
   * and it will automatically look up the correct cache key for the currently
   * active revision of that URL.
   *
   * E.g., `matchPrecache('index.html')` will find the correct precached
   * response for the currently active service worker, even if the actual cache
   * key is `'/index.html?__WB_REVISION__=1234abcd'`.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   */
  async matchPrecache(t) {
    const e = t instanceof Request ? t.url : t, n = this.getCacheKeyForURL(e);
    if (n)
      return (await self.caches.open(this.strategy.cacheName)).match(n);
  }
  /**
   * Returns a function that looks up `url` in the precache (taking into
   * account revision information), and returns the corresponding `Response`.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @return {workbox-routing~handlerCallback}
   */
  createHandlerBoundToURL(t) {
    const e = this.getCacheKeyForURL(t);
    if (!e)
      throw new ce("non-precached-url", { url: t });
    return (n) => (n.request = new Request(t), n.params = Object.assign({ cacheKey: e }, n.params), this.strategy.handle(n));
  }
}
let Jo;
const ju = () => (Jo || (Jo = new lh()), Jo);
try {
  self["workbox:core:6.5.0"] && _();
} catch {
}
const fh = (r, ...t) => {
  let e = r;
  return t.length > 0 && (e += ` :: ${JSON.stringify(t)}`), e;
}, hh = fh;
class ha extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(t, e) {
    const n = hh(t, e);
    super(n), this.name = t, this.details = e;
  }
}
try {
  self["workbox:routing:6.5.0"] && _();
} catch {
}
const Wu = "GET", to = (r) => r && typeof r == "object" ? r : { handle: r };
class Ms {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(t, e, n = Wu) {
    this.handler = to(e), this.match = t, this.method = n;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(t) {
    this.catchHandler = to(t);
  }
}
class dh extends Ms {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(t, e, n) {
    const s = ({ url: i }) => {
      const o = t.exec(i.href);
      if (o && !(i.origin !== location.origin && o.index !== 0))
        return o.slice(1);
    };
    super(s, e, n);
  }
}
class ph {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map(), this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (t) => {
      const { request: e } = t, n = this.handleRequest({ request: e, event: t });
      n && t.respondWith(n);
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (t) => {
      if (t.data && t.data.type === "CACHE_URLS") {
        const { payload: e } = t.data, n = Promise.all(e.urlsToCache.map((s) => {
          typeof s == "string" && (s = [s]);
          const i = new Request(...s);
          return this.handleRequest({ request: i, event: t });
        }));
        t.waitUntil(n), t.ports && t.ports[0] && n.then(() => t.ports[0].postMessage(!0));
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request: t, event: e }) {
    const n = new URL(t.url, location.href);
    if (!n.protocol.startsWith("http"))
      return;
    const s = n.origin === location.origin, { params: i, route: o } = this.findMatchingRoute({
      event: e,
      request: t,
      sameOrigin: s,
      url: n
    });
    let a = o && o.handler;
    const c = t.method;
    if (!a && this._defaultHandlerMap.has(c) && (a = this._defaultHandlerMap.get(c)), !a)
      return;
    let u;
    try {
      u = a.handle({ url: n, request: t, event: e, params: i });
    } catch (h) {
      u = Promise.reject(h);
    }
    const f = o && o.catchHandler;
    return u instanceof Promise && (this._catchHandler || f) && (u = u.catch(async (h) => {
      if (f)
        try {
          return await f.handle({ url: n, request: t, event: e, params: i });
        } catch (p) {
          p instanceof Error && (h = p);
        }
      if (this._catchHandler)
        return this._catchHandler.handle({ url: n, request: t, event: e });
      throw h;
    })), u;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url: t, sameOrigin: e, request: n, event: s }) {
    const i = this._routes.get(n.method) || [];
    for (const o of i) {
      let a;
      const c = o.match({ url: t, sameOrigin: e, request: n, event: s });
      if (c)
        return a = c, (Array.isArray(a) && a.length === 0 || c.constructor === Object && // eslint-disable-line
        Object.keys(c).length === 0 || typeof c == "boolean") && (a = void 0), { route: o, params: a };
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(t, e = Wu) {
    this._defaultHandlerMap.set(e, to(t));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(t) {
    this._catchHandler = to(t);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(t) {
    this._routes.has(t.method) || this._routes.set(t.method, []), this._routes.get(t.method).push(t);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(t) {
    if (!this._routes.has(t.method))
      throw new ha("unregister-route-but-not-found-with-method", {
        method: t.method
      });
    const e = this._routes.get(t.method).indexOf(t);
    if (e > -1)
      this._routes.get(t.method).splice(e, 1);
    else
      throw new ha("unregister-route-route-not-registered");
  }
}
let vs;
const gh = () => (vs || (vs = new ph(), vs.addFetchListener(), vs.addCacheListener()), vs);
function mh(r, t, e) {
  let n;
  if (typeof r == "string") {
    const i = new URL(r, location.href), o = ({ url: a }) => a.href === i.href;
    n = new Ms(o, t, e);
  } else if (r instanceof RegExp)
    n = new dh(r, t, e);
  else if (typeof r == "function")
    n = new Ms(r, t, e);
  else if (r instanceof Ms)
    n = r;
  else
    throw new ha("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  return gh().registerRoute(n), n;
}
function yh(r, t = []) {
  for (const e of [...r.searchParams.keys()])
    t.some((n) => n.test(e)) && r.searchParams.delete(e);
  return r;
}
function* wh(r, { ignoreURLParametersMatching: t = [/^utm_/, /^fbclid$/], directoryIndex: e = "index.html", cleanURLs: n = !0, urlManipulation: s } = {}) {
  const i = new URL(r, location.href);
  i.hash = "", yield i.href;
  const o = yh(i, t);
  if (yield o.href, e && o.pathname.endsWith("/")) {
    const a = new URL(o.href);
    a.pathname += e, yield a.href;
  }
  if (n) {
    const a = new URL(o.href);
    a.pathname += ".html", yield a.href;
  }
  if (s) {
    const a = s({ url: i });
    for (const c of a)
      yield c.href;
  }
}
class Ah extends Ms {
  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  constructor(t, e) {
    const n = ({ request: s }) => {
      const i = t.getURLsToCacheKeys();
      for (const o of wh(s.url, e)) {
        const a = i.get(o);
        if (a) {
          const c = t.getIntegrityForCacheKey(a);
          return { cacheKey: a, integrity: c };
        }
      }
    };
    super(n, t.strategy);
  }
}
function bh(r) {
  const t = ju(), e = new Ah(t, r);
  mh(e);
}
const Eh = "-precache-", Nh = async (r, t = Eh) => {
  const n = (await self.caches.keys()).filter((s) => s.includes(t) && s.includes(self.registration.scope) && s !== r);
  return await Promise.all(n.map((s) => self.caches.delete(s))), n;
};
function Ph() {
  self.addEventListener("activate", (r) => {
    const t = vo.getPrecacheName();
    r.waitUntil(Nh(t).then((e) => {
    }));
  });
}
function xh(r) {
  ju().precache(r);
}
function kh(r, t) {
  xh(r), bh(t);
}
var Rh = Notification.permission === "granted", Ch = {
  granted: Rh
};
const vh = "6.9.0";
function Oh(r, t, e) {
  const n = t.split("|").map((i) => i.trim());
  for (let i = 0; i < n.length; i++)
    switch (t) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof r === t)
          return;
    }
  const s = new Error(`invalid value for type ${t}`);
  throw s.code = "INVALID_ARGUMENT", s.argument = `value.${e}`, s.value = r, s;
}
async function pt(r) {
  const t = Object.keys(r);
  return (await Promise.all(t.map((n) => Promise.resolve(r[n])))).reduce((n, s, i) => (n[t[i]] = s, n), {});
}
function B(r, t, e) {
  for (let n in t) {
    let s = t[n];
    const i = e ? e[n] : null;
    i && Oh(s, i, n), Object.defineProperty(r, n, { enumerable: !0, value: s, writable: !1 });
  }
}
function Ar(r) {
  if (r == null)
    return "null";
  if (Array.isArray(r))
    return "[ " + r.map(Ar).join(", ") + " ]";
  if (r instanceof Uint8Array) {
    const t = "0123456789abcdef";
    let e = "0x";
    for (let n = 0; n < r.length; n++)
      e += t[r[n] >> 4], e += t[r[n] & 15];
    return e;
  }
  if (typeof r == "object" && typeof r.toJSON == "function")
    return Ar(r.toJSON());
  switch (typeof r) {
    case "boolean":
    case "symbol":
      return r.toString();
    case "bigint":
      return BigInt(r).toString();
    case "number":
      return r.toString();
    case "string":
      return JSON.stringify(r);
    case "object": {
      const t = Object.keys(r);
      return t.sort(), "{ " + t.map((e) => `${Ar(e)}: ${Ar(r[e])}`).join(", ") + " }";
    }
  }
  return "[ COULD NOT SERIALIZE ]";
}
function Ot(r, t) {
  return r && r.code === t;
}
function ja(r) {
  return Ot(r, "CALL_EXCEPTION");
}
function tt(r, t, e) {
  let n = r;
  {
    const i = [];
    if (e) {
      if ("message" in e || "code" in e || "name" in e)
        throw new Error(`value will overwrite populated values: ${Ar(e)}`);
      for (const o in e) {
        if (o === "shortMessage")
          continue;
        const a = e[o];
        i.push(o + "=" + Ar(a));
      }
    }
    i.push(`code=${t}`), i.push(`version=${vh}`), i.length && (r += " (" + i.join(", ") + ")");
  }
  let s;
  switch (t) {
    case "INVALID_ARGUMENT":
      s = new TypeError(r);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      s = new RangeError(r);
      break;
    default:
      s = new Error(r);
  }
  return B(s, { code: t }), e && Object.assign(s, e), s.shortMessage == null && B(s, { shortMessage: n }), s;
}
function b(r, t, e, n) {
  if (!r)
    throw tt(t, e, n);
}
function g(r, t, e, n) {
  b(r, t, "INVALID_ARGUMENT", { argument: e, value: n });
}
function Zu(r, t, e) {
  e == null && (e = ""), e && (e = ": " + e), b(r >= t, "missing arguemnt" + e, "MISSING_ARGUMENT", {
    count: r,
    expectedCount: t
  }), b(r <= t, "too many arguemnts" + e, "UNEXPECTED_ARGUMENT", {
    count: r,
    expectedCount: t
  });
}
const Th = ["NFD", "NFC", "NFKD", "NFKC"].reduce((r, t) => {
  try {
    if ("test".normalize(t) !== "test")
      throw new Error("bad");
    if (t === "NFD" && "é".normalize("NFD") !== "é")
      throw new Error("broken");
    r.push(t);
  } catch {
  }
  return r;
}, []);
function Ih(r) {
  b(Th.indexOf(r) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
    operation: "String.prototype.normalize",
    info: { form: r }
  });
}
function Oo(r, t, e) {
  if (e == null && (e = ""), r !== t) {
    let n = e, s = "new";
    e && (n += ".", s += " " + e), b(!1, `private constructor; use ${n}from* methods`, "UNSUPPORTED_OPERATION", {
      operation: s
    });
  }
}
function Yu(r, t, e) {
  if (r instanceof Uint8Array)
    return e ? new Uint8Array(r) : r;
  if (typeof r == "string" && r.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
    const n = new Uint8Array((r.length - 2) / 2);
    let s = 2;
    for (let i = 0; i < n.length; i++)
      n[i] = parseInt(r.substring(s, s + 2), 16), s += 2;
    return n;
  }
  g(!1, "invalid BytesLike value", t || "value", r);
}
function K(r, t) {
  return Yu(r, t, !1);
}
function vt(r, t) {
  return Yu(r, t, !0);
}
function X(r, t) {
  return !(typeof r != "string" || !r.match(/^0x[0-9A-Fa-f]*$/) || typeof t == "number" && r.length !== 2 + 2 * t || t === !0 && r.length % 2 !== 0);
}
function Bh(r) {
  return X(r, !0) || r instanceof Uint8Array;
}
const vc = "0123456789abcdef";
function T(r) {
  const t = K(r);
  let e = "0x";
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    e += vc[(s & 240) >> 4] + vc[s & 15];
  }
  return e;
}
function rt(r) {
  return "0x" + r.map((t) => T(t).substring(2)).join("");
}
function kr(r) {
  return X(r, !0) ? (r.length - 2) / 2 : K(r).length;
}
function $(r, t, e) {
  const n = K(r);
  return e != null && e > n.length && b(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
    buffer: n,
    length: n.length,
    offset: e
  }), T(n.slice(t ?? 0, e ?? n.length));
}
function qu(r, t, e) {
  const n = K(r);
  b(t >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(n),
    length: t,
    offset: t + 1
  });
  const s = new Uint8Array(t);
  return s.fill(0), e ? s.set(n, t - n.length) : s.set(n, 0), T(s);
}
function sr(r, t) {
  return qu(r, t, !0);
}
function Sh(r, t) {
  return qu(r, t, !1);
}
const To = BigInt(0), ae = BigInt(1), br = 9007199254740991;
function Uh(r, t) {
  const e = Io(r, "value"), n = BigInt(L(t, "width"));
  if (b(e >> n === To, "overflow", "NUMERIC_FAULT", {
    operation: "fromTwos",
    fault: "overflow",
    value: r
  }), e >> n - ae) {
    const s = (ae << n) - ae;
    return -((~e & s) + ae);
  }
  return e;
}
function Xu(r, t) {
  let e = I(r, "value");
  const n = BigInt(L(t, "width")), s = ae << n - ae;
  if (e < To) {
    e = -e, b(e <= s, "too low", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
    const i = (ae << n) - ae;
    return (~e & i) + ae;
  } else
    b(e < s, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: r
    });
  return e;
}
function Is(r, t) {
  const e = Io(r, "value"), n = BigInt(L(t, "bits"));
  return e & (ae << n) - ae;
}
function I(r, t) {
  switch (typeof r) {
    case "bigint":
      return r;
    case "number":
      return g(Number.isInteger(r), "underflow", t || "value", r), g(r >= -br && r <= br, "overflow", t || "value", r), BigInt(r);
    case "string":
      try {
        if (r === "")
          throw new Error("empty string");
        return r[0] === "-" && r[1] !== "-" ? -BigInt(r.substring(1)) : BigInt(r);
      } catch (e) {
        g(!1, `invalid BigNumberish string: ${e.message}`, t || "value", r);
      }
  }
  g(!1, "invalid BigNumberish value", t || "value", r);
}
function Io(r, t) {
  const e = I(r, t);
  return b(e >= To, "unsigned value cannot be negative", "NUMERIC_FAULT", {
    fault: "overflow",
    operation: "getUint",
    value: r
  }), e;
}
const Oc = "0123456789abcdef";
function Wa(r) {
  if (r instanceof Uint8Array) {
    let t = "0x0";
    for (const e of r)
      t += Oc[e >> 4], t += Oc[e & 15];
    return BigInt(t);
  }
  return I(r);
}
function L(r, t) {
  switch (typeof r) {
    case "bigint":
      return g(r >= -br && r <= br, "overflow", t || "value", r), Number(r);
    case "number":
      return g(Number.isInteger(r), "underflow", t || "value", r), g(r >= -br && r <= br, "overflow", t || "value", r), r;
    case "string":
      try {
        if (r === "")
          throw new Error("empty string");
        return L(BigInt(r), t);
      } catch (e) {
        g(!1, `invalid numeric string: ${e.message}`, t || "value", r);
      }
  }
  g(!1, "invalid numeric value", t || "value", r);
}
function Dh(r) {
  return L(Wa(r));
}
function Nn(r, t) {
  let n = Io(r, "value").toString(16);
  if (t == null)
    n.length % 2 && (n = "0" + n);
  else {
    const s = L(t, "width");
    for (b(s * 2 >= n.length, `value exceeds width (${s} bytes)`, "NUMERIC_FAULT", {
      operation: "toBeHex",
      fault: "overflow",
      value: r
    }); n.length < s * 2; )
      n = "0" + n;
  }
  return "0x" + n;
}
function Qt(r) {
  const t = Io(r, "value");
  if (t === To)
    return new Uint8Array([]);
  let e = t.toString(16);
  e.length % 2 && (e = "0" + e);
  const n = new Uint8Array(e.length / 2);
  for (let s = 0; s < n.length; s++) {
    const i = s * 2;
    n[s] = parseInt(e.substring(i, i + 2), 16);
  }
  return n;
}
function On(r) {
  let t = T(Bh(r) ? r : Qt(r)).substring(2);
  for (; t.startsWith("0"); )
    t = t.substring(1);
  return t === "" && (t = "0"), "0x" + t;
}
const Fh = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
BigInt(0);
const Tc = BigInt(58);
function Lh(r) {
  let t = Wa(K(r)), e = "";
  for (; t; )
    e = Fh[Number(t % Tc)] + e, t /= Tc;
  return e;
}
function Mh(r) {
  r = atob(r);
  const t = new Uint8Array(r.length);
  for (let e = 0; e < r.length; e++)
    t[e] = r.charCodeAt(e);
  return K(t);
}
function _h(r) {
  const t = K(r);
  let e = "";
  for (let n = 0; n < t.length; n++)
    e += String.fromCharCode(t[n]);
  return btoa(e);
}
var Cr;
class $u {
  /**
   *  Create a new **EventPayload** for %%emitter%% with
   *  the %%listener%% and for %%filter%%.
   */
  constructor(t, e, n) {
    /**
     *  The event filter.
     */
    m(this, "filter");
    /**
     *  The **EventEmitterable**.
     */
    m(this, "emitter");
    y(this, Cr, void 0);
    d(this, Cr, e), B(this, { emitter: t, filter: n });
  }
  /**
   *  Unregister the triggered listener for future events.
   */
  async removeListener() {
    l(this, Cr) != null && await this.emitter.off(this.filter, l(this, Cr));
  }
}
Cr = new WeakMap();
function Gh(r, t, e, n, s) {
  g(!1, `invalid codepoint at offset ${t}; ${r}`, "bytes", e);
}
function tl(r, t, e, n, s) {
  if (r === "BAD_PREFIX" || r === "UNEXPECTED_CONTINUE") {
    let i = 0;
    for (let o = t + 1; o < e.length && e[o] >> 6 === 2; o++)
      i++;
    return i;
  }
  return r === "OVERRUN" ? e.length - t - 1 : 0;
}
function Hh(r, t, e, n, s) {
  return r === "OVERLONG" ? (g(typeof s == "number", "invalid bad code point for replacement", "badCodepoint", s), n.push(s), 0) : (n.push(65533), tl(r, t, e));
}
const Qh = Object.freeze({
  error: Gh,
  ignore: tl,
  replace: Hh
});
function Vh(r, t) {
  t == null && (t = Qh.error);
  const e = K(r, "bytes"), n = [];
  let s = 0;
  for (; s < e.length; ) {
    const i = e[s++];
    if (!(i >> 7)) {
      n.push(i);
      continue;
    }
    let o = null, a = null;
    if ((i & 224) === 192)
      o = 1, a = 127;
    else if ((i & 240) === 224)
      o = 2, a = 2047;
    else if ((i & 248) === 240)
      o = 3, a = 65535;
    else {
      (i & 192) === 128 ? s += t("UNEXPECTED_CONTINUE", s - 1, e, n) : s += t("BAD_PREFIX", s - 1, e, n);
      continue;
    }
    if (s - 1 + o >= e.length) {
      s += t("OVERRUN", s - 1, e, n);
      continue;
    }
    let c = i & (1 << 8 - o - 1) - 1;
    for (let u = 0; u < o; u++) {
      let f = e[s];
      if ((f & 192) != 128) {
        s += t("MISSING_CONTINUE", s, e, n), c = null;
        break;
      }
      c = c << 6 | f & 63, s++;
    }
    if (c !== null) {
      if (c > 1114111) {
        s += t("OUT_OF_RANGE", s - 1 - o, e, n, c);
        continue;
      }
      if (c >= 55296 && c <= 57343) {
        s += t("UTF16_SURROGATE", s - 1 - o, e, n, c);
        continue;
      }
      if (c <= a) {
        s += t("OVERLONG", s - 1 - o, e, n, c);
        continue;
      }
      n.push(c);
    }
  }
  return n;
}
function Ve(r, t) {
  t != null && (Ih(t), r = r.normalize(t));
  let e = [];
  for (let n = 0; n < r.length; n++) {
    const s = r.charCodeAt(n);
    if (s < 128)
      e.push(s);
    else if (s < 2048)
      e.push(s >> 6 | 192), e.push(s & 63 | 128);
    else if ((s & 64512) == 55296) {
      n++;
      const i = r.charCodeAt(n);
      g(n < r.length && (i & 64512) === 56320, "invalid surrogate pair", "str", r);
      const o = 65536 + ((s & 1023) << 10) + (i & 1023);
      e.push(o >> 18 | 240), e.push(o >> 12 & 63 | 128), e.push(o >> 6 & 63 | 128), e.push(o & 63 | 128);
    } else
      e.push(s >> 12 | 224), e.push(s >> 6 & 63 | 128), e.push(s & 63 | 128);
  }
  return new Uint8Array(e);
}
function Kh(r) {
  return r.map((t) => t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode((t >> 10 & 1023) + 55296, (t & 1023) + 56320))).join("");
}
function Ks(r, t) {
  return Kh(Vh(r, t));
}
function el(r) {
  async function t(e, n) {
    const s = e.url.split(":")[0].toLowerCase();
    b(s === "http" || s === "https", `unsupported protocol ${s}`, "UNSUPPORTED_OPERATION", {
      info: { protocol: s },
      operation: "request"
    }), b(s === "https" || !e.credentials || e.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
      operation: "request"
    });
    let i;
    if (n) {
      const h = new AbortController();
      i = h.signal, n.addListener(() => {
        h.abort();
      });
    }
    const o = {
      method: e.method,
      headers: new Headers(Array.from(e)),
      body: e.body || void 0,
      signal: i
    }, a = await fetch(e.url, o), c = {};
    a.headers.forEach((h, p) => {
      c[p.toLowerCase()] = h;
    });
    const u = await a.arrayBuffer(), f = u == null ? null : new Uint8Array(u);
    return {
      statusCode: a.status,
      statusMessage: a.statusText,
      headers: c,
      body: f
    };
  }
  return t;
}
const Jh = 12, zh = 250;
let Ic = el();
const jh = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"), Wh = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
let zo = !1;
async function nl(r, t) {
  try {
    const e = r.match(jh);
    if (!e)
      throw new Error("invalid data");
    return new En(200, "OK", {
      "content-type": e[1] || "text/plain"
    }, e[2] ? Mh(e[3]) : Yh(e[3]));
  } catch {
    return new En(599, "BAD REQUEST (invalid data: URI)", {}, null, new Tt(r));
  }
}
function rl(r) {
  async function t(e, n) {
    try {
      const s = e.match(Wh);
      if (!s)
        throw new Error("invalid link");
      return new Tt(`${r}${s[2]}`);
    } catch {
      return new En(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new Tt(e));
    }
  }
  return t;
}
const Ti = {
  data: nl,
  ipfs: rl("https://gateway.ipfs.io/ipfs/")
}, sl = /* @__PURE__ */ new WeakMap();
var Sn, en;
class Zh {
  constructor(t) {
    y(this, Sn, void 0);
    y(this, en, void 0);
    d(this, Sn, []), d(this, en, !1), sl.set(t, () => {
      if (!l(this, en)) {
        d(this, en, !0);
        for (const e of l(this, Sn))
          setTimeout(() => {
            e();
          }, 0);
        d(this, Sn, []);
      }
    });
  }
  addListener(t) {
    b(!l(this, en), "singal already cancelled", "UNSUPPORTED_OPERATION", {
      operation: "fetchCancelSignal.addCancelListener"
    }), l(this, Sn).push(t);
  }
  get cancelled() {
    return l(this, en);
  }
  checkSignal() {
    b(!this.cancelled, "cancelled", "CANCELLED", {});
  }
}
Sn = new WeakMap(), en = new WeakMap();
function Ii(r) {
  if (r == null)
    throw new Error("missing signal; should not happen");
  return r.checkSignal(), r;
}
var vr, Or, ne, Re, Tr, Ir, it, Mt, Ce, Un, Dn, Fn, de, ve, nn, Ln, Bs;
const yo = class yo {
  /**
   *  Create a new FetchRequest instance with default values.
   *
   *  Once created, each property may be set before issuing a
   *  ``.send()`` to make the request.
   */
  constructor(t) {
    y(this, Ln);
    y(this, vr, void 0);
    y(this, Or, void 0);
    y(this, ne, void 0);
    y(this, Re, void 0);
    y(this, Tr, void 0);
    y(this, Ir, void 0);
    y(this, it, void 0);
    y(this, Mt, void 0);
    y(this, Ce, void 0);
    // Hooks
    y(this, Un, void 0);
    y(this, Dn, void 0);
    y(this, Fn, void 0);
    y(this, de, void 0);
    y(this, ve, void 0);
    y(this, nn, void 0);
    d(this, Ir, String(t)), d(this, vr, !1), d(this, Or, !0), d(this, ne, {}), d(this, Re, ""), d(this, Tr, 3e5), d(this, ve, {
      slotInterval: zh,
      maxAttempts: Jh
    }), d(this, nn, null);
  }
  /**
   *  The fetch URL to request.
   */
  get url() {
    return l(this, Ir);
  }
  set url(t) {
    d(this, Ir, String(t));
  }
  /**
   *  The fetch body, if any, to send as the request body. //(default: null)//
   *
   *  When setting a body, the intrinsic ``Content-Type`` is automatically
   *  set and will be used if **not overridden** by setting a custom
   *  header.
   *
   *  If %%body%% is null, the body is cleared (along with the
   *  intrinsic ``Content-Type``).
   *
   *  If %%body%% is a string, the intrinsic ``Content-Type`` is set to
   *  ``text/plain``.
   *
   *  If %%body%% is a Uint8Array, the intrinsic ``Content-Type`` is set to
   *  ``application/octet-stream``.
   *
   *  If %%body%% is any other object, the intrinsic ``Content-Type`` is
   *  set to ``application/json``.
   */
  get body() {
    return l(this, it) == null ? null : new Uint8Array(l(this, it));
  }
  set body(t) {
    if (t == null)
      d(this, it, void 0), d(this, Mt, void 0);
    else if (typeof t == "string")
      d(this, it, Ve(t)), d(this, Mt, "text/plain");
    else if (t instanceof Uint8Array)
      d(this, it, t), d(this, Mt, "application/octet-stream");
    else if (typeof t == "object")
      d(this, it, Ve(JSON.stringify(t))), d(this, Mt, "application/json");
    else
      throw new Error("invalid body");
  }
  /**
   *  Returns true if the request has a body.
   */
  hasBody() {
    return l(this, it) != null;
  }
  /**
   *  The HTTP method to use when requesting the URI. If no method
   *  has been explicitly set, then ``GET`` is used if the body is
   *  null and ``POST`` otherwise.
   */
  get method() {
    return l(this, Re) ? l(this, Re) : this.hasBody() ? "POST" : "GET";
  }
  set method(t) {
    t == null && (t = ""), d(this, Re, String(t).toUpperCase());
  }
  /**
   *  The headers that will be used when requesting the URI. All
   *  keys are lower-case.
   *
   *  This object is a copy, so any changes will **NOT** be reflected
   *  in the ``FetchRequest``.
   *
   *  To set a header entry, use the ``setHeader`` method.
   */
  get headers() {
    const t = Object.assign({}, l(this, ne));
    return l(this, Ce) && (t.authorization = `Basic ${_h(Ve(l(this, Ce)))}`), this.allowGzip && (t["accept-encoding"] = "gzip"), t["content-type"] == null && l(this, Mt) && (t["content-type"] = l(this, Mt)), this.body && (t["content-length"] = String(this.body.length)), t;
  }
  /**
   *  Get the header for %%key%%, ignoring case.
   */
  getHeader(t) {
    return this.headers[t.toLowerCase()];
  }
  /**
   *  Set the header for %%key%% to %%value%%. All values are coerced
   *  to a string.
   */
  setHeader(t, e) {
    l(this, ne)[String(t).toLowerCase()] = String(e);
  }
  /**
   *  Clear all headers, resetting all intrinsic headers.
   */
  clearHeaders() {
    d(this, ne, {});
  }
  [Symbol.iterator]() {
    const t = this.headers, e = Object.keys(t);
    let n = 0;
    return {
      next: () => {
        if (n < e.length) {
          const s = e[n++];
          return {
            value: [s, t[s]],
            done: !1
          };
        }
        return { value: void 0, done: !0 };
      }
    };
  }
  /**
   *  The value that will be sent for the ``Authorization`` header.
   *
   *  To set the credentials, use the ``setCredentials`` method.
   */
  get credentials() {
    return l(this, Ce) || null;
  }
  /**
   *  Sets an ``Authorization`` for %%username%% with %%password%%.
   */
  setCredentials(t, e) {
    g(!t.match(/:/), "invalid basic authentication username", "username", "[REDACTED]"), d(this, Ce, `${t}:${e}`);
  }
  /**
   *  Enable and request gzip-encoded responses. The response will
   *  automatically be decompressed. //(default: true)//
   */
  get allowGzip() {
    return l(this, Or);
  }
  set allowGzip(t) {
    d(this, Or, !!t);
  }
  /**
   *  Allow ``Authentication`` credentials to be sent over insecure
   *  channels. //(default: false)//
   */
  get allowInsecureAuthentication() {
    return !!l(this, vr);
  }
  set allowInsecureAuthentication(t) {
    d(this, vr, !!t);
  }
  /**
   *  The timeout (in milliseconds) to wait for a complete response.
   *  //(default: 5 minutes)//
   */
  get timeout() {
    return l(this, Tr);
  }
  set timeout(t) {
    g(t >= 0, "timeout must be non-zero", "timeout", t), d(this, Tr, t);
  }
  /**
   *  This function is called prior to each request, for example
   *  during a redirection or retry in case of server throttling.
   *
   *  This offers an opportunity to populate headers or update
   *  content before sending a request.
   */
  get preflightFunc() {
    return l(this, Un) || null;
  }
  set preflightFunc(t) {
    d(this, Un, t);
  }
  /**
   *  This function is called after each response, offering an
   *  opportunity to provide client-level throttling or updating
   *  response data.
   *
   *  Any error thrown in this causes the ``send()`` to throw.
   *
   *  To schedule a retry attempt (assuming the maximum retry limit
   *  has not been reached), use [[response.throwThrottleError]].
   */
  get processFunc() {
    return l(this, Dn) || null;
  }
  set processFunc(t) {
    d(this, Dn, t);
  }
  /**
   *  This function is called on each retry attempt.
   */
  get retryFunc() {
    return l(this, Fn) || null;
  }
  set retryFunc(t) {
    d(this, Fn, t);
  }
  /**
   *  This function is called to fetch content from HTTP and
   *  HTTPS URLs and is platform specific (e.g. nodejs vs
   *  browsers).
   *
   *  This is by default the currently registered global getUrl
   *  function, which can be changed using [[registerGetUrl]].
   *  If this has been set, setting is to ``null`` will cause
   *  this FetchRequest (and any future clones) to revert back to
   *  using the currently registered global getUrl function.
   *
   *  Setting this is generally not necessary, but may be useful
   *  for developers that wish to intercept requests or to
   *  configurege a proxy or other agent.
   */
  get getUrlFunc() {
    return l(this, nn) || Ic;
  }
  set getUrlFunc(t) {
    d(this, nn, t);
  }
  toString() {
    return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${l(this, it) ? T(l(this, it)) : "null"}>`;
  }
  /**
   *  Update the throttle parameters used to determine maximum
   *  attempts and exponential-backoff properties.
   */
  setThrottleParams(t) {
    t.slotInterval != null && (l(this, ve).slotInterval = t.slotInterval), t.maxAttempts != null && (l(this, ve).maxAttempts = t.maxAttempts);
  }
  /**
   *  Resolves to the response by sending the request.
   */
  send() {
    return b(l(this, de) == null, "request already sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.send" }), d(this, de, new Zh(this)), x(this, Ln, Bs).call(this, 0, Bc() + this.timeout, 0, this, new En(0, "", {}, null, this));
  }
  /**
   *  Cancels the inflight response, causing a ``CANCELLED``
   *  error to be rejected from the [[send]].
   */
  cancel() {
    b(l(this, de) != null, "request has not been sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.cancel" });
    const t = sl.get(this);
    if (!t)
      throw new Error("missing signal; should not happen");
    t();
  }
  /**
   *  Returns a new [[FetchRequest]] that represents the redirection
   *  to %%location%%.
   */
  redirect(t) {
    const e = this.url.split(":")[0].toLowerCase(), n = t.split(":")[0].toLowerCase();
    b(this.method === "GET" && (e !== "https" || n !== "http") && t.match(/^https?:/), "unsupported redirect", "UNSUPPORTED_OPERATION", {
      operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(t)})`
    });
    const s = new yo(t);
    return s.method = "GET", s.allowGzip = this.allowGzip, s.timeout = this.timeout, d(s, ne, Object.assign({}, l(this, ne))), l(this, it) && d(s, it, new Uint8Array(l(this, it))), d(s, Mt, l(this, Mt)), s;
  }
  /**
   *  Create a new copy of this request.
   */
  clone() {
    const t = new yo(this.url);
    return d(t, Re, l(this, Re)), l(this, it) && d(t, it, l(this, it)), d(t, Mt, l(this, Mt)), d(t, ne, Object.assign({}, l(this, ne))), d(t, Ce, l(this, Ce)), this.allowGzip && (t.allowGzip = !0), t.timeout = this.timeout, this.allowInsecureAuthentication && (t.allowInsecureAuthentication = !0), d(t, Un, l(this, Un)), d(t, Dn, l(this, Dn)), d(t, Fn, l(this, Fn)), d(t, nn, l(this, nn)), t;
  }
  /**
   *  Locks all static configuration for gateways and FetchGetUrlFunc
   *  registration.
   */
  static lockConfig() {
    zo = !0;
  }
  /**
   *  Get the current Gateway function for %%scheme%%.
   */
  static getGateway(t) {
    return Ti[t.toLowerCase()] || null;
  }
  /**
   *  Use the %%func%% when fetching URIs using %%scheme%%.
   *
   *  This method affects all requests globally.
   *
   *  If [[lockConfig]] has been called, no change is made and this
   *  throws.
   */
  static registerGateway(t, e) {
    if (t = t.toLowerCase(), t === "http" || t === "https")
      throw new Error(`cannot intercept ${t}; use registerGetUrl`);
    if (zo)
      throw new Error("gateways locked");
    Ti[t] = e;
  }
  /**
   *  Use %%getUrl%% when fetching URIs over HTTP and HTTPS requests.
   *
   *  This method affects all requests globally.
   *
   *  If [[lockConfig]] has been called, no change is made and this
   *  throws.
   */
  static registerGetUrl(t) {
    if (zo)
      throw new Error("gateways locked");
    Ic = t;
  }
  /**
   *  Creates a getUrl function that fetches content from HTTP and
   *  HTTPS URLs.
   *
   *  The available %%options%% are dependent on the platform
   *  implementation of the default getUrl function.
   *
   *  This is not generally something that is needed, but is useful
   *  when trying to customize simple behaviour when fetching HTTP
   *  content.
   */
  static createGetUrlFunc(t) {
    return el();
  }
  /**
   *  Creates a function that can "fetch" data URIs.
   *
   *  Note that this is automatically done internally to support
   *  data URIs, so it is not necessary to register it.
   *
   *  This is not generally something that is needed, but may
   *  be useful in a wrapper to perfom custom data URI functionality.
   */
  static createDataGateway() {
    return nl;
  }
  /**
   *  Creates a function that will fetch IPFS (unvalidated) from
   *  a custom gateway baseUrl.
   *
   *  The default IPFS gateway used internally is
   *  ``"https:/\/gateway.ipfs.io/ipfs/"``.
   */
  static createIpfsGatewayFunc(t) {
    return rl(t);
  }
};
vr = new WeakMap(), Or = new WeakMap(), ne = new WeakMap(), Re = new WeakMap(), Tr = new WeakMap(), Ir = new WeakMap(), it = new WeakMap(), Mt = new WeakMap(), Ce = new WeakMap(), Un = new WeakMap(), Dn = new WeakMap(), Fn = new WeakMap(), de = new WeakMap(), ve = new WeakMap(), nn = new WeakMap(), Ln = new WeakSet(), Bs = async function(t, e, n, s, i) {
  var f, h, p;
  if (t >= l(this, ve).maxAttempts)
    return i.makeServerError("exceeded maximum retry limit");
  b(Bc() <= e, "timeout", "TIMEOUT", {
    operation: "request.send",
    reason: "timeout",
    request: s
  }), n > 0 && await qh(n);
  let o = this.clone();
  const a = (o.url.split(":")[0] || "").toLowerCase();
  if (a in Ti) {
    const w = await Ti[a](o.url, Ii(l(s, de)));
    if (w instanceof En) {
      let E = w;
      if (this.processFunc) {
        Ii(l(s, de));
        try {
          E = await this.processFunc(o, E);
        } catch (A) {
          (A.throttle == null || typeof A.stall != "number") && E.makeServerError("error in post-processing function", A).assertOk();
        }
      }
      return E;
    }
    o = w;
  }
  this.preflightFunc && (o = await this.preflightFunc(o));
  const c = await this.getUrlFunc(o, Ii(l(s, de)));
  let u = new En(c.statusCode, c.statusMessage, c.headers, c.body, s);
  if (u.statusCode === 301 || u.statusCode === 302) {
    try {
      const w = u.headers.location || "";
      return x(f = o.redirect(w), Ln, Bs).call(f, t + 1, e, 0, s, u);
    } catch {
    }
    return u;
  } else if (u.statusCode === 429 && (this.retryFunc == null || await this.retryFunc(o, u, t))) {
    const w = u.headers["retry-after"];
    let E = l(this, ve).slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
    return typeof w == "string" && w.match(/^[1-9][0-9]*$/) && (E = parseInt(w)), x(h = o.clone(), Ln, Bs).call(h, t + 1, e, E, s, u);
  }
  if (this.processFunc) {
    Ii(l(s, de));
    try {
      u = await this.processFunc(o, u);
    } catch (w) {
      (w.throttle == null || typeof w.stall != "number") && u.makeServerError("error in post-processing function", w).assertOk();
      let E = l(this, ve).slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
      return w.stall >= 0 && (E = w.stall), x(p = o.clone(), Ln, Bs).call(p, t + 1, e, E, s, u);
    }
  }
  return u;
};
let Tt = yo;
var ni, ri, si, re, Br, Mn;
const Ac = class Ac {
  constructor(t, e, n, s, i) {
    y(this, ni, void 0);
    y(this, ri, void 0);
    y(this, si, void 0);
    y(this, re, void 0);
    y(this, Br, void 0);
    y(this, Mn, void 0);
    d(this, ni, t), d(this, ri, e), d(this, si, Object.keys(n).reduce((o, a) => (o[a.toLowerCase()] = String(n[a]), o), {})), d(this, re, s == null ? null : new Uint8Array(s)), d(this, Br, i || null), d(this, Mn, { message: "" });
  }
  toString() {
    return `<FetchResponse status=${this.statusCode} body=${l(this, re) ? T(l(this, re)) : "null"}>`;
  }
  /**
   *  The response status code.
   */
  get statusCode() {
    return l(this, ni);
  }
  /**
   *  The response status message.
   */
  get statusMessage() {
    return l(this, ri);
  }
  /**
   *  The response headers. All keys are lower-case.
   */
  get headers() {
    return Object.assign({}, l(this, si));
  }
  /**
   *  The response body, or ``null`` if there was no body.
   */
  get body() {
    return l(this, re) == null ? null : new Uint8Array(l(this, re));
  }
  /**
   *  The response body as a UTF-8 encoded string, or the empty
   *  string (i.e. ``""``) if there was no body.
   *
   *  An error is thrown if the body is invalid UTF-8 data.
   */
  get bodyText() {
    try {
      return l(this, re) == null ? "" : Ks(l(this, re));
    } catch {
      b(!1, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
        operation: "bodyText",
        info: { response: this }
      });
    }
  }
  /**
   *  The response body, decoded as JSON.
   *
   *  An error is thrown if the body is invalid JSON-encoded data
   *  or if there was no body.
   */
  get bodyJson() {
    try {
      return JSON.parse(this.bodyText);
    } catch {
      b(!1, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
        operation: "bodyJson",
        info: { response: this }
      });
    }
  }
  [Symbol.iterator]() {
    const t = this.headers, e = Object.keys(t);
    let n = 0;
    return {
      next: () => {
        if (n < e.length) {
          const s = e[n++];
          return {
            value: [s, t[s]],
            done: !1
          };
        }
        return { value: void 0, done: !0 };
      }
    };
  }
  /**
   *  Return a Response with matching headers and body, but with
   *  an error status code (i.e. 599) and %%message%% with an
   *  optional %%error%%.
   */
  makeServerError(t, e) {
    let n;
    t ? n = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${t})` : (t = `${this.statusCode} ${this.statusMessage}`, n = `CLIENT ESCALATED SERVER ERROR (${t})`);
    const s = new Ac(599, n, this.headers, this.body, l(this, Br) || void 0);
    return d(s, Mn, { message: t, error: e }), s;
  }
  /**
   *  If called within a [request.processFunc](FetchRequest-processFunc)
   *  call, causes the request to retry as if throttled for %%stall%%
   *  milliseconds.
   */
  throwThrottleError(t, e) {
    e == null ? e = -1 : g(Number.isInteger(e) && e >= 0, "invalid stall timeout", "stall", e);
    const n = new Error(t || "throttling requests");
    throw B(n, { stall: e, throttle: !0 }), n;
  }
  /**
   *  Get the header value for %%key%%, ignoring case.
   */
  getHeader(t) {
    return this.headers[t.toLowerCase()];
  }
  /**
   *  Returns true if the response has a body.
   */
  hasBody() {
    return l(this, re) != null;
  }
  /**
   *  The request made for this response.
   */
  get request() {
    return l(this, Br);
  }
  /**
   *  Returns true if this response was a success statusCode.
   */
  ok() {
    return l(this, Mn).message === "" && this.statusCode >= 200 && this.statusCode < 300;
  }
  /**
   *  Throws a ``SERVER_ERROR`` if this response is not ok.
   */
  assertOk() {
    if (this.ok())
      return;
    let { message: t, error: e } = l(this, Mn);
    t === "" && (t = `server response ${this.statusCode} ${this.statusMessage}`), b(!1, t, "SERVER_ERROR", {
      request: this.request || "unknown request",
      response: this,
      error: e
    });
  }
};
ni = new WeakMap(), ri = new WeakMap(), si = new WeakMap(), re = new WeakMap(), Br = new WeakMap(), Mn = new WeakMap();
let En = Ac;
function Bc() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Yh(r) {
  return Ve(r.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) => String.fromCharCode(parseInt(e, 16))));
}
function qh(r) {
  return new Promise((t) => setTimeout(t, r));
}
function Xh(r) {
  let t = r.toString(16);
  for (; t.length < 2; )
    t = "0" + t;
  return "0x" + t;
}
function Sc(r, t, e) {
  let n = 0;
  for (let s = 0; s < e; s++)
    n = n * 256 + r[t + s];
  return n;
}
function Uc(r, t, e, n) {
  const s = [];
  for (; e < t + 1 + n; ) {
    const i = il(r, e);
    s.push(i.result), e += i.consumed, b(e <= t + 1 + n, "child data too short", "BUFFER_OVERRUN", {
      buffer: r,
      length: n,
      offset: t
    });
  }
  return { consumed: 1 + n, result: s };
}
function il(r, t) {
  b(r.length !== 0, "data too short", "BUFFER_OVERRUN", {
    buffer: r,
    length: 0,
    offset: 1
  });
  const e = (n) => {
    b(n <= r.length, "data short segment too short", "BUFFER_OVERRUN", {
      buffer: r,
      length: r.length,
      offset: n
    });
  };
  if (r[t] >= 248) {
    const n = r[t] - 247;
    e(t + 1 + n);
    const s = Sc(r, t + 1, n);
    return e(t + 1 + n + s), Uc(r, t, t + 1 + n, n + s);
  } else if (r[t] >= 192) {
    const n = r[t] - 192;
    return e(t + 1 + n), Uc(r, t, t + 1, n);
  } else if (r[t] >= 184) {
    const n = r[t] - 183;
    e(t + 1 + n);
    const s = Sc(r, t + 1, n);
    e(t + 1 + n + s);
    const i = T(r.slice(t + 1 + n, t + 1 + n + s));
    return { consumed: 1 + n + s, result: i };
  } else if (r[t] >= 128) {
    const n = r[t] - 128;
    e(t + 1 + n);
    const s = T(r.slice(t + 1, t + 1 + n));
    return { consumed: 1 + n, result: s };
  }
  return { consumed: 1, result: Xh(r[t]) };
}
function Za(r) {
  const t = K(r, "data"), e = il(t, 0);
  return g(e.consumed === t.length, "unexpected junk after rlp payload", "data", r), e.result;
}
function Dc(r) {
  const t = [];
  for (; r; )
    t.unshift(r & 255), r >>= 8;
  return t;
}
function ol(r) {
  if (Array.isArray(r)) {
    let n = [];
    if (r.forEach(function(i) {
      n = n.concat(ol(i));
    }), n.length <= 55)
      return n.unshift(192 + n.length), n;
    const s = Dc(n.length);
    return s.unshift(247 + s.length), s.concat(n);
  }
  const t = Array.prototype.slice.call(K(r, "object"));
  if (t.length === 1 && t[0] <= 127)
    return t;
  if (t.length <= 55)
    return t.unshift(128 + t.length), t;
  const e = Dc(t.length);
  return e.unshift(183 + e.length), e.concat(t);
}
const Fc = "0123456789abcdef";
function Js(r) {
  let t = "0x";
  for (const e of ol(r))
    t += Fc[e >> 4], t += Fc[e & 15];
  return t;
}
const At = 32, da = new Uint8Array(At), $h = ["then"], Bi = {};
function Os(r, t) {
  const e = new Error(`deferred error during ABI decoding triggered accessing ${r}`);
  throw e.error = t, e;
}
var rn;
const Qs = class Qs extends Array {
  /**
   *  @private
   */
  constructor(...e) {
    const n = e[0];
    let s = e[1], i = (e[2] || []).slice(), o = !0;
    n !== Bi && (s = e, i = [], o = !1);
    super(s.length);
    y(this, rn, void 0);
    s.forEach((c, u) => {
      this[u] = c;
    });
    const a = i.reduce((c, u) => (typeof u == "string" && c.set(u, (c.get(u) || 0) + 1), c), /* @__PURE__ */ new Map());
    if (d(this, rn, Object.freeze(s.map((c, u) => {
      const f = i[u];
      return f != null && a.get(f) === 1 ? f : null;
    }))), !!o)
      return Object.freeze(this), new Proxy(this, {
        get: (c, u, f) => {
          if (typeof u == "string") {
            if (u.match(/^[0-9]+$/)) {
              const p = L(u, "%index");
              if (p < 0 || p >= this.length)
                throw new RangeError("out of result range");
              const w = c[p];
              return w instanceof Error && Os(`index ${p}`, w), w;
            }
            if ($h.indexOf(u) >= 0)
              return Reflect.get(c, u, f);
            const h = c[u];
            if (h instanceof Function)
              return function(...p) {
                return h.apply(this === f ? c : this, p);
              };
            if (!(u in c))
              return c.getValue.apply(this === f ? c : this, [u]);
          }
          return Reflect.get(c, u, f);
        }
      });
  }
  /**
   *  Returns the Result as a normal Array.
   *
   *  This will throw if there are any outstanding deferred
   *  errors.
   */
  toArray() {
    const e = [];
    return this.forEach((n, s) => {
      n instanceof Error && Os(`index ${s}`, n), e.push(n);
    }), e;
  }
  /**
   *  Returns the Result as an Object with each name-value pair.
   *
   *  This will throw if any value is unnamed, or if there are
   *  any outstanding deferred errors.
   */
  toObject() {
    return l(this, rn).reduce((e, n, s) => (b(n != null, "value at index ${ index } unnamed", "UNSUPPORTED_OPERATION", {
      operation: "toObject()"
    }), n in e || (e[n] = this.getValue(n)), e), {});
  }
  /**
   *  @_ignore
   */
  slice(e, n) {
    e == null && (e = 0), e < 0 && (e += this.length, e < 0 && (e = 0)), n == null && (n = this.length), n < 0 && (n += this.length, n < 0 && (n = 0)), n > this.length && (n = this.length);
    const s = [], i = [];
    for (let o = e; o < n; o++)
      s.push(this[o]), i.push(l(this, rn)[o]);
    return new Qs(Bi, s, i);
  }
  /**
   *  @_ignore
   */
  filter(e, n) {
    const s = [], i = [];
    for (let o = 0; o < this.length; o++) {
      const a = this[o];
      a instanceof Error && Os(`index ${o}`, a), e.call(n, a, o, this) && (s.push(a), i.push(l(this, rn)[o]));
    }
    return new Qs(Bi, s, i);
  }
  /**
   *  @_ignore
   */
  map(e, n) {
    const s = [];
    for (let i = 0; i < this.length; i++) {
      const o = this[i];
      o instanceof Error && Os(`index ${i}`, o), s.push(e.call(n, o, i, this));
    }
    return s;
  }
  /**
   *  Returns the value for %%name%%.
   *
   *  Since it is possible to have a key whose name conflicts with
   *  a method on a [[Result]] or its superclass Array, or any
   *  JavaScript keyword, this ensures all named values are still
   *  accessible by name.
   */
  getValue(e) {
    const n = l(this, rn).indexOf(e);
    if (n === -1)
      return;
    const s = this[n];
    return s instanceof Error && Os(`property ${JSON.stringify(e)}`, s.error), s;
  }
  /**
   *  Creates a new [[Result]] for %%items%% with each entry
   *  also accessible by its corresponding name in %%keys%%.
   */
  static fromItems(e, n) {
    return new Qs(Bi, e, n);
  }
};
rn = new WeakMap();
let eo = Qs;
function Lc(r) {
  let t = Qt(r);
  return b(t.length <= At, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: t, length: At, offset: t.length }), t.length !== At && (t = vt(rt([da.slice(t.length % At), t]))), t;
}
class ze {
  constructor(t, e, n, s) {
    // The coder name:
    //   - address, uint256, tuple, array, etc.
    m(this, "name");
    // The fully expanded type, including composite types:
    //   - address, uint256, tuple(address,bytes), uint256[3][4][],  etc.
    m(this, "type");
    // The localName bound in the signature, in this example it is "baz":
    //   - tuple(address foo, uint bar) baz
    m(this, "localName");
    // Whether this type is dynamic:
    //  - Dynamic: bytes, string, address[], tuple(boolean[]), etc.
    //  - Not Dynamic: address, uint256, boolean[3], tuple(address, uint8)
    m(this, "dynamic");
    B(this, { name: t, type: e, localName: n, dynamic: s }, {
      name: "string",
      type: "string",
      localName: "string",
      dynamic: "boolean"
    });
  }
  _throwError(t, e) {
    g(!1, t, this.localName, e);
  }
}
var Oe, _n, Sr, Qi;
class pa {
  constructor() {
    y(this, Sr);
    // An array of WordSize lengthed objects to concatenation
    y(this, Oe, void 0);
    y(this, _n, void 0);
    d(this, Oe, []), d(this, _n, 0);
  }
  get data() {
    return rt(l(this, Oe));
  }
  get length() {
    return l(this, _n);
  }
  appendWriter(t) {
    return x(this, Sr, Qi).call(this, vt(t.data));
  }
  // Arrayish item; pad on the right to *nearest* WordSize
  writeBytes(t) {
    let e = vt(t);
    const n = e.length % At;
    return n && (e = vt(rt([e, da.slice(n)]))), x(this, Sr, Qi).call(this, e);
  }
  // Numeric item; pad on the left *to* WordSize
  writeValue(t) {
    return x(this, Sr, Qi).call(this, Lc(t));
  }
  // Inserts a numeric place-holder, returning a callback that can
  // be used to asjust the value later
  writeUpdatableValue() {
    const t = l(this, Oe).length;
    return l(this, Oe).push(da), d(this, _n, l(this, _n) + At), (e) => {
      l(this, Oe)[t] = Lc(e);
    };
  }
}
Oe = new WeakMap(), _n = new WeakMap(), Sr = new WeakSet(), Qi = function(t) {
  return l(this, Oe).push(t), d(this, _n, l(this, _n) + t.length), t.length;
};
var _t, zt, wo, al;
const bc = class bc {
  constructor(t, e) {
    y(this, wo);
    // Allows incomplete unpadded data to be read; otherwise an error
    // is raised if attempting to overrun the buffer. This is required
    // to deal with an old Solidity bug, in which event data for
    // external (not public thoguh) was tightly packed.
    m(this, "allowLoose");
    y(this, _t, void 0);
    y(this, zt, void 0);
    B(this, { allowLoose: !!e }), d(this, _t, vt(t)), d(this, zt, 0);
  }
  get data() {
    return T(l(this, _t));
  }
  get dataLength() {
    return l(this, _t).length;
  }
  get consumed() {
    return l(this, zt);
  }
  get bytes() {
    return new Uint8Array(l(this, _t));
  }
  // Create a sub-reader with the same underlying data, but offset
  subReader(t) {
    return new bc(l(this, _t).slice(l(this, zt) + t), this.allowLoose);
  }
  // Read bytes
  readBytes(t, e) {
    let n = x(this, wo, al).call(this, 0, t, !!e);
    return d(this, zt, l(this, zt) + n.length), n.slice(0, t);
  }
  // Read a numeric values
  readValue() {
    return Wa(this.readBytes(At));
  }
  readIndex() {
    return Dh(this.readBytes(At));
  }
};
_t = new WeakMap(), zt = new WeakMap(), wo = new WeakSet(), al = function(t, e, n) {
  let s = Math.ceil(e / At) * At;
  return l(this, zt) + s > l(this, _t).length && (this.allowLoose && n && l(this, zt) + e <= l(this, _t).length ? s = e : b(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
    buffer: vt(l(this, _t)),
    length: l(this, _t).length,
    offset: l(this, zt) + s
  })), l(this, _t).slice(l(this, zt), l(this, zt) + s);
};
let ga = bc;
function no(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error(`Wrong positive integer: ${r}`);
}
function Ya(r, ...t) {
  if (!(r instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(r.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${r.length}`);
}
function td(r) {
  if (typeof r != "function" || typeof r.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  no(r.outputLen), no(r.blockLen);
}
function ms(r, t = !0) {
  if (r.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && r.finished)
    throw new Error("Hash#digest() has already been called");
}
function cl(r, t) {
  Ya(r);
  const e = t.outputLen;
  if (r.length < e)
    throw new Error(`digestInto() expects output buffer of length at least ${e}`);
}
const jo = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ul = (r) => r instanceof Uint8Array, ed = (r) => new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4)), Wo = (r) => new DataView(r.buffer, r.byteOffset, r.byteLength), he = (r, t) => r << 32 - t | r >>> t, nd = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!nd)
  throw new Error("Non little-endian hardware is not supported");
function rd(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function Bo(r) {
  if (typeof r == "string" && (r = rd(r)), !ul(r))
    throw new Error(`expected Uint8Array, got ${typeof r}`);
  return r;
}
function sd(...r) {
  const t = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
  let e = 0;
  return r.forEach((n) => {
    if (!ul(n))
      throw new Error("Uint8Array expected");
    t.set(n, e), e += n.length;
  }), t;
}
class qa {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function ll(r) {
  const t = (n) => r().update(Bo(n)).digest(), e = r();
  return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = () => r(), t;
}
function id(r = 32) {
  if (jo && typeof jo.getRandomValues == "function")
    return jo.getRandomValues(new Uint8Array(r));
  throw new Error("crypto.getRandomValues must be defined");
}
class fl extends qa {
  constructor(t, e) {
    super(), this.finished = !1, this.destroyed = !1, td(t);
    const n = Bo(e);
    if (this.iHash = t.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, i = new Uint8Array(s);
    i.set(n.length > s ? t.create().update(n).digest() : n);
    for (let o = 0; o < i.length; o++)
      i[o] ^= 54;
    this.iHash.update(i), this.oHash = t.create();
    for (let o = 0; o < i.length; o++)
      i[o] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(t) {
    return ms(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    ms(this), Ya(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: e, iHash: n, finished: s, destroyed: i, blockLen: o, outputLen: a } = this;
    return t = t, t.finished = s, t.destroyed = i, t.blockLen = o, t.outputLen = a, t.oHash = e._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const hl = (r, t, e) => new fl(r, t).update(e).digest();
hl.create = (r, t) => new fl(r, t);
function od(r, t, e, n) {
  if (typeof r.setBigUint64 == "function")
    return r.setBigUint64(t, e, n);
  const s = BigInt(32), i = BigInt(4294967295), o = Number(e >> s & i), a = Number(e & i), c = n ? 4 : 0, u = n ? 0 : 4;
  r.setUint32(t + c, o, n), r.setUint32(t + u, a, n);
}
class ad extends qa {
  constructor(t, e, n, s) {
    super(), this.blockLen = t, this.outputLen = e, this.padOffset = n, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = Wo(this.buffer);
  }
  update(t) {
    ms(this);
    const { view: e, buffer: n, blockLen: s } = this;
    t = Bo(t);
    const i = t.length;
    for (let o = 0; o < i; ) {
      const a = Math.min(s - this.pos, i - o);
      if (a === s) {
        const c = Wo(t);
        for (; s <= i - o; o += s)
          this.process(c, o);
        continue;
      }
      n.set(t.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === s && (this.process(e, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    ms(this), cl(t, this), this.finished = !0;
    const { buffer: e, view: n, blockLen: s, isLE: i } = this;
    let { pos: o } = this;
    e[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > s - o && (this.process(n, 0), o = 0);
    for (let h = o; h < s; h++)
      e[h] = 0;
    od(n, s - 8, BigInt(this.length * 8), i), this.process(n, 0);
    const a = Wo(t), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = c / 4, f = this.get();
    if (u > f.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let h = 0; h < u; h++)
      a.setUint32(4 * h, f[h], i);
  }
  digest() {
    const { buffer: t, outputLen: e } = this;
    this.digestInto(t);
    const n = t.slice(0, e);
    return this.destroy(), n;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: e, buffer: n, length: s, finished: i, destroyed: o, pos: a } = this;
    return t.length = s, t.pos = a, t.finished = i, t.destroyed = o, s % e && t.buffer.set(n), t;
  }
}
const cd = (r, t, e) => r & t ^ ~r & e, ud = (r, t, e) => r & t ^ r & e ^ t & e, ld = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), qe = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Xe = /* @__PURE__ */ new Uint32Array(64);
class fd extends ad {
  constructor() {
    super(64, 32, 8, !1), this.A = qe[0] | 0, this.B = qe[1] | 0, this.C = qe[2] | 0, this.D = qe[3] | 0, this.E = qe[4] | 0, this.F = qe[5] | 0, this.G = qe[6] | 0, this.H = qe[7] | 0;
  }
  get() {
    const { A: t, B: e, C: n, D: s, E: i, F: o, G: a, H: c } = this;
    return [t, e, n, s, i, o, a, c];
  }
  // prettier-ignore
  set(t, e, n, s, i, o, a, c) {
    this.A = t | 0, this.B = e | 0, this.C = n | 0, this.D = s | 0, this.E = i | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
  }
  process(t, e) {
    for (let h = 0; h < 16; h++, e += 4)
      Xe[h] = t.getUint32(e, !1);
    for (let h = 16; h < 64; h++) {
      const p = Xe[h - 15], w = Xe[h - 2], E = he(p, 7) ^ he(p, 18) ^ p >>> 3, A = he(w, 17) ^ he(w, 19) ^ w >>> 10;
      Xe[h] = A + Xe[h - 7] + E + Xe[h - 16] | 0;
    }
    let { A: n, B: s, C: i, D: o, E: a, F: c, G: u, H: f } = this;
    for (let h = 0; h < 64; h++) {
      const p = he(a, 6) ^ he(a, 11) ^ he(a, 25), w = f + p + cd(a, c, u) + ld[h] + Xe[h] | 0, A = (he(n, 2) ^ he(n, 13) ^ he(n, 22)) + ud(n, s, i) | 0;
      f = u, u = c, c = a, a = o + w | 0, o = i, i = s, s = n, n = w + A | 0;
    }
    n = n + this.A | 0, s = s + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, f = f + this.H | 0, this.set(n, s, i, o, a, c, u, f);
  }
  roundClean() {
    Xe.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const hd = /* @__PURE__ */ ll(() => new fd()), Si = /* @__PURE__ */ BigInt(2 ** 32 - 1), Mc = /* @__PURE__ */ BigInt(32);
function dd(r, t = !1) {
  return t ? { h: Number(r & Si), l: Number(r >> Mc & Si) } : { h: Number(r >> Mc & Si) | 0, l: Number(r & Si) | 0 };
}
function pd(r, t = !1) {
  let e = new Uint32Array(r.length), n = new Uint32Array(r.length);
  for (let s = 0; s < r.length; s++) {
    const { h: i, l: o } = dd(r[s], t);
    [e[s], n[s]] = [i, o];
  }
  return [e, n];
}
const gd = (r, t, e) => r << e | t >>> 32 - e, md = (r, t, e) => t << e | r >>> 32 - e, yd = (r, t, e) => t << e - 32 | r >>> 64 - e, wd = (r, t, e) => r << e - 32 | t >>> 64 - e, [dl, pl, gl] = [[], [], []], Ad = /* @__PURE__ */ BigInt(0), Ts = /* @__PURE__ */ BigInt(1), bd = /* @__PURE__ */ BigInt(2), Ed = /* @__PURE__ */ BigInt(7), Nd = /* @__PURE__ */ BigInt(256), Pd = /* @__PURE__ */ BigInt(113);
for (let r = 0, t = Ts, e = 1, n = 0; r < 24; r++) {
  [e, n] = [n, (2 * e + 3 * n) % 5], dl.push(2 * (5 * n + e)), pl.push((r + 1) * (r + 2) / 2 % 64);
  let s = Ad;
  for (let i = 0; i < 7; i++)
    t = (t << Ts ^ (t >> Ed) * Pd) % Nd, t & bd && (s ^= Ts << (Ts << /* @__PURE__ */ BigInt(i)) - Ts);
  gl.push(s);
}
const [xd, kd] = /* @__PURE__ */ pd(gl, !0), _c = (r, t, e) => e > 32 ? yd(r, t, e) : gd(r, t, e), Gc = (r, t, e) => e > 32 ? wd(r, t, e) : md(r, t, e);
function Rd(r, t = 24) {
  const e = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let o = 0; o < 10; o++)
      e[o] = r[o] ^ r[o + 10] ^ r[o + 20] ^ r[o + 30] ^ r[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, u = e[c], f = e[c + 1], h = _c(u, f, 1) ^ e[a], p = Gc(u, f, 1) ^ e[a + 1];
      for (let w = 0; w < 50; w += 10)
        r[o + w] ^= h, r[o + w + 1] ^= p;
    }
    let s = r[2], i = r[3];
    for (let o = 0; o < 24; o++) {
      const a = pl[o], c = _c(s, i, a), u = Gc(s, i, a), f = dl[o];
      s = r[f], i = r[f + 1], r[f] = c, r[f + 1] = u;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        e[a] = r[o + a];
      for (let a = 0; a < 10; a++)
        r[o + a] ^= ~e[(a + 2) % 10] & e[(a + 4) % 10];
    }
    r[0] ^= xd[n], r[1] ^= kd[n];
  }
  e.fill(0);
}
class Xa extends qa {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, e, n, s = !1, i = 24) {
    if (super(), this.blockLen = t, this.suffix = e, this.outputLen = n, this.enableXOF = s, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, no(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = ed(this.state);
  }
  keccak() {
    Rd(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    ms(this);
    const { blockLen: e, state: n } = this;
    t = Bo(t);
    const s = t.length;
    for (let i = 0; i < s; ) {
      const o = Math.min(e - this.pos, s - i);
      for (let a = 0; a < o; a++)
        n[this.pos++] ^= t[i++];
      this.pos === e && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: e, pos: n, blockLen: s } = this;
    t[n] ^= e, e & 128 && n === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    ms(this, !1), Ya(t), this.finish();
    const e = this.state, { blockLen: n } = this;
    for (let s = 0, i = t.length; s < i; ) {
      this.posOut >= n && this.keccak();
      const o = Math.min(n - this.posOut, i - s);
      t.set(e.subarray(this.posOut, this.posOut + o), s), this.posOut += o, s += o;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return no(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (cl(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: e, suffix: n, outputLen: s, rounds: i, enableXOF: o } = this;
    return t || (t = new Xa(e, n, s, o, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = n, t.outputLen = s, t.enableXOF = o, t.destroyed = this.destroyed, t;
  }
}
const Cd = (r, t, e) => ll(() => new Xa(t, r, e)), vd = /* @__PURE__ */ Cd(1, 136, 256 / 8);
let ml = !1;
const yl = function(r) {
  return vd(r);
};
let wl = yl;
function q(r) {
  const t = K(r, "data");
  return T(wl(t));
}
q._ = yl;
q.lock = function() {
  ml = !0;
};
q.register = function(r) {
  if (ml)
    throw new TypeError("keccak256 is locked");
  wl = r;
};
Object.freeze(q);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Al = BigInt(0), So = BigInt(1), Od = BigInt(2), Uo = (r) => r instanceof Uint8Array, Td = /* @__PURE__ */ Array.from({ length: 256 }, (r, t) => t.toString(16).padStart(2, "0"));
function ys(r) {
  if (!Uo(r))
    throw new Error("Uint8Array expected");
  let t = "";
  for (let e = 0; e < r.length; e++)
    t += Td[r[e]];
  return t;
}
function bl(r) {
  const t = r.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
function $a(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  return BigInt(r === "" ? "0" : `0x${r}`);
}
function ws(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  const t = r.length;
  if (t % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + t);
  const e = new Uint8Array(t / 2);
  for (let n = 0; n < e.length; n++) {
    const s = n * 2, i = r.slice(s, s + 2), o = Number.parseInt(i, 16);
    if (Number.isNaN(o) || o < 0)
      throw new Error("Invalid byte sequence");
    e[n] = o;
  }
  return e;
}
function er(r) {
  return $a(ys(r));
}
function tc(r) {
  if (!Uo(r))
    throw new Error("Uint8Array expected");
  return $a(ys(Uint8Array.from(r).reverse()));
}
function As(r, t) {
  return ws(r.toString(16).padStart(t * 2, "0"));
}
function ec(r, t) {
  return As(r, t).reverse();
}
function Id(r) {
  return ws(bl(r));
}
function ee(r, t, e) {
  let n;
  if (typeof t == "string")
    try {
      n = ws(t);
    } catch (i) {
      throw new Error(`${r} must be valid hex string, got "${t}". Cause: ${i}`);
    }
  else if (Uo(t))
    n = Uint8Array.from(t);
  else
    throw new Error(`${r} must be hex string or Uint8Array`);
  const s = n.length;
  if (typeof e == "number" && s !== e)
    throw new Error(`${r} expected ${e} bytes, got ${s}`);
  return n;
}
function zs(...r) {
  const t = new Uint8Array(r.reduce((n, s) => n + s.length, 0));
  let e = 0;
  return r.forEach((n) => {
    if (!Uo(n))
      throw new Error("Uint8Array expected");
    t.set(n, e), e += n.length;
  }), t;
}
function Bd(r, t) {
  if (r.length !== t.length)
    return !1;
  for (let e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !1;
  return !0;
}
function Sd(r) {
  if (typeof r != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
  return new Uint8Array(new TextEncoder().encode(r));
}
function Ud(r) {
  let t;
  for (t = 0; r > Al; r >>= So, t += 1)
    ;
  return t;
}
function Dd(r, t) {
  return r >> BigInt(t) & So;
}
const Fd = (r, t, e) => r | (e ? So : Al) << BigInt(t), nc = (r) => (Od << BigInt(r - 1)) - So, Zo = (r) => new Uint8Array(r), Hc = (r) => Uint8Array.from(r);
function El(r, t, e) {
  if (typeof r != "number" || r < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof e != "function")
    throw new Error("hmacFn must be a function");
  let n = Zo(r), s = Zo(r), i = 0;
  const o = () => {
    n.fill(1), s.fill(0), i = 0;
  }, a = (...h) => e(s, n, ...h), c = (h = Zo()) => {
    s = a(Hc([0]), h), n = a(), h.length !== 0 && (s = a(Hc([1]), h), n = a());
  }, u = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let h = 0;
    const p = [];
    for (; h < t; ) {
      n = a();
      const w = n.slice();
      p.push(w), h += n.length;
    }
    return zs(...p);
  };
  return (h, p) => {
    o(), c(h);
    let w;
    for (; !(w = p(u())); )
      c();
    return o(), w;
  };
}
const Ld = {
  bigint: (r) => typeof r == "bigint",
  function: (r) => typeof r == "function",
  boolean: (r) => typeof r == "boolean",
  string: (r) => typeof r == "string",
  stringOrUint8Array: (r) => typeof r == "string" || r instanceof Uint8Array,
  isSafeInteger: (r) => Number.isSafeInteger(r),
  array: (r) => Array.isArray(r),
  field: (r, t) => t.Fp.isValid(r),
  hash: (r) => typeof r == "function" && Number.isSafeInteger(r.outputLen)
};
function Pi(r, t, e = {}) {
  const n = (s, i, o) => {
    const a = Ld[i];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${i}", expected function`);
    const c = r[s];
    if (!(o && c === void 0) && !a(c, r))
      throw new Error(`Invalid param ${String(s)}=${c} (${typeof c}), expected ${i}`);
  };
  for (const [s, i] of Object.entries(t))
    n(s, i, !1);
  for (const [s, i] of Object.entries(e))
    n(s, i, !0);
  return r;
}
const Md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bitGet: Dd,
  bitLen: Ud,
  bitMask: nc,
  bitSet: Fd,
  bytesToHex: ys,
  bytesToNumberBE: er,
  bytesToNumberLE: tc,
  concatBytes: zs,
  createHmacDrbg: El,
  ensureBytes: ee,
  equalBytes: Bd,
  hexToBytes: ws,
  hexToNumber: $a,
  numberToBytesBE: As,
  numberToBytesLE: ec,
  numberToHexUnpadded: bl,
  numberToVarBytesBE: Id,
  utf8ToBytes: Sd,
  validateObject: Pi
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ot = BigInt(0), et = BigInt(1), Cn = BigInt(2), _d = BigInt(3), ma = BigInt(4), Qc = BigInt(5), Vc = BigInt(8);
BigInt(9);
BigInt(16);
function kt(r, t) {
  const e = r % t;
  return e >= ot ? e : t + e;
}
function Gd(r, t, e) {
  if (e <= ot || t < ot)
    throw new Error("Expected power/modulo > 0");
  if (e === et)
    return ot;
  let n = et;
  for (; t > ot; )
    t & et && (n = n * r % e), r = r * r % e, t >>= et;
  return n;
}
function Vt(r, t, e) {
  let n = r;
  for (; t-- > ot; )
    n *= n, n %= e;
  return n;
}
function ya(r, t) {
  if (r === ot || t <= ot)
    throw new Error(`invert: expected positive integers, got n=${r} mod=${t}`);
  let e = kt(r, t), n = t, s = ot, i = et;
  for (; e !== ot; ) {
    const a = n / e, c = n % e, u = s - i * a;
    n = e, e = c, s = i, i = u;
  }
  if (n !== et)
    throw new Error("invert: does not exist");
  return kt(s, t);
}
function Hd(r) {
  const t = (r - et) / Cn;
  let e, n, s;
  for (e = r - et, n = 0; e % Cn === ot; e /= Cn, n++)
    ;
  for (s = Cn; s < r && Gd(s, t, r) !== r - et; s++)
    ;
  if (n === 1) {
    const o = (r + et) / ma;
    return function(c, u) {
      const f = c.pow(u, o);
      if (!c.eql(c.sqr(f), u))
        throw new Error("Cannot find square root");
      return f;
    };
  }
  const i = (e + et) / Cn;
  return function(a, c) {
    if (a.pow(c, t) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let u = n, f = a.pow(a.mul(a.ONE, s), e), h = a.pow(c, i), p = a.pow(c, e);
    for (; !a.eql(p, a.ONE); ) {
      if (a.eql(p, a.ZERO))
        return a.ZERO;
      let w = 1;
      for (let A = a.sqr(p); w < u && !a.eql(A, a.ONE); w++)
        A = a.sqr(A);
      const E = a.pow(f, et << BigInt(u - w - 1));
      f = a.sqr(E), h = a.mul(h, E), p = a.mul(p, f), u = w;
    }
    return h;
  };
}
function Qd(r) {
  if (r % ma === _d) {
    const t = (r + et) / ma;
    return function(n, s) {
      const i = n.pow(s, t);
      if (!n.eql(n.sqr(i), s))
        throw new Error("Cannot find square root");
      return i;
    };
  }
  if (r % Vc === Qc) {
    const t = (r - Qc) / Vc;
    return function(n, s) {
      const i = n.mul(s, Cn), o = n.pow(i, t), a = n.mul(s, o), c = n.mul(n.mul(a, Cn), o), u = n.mul(a, n.sub(c, n.ONE));
      if (!n.eql(n.sqr(u), s))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  return Hd(r);
}
const Vd = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function Kd(r) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, e = Vd.reduce((n, s) => (n[s] = "function", n), t);
  return Pi(r, e);
}
function Jd(r, t, e) {
  if (e < ot)
    throw new Error("Expected power > 0");
  if (e === ot)
    return r.ONE;
  if (e === et)
    return t;
  let n = r.ONE, s = t;
  for (; e > ot; )
    e & et && (n = r.mul(n, s)), s = r.sqr(s), e >>= et;
  return n;
}
function zd(r, t) {
  const e = new Array(t.length), n = t.reduce((i, o, a) => r.is0(o) ? i : (e[a] = i, r.mul(i, o)), r.ONE), s = r.inv(n);
  return t.reduceRight((i, o, a) => r.is0(o) ? i : (e[a] = r.mul(i, e[a]), r.mul(i, o)), s), e;
}
function Nl(r, t) {
  const e = t !== void 0 ? t : r.toString(2).length, n = Math.ceil(e / 8);
  return { nBitLength: e, nByteLength: n };
}
function jd(r, t, e = !1, n = {}) {
  if (r <= ot)
    throw new Error(`Expected Field ORDER > 0, got ${r}`);
  const { nBitLength: s, nByteLength: i } = Nl(r, t);
  if (i > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const o = Qd(r), a = Object.freeze({
    ORDER: r,
    BITS: s,
    BYTES: i,
    MASK: nc(s),
    ZERO: ot,
    ONE: et,
    create: (c) => kt(c, r),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
      return ot <= c && c < r;
    },
    is0: (c) => c === ot,
    isOdd: (c) => (c & et) === et,
    neg: (c) => kt(-c, r),
    eql: (c, u) => c === u,
    sqr: (c) => kt(c * c, r),
    add: (c, u) => kt(c + u, r),
    sub: (c, u) => kt(c - u, r),
    mul: (c, u) => kt(c * u, r),
    pow: (c, u) => Jd(a, c, u),
    div: (c, u) => kt(c * ya(u, r), r),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, u) => c + u,
    subN: (c, u) => c - u,
    mulN: (c, u) => c * u,
    inv: (c) => ya(c, r),
    sqrt: n.sqrt || ((c) => o(a, c)),
    invertBatch: (c) => zd(a, c),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (c, u, f) => f ? u : c,
    toBytes: (c) => e ? ec(c, i) : As(c, i),
    fromBytes: (c) => {
      if (c.length !== i)
        throw new Error(`Fp.fromBytes: expected ${i}, got ${c.length}`);
      return e ? tc(c) : er(c);
    }
  });
  return Object.freeze(a);
}
function Pl(r) {
  if (typeof r != "bigint")
    throw new Error("field order must be bigint");
  const t = r.toString(2).length;
  return Math.ceil(t / 8);
}
function xl(r) {
  const t = Pl(r);
  return t + Math.ceil(t / 2);
}
function Wd(r, t, e = !1) {
  const n = r.length, s = Pl(t), i = xl(t);
  if (n < 16 || n < i || n > 1024)
    throw new Error(`expected ${i}-1024 bytes of input, got ${n}`);
  const o = e ? er(r) : tc(r), a = kt(o, t - et) + et;
  return e ? ec(a, s) : As(a, s);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Zd = BigInt(0), Yo = BigInt(1);
function Yd(r, t) {
  const e = (s, i) => {
    const o = i.negate();
    return s ? o : i;
  }, n = (s) => {
    const i = Math.ceil(t / s) + 1, o = 2 ** (s - 1);
    return { windows: i, windowSize: o };
  };
  return {
    constTimeNegate: e,
    // non-const time multiplication ladder
    unsafeLadder(s, i) {
      let o = r.ZERO, a = s;
      for (; i > Zd; )
        i & Yo && (o = o.add(a)), a = a.double(), i >>= Yo;
      return o;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(s, i) {
      const { windows: o, windowSize: a } = n(i), c = [];
      let u = s, f = u;
      for (let h = 0; h < o; h++) {
        f = u, c.push(f);
        for (let p = 1; p < a; p++)
          f = f.add(u), c.push(f);
        u = f.double();
      }
      return c;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(s, i, o) {
      const { windows: a, windowSize: c } = n(s);
      let u = r.ZERO, f = r.BASE;
      const h = BigInt(2 ** s - 1), p = 2 ** s, w = BigInt(s);
      for (let E = 0; E < a; E++) {
        const A = E * c;
        let N = Number(o & h);
        o >>= w, N > c && (N -= p, o += Yo);
        const P = A, C = A + Math.abs(N) - 1, S = E % 2 !== 0, G = N < 0;
        N === 0 ? f = f.add(e(S, i[P])) : u = u.add(e(G, i[C]));
      }
      return { p: u, f };
    },
    wNAFCached(s, i, o, a) {
      const c = s._WINDOW_SIZE || 1;
      let u = i.get(s);
      return u || (u = this.precomputeWindow(s, c), c !== 1 && i.set(s, a(u))), this.wNAF(c, u, o);
    }
  };
}
function kl(r) {
  return Kd(r.Fp), Pi(r, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Nl(r.n, r.nBitLength),
    ...r,
    p: r.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function qd(r) {
  const t = kl(r);
  Pi(t, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: e, Fp: n, a: s } = t;
  if (e) {
    if (!n.eql(s, n.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof e != "object" || typeof e.beta != "bigint" || typeof e.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...t });
}
const { bytesToNumberBE: Xd, hexToBytes: $d } = Md, Tn = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(t = "") {
      super(t);
    }
  },
  _parseInt(r) {
    const { Err: t } = Tn;
    if (r.length < 2 || r[0] !== 2)
      throw new t("Invalid signature integer tag");
    const e = r[1], n = r.subarray(2, e + 2);
    if (!e || n.length !== e)
      throw new t("Invalid signature integer: wrong length");
    if (n[0] & 128)
      throw new t("Invalid signature integer: negative");
    if (n[0] === 0 && !(n[1] & 128))
      throw new t("Invalid signature integer: unnecessary leading zero");
    return { d: Xd(n), l: r.subarray(e + 2) };
  },
  toSig(r) {
    const { Err: t } = Tn, e = typeof r == "string" ? $d(r) : r;
    if (!(e instanceof Uint8Array))
      throw new Error("ui8a expected");
    let n = e.length;
    if (n < 2 || e[0] != 48)
      throw new t("Invalid signature tag");
    if (e[1] !== n - 2)
      throw new t("Invalid signature: incorrect length");
    const { d: s, l: i } = Tn._parseInt(e.subarray(2)), { d: o, l: a } = Tn._parseInt(i);
    if (a.length)
      throw new t("Invalid signature: left bytes after parsing");
    return { r: s, s: o };
  },
  hexFromSig(r) {
    const t = (u) => Number.parseInt(u[0], 16) & 8 ? "00" + u : u, e = (u) => {
      const f = u.toString(16);
      return f.length & 1 ? `0${f}` : f;
    }, n = t(e(r.s)), s = t(e(r.r)), i = n.length / 2, o = s.length / 2, a = e(i), c = e(o);
    return `30${e(o + i + 4)}02${c}${s}02${a}${n}`;
  }
}, He = BigInt(0), qt = BigInt(1);
BigInt(2);
const Kc = BigInt(3);
BigInt(4);
function tp(r) {
  const t = qd(r), { Fp: e } = t, n = t.toBytes || ((E, A, N) => {
    const P = A.toAffine();
    return zs(Uint8Array.from([4]), e.toBytes(P.x), e.toBytes(P.y));
  }), s = t.fromBytes || ((E) => {
    const A = E.subarray(1), N = e.fromBytes(A.subarray(0, e.BYTES)), P = e.fromBytes(A.subarray(e.BYTES, 2 * e.BYTES));
    return { x: N, y: P };
  });
  function i(E) {
    const { a: A, b: N } = t, P = e.sqr(E), C = e.mul(P, E);
    return e.add(e.add(C, e.mul(E, A)), N);
  }
  if (!e.eql(e.sqr(t.Gy), i(t.Gx)))
    throw new Error("bad generator point: equation left != right");
  function o(E) {
    return typeof E == "bigint" && He < E && E < t.n;
  }
  function a(E) {
    if (!o(E))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function c(E) {
    const { allowedPrivateKeyLengths: A, nByteLength: N, wrapPrivateKey: P, n: C } = t;
    if (A && typeof E != "bigint") {
      if (E instanceof Uint8Array && (E = ys(E)), typeof E != "string" || !A.includes(E.length))
        throw new Error("Invalid key");
      E = E.padStart(N * 2, "0");
    }
    let S;
    try {
      S = typeof E == "bigint" ? E : er(ee("private key", E, N));
    } catch {
      throw new Error(`private key must be ${N} bytes, hex or bigint, not ${typeof E}`);
    }
    return P && (S = kt(S, C)), a(S), S;
  }
  const u = /* @__PURE__ */ new Map();
  function f(E) {
    if (!(E instanceof h))
      throw new Error("ProjectivePoint expected");
  }
  class h {
    constructor(A, N, P) {
      if (this.px = A, this.py = N, this.pz = P, A == null || !e.isValid(A))
        throw new Error("x required");
      if (N == null || !e.isValid(N))
        throw new Error("y required");
      if (P == null || !e.isValid(P))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(A) {
      const { x: N, y: P } = A || {};
      if (!A || !e.isValid(N) || !e.isValid(P))
        throw new Error("invalid affine point");
      if (A instanceof h)
        throw new Error("projective point not allowed");
      const C = (S) => e.eql(S, e.ZERO);
      return C(N) && C(P) ? h.ZERO : new h(N, P, e.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(A) {
      const N = e.invertBatch(A.map((P) => P.pz));
      return A.map((P, C) => P.toAffine(N[C])).map(h.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(A) {
      const N = h.fromAffine(s(ee("pointHex", A)));
      return N.assertValidity(), N;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(A) {
      return h.BASE.multiply(c(A));
    }
    // "Private method", don't use it directly
    _setWindowSize(A) {
      this._WINDOW_SIZE = A, u.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (t.allowInfinityPoint && !e.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: A, y: N } = this.toAffine();
      if (!e.isValid(A) || !e.isValid(N))
        throw new Error("bad point: x or y not FE");
      const P = e.sqr(N), C = i(A);
      if (!e.eql(P, C))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: A } = this.toAffine();
      if (e.isOdd)
        return !e.isOdd(A);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(A) {
      f(A);
      const { px: N, py: P, pz: C } = this, { px: S, py: G, pz: U } = A, O = e.eql(e.mul(N, U), e.mul(S, C)), D = e.eql(e.mul(P, U), e.mul(G, C));
      return O && D;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new h(this.px, e.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: A, b: N } = t, P = e.mul(N, Kc), { px: C, py: S, pz: G } = this;
      let U = e.ZERO, O = e.ZERO, D = e.ZERO, F = e.mul(C, C), nt = e.mul(S, S), z = e.mul(G, G), J = e.mul(C, S);
      return J = e.add(J, J), D = e.mul(C, G), D = e.add(D, D), U = e.mul(A, D), O = e.mul(P, z), O = e.add(U, O), U = e.sub(nt, O), O = e.add(nt, O), O = e.mul(U, O), U = e.mul(J, U), D = e.mul(P, D), z = e.mul(A, z), J = e.sub(F, z), J = e.mul(A, J), J = e.add(J, D), D = e.add(F, F), F = e.add(D, F), F = e.add(F, z), F = e.mul(F, J), O = e.add(O, F), z = e.mul(S, G), z = e.add(z, z), F = e.mul(z, J), U = e.sub(U, F), D = e.mul(z, nt), D = e.add(D, D), D = e.add(D, D), new h(U, O, D);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(A) {
      f(A);
      const { px: N, py: P, pz: C } = this, { px: S, py: G, pz: U } = A;
      let O = e.ZERO, D = e.ZERO, F = e.ZERO;
      const nt = t.a, z = e.mul(t.b, Kc);
      let J = e.mul(N, S), Bt = e.mul(P, G), St = e.mul(C, U), je = e.add(N, P), k = e.add(S, G);
      je = e.mul(je, k), k = e.add(J, Bt), je = e.sub(je, k), k = e.add(N, C);
      let v = e.add(S, U);
      return k = e.mul(k, v), v = e.add(J, St), k = e.sub(k, v), v = e.add(P, C), O = e.add(G, U), v = e.mul(v, O), O = e.add(Bt, St), v = e.sub(v, O), F = e.mul(nt, k), O = e.mul(z, St), F = e.add(O, F), O = e.sub(Bt, F), F = e.add(Bt, F), D = e.mul(O, F), Bt = e.add(J, J), Bt = e.add(Bt, J), St = e.mul(nt, St), k = e.mul(z, k), Bt = e.add(Bt, St), St = e.sub(J, St), St = e.mul(nt, St), k = e.add(k, St), J = e.mul(Bt, k), D = e.add(D, J), J = e.mul(v, k), O = e.mul(je, O), O = e.sub(O, J), J = e.mul(je, Bt), F = e.mul(v, F), F = e.add(F, J), new h(O, D, F);
    }
    subtract(A) {
      return this.add(A.negate());
    }
    is0() {
      return this.equals(h.ZERO);
    }
    wNAF(A) {
      return w.wNAFCached(this, u, A, (N) => {
        const P = e.invertBatch(N.map((C) => C.pz));
        return N.map((C, S) => C.toAffine(P[S])).map(h.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(A) {
      const N = h.ZERO;
      if (A === He)
        return N;
      if (a(A), A === qt)
        return this;
      const { endo: P } = t;
      if (!P)
        return w.unsafeLadder(this, A);
      let { k1neg: C, k1: S, k2neg: G, k2: U } = P.splitScalar(A), O = N, D = N, F = this;
      for (; S > He || U > He; )
        S & qt && (O = O.add(F)), U & qt && (D = D.add(F)), F = F.double(), S >>= qt, U >>= qt;
      return C && (O = O.negate()), G && (D = D.negate()), D = new h(e.mul(D.px, P.beta), D.py, D.pz), O.add(D);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(A) {
      a(A);
      let N = A, P, C;
      const { endo: S } = t;
      if (S) {
        const { k1neg: G, k1: U, k2neg: O, k2: D } = S.splitScalar(N);
        let { p: F, f: nt } = this.wNAF(U), { p: z, f: J } = this.wNAF(D);
        F = w.constTimeNegate(G, F), z = w.constTimeNegate(O, z), z = new h(e.mul(z.px, S.beta), z.py, z.pz), P = F.add(z), C = nt.add(J);
      } else {
        const { p: G, f: U } = this.wNAF(N);
        P = G, C = U;
      }
      return h.normalizeZ([P, C])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(A, N, P) {
      const C = h.BASE, S = (U, O) => O === He || O === qt || !U.equals(C) ? U.multiplyUnsafe(O) : U.multiply(O), G = S(this, N).add(S(A, P));
      return G.is0() ? void 0 : G;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(A) {
      const { px: N, py: P, pz: C } = this, S = this.is0();
      A == null && (A = S ? e.ONE : e.inv(C));
      const G = e.mul(N, A), U = e.mul(P, A), O = e.mul(C, A);
      if (S)
        return { x: e.ZERO, y: e.ZERO };
      if (!e.eql(O, e.ONE))
        throw new Error("invZ was invalid");
      return { x: G, y: U };
    }
    isTorsionFree() {
      const { h: A, isTorsionFree: N } = t;
      if (A === qt)
        return !0;
      if (N)
        return N(h, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: A, clearCofactor: N } = t;
      return A === qt ? this : N ? N(h, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(A = !0) {
      return this.assertValidity(), n(h, this, A);
    }
    toHex(A = !0) {
      return ys(this.toRawBytes(A));
    }
  }
  h.BASE = new h(t.Gx, t.Gy, e.ONE), h.ZERO = new h(e.ZERO, e.ONE, e.ZERO);
  const p = t.nBitLength, w = Yd(h, t.endo ? Math.ceil(p / 2) : p);
  return {
    CURVE: t,
    ProjectivePoint: h,
    normPrivateKeyToScalar: c,
    weierstrassEquation: i,
    isWithinCurveOrder: o
  };
}
function ep(r) {
  const t = kl(r);
  return Pi(t, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...t });
}
function np(r) {
  const t = ep(r), { Fp: e, n } = t, s = e.BYTES + 1, i = 2 * e.BYTES + 1;
  function o(k) {
    return He < k && k < e.ORDER;
  }
  function a(k) {
    return kt(k, n);
  }
  function c(k) {
    return ya(k, n);
  }
  const { ProjectivePoint: u, normPrivateKeyToScalar: f, weierstrassEquation: h, isWithinCurveOrder: p } = tp({
    ...t,
    toBytes(k, v, M) {
      const W = v.toAffine(), j = e.toBytes(W.x), st = zs;
      return M ? st(Uint8Array.from([v.hasEvenY() ? 2 : 3]), j) : st(Uint8Array.from([4]), j, e.toBytes(W.y));
    },
    fromBytes(k) {
      const v = k.length, M = k[0], W = k.subarray(1);
      if (v === s && (M === 2 || M === 3)) {
        const j = er(W);
        if (!o(j))
          throw new Error("Point is not on curve");
        const st = h(j);
        let Ut = e.sqrt(st);
        const Dt = (Ut & qt) === qt;
        return (M & 1) === 1 !== Dt && (Ut = e.neg(Ut)), { x: j, y: Ut };
      } else if (v === i && M === 4) {
        const j = e.fromBytes(W.subarray(0, e.BYTES)), st = e.fromBytes(W.subarray(e.BYTES, 2 * e.BYTES));
        return { x: j, y: st };
      } else
        throw new Error(`Point of length ${v} was invalid. Expected ${s} compressed bytes or ${i} uncompressed bytes`);
    }
  }), w = (k) => ys(As(k, t.nByteLength));
  function E(k) {
    const v = n >> qt;
    return k > v;
  }
  function A(k) {
    return E(k) ? a(-k) : k;
  }
  const N = (k, v, M) => er(k.slice(v, M));
  class P {
    constructor(v, M, W) {
      this.r = v, this.s = M, this.recovery = W, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(v) {
      const M = t.nByteLength;
      return v = ee("compactSignature", v, M * 2), new P(N(v, 0, M), N(v, M, 2 * M));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(v) {
      const { r: M, s: W } = Tn.toSig(ee("DER", v));
      return new P(M, W);
    }
    assertValidity() {
      if (!p(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!p(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(v) {
      return new P(this.r, this.s, v);
    }
    recoverPublicKey(v) {
      const { r: M, s: W, recovery: j } = this, st = D(ee("msgHash", v));
      if (j == null || ![0, 1, 2, 3].includes(j))
        throw new Error("recovery id invalid");
      const Ut = j === 2 || j === 3 ? M + t.n : M;
      if (Ut >= e.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const Dt = j & 1 ? "03" : "02", We = u.fromHex(Dt + w(Ut)), Ze = c(Ut), ur = a(-st * Ze), ks = a(W * Ze), Ye = u.BASE.multiplyAndAddUnsafe(We, ur, ks);
      if (!Ye)
        throw new Error("point at infinify");
      return Ye.assertValidity(), Ye;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return E(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new P(this.r, a(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return ws(this.toDERHex());
    }
    toDERHex() {
      return Tn.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return ws(this.toCompactHex());
    }
    toCompactHex() {
      return w(this.r) + w(this.s);
    }
  }
  const C = {
    isValidPrivateKey(k) {
      try {
        return f(k), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: f,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const k = xl(t.n);
      return Wd(t.randomBytes(k), t.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(k = 8, v = u.BASE) {
      return v._setWindowSize(k), v.multiply(BigInt(3)), v;
    }
  };
  function S(k, v = !0) {
    return u.fromPrivateKey(k).toRawBytes(v);
  }
  function G(k) {
    const v = k instanceof Uint8Array, M = typeof k == "string", W = (v || M) && k.length;
    return v ? W === s || W === i : M ? W === 2 * s || W === 2 * i : k instanceof u;
  }
  function U(k, v, M = !0) {
    if (G(k))
      throw new Error("first arg must be private key");
    if (!G(v))
      throw new Error("second arg must be public key");
    return u.fromHex(v).multiply(f(k)).toRawBytes(M);
  }
  const O = t.bits2int || function(k) {
    const v = er(k), M = k.length * 8 - t.nBitLength;
    return M > 0 ? v >> BigInt(M) : v;
  }, D = t.bits2int_modN || function(k) {
    return a(O(k));
  }, F = nc(t.nBitLength);
  function nt(k) {
    if (typeof k != "bigint")
      throw new Error("bigint expected");
    if (!(He <= k && k < F))
      throw new Error(`bigint expected < 2^${t.nBitLength}`);
    return As(k, t.nByteLength);
  }
  function z(k, v, M = J) {
    if (["recovered", "canonical"].some((Rn) => Rn in M))
      throw new Error("sign() legacy options not supported");
    const { hash: W, randomBytes: j } = t;
    let { lowS: st, prehash: Ut, extraEntropy: Dt } = M;
    st == null && (st = !0), k = ee("msgHash", k), Ut && (k = ee("prehashed msgHash", W(k)));
    const We = D(k), Ze = f(v), ur = [nt(Ze), nt(We)];
    if (Dt != null) {
      const Rn = Dt === !0 ? j(e.BYTES) : Dt;
      ur.push(ee("extraEntropy", Rn));
    }
    const ks = zs(...ur), Ye = We;
    function Qo(Rn) {
      const lr = O(Rn);
      if (!p(lr))
        return;
      const Nc = c(lr), fr = u.BASE.multiply(lr).toAffine(), $t = a(fr.x);
      if ($t === He)
        return;
      const hr = a(Nc * a(Ye + $t * Ze));
      if (hr === He)
        return;
      let Pc = (fr.x === $t ? 0 : 2) | Number(fr.y & qt), xc = hr;
      return st && E(hr) && (xc = A(hr), Pc ^= 1), new P($t, xc, Pc);
    }
    return { seed: ks, k2sig: Qo };
  }
  const J = { lowS: t.lowS, prehash: !1 }, Bt = { lowS: t.lowS, prehash: !1 };
  function St(k, v, M = J) {
    const { seed: W, k2sig: j } = z(k, v, M), st = t;
    return El(st.hash.outputLen, st.nByteLength, st.hmac)(W, j);
  }
  u.BASE._setWindowSize(8);
  function je(k, v, M, W = Bt) {
    var fr;
    const j = k;
    if (v = ee("msgHash", v), M = ee("publicKey", M), "strict" in W)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: st, prehash: Ut } = W;
    let Dt, We;
    try {
      if (typeof j == "string" || j instanceof Uint8Array)
        try {
          Dt = P.fromDER(j);
        } catch ($t) {
          if (!($t instanceof Tn.Err))
            throw $t;
          Dt = P.fromCompact(j);
        }
      else if (typeof j == "object" && typeof j.r == "bigint" && typeof j.s == "bigint") {
        const { r: $t, s: hr } = j;
        Dt = new P($t, hr);
      } else
        throw new Error("PARSE");
      We = u.fromHex(M);
    } catch ($t) {
      if ($t.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (st && Dt.hasHighS())
      return !1;
    Ut && (v = t.hash(v));
    const { r: Ze, s: ur } = Dt, ks = D(v), Ye = c(ur), Qo = a(ks * Ye), Rn = a(Ze * Ye), lr = (fr = u.BASE.multiplyAndAddUnsafe(We, Qo, Rn)) == null ? void 0 : fr.toAffine();
    return lr ? a(lr.x) === Ze : !1;
  }
  return {
    CURVE: t,
    getPublicKey: S,
    getSharedSecret: U,
    sign: St,
    verify: je,
    ProjectivePoint: u,
    Signature: P,
    utils: C
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function rp(r) {
  return {
    hash: r,
    hmac: (t, ...e) => hl(r, t, sd(...e)),
    randomBytes: id
  };
}
function sp(r, t) {
  const e = (n) => np({ ...r, ...rp(n) });
  return Object.freeze({ ...e(t), create: e });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Rl = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Jc = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), ip = BigInt(1), wa = BigInt(2), zc = (r, t) => (r + t / wa) / t;
function op(r) {
  const t = Rl, e = BigInt(3), n = BigInt(6), s = BigInt(11), i = BigInt(22), o = BigInt(23), a = BigInt(44), c = BigInt(88), u = r * r * r % t, f = u * u * r % t, h = Vt(f, e, t) * f % t, p = Vt(h, e, t) * f % t, w = Vt(p, wa, t) * u % t, E = Vt(w, s, t) * w % t, A = Vt(E, i, t) * E % t, N = Vt(A, a, t) * A % t, P = Vt(N, c, t) * N % t, C = Vt(P, a, t) * A % t, S = Vt(C, e, t) * f % t, G = Vt(S, o, t) * E % t, U = Vt(G, n, t) * u % t, O = Vt(U, wa, t);
  if (!Aa.eql(Aa.sqr(O), r))
    throw new Error("Cannot find square root");
  return O;
}
const Aa = jd(Rl, void 0, void 0, { sqrt: op }), $e = sp({
  a: BigInt(0),
  b: BigInt(7),
  Fp: Aa,
  n: Jc,
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  lowS: !0,
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (r) => {
      const t = Jc, e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), n = -ip * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = e, o = BigInt("0x100000000000000000000000000000000"), a = zc(i * r, t), c = zc(-n * r, t);
      let u = kt(r - a * e - c * s, t), f = kt(-a * n - c * i, t);
      const h = u > o, p = f > o;
      if (h && (u = t - u), p && (f = t - f), u > o || f > o)
        throw new Error("splitScalar: Endomorphism failed, k=" + r);
      return { k1neg: h, k1: u, k2neg: p, k2: f };
    }
  }
}, hd);
BigInt(0);
$e.ProjectivePoint;
const ba = "0x0000000000000000000000000000000000000000", jc = "0x0000000000000000000000000000000000000000000000000000000000000000", Wc = BigInt(0), Zc = BigInt(1), Yc = BigInt(2), qc = BigInt(27), Xc = BigInt(28), Ui = BigInt(35), dr = {};
function $c(r) {
  return sr(Qt(r), 32);
}
var Ur, Dr, Fr, Gn;
const te = class te {
  /**
   *  @private
   */
  constructor(t, e, n, s) {
    y(this, Ur, void 0);
    y(this, Dr, void 0);
    y(this, Fr, void 0);
    y(this, Gn, void 0);
    Oo(t, dr, "Signature"), d(this, Ur, e), d(this, Dr, n), d(this, Fr, s), d(this, Gn, null);
  }
  /**
   *  The ``r`` value for a signautre.
   *
   *  This represents the ``x`` coordinate of a "reference" or
   *  challenge point, from which the ``y`` can be computed.
   */
  get r() {
    return l(this, Ur);
  }
  set r(t) {
    g(kr(t) === 32, "invalid r", "value", t), d(this, Ur, T(t));
  }
  /**
   *  The ``s`` value for a signature.
   */
  get s() {
    return l(this, Dr);
  }
  set s(t) {
    g(kr(t) === 32, "invalid s", "value", t);
    const e = T(t);
    g(parseInt(e.substring(0, 3)) < 8, "non-canonical s", "value", e), d(this, Dr, e);
  }
  /**
   *  The ``v`` value for a signature.
   *
   *  Since a given ``x`` value for ``r`` has two possible values for
   *  its correspondin ``y``, the ``v`` indicates which of the two ``y``
   *  values to use.
   *
   *  It is normalized to the values ``27`` or ``28`` for legacy
   *  purposes.
   */
  get v() {
    return l(this, Fr);
  }
  set v(t) {
    const e = L(t, "value");
    g(e === 27 || e === 28, "invalid v", "v", t), d(this, Fr, e);
  }
  /**
   *  The EIP-155 ``v`` for legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get networkV() {
    return l(this, Gn);
  }
  /**
   *  The chain ID for EIP-155 legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get legacyChainId() {
    const t = this.networkV;
    return t == null ? null : te.getChainId(t);
  }
  /**
   *  The ``yParity`` for the signature.
   *
   *  See ``v`` for more details on how this value is used.
   */
  get yParity() {
    return this.v === 27 ? 0 : 1;
  }
  /**
   *  The [[link-eip-2098]] compact representation of the ``yParity``
   *  and ``s`` compacted into a single ``bytes32``.
   */
  get yParityAndS() {
    const t = K(this.s);
    return this.yParity && (t[0] |= 128), T(t);
  }
  /**
   *  The [[link-eip-2098]] compact representation.
   */
  get compactSerialized() {
    return rt([this.r, this.yParityAndS]);
  }
  /**
   *  The serialized representation.
   */
  get serialized() {
    return rt([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`;
  }
  /**
   *  Returns a new identical [[Signature]].
   */
  clone() {
    const t = new te(dr, this.r, this.s, this.v);
    return this.networkV && d(t, Gn, this.networkV), t;
  }
  /**
   *  Returns a representation that is compatible with ``JSON.stringify``.
   */
  toJSON() {
    const t = this.networkV;
    return {
      _type: "signature",
      networkV: t != null ? t.toString() : null,
      r: this.r,
      s: this.s,
      v: this.v
    };
  }
  /**
   *  Compute the chain ID from the ``v`` in a legacy EIP-155 transactions.
   *
   *  @example:
   *    Signature.getChainId(45)
   *    //_result:
   *
   *    Signature.getChainId(46)
   *    //_result:
   */
  static getChainId(t) {
    const e = I(t, "v");
    return e == qc || e == Xc ? Wc : (g(e >= Ui, "invalid EIP-155 v", "v", t), (e - Ui) / Yc);
  }
  /**
   *  Compute the ``v`` for a chain ID for a legacy EIP-155 transactions.
   *
   *  Legacy transactions which use [[link-eip-155]] hijack the ``v``
   *  property to include the chain ID.
   *
   *  @example:
   *    Signature.getChainIdV(5, 27)
   *    //_result:
   *
   *    Signature.getChainIdV(5, 28)
   *    //_result:
   *
   */
  static getChainIdV(t, e) {
    return I(t) * Yc + BigInt(35 + e - 27);
  }
  /**
   *  Compute the normalized legacy transaction ``v`` from a ``yParirty``,
   *  a legacy transaction ``v`` or a legacy [[link-eip-155]] transaction.
   *
   *  @example:
   *    // The values 0 and 1 imply v is actually yParity
   *    Signature.getNormalizedV(0)
   *    //_result:
   *
   *    // Legacy non-EIP-1559 transaction (i.e. 27 or 28)
   *    Signature.getNormalizedV(27)
   *    //_result:
   *
   *    // Legacy EIP-155 transaction (i.e. >= 35)
   *    Signature.getNormalizedV(46)
   *    //_result:
   *
   *    // Invalid values throw
   *    Signature.getNormalizedV(5)
   *    //_error:
   */
  static getNormalizedV(t) {
    const e = I(t);
    return e === Wc || e === qc ? 27 : e === Zc || e === Xc ? 28 : (g(e >= Ui, "invalid v", "v", t), e & Zc ? 27 : 28);
  }
  /**
   *  Creates a new [[Signature]].
   *
   *  If no %%sig%% is provided, a new [[Signature]] is created
   *  with default values.
   *
   *  If %%sig%% is a string, it is parsed.
   */
  static from(t) {
    function e(u, f) {
      g(u, f, "signature", t);
    }
    if (t == null)
      return new te(dr, jc, jc, 27);
    if (typeof t == "string") {
      const u = K(t, "signature");
      if (u.length === 64) {
        const f = T(u.slice(0, 32)), h = u.slice(32, 64), p = h[0] & 128 ? 28 : 27;
        return h[0] &= 127, new te(dr, f, T(h), p);
      }
      if (u.length === 65) {
        const f = T(u.slice(0, 32)), h = u.slice(32, 64);
        e((h[0] & 128) === 0, "non-canonical s");
        const p = te.getNormalizedV(u[64]);
        return new te(dr, f, T(h), p);
      }
      e(!1, "invalid raw signature length");
    }
    if (t instanceof te)
      return t.clone();
    const n = t.r;
    e(n != null, "missing r");
    const s = $c(n), i = function(u, f) {
      if (u != null)
        return $c(u);
      if (f != null) {
        e(X(f, 32), "invalid yParityAndS");
        const h = K(f);
        return h[0] &= 127, T(h);
      }
      e(!1, "missing s");
    }(t.s, t.yParityAndS);
    e((K(i)[0] & 128) == 0, "non-canonical s");
    const { networkV: o, v: a } = function(u, f, h) {
      if (u != null) {
        const p = I(u);
        return {
          networkV: p >= Ui ? p : void 0,
          v: te.getNormalizedV(p)
        };
      }
      if (f != null)
        return e(X(f, 32), "invalid yParityAndS"), { v: K(f)[0] & 128 ? 28 : 27 };
      if (h != null) {
        switch (L(h, "sig.yParity")) {
          case 0:
            return { v: 27 };
          case 1:
            return { v: 28 };
        }
        e(!1, "invalid yParity");
      }
      e(!1, "missing v");
    }(t.v, t.yParityAndS, t.yParity), c = new te(dr, s, i, a);
    return o && d(c, Gn, o), e(t.yParity == null || L(t.yParity, "sig.yParity") === c.yParity, "yParity mismatch"), e(t.yParityAndS == null || t.yParityAndS === c.yParityAndS, "yParityAndS mismatch"), c;
  }
};
Ur = new WeakMap(), Dr = new WeakMap(), Fr = new WeakMap(), Gn = new WeakMap();
let ue = te;
var Te;
const vn = class vn {
  /**
   *  Creates a new **SigningKey** for %%privateKey%%.
   */
  constructor(t) {
    y(this, Te, void 0);
    g(kr(t) === 32, "invalid private key", "privateKey", "[REDACTED]"), d(this, Te, T(t));
  }
  /**
   *  The private key.
   */
  get privateKey() {
    return l(this, Te);
  }
  /**
   *  The uncompressed public key.
   *
   * This will always begin with the prefix ``0x04`` and be 132
   * characters long (the ``0x`` prefix and 130 hexadecimal nibbles).
   */
  get publicKey() {
    return vn.computePublicKey(l(this, Te));
  }
  /**
   *  The compressed public key.
   *
   *  This will always begin with either the prefix ``0x02`` or ``0x03``
   *  and be 68 characters long (the ``0x`` prefix and 33 hexadecimal
   *  nibbles)
   */
  get compressedPublicKey() {
    return vn.computePublicKey(l(this, Te), !0);
  }
  /**
   *  Return the signature of the signed %%digest%%.
   */
  sign(t) {
    g(kr(t) === 32, "invalid digest length", "digest", t);
    const e = $e.sign(vt(t), vt(l(this, Te)), {
      lowS: !0
    });
    return ue.from({
      r: Nn(e.r, 32),
      s: Nn(e.s, 32),
      v: e.recovery ? 28 : 27
    });
  }
  /**
   *  Returns the [[link-wiki-ecdh]] shared secret between this
   *  private key and the %%other%% key.
   *
   *  The %%other%% key may be any type of key, a raw public key,
   *  a compressed/uncompressed pubic key or aprivate key.
   *
   *  Best practice is usually to use a cryptographic hash on the
   *  returned value before using it as a symetric secret.
   *
   *  @example:
   *    sign1 = new SigningKey(id("some-secret-1"))
   *    sign2 = new SigningKey(id("some-secret-2"))
   *
   *    // Notice that privA.computeSharedSecret(pubB)...
   *    sign1.computeSharedSecret(sign2.publicKey)
   *    //_result:
   *
   *    // ...is equal to privB.computeSharedSecret(pubA).
   *    sign2.computeSharedSecret(sign1.publicKey)
   *    //_result:
   */
  computeSharedSecret(t) {
    const e = vn.computePublicKey(t);
    return T($e.getSharedSecret(vt(l(this, Te)), K(e), !1));
  }
  /**
   *  Compute the public key for %%key%%, optionally %%compressed%%.
   *
   *  The %%key%% may be any type of key, a raw public key, a
   *  compressed/uncompressed public key or private key.
   *
   *  @example:
   *    sign = new SigningKey(id("some-secret"));
   *
   *    // Compute the uncompressed public key for a private key
   *    SigningKey.computePublicKey(sign.privateKey)
   *    //_result:
   *
   *    // Compute the compressed public key for a private key
   *    SigningKey.computePublicKey(sign.privateKey, true)
   *    //_result:
   *
   *    // Compute the uncompressed public key
   *    SigningKey.computePublicKey(sign.publicKey, false);
   *    //_result:
   *
   *    // Compute the Compressed a public key
   *    SigningKey.computePublicKey(sign.publicKey, true);
   *    //_result:
   */
  static computePublicKey(t, e) {
    let n = K(t, "key");
    if (n.length === 32) {
      const i = $e.getPublicKey(n, !!e);
      return T(i);
    }
    if (n.length === 64) {
      const i = new Uint8Array(65);
      i[0] = 4, i.set(n, 1), n = i;
    }
    const s = $e.ProjectivePoint.fromHex(n);
    return T(s.toRawBytes(e));
  }
  /**
   *  Returns the public key for the private key which produced the
   *  %%signature%% for the given %%digest%%.
   *
   *  @example:
   *    key = new SigningKey(id("some-secret"))
   *    digest = id("hello world")
   *    sig = key.sign(digest)
   *
   *    // Notice the signer public key...
   *    key.publicKey
   *    //_result:
   *
   *    // ...is equal to the recovered public key
   *    SigningKey.recoverPublicKey(digest, sig)
   *    //_result:
   *
   */
  static recoverPublicKey(t, e) {
    g(kr(t) === 32, "invalid digest length", "digest", t);
    const n = ue.from(e);
    let s = $e.Signature.fromCompact(vt(rt([n.r, n.s])));
    s = s.addRecoveryBit(n.yParity);
    const i = s.recoverPublicKey(vt(t));
    return g(i != null, "invalid signautre for digest", "signature", e), "0x" + i.toHex(!1);
  }
  /**
   *  Returns the point resulting from adding the ellipic curve points
   *  %%p0%% and %%p1%%.
   *
   *  This is not a common function most developers should require, but
   *  can be useful for certain privacy-specific techniques.
   *
   *  For example, it is used by [[HDNodeWallet]] to compute child
   *  addresses from parent public keys and chain codes.
   */
  static addPoints(t, e, n) {
    const s = $e.ProjectivePoint.fromHex(vn.computePublicKey(t).substring(2)), i = $e.ProjectivePoint.fromHex(vn.computePublicKey(e).substring(2));
    return "0x" + s.add(i).toHex(!!n);
  }
};
Te = new WeakMap();
let js = vn;
const ap = BigInt(0), cp = BigInt(36);
function tu(r) {
  r = r.toLowerCase();
  const t = r.substring(2).split(""), e = new Uint8Array(40);
  for (let s = 0; s < 40; s++)
    e[s] = t[s].charCodeAt(0);
  const n = K(q(e));
  for (let s = 0; s < 40; s += 2)
    n[s >> 1] >> 4 >= 8 && (t[s] = t[s].toUpperCase()), (n[s >> 1] & 15) >= 8 && (t[s + 1] = t[s + 1].toUpperCase());
  return "0x" + t.join("");
}
const rc = {};
for (let r = 0; r < 10; r++)
  rc[String(r)] = String(r);
for (let r = 0; r < 26; r++)
  rc[String.fromCharCode(65 + r)] = String(10 + r);
const eu = 15;
function up(r) {
  r = r.toUpperCase(), r = r.substring(4) + r.substring(0, 2) + "00";
  let t = r.split("").map((n) => rc[n]).join("");
  for (; t.length >= eu; ) {
    let n = t.substring(0, eu);
    t = parseInt(n, 10) % 97 + t.substring(n.length);
  }
  let e = String(98 - parseInt(t, 10) % 97);
  for (; e.length < 2; )
    e = "0" + e;
  return e;
}
const lp = function() {
  const r = {};
  for (let t = 0; t < 36; t++) {
    const e = "0123456789abcdefghijklmnopqrstuvwxyz"[t];
    r[e] = BigInt(t);
  }
  return r;
}();
function fp(r) {
  r = r.toLowerCase();
  let t = ap;
  for (let e = 0; e < r.length; e++)
    t = t * cp + lp[r[e]];
  return t;
}
function V(r) {
  if (g(typeof r == "string", "invalid address", "address", r), r.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    r.startsWith("0x") || (r = "0x" + r);
    const t = tu(r);
    return g(!r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || t === r, "bad address checksum", "address", r), t;
  }
  if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    g(r.substring(2, 4) === up(r), "bad icap checksum", "address", r);
    let t = fp(r.substring(4)).toString(16);
    for (; t.length < 40; )
      t = "0" + t;
    return tu("0x" + t);
  }
  g(!1, "invalid address", "address", r);
}
function hp(r) {
  const t = V(r.from);
  let n = I(r.nonce, "tx.nonce").toString(16);
  return n === "0" ? n = "0x" : n.length % 2 ? n = "0x0" + n : n = "0x" + n, V($(q(Js([t, n])), 12));
}
function Cl(r) {
  return r && typeof r.getAddress == "function";
}
async function qo(r, t) {
  const e = await t;
  return (e == null || e === "0x0000000000000000000000000000000000000000") && (b(typeof r != "string", "unconfigured name", "UNCONFIGURED_NAME", { value: r }), g(!1, "invalid AddressLike value; did not resolve to a value address", "target", r)), V(e);
}
function bt(r, t) {
  if (typeof r == "string")
    return r.match(/^0x[0-9a-f]{40}$/i) ? V(r) : (b(t != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" }), qo(r, t.resolveName(r)));
  if (Cl(r))
    return qo(r, r.getAddress());
  if (r && typeof r.then == "function")
    return qo(r, r);
  g(!1, "unsupported addressable value", "target", r);
}
const Ne = {};
function R(r, t) {
  let e = !1;
  return t < 0 && (e = !0, t *= -1), new mt(Ne, `${e ? "" : "u"}int${t}`, r, { signed: e, width: t });
}
function Q(r, t) {
  return new mt(Ne, `bytes${t || ""}`, r, { size: t });
}
const nu = Symbol.for("_ethers_typed");
var Hn;
const Pe = class Pe {
  /**
   *  @_ignore:
   */
  constructor(t, e, n, s) {
    /**
     *  The type, as a Solidity-compatible type.
     */
    m(this, "type");
    /**
     *  The actual value.
     */
    m(this, "value");
    y(this, Hn, void 0);
    /**
     *  @_ignore:
     */
    m(this, "_typedSymbol");
    s == null && (s = null), Oo(Ne, t, "Typed"), B(this, { _typedSymbol: nu, type: e, value: n }), d(this, Hn, s), this.format();
  }
  /**
   *  Format the type as a Human-Readable type.
   */
  format() {
    if (this.type === "array")
      throw new Error("");
    if (this.type === "dynamicArray")
      throw new Error("");
    return this.type === "tuple" ? `tuple(${this.value.map((t) => t.format()).join(",")})` : this.type;
  }
  /**
   *  The default value returned by this type.
   */
  defaultValue() {
    return 0;
  }
  /**
   *  The minimum value for numeric types.
   */
  minValue() {
    return 0;
  }
  /**
   *  The maximum value for numeric types.
   */
  maxValue() {
    return 0;
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedBigInt]].
   */
  isBigInt() {
    return !!this.type.match(/^u?int[0-9]+$/);
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedData]].
   */
  isData() {
    return this.type.startsWith("bytes");
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedString]].
   */
  isString() {
    return this.type === "string";
  }
  /**
   *  Returns the tuple name, if this is a tuple. Throws otherwise.
   */
  get tupleName() {
    if (this.type !== "tuple")
      throw TypeError("not a tuple");
    return l(this, Hn);
  }
  // Returns the length of this type as an array
  // - `null` indicates the length is unforced, it could be dynamic
  // - `-1` indicates the length is dynamic
  // - any other value indicates it is a static array and is its length
  /**
   *  Returns the length of the array type or ``-1`` if it is dynamic.
   *
   *  Throws if the type is not an array.
   */
  get arrayLength() {
    if (this.type !== "array")
      throw TypeError("not an array");
    return l(this, Hn) === !0 ? -1 : l(this, Hn) === !1 ? this.value.length : null;
  }
  /**
   *  Returns a new **Typed** of %%type%% with the %%value%%.
   */
  static from(t, e) {
    return new Pe(Ne, t, e);
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static uint8(t) {
    return R(t, 8);
  }
  /**
   *  Return a new ``uint16`` type for %%v%%.
   */
  static uint16(t) {
    return R(t, 16);
  }
  /**
   *  Return a new ``uint24`` type for %%v%%.
   */
  static uint24(t) {
    return R(t, 24);
  }
  /**
   *  Return a new ``uint32`` type for %%v%%.
   */
  static uint32(t) {
    return R(t, 32);
  }
  /**
   *  Return a new ``uint40`` type for %%v%%.
   */
  static uint40(t) {
    return R(t, 40);
  }
  /**
   *  Return a new ``uint48`` type for %%v%%.
   */
  static uint48(t) {
    return R(t, 48);
  }
  /**
   *  Return a new ``uint56`` type for %%v%%.
   */
  static uint56(t) {
    return R(t, 56);
  }
  /**
   *  Return a new ``uint64`` type for %%v%%.
   */
  static uint64(t) {
    return R(t, 64);
  }
  /**
   *  Return a new ``uint72`` type for %%v%%.
   */
  static uint72(t) {
    return R(t, 72);
  }
  /**
   *  Return a new ``uint80`` type for %%v%%.
   */
  static uint80(t) {
    return R(t, 80);
  }
  /**
   *  Return a new ``uint88`` type for %%v%%.
   */
  static uint88(t) {
    return R(t, 88);
  }
  /**
   *  Return a new ``uint96`` type for %%v%%.
   */
  static uint96(t) {
    return R(t, 96);
  }
  /**
   *  Return a new ``uint104`` type for %%v%%.
   */
  static uint104(t) {
    return R(t, 104);
  }
  /**
   *  Return a new ``uint112`` type for %%v%%.
   */
  static uint112(t) {
    return R(t, 112);
  }
  /**
   *  Return a new ``uint120`` type for %%v%%.
   */
  static uint120(t) {
    return R(t, 120);
  }
  /**
   *  Return a new ``uint128`` type for %%v%%.
   */
  static uint128(t) {
    return R(t, 128);
  }
  /**
   *  Return a new ``uint136`` type for %%v%%.
   */
  static uint136(t) {
    return R(t, 136);
  }
  /**
   *  Return a new ``uint144`` type for %%v%%.
   */
  static uint144(t) {
    return R(t, 144);
  }
  /**
   *  Return a new ``uint152`` type for %%v%%.
   */
  static uint152(t) {
    return R(t, 152);
  }
  /**
   *  Return a new ``uint160`` type for %%v%%.
   */
  static uint160(t) {
    return R(t, 160);
  }
  /**
   *  Return a new ``uint168`` type for %%v%%.
   */
  static uint168(t) {
    return R(t, 168);
  }
  /**
   *  Return a new ``uint176`` type for %%v%%.
   */
  static uint176(t) {
    return R(t, 176);
  }
  /**
   *  Return a new ``uint184`` type for %%v%%.
   */
  static uint184(t) {
    return R(t, 184);
  }
  /**
   *  Return a new ``uint192`` type for %%v%%.
   */
  static uint192(t) {
    return R(t, 192);
  }
  /**
   *  Return a new ``uint200`` type for %%v%%.
   */
  static uint200(t) {
    return R(t, 200);
  }
  /**
   *  Return a new ``uint208`` type for %%v%%.
   */
  static uint208(t) {
    return R(t, 208);
  }
  /**
   *  Return a new ``uint216`` type for %%v%%.
   */
  static uint216(t) {
    return R(t, 216);
  }
  /**
   *  Return a new ``uint224`` type for %%v%%.
   */
  static uint224(t) {
    return R(t, 224);
  }
  /**
   *  Return a new ``uint232`` type for %%v%%.
   */
  static uint232(t) {
    return R(t, 232);
  }
  /**
   *  Return a new ``uint240`` type for %%v%%.
   */
  static uint240(t) {
    return R(t, 240);
  }
  /**
   *  Return a new ``uint248`` type for %%v%%.
   */
  static uint248(t) {
    return R(t, 248);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint256(t) {
    return R(t, 256);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint(t) {
    return R(t, 256);
  }
  /**
   *  Return a new ``int8`` type for %%v%%.
   */
  static int8(t) {
    return R(t, -8);
  }
  /**
   *  Return a new ``int16`` type for %%v%%.
   */
  static int16(t) {
    return R(t, -16);
  }
  /**
   *  Return a new ``int24`` type for %%v%%.
   */
  static int24(t) {
    return R(t, -24);
  }
  /**
   *  Return a new ``int32`` type for %%v%%.
   */
  static int32(t) {
    return R(t, -32);
  }
  /**
   *  Return a new ``int40`` type for %%v%%.
   */
  static int40(t) {
    return R(t, -40);
  }
  /**
   *  Return a new ``int48`` type for %%v%%.
   */
  static int48(t) {
    return R(t, -48);
  }
  /**
   *  Return a new ``int56`` type for %%v%%.
   */
  static int56(t) {
    return R(t, -56);
  }
  /**
   *  Return a new ``int64`` type for %%v%%.
   */
  static int64(t) {
    return R(t, -64);
  }
  /**
   *  Return a new ``int72`` type for %%v%%.
   */
  static int72(t) {
    return R(t, -72);
  }
  /**
   *  Return a new ``int80`` type for %%v%%.
   */
  static int80(t) {
    return R(t, -80);
  }
  /**
   *  Return a new ``int88`` type for %%v%%.
   */
  static int88(t) {
    return R(t, -88);
  }
  /**
   *  Return a new ``int96`` type for %%v%%.
   */
  static int96(t) {
    return R(t, -96);
  }
  /**
   *  Return a new ``int104`` type for %%v%%.
   */
  static int104(t) {
    return R(t, -104);
  }
  /**
   *  Return a new ``int112`` type for %%v%%.
   */
  static int112(t) {
    return R(t, -112);
  }
  /**
   *  Return a new ``int120`` type for %%v%%.
   */
  static int120(t) {
    return R(t, -120);
  }
  /**
   *  Return a new ``int128`` type for %%v%%.
   */
  static int128(t) {
    return R(t, -128);
  }
  /**
   *  Return a new ``int136`` type for %%v%%.
   */
  static int136(t) {
    return R(t, -136);
  }
  /**
   *  Return a new ``int144`` type for %%v%%.
   */
  static int144(t) {
    return R(t, -144);
  }
  /**
   *  Return a new ``int52`` type for %%v%%.
   */
  static int152(t) {
    return R(t, -152);
  }
  /**
   *  Return a new ``int160`` type for %%v%%.
   */
  static int160(t) {
    return R(t, -160);
  }
  /**
   *  Return a new ``int168`` type for %%v%%.
   */
  static int168(t) {
    return R(t, -168);
  }
  /**
   *  Return a new ``int176`` type for %%v%%.
   */
  static int176(t) {
    return R(t, -176);
  }
  /**
   *  Return a new ``int184`` type for %%v%%.
   */
  static int184(t) {
    return R(t, -184);
  }
  /**
   *  Return a new ``int92`` type for %%v%%.
   */
  static int192(t) {
    return R(t, -192);
  }
  /**
   *  Return a new ``int200`` type for %%v%%.
   */
  static int200(t) {
    return R(t, -200);
  }
  /**
   *  Return a new ``int208`` type for %%v%%.
   */
  static int208(t) {
    return R(t, -208);
  }
  /**
   *  Return a new ``int216`` type for %%v%%.
   */
  static int216(t) {
    return R(t, -216);
  }
  /**
   *  Return a new ``int224`` type for %%v%%.
   */
  static int224(t) {
    return R(t, -224);
  }
  /**
   *  Return a new ``int232`` type for %%v%%.
   */
  static int232(t) {
    return R(t, -232);
  }
  /**
   *  Return a new ``int240`` type for %%v%%.
   */
  static int240(t) {
    return R(t, -240);
  }
  /**
   *  Return a new ``int248`` type for %%v%%.
   */
  static int248(t) {
    return R(t, -248);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int256(t) {
    return R(t, -256);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int(t) {
    return R(t, -256);
  }
  /**
   *  Return a new ``bytes1`` type for %%v%%.
   */
  static bytes1(t) {
    return Q(t, 1);
  }
  /**
   *  Return a new ``bytes2`` type for %%v%%.
   */
  static bytes2(t) {
    return Q(t, 2);
  }
  /**
   *  Return a new ``bytes3`` type for %%v%%.
   */
  static bytes3(t) {
    return Q(t, 3);
  }
  /**
   *  Return a new ``bytes4`` type for %%v%%.
   */
  static bytes4(t) {
    return Q(t, 4);
  }
  /**
   *  Return a new ``bytes5`` type for %%v%%.
   */
  static bytes5(t) {
    return Q(t, 5);
  }
  /**
   *  Return a new ``bytes6`` type for %%v%%.
   */
  static bytes6(t) {
    return Q(t, 6);
  }
  /**
   *  Return a new ``bytes7`` type for %%v%%.
   */
  static bytes7(t) {
    return Q(t, 7);
  }
  /**
   *  Return a new ``bytes8`` type for %%v%%.
   */
  static bytes8(t) {
    return Q(t, 8);
  }
  /**
   *  Return a new ``bytes9`` type for %%v%%.
   */
  static bytes9(t) {
    return Q(t, 9);
  }
  /**
   *  Return a new ``bytes10`` type for %%v%%.
   */
  static bytes10(t) {
    return Q(t, 10);
  }
  /**
   *  Return a new ``bytes11`` type for %%v%%.
   */
  static bytes11(t) {
    return Q(t, 11);
  }
  /**
   *  Return a new ``bytes12`` type for %%v%%.
   */
  static bytes12(t) {
    return Q(t, 12);
  }
  /**
   *  Return a new ``bytes13`` type for %%v%%.
   */
  static bytes13(t) {
    return Q(t, 13);
  }
  /**
   *  Return a new ``bytes14`` type for %%v%%.
   */
  static bytes14(t) {
    return Q(t, 14);
  }
  /**
   *  Return a new ``bytes15`` type for %%v%%.
   */
  static bytes15(t) {
    return Q(t, 15);
  }
  /**
   *  Return a new ``bytes16`` type for %%v%%.
   */
  static bytes16(t) {
    return Q(t, 16);
  }
  /**
   *  Return a new ``bytes17`` type for %%v%%.
   */
  static bytes17(t) {
    return Q(t, 17);
  }
  /**
   *  Return a new ``bytes18`` type for %%v%%.
   */
  static bytes18(t) {
    return Q(t, 18);
  }
  /**
   *  Return a new ``bytes19`` type for %%v%%.
   */
  static bytes19(t) {
    return Q(t, 19);
  }
  /**
   *  Return a new ``bytes20`` type for %%v%%.
   */
  static bytes20(t) {
    return Q(t, 20);
  }
  /**
   *  Return a new ``bytes21`` type for %%v%%.
   */
  static bytes21(t) {
    return Q(t, 21);
  }
  /**
   *  Return a new ``bytes22`` type for %%v%%.
   */
  static bytes22(t) {
    return Q(t, 22);
  }
  /**
   *  Return a new ``bytes23`` type for %%v%%.
   */
  static bytes23(t) {
    return Q(t, 23);
  }
  /**
   *  Return a new ``bytes24`` type for %%v%%.
   */
  static bytes24(t) {
    return Q(t, 24);
  }
  /**
   *  Return a new ``bytes25`` type for %%v%%.
   */
  static bytes25(t) {
    return Q(t, 25);
  }
  /**
   *  Return a new ``bytes26`` type for %%v%%.
   */
  static bytes26(t) {
    return Q(t, 26);
  }
  /**
   *  Return a new ``bytes27`` type for %%v%%.
   */
  static bytes27(t) {
    return Q(t, 27);
  }
  /**
   *  Return a new ``bytes28`` type for %%v%%.
   */
  static bytes28(t) {
    return Q(t, 28);
  }
  /**
   *  Return a new ``bytes29`` type for %%v%%.
   */
  static bytes29(t) {
    return Q(t, 29);
  }
  /**
   *  Return a new ``bytes30`` type for %%v%%.
   */
  static bytes30(t) {
    return Q(t, 30);
  }
  /**
   *  Return a new ``bytes31`` type for %%v%%.
   */
  static bytes31(t) {
    return Q(t, 31);
  }
  /**
   *  Return a new ``bytes32`` type for %%v%%.
   */
  static bytes32(t) {
    return Q(t, 32);
  }
  /**
   *  Return a new ``address`` type for %%v%%.
   */
  static address(t) {
    return new Pe(Ne, "address", t);
  }
  /**
   *  Return a new ``bool`` type for %%v%%.
   */
  static bool(t) {
    return new Pe(Ne, "bool", !!t);
  }
  /**
   *  Return a new ``bytes`` type for %%v%%.
   */
  static bytes(t) {
    return new Pe(Ne, "bytes", t);
  }
  /**
   *  Return a new ``string`` type for %%v%%.
   */
  static string(t) {
    return new Pe(Ne, "string", t);
  }
  /**
   *  Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.
   */
  static array(t, e) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``tuple`` type for %%v%%, with the optional %%name%%.
   */
  static tuple(t, e) {
    throw new Error("not implemented yet");
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static overrides(t) {
    return new Pe(Ne, "overrides", Object.assign({}, t));
  }
  /**
   *  Returns true only if %%value%% is a [[Typed]] instance.
   */
  static isTyped(t) {
    return t && typeof t == "object" && "_typedSymbol" in t && t._typedSymbol === nu;
  }
  /**
   *  If the value is a [[Typed]] instance, validates the underlying value
   *  and returns it, otherwise returns value directly.
   *
   *  This is useful for functions that with to accept either a [[Typed]]
   *  object or values.
   */
  static dereference(t, e) {
    if (Pe.isTyped(t)) {
      if (t.type !== e)
        throw new Error(`invalid type: expecetd ${e}, got ${t.type}`);
      return t.value;
    }
    return t;
  }
};
Hn = new WeakMap();
let mt = Pe;
class dp extends ze {
  constructor(t) {
    super("address", "address", t, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(t, e) {
    let n = mt.dereference(e, "string");
    try {
      n = V(n);
    } catch (s) {
      return this._throwError(s.message, e);
    }
    return t.writeValue(n);
  }
  decode(t) {
    return V(Nn(t.readValue(), 20));
  }
}
class pp extends ze {
  constructor(e) {
    super(e.name, e.type, "_", e.dynamic);
    m(this, "coder");
    this.coder = e;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(e, n) {
    return this.coder.encode(e, n);
  }
  decode(e) {
    return this.coder.decode(e);
  }
}
function vl(r, t, e) {
  let n = [];
  if (Array.isArray(e))
    n = e;
  else if (e && typeof e == "object") {
    let c = {};
    n = t.map((u) => {
      const f = u.localName;
      return b(f, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder: u }, value: e }), b(!c[f], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder: u }, value: e }), c[f] = !0, e[f];
    });
  } else
    g(!1, "invalid tuple value", "tuple", e);
  g(t.length === n.length, "types/value length mismatch", "tuple", e);
  let s = new pa(), i = new pa(), o = [];
  t.forEach((c, u) => {
    let f = n[u];
    if (c.dynamic) {
      let h = i.length;
      c.encode(i, f);
      let p = s.writeUpdatableValue();
      o.push((w) => {
        p(w + h);
      });
    } else
      c.encode(s, f);
  }), o.forEach((c) => {
    c(s.length);
  });
  let a = r.appendWriter(s);
  return a += r.appendWriter(i), a;
}
function Ol(r, t) {
  let e = [], n = [], s = r.subReader(0);
  return t.forEach((i) => {
    let o = null;
    if (i.dynamic) {
      let a = r.readIndex(), c = s.subReader(a);
      try {
        o = i.decode(c);
      } catch (u) {
        if (Ot(u, "BUFFER_OVERRUN"))
          throw u;
        o = u, o.baseType = i.name, o.name = i.localName, o.type = i.type;
      }
    } else
      try {
        o = i.decode(r);
      } catch (a) {
        if (Ot(a, "BUFFER_OVERRUN"))
          throw a;
        o = a, o.baseType = i.name, o.name = i.localName, o.type = i.type;
      }
    if (o == null)
      throw new Error("investigate");
    e.push(o), n.push(i.localName || null);
  }), eo.fromItems(e, n);
}
class gp extends ze {
  constructor(e, n, s) {
    const i = e.type + "[" + (n >= 0 ? n : "") + "]", o = n === -1 || e.dynamic;
    super("array", i, s, o);
    m(this, "coder");
    m(this, "length");
    B(this, { coder: e, length: n });
  }
  defaultValue() {
    const e = this.coder.defaultValue(), n = [];
    for (let s = 0; s < this.length; s++)
      n.push(e);
    return n;
  }
  encode(e, n) {
    const s = mt.dereference(n, "array");
    Array.isArray(s) || this._throwError("expected array value", s);
    let i = this.length;
    i === -1 && (i = s.length, e.writeValue(s.length)), Zu(s.length, i, "coder array" + (this.localName ? " " + this.localName : ""));
    let o = [];
    for (let a = 0; a < s.length; a++)
      o.push(this.coder);
    return vl(e, o, s);
  }
  decode(e) {
    let n = this.length;
    n === -1 && (n = e.readIndex(), b(n * At <= e.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: e.bytes, offset: n * At, length: e.dataLength }));
    let s = [];
    for (let i = 0; i < n; i++)
      s.push(new pp(this.coder));
    return Ol(e, s);
  }
}
class mp extends ze {
  constructor(t) {
    super("bool", "bool", t, !1);
  }
  defaultValue() {
    return !1;
  }
  encode(t, e) {
    const n = mt.dereference(e, "bool");
    return t.writeValue(n ? 1 : 0);
  }
  decode(t) {
    return !!t.readValue();
  }
}
class Tl extends ze {
  constructor(t, e) {
    super(t, t, e, !0);
  }
  defaultValue() {
    return "0x";
  }
  encode(t, e) {
    e = vt(e);
    let n = t.writeValue(e.length);
    return n += t.writeBytes(e), n;
  }
  decode(t) {
    return t.readBytes(t.readIndex(), !0);
  }
}
class yp extends Tl {
  constructor(t) {
    super("bytes", t);
  }
  decode(t) {
    return T(super.decode(t));
  }
}
class wp extends ze {
  constructor(e, n) {
    let s = "bytes" + String(e);
    super(s, s, n, !1);
    m(this, "size");
    B(this, { size: e }, { size: "number" });
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(e, n) {
    let s = vt(mt.dereference(n, this.type));
    return s.length !== this.size && this._throwError("incorrect data length", n), e.writeBytes(s);
  }
  decode(e) {
    return T(e.readBytes(this.size));
  }
}
const Ap = new Uint8Array([]);
class bp extends ze {
  constructor(t) {
    super("null", "", t, !1);
  }
  defaultValue() {
    return null;
  }
  encode(t, e) {
    return e != null && this._throwError("not null", e), t.writeBytes(Ap);
  }
  decode(t) {
    return t.readBytes(0), null;
  }
}
const Ep = BigInt(0), Np = BigInt(1), Pp = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class xp extends ze {
  constructor(e, n, s) {
    const i = (n ? "int" : "uint") + e * 8;
    super(i, i, s, !1);
    m(this, "size");
    m(this, "signed");
    B(this, { size: e, signed: n }, { size: "number", signed: "boolean" });
  }
  defaultValue() {
    return 0;
  }
  encode(e, n) {
    let s = I(mt.dereference(n, this.type)), i = Is(Pp, At * 8);
    if (this.signed) {
      let o = Is(i, this.size * 8 - 1);
      (s > o || s < -(o + Np)) && this._throwError("value out-of-bounds", n), s = Xu(s, 8 * At);
    } else
      (s < Ep || s > Is(i, this.size * 8)) && this._throwError("value out-of-bounds", n);
    return e.writeValue(s);
  }
  decode(e) {
    let n = Is(e.readValue(), this.size * 8);
    return this.signed && (n = Uh(n, this.size * 8)), n;
  }
}
class kp extends Tl {
  constructor(t) {
    super("string", t);
  }
  defaultValue() {
    return "";
  }
  encode(t, e) {
    return super.encode(t, Ve(mt.dereference(e, "string")));
  }
  decode(t) {
    return Ks(super.decode(t));
  }
}
class Di extends ze {
  constructor(e, n) {
    let s = !1;
    const i = [];
    e.forEach((a) => {
      a.dynamic && (s = !0), i.push(a.type);
    });
    const o = "tuple(" + i.join(",") + ")";
    super("tuple", o, n, s);
    m(this, "coders");
    B(this, { coders: Object.freeze(e.slice()) });
  }
  defaultValue() {
    const e = [];
    this.coders.forEach((s) => {
      e.push(s.defaultValue());
    });
    const n = this.coders.reduce((s, i) => {
      const o = i.localName;
      return o && (s[o] || (s[o] = 0), s[o]++), s;
    }, {});
    return this.coders.forEach((s, i) => {
      let o = s.localName;
      !o || n[o] !== 1 || (o === "length" && (o = "_length"), e[o] == null && (e[o] = e[i]));
    }), Object.freeze(e);
  }
  encode(e, n) {
    const s = mt.dereference(n, "tuple");
    return vl(e, this.coders, s);
  }
  decode(e) {
    return Ol(e, this.coders);
  }
}
function ir(r) {
  return q(Ve(r));
}
var Rp = "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";
const ru = /* @__PURE__ */ new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]), su = 4;
function Cp(r) {
  let t = 0;
  function e() {
    return r[t++] << 8 | r[t++];
  }
  let n = e(), s = 1, i = [0, 1];
  for (let U = 1; U < n; U++)
    i.push(s += e());
  let o = e(), a = t;
  t += o;
  let c = 0, u = 0;
  function f() {
    return c == 0 && (u = u << 8 | r[t++], c = 8), u >> --c & 1;
  }
  const h = 31, p = 2 ** h, w = p >>> 1, E = w >> 1, A = p - 1;
  let N = 0;
  for (let U = 0; U < h; U++)
    N = N << 1 | f();
  let P = [], C = 0, S = p;
  for (; ; ) {
    let U = Math.floor(((N - C + 1) * s - 1) / S), O = 0, D = n;
    for (; D - O > 1; ) {
      let z = O + D >>> 1;
      U < i[z] ? D = z : O = z;
    }
    if (O == 0)
      break;
    P.push(O);
    let F = C + Math.floor(S * i[O] / s), nt = C + Math.floor(S * i[O + 1] / s) - 1;
    for (; !((F ^ nt) & w); )
      N = N << 1 & A | f(), F = F << 1 & A, nt = nt << 1 & A | 1;
    for (; F & ~nt & E; )
      N = N & w | N << 1 & A >>> 1 | f(), F = F << 1 ^ w, nt = (nt ^ w) << 1 | w | 1;
    C = F, S = 1 + nt - F;
  }
  let G = n - 4;
  return P.map((U) => {
    switch (U - G) {
      case 3:
        return G + 65792 + (r[a++] << 16 | r[a++] << 8 | r[a++]);
      case 2:
        return G + 256 + (r[a++] << 8 | r[a++]);
      case 1:
        return G + r[a++];
      default:
        return U - 1;
    }
  });
}
function vp(r) {
  let t = 0;
  return () => r[t++];
}
function Il(r) {
  return vp(Cp(Op(r)));
}
function Op(r) {
  let t = [];
  [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((s, i) => t[s.charCodeAt(0)] = i);
  let e = r.length, n = new Uint8Array(6 * e >> 3);
  for (let s = 0, i = 0, o = 0, a = 0; s < e; s++)
    a = a << 6 | t[r.charCodeAt(s)], o += 6, o >= 8 && (n[i++] = a >> (o -= 8));
  return n;
}
function Tp(r) {
  return r & 1 ? ~r >> 1 : r >> 1;
}
function Ip(r, t) {
  let e = Array(r);
  for (let n = 0, s = 0; n < r; n++)
    e[n] = s += Tp(t());
  return e;
}
function Ws(r, t = 0) {
  let e = [];
  for (; ; ) {
    let n = r(), s = r();
    if (!s)
      break;
    t += n;
    for (let i = 0; i < s; i++)
      e.push(t + i);
    t += s + 1;
  }
  return e;
}
function Bl(r) {
  return Zs(() => {
    let t = Ws(r);
    if (t.length)
      return t;
  });
}
function Sl(r) {
  let t = [];
  for (; ; ) {
    let e = r();
    if (e == 0)
      break;
    t.push(Bp(e, r));
  }
  for (; ; ) {
    let e = r() - 1;
    if (e < 0)
      break;
    t.push(Sp(e, r));
  }
  return t.flat();
}
function Zs(r) {
  let t = [];
  for (; ; ) {
    let e = r(t.length);
    if (!e)
      break;
    t.push(e);
  }
  return t;
}
function Ul(r, t, e) {
  let n = Array(r).fill().map(() => []);
  for (let s = 0; s < t; s++)
    Ip(r, e).forEach((i, o) => n[o].push(i));
  return n;
}
function Bp(r, t) {
  let e = 1 + t(), n = t(), s = Zs(t);
  return Ul(s.length, 1 + r, t).flatMap((o, a) => {
    let [c, ...u] = o;
    return Array(s[a]).fill().map((f, h) => {
      let p = h * n;
      return [c + h * e, u.map((w) => w + p)];
    });
  });
}
function Sp(r, t) {
  let e = 1 + t();
  return Ul(e, 1 + r, t).map((s) => [s[0], s.slice(1)]);
}
function Up(r) {
  let t = [], e = Ws(r);
  return s(n([]), []), t;
  function n(i) {
    let o = r(), a = Zs(() => {
      let c = Ws(r).map((u) => e[u]);
      if (c.length)
        return n(c);
    });
    return { S: o, B: a, Q: i };
  }
  function s({ S: i, B: o }, a, c) {
    if (!(i & 4 && c === a[a.length - 1])) {
      i & 2 && (c = a[a.length - 1]), i & 1 && t.push(a);
      for (let u of o)
        for (let f of u.Q)
          s(u, [...a, f], c);
    }
  }
}
function Dp(r) {
  return r.toString(16).toUpperCase().padStart(2, "0");
}
function Dl(r) {
  return `{${Dp(r)}}`;
}
function Fp(r) {
  let t = [];
  for (let e = 0, n = r.length; e < n; ) {
    let s = r.codePointAt(e);
    e += s < 65536 ? 1 : 2, t.push(s);
  }
  return t;
}
function bs(r) {
  let e = r.length;
  if (e < 4096)
    return String.fromCodePoint(...r);
  let n = [];
  for (let s = 0; s < e; )
    n.push(String.fromCodePoint(...r.slice(s, s += 4096)));
  return n.join("");
}
function Lp(r, t) {
  let e = r.length, n = e - t.length;
  for (let s = 0; n == 0 && s < e; s++)
    n = r[s] - t[s];
  return n;
}
var Mp = "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";
const Ys = 44032, ro = 4352, so = 4449, io = 4519, Fl = 19, Ll = 21, Es = 28, oo = Ll * Es, _p = Fl * oo, Gp = Ys + _p, Hp = ro + Fl, Qp = so + Ll, Vp = io + Es;
function Ss(r) {
  return r >> 24 & 255;
}
function Ml(r) {
  return r & 16777215;
}
let Ea, iu, Na, Vi;
function Kp() {
  let r = Il(Mp);
  Ea = new Map(Bl(r).flatMap((t, e) => t.map((n) => [n, e + 1 << 24]))), iu = new Set(Ws(r)), Na = /* @__PURE__ */ new Map(), Vi = /* @__PURE__ */ new Map();
  for (let [t, e] of Sl(r)) {
    if (!iu.has(t) && e.length == 2) {
      let [n, s] = e, i = Vi.get(n);
      i || (i = /* @__PURE__ */ new Map(), Vi.set(n, i)), i.set(s, t);
    }
    Na.set(t, e.reverse());
  }
}
function _l(r) {
  return r >= Ys && r < Gp;
}
function Jp(r, t) {
  if (r >= ro && r < Hp && t >= so && t < Qp)
    return Ys + (r - ro) * oo + (t - so) * Es;
  if (_l(r) && t > io && t < Vp && (r - Ys) % Es == 0)
    return r + (t - io);
  {
    let e = Vi.get(r);
    return e && (e = e.get(t), e) ? e : -1;
  }
}
function Gl(r) {
  Ea || Kp();
  let t = [], e = [], n = !1;
  function s(i) {
    let o = Ea.get(i);
    o && (n = !0, i |= o), t.push(i);
  }
  for (let i of r)
    for (; ; ) {
      if (i < 128)
        t.push(i);
      else if (_l(i)) {
        let o = i - Ys, a = o / oo | 0, c = o % oo / Es | 0, u = o % Es;
        s(ro + a), s(so + c), u > 0 && s(io + u);
      } else {
        let o = Na.get(i);
        o ? e.push(...o) : s(i);
      }
      if (!e.length)
        break;
      i = e.pop();
    }
  if (n && t.length > 1) {
    let i = Ss(t[0]);
    for (let o = 1; o < t.length; o++) {
      let a = Ss(t[o]);
      if (a == 0 || i <= a) {
        i = a;
        continue;
      }
      let c = o - 1;
      for (; ; ) {
        let u = t[c + 1];
        if (t[c + 1] = t[c], t[c] = u, !c || (i = Ss(t[--c]), i <= a))
          break;
      }
      i = Ss(t[o]);
    }
  }
  return t;
}
function zp(r) {
  let t = [], e = [], n = -1, s = 0;
  for (let i of r) {
    let o = Ss(i), a = Ml(i);
    if (n == -1)
      o == 0 ? n = a : t.push(a);
    else if (s > 0 && s >= o)
      o == 0 ? (t.push(n, ...e), e.length = 0, n = a) : e.push(a), s = o;
    else {
      let c = Jp(n, a);
      c >= 0 ? n = c : s == 0 && o == 0 ? (t.push(n), n = a) : (e.push(a), s = o);
    }
  }
  return n >= 0 && t.push(n, ...e), t;
}
function Hl(r) {
  return Gl(r).map(Ml);
}
function jp(r) {
  return zp(Gl(r));
}
const ou = 45, Ql = ".", Vl = 65039, Kl = 1, Er = (r) => Array.from(r);
function qs(r, t) {
  return r.P.has(t) || r.Q.has(t);
}
class Wp extends Array {
  get is_emoji() {
    return !0;
  }
  // free tagging system
}
let Pa, Jl, In, xa, zl, Rr, Xo, mr, jl, au, ka;
function sc() {
  if (Pa)
    return;
  let r = Il(Rp);
  const t = () => Ws(r), e = () => new Set(t());
  Pa = new Map(Sl(r)), Jl = e(), In = t(), xa = new Set(t().map((f) => In[f])), In = new Set(In), zl = e(), e();
  let n = Bl(r), s = r();
  const i = () => new Set(t().flatMap((f) => n[f]).concat(t()));
  Rr = Zs((f) => {
    let h = Zs(r).map((p) => p + 96);
    if (h.length) {
      let p = f >= s;
      h[0] -= 32, h = bs(h), p && (h = `Restricted[${h}]`);
      let w = i(), E = i(), A = !r();
      return { N: h, P: w, Q: E, M: A, R: p };
    }
  }), Xo = e(), mr = /* @__PURE__ */ new Map();
  let o = t().concat(Er(Xo)).sort((f, h) => f - h);
  o.forEach((f, h) => {
    let p = r(), w = o[h] = p ? o[h - p] : { V: [], M: /* @__PURE__ */ new Map() };
    w.V.push(f), Xo.has(f) || mr.set(f, w);
  });
  for (let { V: f, M: h } of new Set(mr.values())) {
    let p = [];
    for (let E of f) {
      let A = Rr.filter((P) => qs(P, E)), N = p.find(({ G: P }) => A.some((C) => P.has(C)));
      N || (N = { G: /* @__PURE__ */ new Set(), V: [] }, p.push(N)), N.V.push(E), A.forEach((P) => N.G.add(P));
    }
    let w = p.flatMap((E) => Er(E.G));
    for (let { G: E, V: A } of p) {
      let N = new Set(w.filter((P) => !E.has(P)));
      for (let P of A)
        h.set(P, N);
    }
  }
  let a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  const u = (f) => a.has(f) ? c.add(f) : a.add(f);
  for (let f of Rr) {
    for (let h of f.P)
      u(h);
    for (let h of f.Q)
      u(h);
  }
  for (let f of a)
    !mr.has(f) && !c.has(f) && mr.set(f, Kl);
  jl = new Set(Er(a).concat(Er(Hl(a)))), au = Up(r).map((f) => Wp.from(f)).sort(Lp), ka = /* @__PURE__ */ new Map();
  for (let f of au) {
    let h = [ka];
    for (let p of f) {
      let w = h.map((E) => {
        let A = E.get(p);
        return A || (A = /* @__PURE__ */ new Map(), E.set(p, A)), A;
      });
      p === Vl ? h.push(...w) : h = w;
    }
    for (let p of h)
      p.V = f;
  }
}
function ic(r) {
  return (Wl(r) ? "" : `${oc(Do([r]))} `) + Dl(r);
}
function oc(r) {
  return `"${r}"‎`;
}
function Zp(r) {
  if (r.length >= 4 && r[2] == ou && r[3] == ou)
    throw new Error(`invalid label extension: "${bs(r.slice(0, 4))}"`);
}
function Yp(r) {
  for (let e = r.lastIndexOf(95); e > 0; )
    if (r[--e] !== 95)
      throw new Error("underscore allowed only at start");
}
function qp(r) {
  let t = r[0], e = ru.get(t);
  if (e)
    throw _s(`leading ${e}`);
  let n = r.length, s = -1;
  for (let i = 1; i < n; i++) {
    t = r[i];
    let o = ru.get(t);
    if (o) {
      if (s == i)
        throw _s(`${e} + ${o}`);
      s = i + 1, e = o;
    }
  }
  if (s == n)
    throw _s(`trailing ${e}`);
}
function Do(r, t = Dl) {
  let e = [];
  Xp(r[0]) && e.push("◌");
  let n = 0, s = r.length;
  for (let i = 0; i < s; i++) {
    let o = r[i];
    Wl(o) && (e.push(bs(r.slice(n, i))), e.push(t(o)), n = i + 1);
  }
  return e.push(bs(r.slice(n, s))), e.join("");
}
function Xp(r) {
  return sc(), In.has(r);
}
function Wl(r) {
  return sc(), zl.has(r);
}
function $p(r) {
  return rg(tg(r, jp, og));
}
function tg(r, t, e) {
  if (!r)
    return [];
  sc();
  let n = 0;
  return r.split(Ql).map((s) => {
    let i = Fp(s), o = {
      input: i,
      offset: n
      // codepoint, not substring!
    };
    n += i.length + 1;
    try {
      let a = o.tokens = ig(i, t, e), c = a.length, u;
      if (!c)
        throw new Error("empty label");
      let f = o.output = a.flat();
      if (Yp(f), !(o.emoji = c > 1 || a[0].is_emoji) && f.every((p) => p < 128))
        Zp(f), u = "ASCII";
      else {
        let p = a.flatMap((w) => w.is_emoji ? [] : w);
        if (!p.length)
          u = "Emoji";
        else {
          if (In.has(f[0]))
            throw _s("leading combining mark");
          for (let A = 1; A < c; A++) {
            let N = a[A];
            if (!N.is_emoji && In.has(N[0]))
              throw _s(`emoji + combining mark: "${bs(a[A - 1])} + ${Do([N[0]])}"`);
          }
          qp(f);
          let w = Er(new Set(p)), [E] = ng(w);
          sg(E, p), eg(E, w), u = E.N;
        }
      }
      o.type = u;
    } catch (a) {
      o.error = a;
    }
    return o;
  });
}
function eg(r, t) {
  let e, n = [];
  for (let s of t) {
    let i = mr.get(s);
    if (i === Kl)
      return;
    if (i) {
      let o = i.M.get(s);
      if (e = e ? e.filter((a) => o.has(a)) : Er(o), !e.length)
        return;
    } else
      n.push(s);
  }
  if (e) {
    for (let s of e)
      if (n.every((i) => qs(s, i)))
        throw new Error(`whole-script confusable: ${r.N}/${s.N}`);
  }
}
function ng(r) {
  let t = Rr;
  for (let e of r) {
    let n = t.filter((s) => qs(s, e));
    if (!n.length)
      throw Rr.some((s) => qs(s, e)) ? Yl(t[0], e) : Zl(e);
    if (t = n, n.length == 1)
      break;
  }
  return t;
}
function rg(r) {
  return r.map(({ input: t, error: e, output: n }) => {
    if (e) {
      let s = e.message;
      throw new Error(r.length == 1 ? s : `Invalid label ${oc(Do(t))}: ${s}`);
    }
    return bs(n);
  }).join(Ql);
}
function Zl(r) {
  return new Error(`disallowed character: ${ic(r)}`);
}
function Yl(r, t) {
  let e = ic(t), n = Rr.find((s) => s.P.has(t));
  return n && (e = `${n.N} ${e}`), new Error(`illegal mixture: ${r.N} + ${e}`);
}
function _s(r) {
  return new Error(`illegal placement: ${r}`);
}
function sg(r, t) {
  for (let e of t)
    if (!qs(r, e))
      throw Yl(r, e);
  if (r.M) {
    let e = Hl(t);
    for (let n = 1, s = e.length; n < s; n++)
      if (xa.has(e[n])) {
        let i = n + 1;
        for (let o; i < s && xa.has(o = e[i]); i++)
          for (let a = n; a < i; a++)
            if (e[a] == o)
              throw new Error(`duplicate non-spacing marks: ${ic(o)}`);
        if (i - n > su)
          throw new Error(`excessive non-spacing marks: ${oc(Do(e.slice(n - 1, i)))} (${i - n}/${su})`);
        n = i;
      }
  }
}
function ig(r, t, e) {
  let n = [], s = [];
  for (r = r.slice().reverse(); r.length; ) {
    let i = ag(r);
    if (i)
      s.length && (n.push(t(s)), s = []), n.push(e(i));
    else {
      let o = r.pop();
      if (jl.has(o))
        s.push(o);
      else {
        let a = Pa.get(o);
        if (a)
          s.push(...a);
        else if (!Jl.has(o))
          throw Zl(o);
      }
    }
  }
  return s.length && n.push(t(s)), n;
}
function og(r) {
  return r.filter((t) => t != Vl);
}
function ag(r, t) {
  let e = ka, n, s = r.length;
  for (; s && (e = e.get(r[--s]), !!e); ) {
    let { V: i } = e;
    i && (n = i, t && t.push(...r.slice(s).reverse()), r.length = s);
  }
  return n;
}
const ql = new Uint8Array(32);
ql.fill(0);
function cu(r) {
  return g(r.length !== 0, "invalid ENS name; empty component", "comp", r), r;
}
function Xl(r) {
  const t = Ve(cg(r)), e = [];
  if (r.length === 0)
    return e;
  let n = 0;
  for (let s = 0; s < t.length; s++)
    t[s] === 46 && (e.push(cu(t.slice(n, s))), n = s + 1);
  return g(n < t.length, "invalid ENS name; empty component", "name", r), e.push(cu(t.slice(n))), e;
}
function cg(r) {
  try {
    if (r.length === 0)
      throw new Error("empty label");
    return $p(r);
  } catch (t) {
    g(!1, `invalid ENS name (${t.message})`, "name", r);
  }
}
function Ra(r) {
  g(typeof r == "string", "invalid ENS name; not a string", "name", r), g(r.length, "invalid ENS name (empty label)", "name", r);
  let t = ql;
  const e = Xl(r);
  for (; e.length; )
    t = q(rt([t, q(e.pop())]));
  return T(t);
}
function ug(r) {
  return T(rt(Xl(r).map((t) => {
    if (t.length > 63)
      throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
    const e = new Uint8Array(t.length + 1);
    return e.set(t, 1), e[0] = e.length - 1, e;
  }))) + "00";
}
function $o(r, t) {
  return {
    address: V(r),
    storageKeys: t.map((e, n) => (g(X(e, 32), "invalid slot", `storageKeys[${n}]`, e), e.toLowerCase()))
  };
}
function xn(r) {
  if (Array.isArray(r))
    return r.map((e, n) => Array.isArray(e) ? (g(e.length === 2, "invalid slot set", `value[${n}]`, e), $o(e[0], e[1])) : (g(e != null && typeof e == "object", "invalid address-slot set", "value", r), $o(e.address, e.storageKeys)));
  g(r != null && typeof r == "object", "invalid access list", "value", r);
  const t = Object.keys(r).map((e) => {
    const n = r[e].reduce((s, i) => (s[i] = !0, s), {});
    return $o(e, Object.keys(n).sort());
  });
  return t.sort((e, n) => e.address.localeCompare(n.address)), t;
}
function lg(r) {
  let t;
  return typeof r == "string" ? t = js.computePublicKey(r, !1) : t = r.publicKey, V(q("0x" + t.substring(4)).substring(26));
}
function fg(r, t) {
  return lg(js.recoverPublicKey(r, t));
}
const Rt = BigInt(0), hg = BigInt(2), dg = BigInt(27), pg = BigInt(28), gg = BigInt(35), mg = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function ac(r) {
  return r === "0x" ? null : V(r);
}
function $l(r, t) {
  try {
    return xn(r);
  } catch (e) {
    g(!1, e.message, t, r);
  }
}
function Fo(r, t) {
  return r === "0x" ? 0 : L(r, t);
}
function wt(r, t) {
  if (r === "0x")
    return Rt;
  const e = I(r, t);
  return g(e <= mg, "value exceeds uint size", t, e), e;
}
function ut(r, t) {
  const e = I(r, "value"), n = Qt(e);
  return g(n.length <= 32, "value too large", `tx.${t}`, e), n;
}
function tf(r) {
  return xn(r).map((t) => [t.address, t.storageKeys]);
}
function yg(r) {
  const t = Za(r);
  g(Array.isArray(t) && (t.length === 9 || t.length === 6), "invalid field count for legacy transaction", "data", r);
  const e = {
    type: 0,
    nonce: Fo(t[0], "nonce"),
    gasPrice: wt(t[1], "gasPrice"),
    gasLimit: wt(t[2], "gasLimit"),
    to: ac(t[3]),
    value: wt(t[4], "value"),
    data: T(t[5]),
    chainId: Rt
  };
  if (t.length === 6)
    return e;
  const n = wt(t[6], "v"), s = wt(t[7], "r"), i = wt(t[8], "s");
  if (s === Rt && i === Rt)
    e.chainId = n;
  else {
    let o = (n - gg) / hg;
    o < Rt && (o = Rt), e.chainId = o, g(o !== Rt || n === dg || n === pg, "non-canonical legacy v", "v", t[6]), e.signature = ue.from({
      r: sr(t[7], 32),
      s: sr(t[8], 32),
      v: n
    }), e.hash = q(r);
  }
  return e;
}
function uu(r, t) {
  const e = [
    ut(r.nonce || 0, "nonce"),
    ut(r.gasPrice || 0, "gasPrice"),
    ut(r.gasLimit || 0, "gasLimit"),
    r.to != null ? V(r.to) : "0x",
    ut(r.value || 0, "value"),
    r.data || "0x"
  ];
  let n = Rt;
  if (r.chainId != Rt)
    n = I(r.chainId, "tx.chainId"), g(!t || t.networkV == null || t.legacyChainId === n, "tx.chainId/sig.v mismatch", "sig", t);
  else if (r.signature) {
    const i = r.signature.legacyChainId;
    i != null && (n = i);
  }
  if (!t)
    return n !== Rt && (e.push(Qt(n)), e.push("0x"), e.push("0x")), Js(e);
  let s = BigInt(27 + t.yParity);
  return n !== Rt ? s = ue.getChainIdV(n, t.v) : BigInt(t.v) !== s && g(!1, "tx.chainId/sig.v mismatch", "sig", t), e.push(Qt(s)), e.push(Qt(t.r)), e.push(Qt(t.s)), Js(e);
}
function ef(r, t) {
  let e;
  try {
    if (e = Fo(t[0], "yParity"), e !== 0 && e !== 1)
      throw new Error("bad yParity");
  } catch {
    g(!1, "invalid yParity", "yParity", t[0]);
  }
  const n = sr(t[1], 32), s = sr(t[2], 32), i = ue.from({ r: n, s, yParity: e });
  r.signature = i;
}
function wg(r) {
  const t = Za(K(r).slice(1));
  g(Array.isArray(t) && (t.length === 9 || t.length === 12), "invalid field count for transaction type: 2", "data", T(r));
  const e = wt(t[2], "maxPriorityFeePerGas"), n = wt(t[3], "maxFeePerGas"), s = {
    type: 2,
    chainId: wt(t[0], "chainId"),
    nonce: Fo(t[1], "nonce"),
    maxPriorityFeePerGas: e,
    maxFeePerGas: n,
    gasPrice: null,
    gasLimit: wt(t[4], "gasLimit"),
    to: ac(t[5]),
    value: wt(t[6], "value"),
    data: T(t[7]),
    accessList: $l(t[8], "accessList")
  };
  return t.length === 9 || (s.hash = q(r), ef(s, t.slice(9))), s;
}
function lu(r, t) {
  const e = [
    ut(r.chainId || 0, "chainId"),
    ut(r.nonce || 0, "nonce"),
    ut(r.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    ut(r.maxFeePerGas || 0, "maxFeePerGas"),
    ut(r.gasLimit || 0, "gasLimit"),
    r.to != null ? V(r.to) : "0x",
    ut(r.value || 0, "value"),
    r.data || "0x",
    tf(r.accessList || [])
  ];
  return t && (e.push(ut(t.yParity, "yParity")), e.push(Qt(t.r)), e.push(Qt(t.s))), rt(["0x02", Js(e)]);
}
function Ag(r) {
  const t = Za(K(r).slice(1));
  g(Array.isArray(t) && (t.length === 8 || t.length === 11), "invalid field count for transaction type: 1", "data", T(r));
  const e = {
    type: 1,
    chainId: wt(t[0], "chainId"),
    nonce: Fo(t[1], "nonce"),
    gasPrice: wt(t[2], "gasPrice"),
    gasLimit: wt(t[3], "gasLimit"),
    to: ac(t[4]),
    value: wt(t[5], "value"),
    data: T(t[6]),
    accessList: $l(t[7], "accessList")
  };
  return t.length === 8 || (e.hash = q(r), ef(e, t.slice(8))), e;
}
function fu(r, t) {
  const e = [
    ut(r.chainId || 0, "chainId"),
    ut(r.nonce || 0, "nonce"),
    ut(r.gasPrice || 0, "gasPrice"),
    ut(r.gasLimit || 0, "gasLimit"),
    r.to != null ? V(r.to) : "0x",
    ut(r.value || 0, "value"),
    r.data || "0x",
    tf(r.accessList || [])
  ];
  return t && (e.push(ut(t.yParity, "recoveryParam")), e.push(Qt(t.r)), e.push(Qt(t.s))), rt(["0x01", Js(e)]);
}
var Ie, Lr, Mr, _r, Gr, Hr, Qr, Vr, Kr, Jr, zr, jr;
const tn = class tn {
  /**
   *  Creates a new Transaction with default values.
   */
  constructor() {
    y(this, Ie, void 0);
    y(this, Lr, void 0);
    y(this, Mr, void 0);
    y(this, _r, void 0);
    y(this, Gr, void 0);
    y(this, Hr, void 0);
    y(this, Qr, void 0);
    y(this, Vr, void 0);
    y(this, Kr, void 0);
    y(this, Jr, void 0);
    y(this, zr, void 0);
    y(this, jr, void 0);
    d(this, Ie, null), d(this, Lr, null), d(this, _r, 0), d(this, Gr, BigInt(0)), d(this, Hr, null), d(this, Qr, null), d(this, Vr, null), d(this, Mr, "0x"), d(this, Kr, BigInt(0)), d(this, Jr, BigInt(0)), d(this, zr, null), d(this, jr, null);
  }
  /**
   *  The transaction type.
   *
   *  If null, the type will be automatically inferred based on
   *  explicit properties.
   */
  get type() {
    return l(this, Ie);
  }
  set type(t) {
    switch (t) {
      case null:
        d(this, Ie, null);
        break;
      case 0:
      case "legacy":
        d(this, Ie, 0);
        break;
      case 1:
      case "berlin":
      case "eip-2930":
        d(this, Ie, 1);
        break;
      case 2:
      case "london":
      case "eip-1559":
        d(this, Ie, 2);
        break;
      default:
        g(!1, "unsupported transaction type", "type", t);
    }
  }
  /**
   *  The name of the transaction type.
   */
  get typeName() {
    switch (this.type) {
      case 0:
        return "legacy";
      case 1:
        return "eip-2930";
      case 2:
        return "eip-1559";
    }
    return null;
  }
  /**
   *  The ``to`` address for the transaction or ``null`` if the
   *  transaction is an ``init`` transaction.
   */
  get to() {
    return l(this, Lr);
  }
  set to(t) {
    d(this, Lr, t == null ? null : V(t));
  }
  /**
   *  The transaction nonce.
   */
  get nonce() {
    return l(this, _r);
  }
  set nonce(t) {
    d(this, _r, L(t, "value"));
  }
  /**
   *  The gas limit.
   */
  get gasLimit() {
    return l(this, Gr);
  }
  set gasLimit(t) {
    d(this, Gr, I(t));
  }
  /**
   *  The gas price.
   *
   *  On legacy networks this defines the fee that will be paid. On
   *  EIP-1559 networks, this should be ``null``.
   */
  get gasPrice() {
    const t = l(this, Hr);
    return t == null && (this.type === 0 || this.type === 1) ? Rt : t;
  }
  set gasPrice(t) {
    d(this, Hr, t == null ? null : I(t, "gasPrice"));
  }
  /**
   *  The maximum priority fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxPriorityFeePerGas() {
    const t = l(this, Qr);
    return t ?? (this.type === 2 ? Rt : null);
  }
  set maxPriorityFeePerGas(t) {
    d(this, Qr, t == null ? null : I(t, "maxPriorityFeePerGas"));
  }
  /**
   *  The maximum total fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxFeePerGas() {
    const t = l(this, Vr);
    return t ?? (this.type === 2 ? Rt : null);
  }
  set maxFeePerGas(t) {
    d(this, Vr, t == null ? null : I(t, "maxFeePerGas"));
  }
  /**
   *  The transaction data. For ``init`` transactions this is the
   *  deployment code.
   */
  get data() {
    return l(this, Mr);
  }
  set data(t) {
    d(this, Mr, T(t));
  }
  /**
   *  The amount of ether (in wei) to send in this transactions.
   */
  get value() {
    return l(this, Kr);
  }
  set value(t) {
    d(this, Kr, I(t, "value"));
  }
  /**
   *  The chain ID this transaction is valid on.
   */
  get chainId() {
    return l(this, Jr);
  }
  set chainId(t) {
    d(this, Jr, I(t));
  }
  /**
   *  If signed, the signature for this transaction.
   */
  get signature() {
    return l(this, zr) || null;
  }
  set signature(t) {
    d(this, zr, t == null ? null : ue.from(t));
  }
  /**
   *  The access list.
   *
   *  An access list permits discounted (but pre-paid) access to
   *  bytecode and state variable access within contract execution.
   */
  get accessList() {
    const t = l(this, jr) || null;
    return t ?? (this.type === 1 || this.type === 2 ? [] : null);
  }
  set accessList(t) {
    d(this, jr, t == null ? null : xn(t));
  }
  /**
   *  The transaction hash, if signed. Otherwise, ``null``.
   */
  get hash() {
    return this.signature == null ? null : q(this.serialized);
  }
  /**
   *  The pre-image hash of this transaction.
   *
   *  This is the digest that a [[Signer]] must sign to authorize
   *  this transaction.
   */
  get unsignedHash() {
    return q(this.unsignedSerialized);
  }
  /**
   *  The sending address, if signed. Otherwise, ``null``.
   */
  get from() {
    return this.signature == null ? null : fg(this.unsignedHash, this.signature);
  }
  /**
   *  The public key of the sender, if signed. Otherwise, ``null``.
   */
  get fromPublicKey() {
    return this.signature == null ? null : js.recoverPublicKey(this.unsignedHash, this.signature);
  }
  /**
   *  Returns true if signed.
   *
   *  This provides a Type Guard that properties requiring a signed
   *  transaction are non-null.
   */
  isSigned() {
    return this.signature != null;
  }
  /**
   *  The serialized transaction.
   *
   *  This throws if the transaction is unsigned. For the pre-image,
   *  use [[unsignedSerialized]].
   */
  get serialized() {
    switch (b(this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", { operation: ".serialized" }), this.inferType()) {
      case 0:
        return uu(this, this.signature);
      case 1:
        return fu(this, this.signature);
      case 2:
        return lu(this, this.signature);
    }
    b(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
  }
  /**
   *  The transaction pre-image.
   *
   *  The hash of this is the digest which needs to be signed to
   *  authorize this transaction.
   */
  get unsignedSerialized() {
    switch (this.inferType()) {
      case 0:
        return uu(this);
      case 1:
        return fu(this);
      case 2:
        return lu(this);
    }
    b(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".unsignedSerialized" });
  }
  /**
   *  Return the most "likely" type; currently the highest
   *  supported transaction type.
   */
  inferType() {
    return this.inferTypes().pop();
  }
  /**
   *  Validates the explicit properties and returns a list of compatible
   *  transaction types.
   */
  inferTypes() {
    const t = this.gasPrice != null, e = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null, n = this.accessList != null;
    this.maxFeePerGas != null && this.maxPriorityFeePerGas != null && b(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", { value: this }), b(!e || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", { value: this }), b(this.type !== 0 || !n, "legacy transaction cannot have accessList", "BAD_DATA", { value: this });
    const s = [];
    return this.type != null ? s.push(this.type) : e ? s.push(2) : t ? (s.push(1), n || s.push(0)) : n ? (s.push(1), s.push(2)) : (s.push(0), s.push(1), s.push(2)), s.sort(), s;
  }
  /**
   *  Returns true if this transaction is a legacy transaction (i.e.
   *  ``type === 0``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isLegacy() {
    return this.type === 0;
  }
  /**
   *  Returns true if this transaction is berlin hardform transaction (i.e.
   *  ``type === 1``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isBerlin() {
    return this.type === 1;
  }
  /**
   *  Returns true if this transaction is london hardform transaction (i.e.
   *  ``type === 2``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isLondon() {
    return this.type === 2;
  }
  /**
   *  Create a copy of this transaciton.
   */
  clone() {
    return tn.from(this);
  }
  /**
   *  Return a JSON-friendly object.
   */
  toJSON() {
    const t = (e) => e == null ? null : e.toString();
    return {
      type: this.type,
      to: this.to,
      //            from: this.from,
      data: this.data,
      nonce: this.nonce,
      gasLimit: t(this.gasLimit),
      gasPrice: t(this.gasPrice),
      maxPriorityFeePerGas: t(this.maxPriorityFeePerGas),
      maxFeePerGas: t(this.maxFeePerGas),
      value: t(this.value),
      chainId: t(this.chainId),
      sig: this.signature ? this.signature.toJSON() : null,
      accessList: this.accessList
    };
  }
  /**
   *  Create a **Transaction** from a serialized transaction or a
   *  Transaction-like object.
   */
  static from(t) {
    if (t == null)
      return new tn();
    if (typeof t == "string") {
      const n = K(t);
      if (n[0] >= 127)
        return tn.from(yg(n));
      switch (n[0]) {
        case 1:
          return tn.from(Ag(n));
        case 2:
          return tn.from(wg(n));
      }
      b(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: "from" });
    }
    const e = new tn();
    return t.type != null && (e.type = t.type), t.to != null && (e.to = t.to), t.nonce != null && (e.nonce = t.nonce), t.gasLimit != null && (e.gasLimit = t.gasLimit), t.gasPrice != null && (e.gasPrice = t.gasPrice), t.maxPriorityFeePerGas != null && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas), t.maxFeePerGas != null && (e.maxFeePerGas = t.maxFeePerGas), t.data != null && (e.data = t.data), t.value != null && (e.value = t.value), t.chainId != null && (e.chainId = t.chainId), t.signature != null && (e.signature = ue.from(t.signature)), t.accessList != null && (e.accessList = t.accessList), t.hash != null && (g(e.isSigned(), "unsigned transaction cannot define hash", "tx", t), g(e.hash === t.hash, "hash mismatch", "tx", t)), t.from != null && (g(e.isSigned(), "unsigned transaction cannot define from", "tx", t), g(e.from.toLowerCase() === (t.from || "").toLowerCase(), "from mismatch", "tx", t)), e;
  }
};
Ie = new WeakMap(), Lr = new WeakMap(), Mr = new WeakMap(), _r = new WeakMap(), Gr = new WeakMap(), Hr = new WeakMap(), Qr = new WeakMap(), Vr = new WeakMap(), Kr = new WeakMap(), Jr = new WeakMap(), zr = new WeakMap(), jr = new WeakMap();
let Xs = tn;
const nf = new Uint8Array(32);
nf.fill(0);
const bg = BigInt(-1), rf = BigInt(0), sf = BigInt(1), Eg = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function Ng(r) {
  const t = K(r), e = t.length % 32;
  return e ? rt([t, nf.slice(e)]) : T(t);
}
const Pg = Nn(sf, 32), xg = Nn(rf, 32), hu = {
  name: "string",
  version: "string",
  chainId: "uint256",
  verifyingContract: "address",
  salt: "bytes32"
}, ta = [
  "name",
  "version",
  "chainId",
  "verifyingContract",
  "salt"
];
function du(r) {
  return function(t) {
    return g(typeof t == "string", `invalid domain value for ${JSON.stringify(r)}`, `domain.${r}`, t), t;
  };
}
const kg = {
  name: du("name"),
  version: du("version"),
  chainId: function(r) {
    const t = I(r, "domain.chainId");
    return g(t >= 0, "invalid chain ID", "domain.chainId", r), Number.isSafeInteger(t) ? Number(t) : On(t);
  },
  verifyingContract: function(r) {
    try {
      return V(r).toLowerCase();
    } catch {
    }
    g(!1, 'invalid domain value "verifyingContract"', "domain.verifyingContract", r);
  },
  salt: function(r) {
    const t = K(r, "domain.salt");
    return g(t.length === 32, 'invalid domain value "salt"', "domain.salt", r), T(t);
  }
};
function ea(r) {
  {
    const t = r.match(/^(u?)int(\d*)$/);
    if (t) {
      const e = t[1] === "", n = parseInt(t[2] || "256");
      g(n % 8 === 0 && n !== 0 && n <= 256 && (t[2] == null || t[2] === String(n)), "invalid numeric width", "type", r);
      const s = Is(Eg, e ? n - 1 : n), i = e ? (s + sf) * bg : rf;
      return function(o) {
        const a = I(o, "value");
        return g(a >= i && a <= s, `value out-of-bounds for ${r}`, "value", a), Nn(e ? Xu(a, 256) : a, 32);
      };
    }
  }
  {
    const t = r.match(/^bytes(\d+)$/);
    if (t) {
      const e = parseInt(t[1]);
      return g(e !== 0 && e <= 32 && t[1] === String(e), "invalid bytes width", "type", r), function(n) {
        const s = K(n);
        return g(s.length === e, `invalid length for ${r}`, "value", n), Ng(n);
      };
    }
  }
  switch (r) {
    case "address":
      return function(t) {
        return sr(V(t), 32);
      };
    case "bool":
      return function(t) {
        return t ? Pg : xg;
      };
    case "bytes":
      return function(t) {
        return q(t);
      };
    case "string":
      return function(t) {
        return ir(t);
      };
  }
  return null;
}
function pu(r, t) {
  return `${r}(${t.map(({ name: e, type: n }) => n + " " + e).join(",")})`;
}
var ii, Be, Wr, Ao, of;
const Kt = class Kt {
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   *
   *  This performs all necessary checking that types are valid and
   *  do not violate the [[link-eip-712]] structural constraints as
   *  well as computes the [[primaryType]].
   */
  constructor(t) {
    y(this, Ao);
    /**
     *  The primary type for the structured [[types]].
     *
     *  This is derived automatically from the [[types]], since no
     *  recursion is possible, once the DAG for the types is consturcted
     *  internally, the primary type must be the only remaining type with
     *  no parent nodes.
     */
    m(this, "primaryType");
    y(this, ii, void 0);
    y(this, Be, void 0);
    y(this, Wr, void 0);
    d(this, ii, JSON.stringify(t)), d(this, Be, /* @__PURE__ */ new Map()), d(this, Wr, /* @__PURE__ */ new Map());
    const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
    Object.keys(t).forEach((a) => {
      e.set(a, /* @__PURE__ */ new Set()), n.set(a, []), s.set(a, /* @__PURE__ */ new Set());
    });
    for (const a in t) {
      const c = /* @__PURE__ */ new Set();
      for (const u of t[a]) {
        g(!c.has(u.name), `duplicate variable name ${JSON.stringify(u.name)} in ${JSON.stringify(a)}`, "types", t), c.add(u.name);
        const f = u.type.match(/^([^\x5b]*)(\x5b|$)/)[1] || null;
        g(f !== a, `circular type reference to ${JSON.stringify(f)}`, "types", t), !ea(f) && (g(n.has(f), `unknown type ${JSON.stringify(f)}`, "types", t), n.get(f).push(a), e.get(a).add(f));
      }
    }
    const i = Array.from(n.keys()).filter((a) => n.get(a).length === 0);
    g(i.length !== 0, "missing primary type", "types", t), g(i.length === 1, `ambiguous primary types or unused types: ${i.map((a) => JSON.stringify(a)).join(", ")}`, "types", t), B(this, { primaryType: i[0] });
    function o(a, c) {
      g(!c.has(a), `circular type reference to ${JSON.stringify(a)}`, "types", t), c.add(a);
      for (const u of e.get(a))
        if (n.has(u)) {
          o(u, c);
          for (const f of c)
            s.get(f).add(u);
        }
      c.delete(a);
    }
    o(this.primaryType, /* @__PURE__ */ new Set());
    for (const [a, c] of s) {
      const u = Array.from(c);
      u.sort(), l(this, Be).set(a, pu(a, t[a]) + u.map((f) => pu(f, t[f])).join(""));
    }
  }
  /**
   *  The types.
   */
  get types() {
    return JSON.parse(l(this, ii));
  }
  /**
   *  Returnthe encoder for the specific %%type%%.
   */
  getEncoder(t) {
    let e = l(this, Wr).get(t);
    return e || (e = x(this, Ao, of).call(this, t), l(this, Wr).set(t, e)), e;
  }
  /**
   *  Return the full type for %%name%%.
   */
  encodeType(t) {
    const e = l(this, Be).get(t);
    return g(e, `unknown type: ${JSON.stringify(t)}`, "name", t), e;
  }
  /**
   *  Return the encoded %%value%% for the %%type%%.
   */
  encodeData(t, e) {
    return this.getEncoder(t)(e);
  }
  /**
   *  Returns the hash of %%value%% for the type of %%name%%.
   */
  hashStruct(t, e) {
    return q(this.encodeData(t, e));
  }
  /**
   *  Return the fulled encoded %%value%% for the [[types]].
   */
  encode(t) {
    return this.encodeData(this.primaryType, t);
  }
  /**
   *  Return the hash of the fully encoded %%value%% for the [[types]].
   */
  hash(t) {
    return this.hashStruct(this.primaryType, t);
  }
  /**
   *  @_ignore:
   */
  _visit(t, e, n) {
    if (ea(t))
      return n(t, e);
    const s = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (s)
      return g(!s[3] || parseInt(s[3]) === e.length, `array length mismatch; expected length ${parseInt(s[3])}`, "value", e), e.map((o) => this._visit(s[1], o, n));
    const i = this.types[t];
    if (i)
      return i.reduce((o, { name: a, type: c }) => (o[a] = this._visit(c, e[a], n), o), {});
    g(!1, `unknown type: ${t}`, "type", t);
  }
  /**
   *  Call %%calback%% for each value in %%value%%, passing the type and
   *  component within %%value%%.
   *
   *  This is useful for replacing addresses or other transformation that
   *  may be desired on each component, based on its type.
   */
  visit(t, e) {
    return this._visit(this.primaryType, t, e);
  }
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   */
  static from(t) {
    return new Kt(t);
  }
  /**
   *  Return the primary type for %%types%%.
   */
  static getPrimaryType(t) {
    return Kt.from(t).primaryType;
  }
  /**
   *  Return the hashed struct for %%value%% using %%types%% and %%name%%.
   */
  static hashStruct(t, e, n) {
    return Kt.from(e).hashStruct(t, n);
  }
  /**
   *  Return the domain hash for %%domain%%.
   */
  static hashDomain(t) {
    const e = [];
    for (const n in t) {
      if (t[n] == null)
        continue;
      const s = hu[n];
      g(s, `invalid typed-data domain key: ${JSON.stringify(n)}`, "domain", t), e.push({ name: n, type: s });
    }
    return e.sort((n, s) => ta.indexOf(n.name) - ta.indexOf(s.name)), Kt.hashStruct("EIP712Domain", { EIP712Domain: e }, t);
  }
  /**
   *  Return the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static encode(t, e, n) {
    return rt([
      "0x1901",
      Kt.hashDomain(t),
      Kt.from(e).hash(n)
    ]);
  }
  /**
   *  Return the hash of the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static hash(t, e, n) {
    return q(Kt.encode(t, e, n));
  }
  // Replaces all address types with ENS names with their looked up address
  /**
   * Resolves to the value from resolving all addresses in %%value%% for
   * %%types%% and the %%domain%%.
   */
  static async resolveNames(t, e, n, s) {
    t = Object.assign({}, t);
    for (const a in t)
      t[a] == null && delete t[a];
    const i = {};
    t.verifyingContract && !X(t.verifyingContract, 20) && (i[t.verifyingContract] = "0x");
    const o = Kt.from(e);
    o.visit(n, (a, c) => (a === "address" && !X(c, 20) && (i[c] = "0x"), c));
    for (const a in i)
      i[a] = await s(a);
    return t.verifyingContract && i[t.verifyingContract] && (t.verifyingContract = i[t.verifyingContract]), n = o.visit(n, (a, c) => a === "address" && i[c] ? i[c] : c), { domain: t, value: n };
  }
  /**
   *  Returns the JSON-encoded payload expected by nodes which implement
   *  the JSON-RPC [[link-eip-712]] method.
   */
  static getPayload(t, e, n) {
    Kt.hashDomain(t);
    const s = {}, i = [];
    ta.forEach((c) => {
      const u = t[c];
      u != null && (s[c] = kg[c](u), i.push({ name: c, type: hu[c] }));
    });
    const o = Kt.from(e), a = Object.assign({}, e);
    return g(a.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", e), a.EIP712Domain = i, o.encode(n), {
      types: a,
      domain: s,
      primaryType: o.primaryType,
      message: o.visit(n, (c, u) => {
        if (c.match(/^bytes(\d*)/))
          return T(K(u));
        if (c.match(/^u?int/))
          return I(u).toString();
        switch (c) {
          case "address":
            return u.toLowerCase();
          case "bool":
            return !!u;
          case "string":
            return g(typeof u == "string", "invalid string", "value", u), u;
        }
        g(!1, "unsupported type", "type", c);
      })
    };
  }
};
ii = new WeakMap(), Be = new WeakMap(), Wr = new WeakMap(), Ao = new WeakSet(), of = function(t) {
  {
    const s = ea(t);
    if (s)
      return s;
  }
  const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
  if (e) {
    const s = e[1], i = this.getEncoder(s);
    return (o) => {
      g(!e[3] || parseInt(e[3]) === o.length, `array length mismatch; expected length ${parseInt(e[3])}`, "value", o);
      let a = o.map(i);
      return l(this, Be).has(s) && (a = a.map(q)), q(rt(a));
    };
  }
  const n = this.types[t];
  if (n) {
    const s = ir(l(this, Be).get(t));
    return (i) => {
      const o = n.map(({ name: a, type: c }) => {
        const u = this.getEncoder(c)(i[a]);
        return l(this, Be).has(c) ? q(u) : u;
      });
      return o.unshift(s), rt(o);
    };
  }
  g(!1, `unknown type: ${t}`, "type", t);
};
let ao = Kt;
function Et(r) {
  const t = /* @__PURE__ */ new Set();
  return r.forEach((e) => t.add(e)), Object.freeze(t);
}
const Rg = "external public payable", Cg = Et(Rg.split(" ")), af = "constant external internal payable private public pure view", vg = Et(af.split(" ")), cf = "constructor error event fallback function receive struct", uf = Et(cf.split(" ")), lf = "calldata memory storage payable indexed", Og = Et(lf.split(" ")), Tg = "tuple returns", Ig = [cf, lf, Tg, af].join(" "), Bg = Et(Ig.split(" ")), Sg = {
  "(": "OPEN_PAREN",
  ")": "CLOSE_PAREN",
  "[": "OPEN_BRACKET",
  "]": "CLOSE_BRACKET",
  ",": "COMMA",
  "@": "AT"
}, Ug = new RegExp("^(\\s*)"), Dg = new RegExp("^([0-9]+)"), Fg = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"), ff = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"), hf = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var ct, se, oi, Ca;
const bo = class bo {
  constructor(t) {
    y(this, oi);
    y(this, ct, void 0);
    y(this, se, void 0);
    d(this, ct, 0), d(this, se, t.slice());
  }
  get offset() {
    return l(this, ct);
  }
  get length() {
    return l(this, se).length - l(this, ct);
  }
  clone() {
    return new bo(l(this, se));
  }
  reset() {
    d(this, ct, 0);
  }
  // Pops and returns the value of the next token, if it is a keyword in allowed; throws if out of tokens
  popKeyword(t) {
    const e = this.peek();
    if (e.type !== "KEYWORD" || !t.has(e.text))
      throw new Error(`expected keyword ${e.text}`);
    return this.pop().text;
  }
  // Pops and returns the value of the next token if it is `type`; throws if out of tokens
  popType(t) {
    if (this.peek().type !== t)
      throw new Error(`expected ${t}; got ${JSON.stringify(this.peek())}`);
    return this.pop().text;
  }
  // Pops and returns a "(" TOKENS ")"
  popParen() {
    const t = this.peek();
    if (t.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const e = x(this, oi, Ca).call(this, l(this, ct) + 1, t.match + 1);
    return d(this, ct, t.match + 1), e;
  }
  // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
  popParams() {
    const t = this.peek();
    if (t.type !== "OPEN_PAREN")
      throw new Error("bad start");
    const e = [];
    for (; l(this, ct) < t.match - 1; ) {
      const n = this.peek().linkNext;
      e.push(x(this, oi, Ca).call(this, l(this, ct) + 1, n)), d(this, ct, n);
    }
    return d(this, ct, t.match + 1), e;
  }
  // Returns the top Token, throwing if out of tokens
  peek() {
    if (l(this, ct) >= l(this, se).length)
      throw new Error("out-of-bounds");
    return l(this, se)[l(this, ct)];
  }
  // Returns the next value, if it is a keyword in `allowed`
  peekKeyword(t) {
    const e = this.peekType("KEYWORD");
    return e != null && t.has(e) ? e : null;
  }
  // Returns the value of the next token if it is `type`
  peekType(t) {
    if (this.length === 0)
      return null;
    const e = this.peek();
    return e.type === t ? e.text : null;
  }
  // Returns the next token; throws if out of tokens
  pop() {
    const t = this.peek();
    return Rs(this, ct)._++, t;
  }
  toString() {
    const t = [];
    for (let e = l(this, ct); e < l(this, se).length; e++) {
      const n = l(this, se)[e];
      t.push(`${n.type}:${n.text}`);
    }
    return `<TokenString ${t.join(" ")}>`;
  }
};
ct = new WeakMap(), se = new WeakMap(), oi = new WeakSet(), Ca = function(t = 0, e = 0) {
  return new bo(l(this, se).slice(t, e).map((n) => Object.freeze(Object.assign({}, n, {
    match: n.match - t,
    linkBack: n.linkBack - t,
    linkNext: n.linkNext - t
  }))));
};
let le = bo;
function kn(r) {
  const t = [], e = (o) => {
    const a = i < r.length ? JSON.stringify(r[i]) : "$EOI";
    throw new Error(`invalid token ${a} at ${i}: ${o}`);
  };
  let n = [], s = [], i = 0;
  for (; i < r.length; ) {
    let o = r.substring(i), a = o.match(Ug);
    a && (i += a[1].length, o = r.substring(i));
    const c = { depth: n.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset: i, value: -1 };
    t.push(c);
    let u = Sg[o[0]] || "";
    if (u) {
      if (c.type = u, c.text = o[0], i++, u === "OPEN_PAREN")
        n.push(t.length - 1), s.push(t.length - 1);
      else if (u == "CLOSE_PAREN")
        n.length === 0 && e("no matching open bracket"), c.match = n.pop(), t[c.match].match = t.length - 1, c.depth--, c.linkBack = s.pop(), t[c.linkBack].linkNext = t.length - 1;
      else if (u === "COMMA")
        c.linkBack = s.pop(), t[c.linkBack].linkNext = t.length - 1, s.push(t.length - 1);
      else if (u === "OPEN_BRACKET")
        c.type = "BRACKET";
      else if (u === "CLOSE_BRACKET") {
        let f = t.pop().text;
        if (t.length > 0 && t[t.length - 1].type === "NUMBER") {
          const h = t.pop().text;
          f = h + f, t[t.length - 1].value = L(h);
        }
        if (t.length === 0 || t[t.length - 1].type !== "BRACKET")
          throw new Error("missing opening bracket");
        t[t.length - 1].text += f;
      }
      continue;
    }
    if (a = o.match(Fg), a) {
      if (c.text = a[1], i += c.text.length, Bg.has(c.text)) {
        c.type = "KEYWORD";
        continue;
      }
      if (c.text.match(hf)) {
        c.type = "TYPE";
        continue;
      }
      c.type = "ID";
      continue;
    }
    if (a = o.match(Dg), a) {
      c.text = a[1], c.type = "NUMBER", i += c.text.length;
      continue;
    }
    throw new Error(`unexpected token ${JSON.stringify(o[0])} at position ${i}`);
  }
  return new le(t.map((o) => Object.freeze(o)));
}
function gu(r, t) {
  let e = [];
  for (const n in t.keys())
    r.has(n) && e.push(n);
  if (e.length > 1)
    throw new Error(`conflicting types: ${e.join(", ")}`);
}
function Lo(r, t) {
  if (t.peekKeyword(uf)) {
    const e = t.pop().text;
    if (e !== r)
      throw new Error(`expected ${r}, got ${e}`);
  }
  return t.popType("ID");
}
function Je(r, t) {
  const e = /* @__PURE__ */ new Set();
  for (; ; ) {
    const n = r.peekType("KEYWORD");
    if (n == null || t && !t.has(n))
      break;
    if (r.pop(), e.has(n))
      throw new Error(`duplicate keywords: ${JSON.stringify(n)}`);
    e.add(n);
  }
  return Object.freeze(e);
}
function df(r) {
  let t = Je(r, vg);
  return gu(t, Et("constant payable nonpayable".split(" "))), gu(t, Et("pure view payable nonpayable".split(" "))), t.has("view") ? "view" : t.has("pure") ? "pure" : t.has("payable") ? "payable" : t.has("nonpayable") ? "nonpayable" : t.has("constant") ? "view" : "nonpayable";
}
function Ke(r, t) {
  return r.popParams().map((e) => lt.from(e, t));
}
function pf(r) {
  if (r.peekType("AT")) {
    if (r.pop(), r.peekType("NUMBER"))
      return I(r.pop().text);
    throw new Error("invalid gas");
  }
  return null;
}
function or(r) {
  if (r.length)
    throw new Error(`unexpected tokens: ${r.toString()}`);
}
const Lg = new RegExp(/^(.*)\[([0-9]*)\]$/);
function mu(r) {
  const t = r.match(hf);
  if (g(t, "invalid type", "type", r), r === "uint")
    return "uint256";
  if (r === "int")
    return "int256";
  if (t[2]) {
    const e = parseInt(t[2]);
    g(e !== 0 && e <= 32, "invalid bytes length", "type", r);
  } else if (t[3]) {
    const e = parseInt(t[3]);
    g(e !== 0 && e <= 256 && e % 8 === 0, "invalid numeric width", "type", r);
  }
  return r;
}
const Y = {}, It = Symbol.for("_ethers_internal"), yu = "_ParamTypeInternal", wu = "_ErrorInternal", Au = "_EventInternal", bu = "_ConstructorInternal", Eu = "_FallbackInternal", Nu = "_FunctionInternal", Pu = "_StructInternal";
var Zr, Ki;
const Jt = class Jt {
  /**
   *  @private
   */
  constructor(t, e, n, s, i, o, a, c) {
    y(this, Zr);
    /**
     *  The local name of the parameter (or ``""`` if unbound)
     */
    m(this, "name");
    /**
     *  The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
     *  ``"uint256[3][]"``)
     */
    m(this, "type");
    /**
     *  The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)
     */
    m(this, "baseType");
    /**
     *  True if the parameters is indexed.
     *
     *  For non-indexable types this is ``null``.
     */
    m(this, "indexed");
    /**
     *  The components for the tuple.
     *
     *  For non-tuple types this is ``null``.
     */
    m(this, "components");
    /**
     *  The array length, or ``-1`` for dynamic-lengthed arrays.
     *
     *  For non-array types this is ``null``.
     */
    m(this, "arrayLength");
    /**
     *  The type of each child in the array.
     *
     *  For non-array types this is ``null``.
     */
    m(this, "arrayChildren");
    if (Oo(t, Y, "ParamType"), Object.defineProperty(this, It, { value: yu }), o && (o = Object.freeze(o.slice())), s === "array") {
      if (a == null || c == null)
        throw new Error("");
    } else if (a != null || c != null)
      throw new Error("");
    if (s === "tuple") {
      if (o == null)
        throw new Error("");
    } else if (o != null)
      throw new Error("");
    B(this, {
      name: e,
      type: n,
      baseType: s,
      indexed: i,
      components: o,
      arrayLength: a,
      arrayChildren: c
    });
  }
  /**
   *  Return a string representation of this type.
   *
   *  For example,
   *
   *  ``sighash" => "(uint256,address)"``
   *
   *  ``"minimal" => "tuple(uint256,address) indexed"``
   *
   *  ``"full" => "tuple(uint256 foo, address bar) indexed baz"``
   */
  format(t) {
    if (t == null && (t = "sighash"), t === "json") {
      const n = this.name || "";
      if (this.isArray()) {
        const i = JSON.parse(this.arrayChildren.format("json"));
        return i.name = n, i.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`, JSON.stringify(i);
      }
      const s = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: n
      };
      return typeof this.indexed == "boolean" && (s.indexed = this.indexed), this.isTuple() && (s.components = this.components.map((i) => JSON.parse(i.format(t)))), JSON.stringify(s);
    }
    let e = "";
    return this.isArray() ? (e += this.arrayChildren.format(t), e += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`) : this.isTuple() ? e += "(" + this.components.map((n) => n.format(t)).join(t === "full" ? ", " : ",") + ")" : e += this.type, t !== "sighash" && (this.indexed === !0 && (e += " indexed"), t === "full" && this.name && (e += " " + this.name)), e;
  }
  /**
   *  Returns true if %%this%% is an Array type.
   *
   *  This provides a type gaurd ensuring that [[arrayChildren]]
   *  and [[arrayLength]] are non-null.
   */
  isArray() {
    return this.baseType === "array";
  }
  /**
   *  Returns true if %%this%% is a Tuple type.
   *
   *  This provides a type gaurd ensuring that [[components]]
   *  is non-null.
   */
  isTuple() {
    return this.baseType === "tuple";
  }
  /**
   *  Returns true if %%this%% is an Indexable type.
   *
   *  This provides a type gaurd ensuring that [[indexed]]
   *  is non-null.
   */
  isIndexable() {
    return this.indexed != null;
  }
  /**
   *  Walks the **ParamType** with %%value%%, calling %%process%%
   *  on each type, destructing the %%value%% recursively.
   */
  walk(t, e) {
    if (this.isArray()) {
      if (!Array.isArray(t))
        throw new Error("invalid array value");
      if (this.arrayLength !== -1 && t.length !== this.arrayLength)
        throw new Error("array is wrong length");
      const n = this;
      return t.map((s) => n.arrayChildren.walk(s, e));
    }
    if (this.isTuple()) {
      if (!Array.isArray(t))
        throw new Error("invalid tuple value");
      if (t.length !== this.components.length)
        throw new Error("array is wrong length");
      const n = this;
      return t.map((s, i) => n.components[i].walk(s, e));
    }
    return e(this.type, t);
  }
  /**
   *  Walks the **ParamType** with %%value%%, asynchronously calling
   *  %%process%% on each type, destructing the %%value%% recursively.
   *
   *  This can be used to resolve ENS naes by walking and resolving each
   *  ``"address"`` type.
   */
  async walkAsync(t, e) {
    const n = [], s = [t];
    return x(this, Zr, Ki).call(this, n, t, e, (i) => {
      s[0] = i;
    }), n.length && await Promise.all(n), s[0];
  }
  /**
   *  Creates a new **ParamType** for %%obj%%.
   *
   *  If %%allowIndexed%% then the ``indexed`` keyword is permitted,
   *  otherwise the ``indexed`` keyword will throw an error.
   */
  static from(t, e) {
    if (Jt.isParamType(t))
      return t;
    if (typeof t == "string")
      try {
        return Jt.from(kn(t), e);
      } catch {
        g(!1, "invalid param type", "obj", t);
      }
    else if (t instanceof le) {
      let a = "", c = "", u = null;
      Je(t, Et(["tuple"])).has("tuple") || t.peekType("OPEN_PAREN") ? (c = "tuple", u = t.popParams().map((A) => Jt.from(A)), a = `tuple(${u.map((A) => A.format()).join(",")})`) : (a = mu(t.popType("TYPE")), c = a);
      let f = null, h = null;
      for (; t.length && t.peekType("BRACKET"); ) {
        const A = t.pop();
        f = new Jt(Y, "", a, c, null, u, h, f), h = A.value, a += A.text, c = "array", u = null;
      }
      let p = null;
      if (Je(t, Og).has("indexed")) {
        if (!e)
          throw new Error("");
        p = !0;
      }
      const E = t.peekType("ID") ? t.pop().text : "";
      if (t.length)
        throw new Error("leftover tokens");
      return new Jt(Y, E, a, c, p, u, h, f);
    }
    const n = t.name;
    g(!n || typeof n == "string" && n.match(ff), "invalid name", "obj.name", n);
    let s = t.indexed;
    s != null && (g(e, "parameter cannot be indexed", "obj.indexed", t.indexed), s = !!s);
    let i = t.type, o = i.match(Lg);
    if (o) {
      const a = parseInt(o[2] || "-1"), c = Jt.from({
        type: o[1],
        components: t.components
      });
      return new Jt(Y, n || "", i, "array", s, null, a, c);
    }
    if (i === "tuple" || i.startsWith(
      "tuple("
      /* fix: ) */
    ) || i.startsWith(
      "("
      /* fix: ) */
    )) {
      const a = t.components != null ? t.components.map((u) => Jt.from(u)) : null;
      return new Jt(Y, n || "", i, "tuple", s, a, null, null);
    }
    return i = mu(t.type), new Jt(Y, n || "", i, i, s, null, null, null);
  }
  /**
   *  Returns true if %%value%% is a **ParamType**.
   */
  static isParamType(t) {
    return t && t[It] === yu;
  }
};
Zr = new WeakSet(), Ki = function(t, e, n, s) {
  if (this.isArray()) {
    if (!Array.isArray(e))
      throw new Error("invalid array value");
    if (this.arrayLength !== -1 && e.length !== this.arrayLength)
      throw new Error("array is wrong length");
    const o = this.arrayChildren, a = e.slice();
    a.forEach((c, u) => {
      var f;
      x(f = o, Zr, Ki).call(f, t, c, n, (h) => {
        a[u] = h;
      });
    }), s(a);
    return;
  }
  if (this.isTuple()) {
    const o = this.components;
    let a;
    if (Array.isArray(e))
      a = e.slice();
    else {
      if (e == null || typeof e != "object")
        throw new Error("invalid tuple value");
      a = o.map((c) => {
        if (!c.name)
          throw new Error("cannot use object value with unnamed components");
        if (!(c.name in e))
          throw new Error(`missing value for component ${c.name}`);
        return e[c.name];
      });
    }
    if (a.length !== this.components.length)
      throw new Error("array is wrong length");
    a.forEach((c, u) => {
      var f;
      x(f = o[u], Zr, Ki).call(f, t, c, n, (h) => {
        a[u] = h;
      });
    }), s(a);
    return;
  }
  const i = n(this.type, e);
  i.then ? t.push(async function() {
    s(await i);
  }()) : s(i);
};
let lt = Jt;
class ar {
  /**
   *  @private
   */
  constructor(t, e, n) {
    /**
     *  The type of the fragment.
     */
    m(this, "type");
    /**
     *  The inputs for the fragment.
     */
    m(this, "inputs");
    Oo(t, Y, "Fragment"), n = Object.freeze(n.slice()), B(this, { type: e, inputs: n });
  }
  /**
   *  Creates a new **Fragment** for %%obj%%, wich can be any supported
   *  ABI frgament type.
   */
  static from(t) {
    if (typeof t == "string") {
      try {
        ar.from(JSON.parse(t));
      } catch {
      }
      return ar.from(kn(t));
    }
    if (t instanceof le)
      switch (t.peekKeyword(uf)) {
        case "constructor":
          return Qe.from(t);
        case "error":
          return Ct.from(t);
        case "event":
          return be.from(t);
        case "fallback":
        case "receive":
          return ke.from(t);
        case "function":
          return Ee.from(t);
        case "struct":
          return nr.from(t);
      }
    else if (typeof t == "object") {
      switch (t.type) {
        case "constructor":
          return Qe.from(t);
        case "error":
          return Ct.from(t);
        case "event":
          return be.from(t);
        case "fallback":
        case "receive":
          return ke.from(t);
        case "function":
          return Ee.from(t);
        case "struct":
          return nr.from(t);
      }
      b(!1, `unsupported type: ${t.type}`, "UNSUPPORTED_OPERATION", {
        operation: "Fragment.from"
      });
    }
    g(!1, "unsupported frgament object", "obj", t);
  }
  /**
   *  Returns true if %%value%% is a [[ConstructorFragment]].
   */
  static isConstructor(t) {
    return Qe.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is an [[ErrorFragment]].
   */
  static isError(t) {
    return Ct.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is an [[EventFragment]].
   */
  static isEvent(t) {
    return be.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is a [[FunctionFragment]].
   */
  static isFunction(t) {
    return Ee.isFragment(t);
  }
  /**
   *  Returns true if %%value%% is a [[StructFragment]].
   */
  static isStruct(t) {
    return nr.isFragment(t);
  }
}
class Mo extends ar {
  /**
   *  @private
   */
  constructor(e, n, s, i) {
    super(e, n, i);
    /**
     *  The name of the fragment.
     */
    m(this, "name");
    g(typeof s == "string" && s.match(ff), "invalid identifier", "name", s), i = Object.freeze(i.slice()), B(this, { name: s });
  }
}
function $s(r, t) {
  return "(" + t.map((e) => e.format(r)).join(r === "full" ? ", " : ",") + ")";
}
class Ct extends Mo {
  /**
   *  @private
   */
  constructor(t, e, n) {
    super(t, "error", e, n), Object.defineProperty(this, It, { value: wu });
  }
  /**
   *  The Custom Error selector.
   */
  get selector() {
    return ir(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this fragment as %%format%%.
   */
  format(t) {
    if (t == null && (t = "sighash"), t === "json")
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((n) => JSON.parse(n.format(t)))
      });
    const e = [];
    return t !== "sighash" && e.push("error"), e.push(this.name + $s(t, this.inputs)), e.join(" ");
  }
  /**
   *  Returns a new **ErrorFragment** for %%obj%%.
   */
  static from(t) {
    if (Ct.isFragment(t))
      return t;
    if (typeof t == "string")
      return Ct.from(kn(t));
    if (t instanceof le) {
      const e = Lo("error", t), n = Ke(t);
      return or(t), new Ct(Y, e, n);
    }
    return new Ct(Y, t.name, t.inputs ? t.inputs.map(lt.from) : []);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **ErrorFragment**.
   */
  static isFragment(t) {
    return t && t[It] === wu;
  }
}
class be extends Mo {
  /**
   *  @private
   */
  constructor(e, n, s, i) {
    super(e, "event", n, s);
    /**
     *  Whether this event is anonymous.
     */
    m(this, "anonymous");
    Object.defineProperty(this, It, { value: Au }), B(this, { anonymous: i });
  }
  /**
   *  The Event topic hash.
   */
  get topicHash() {
    return ir(this.format("sighash"));
  }
  /**
   *  Returns a string representation of this event as %%format%%.
   */
  format(e) {
    if (e == null && (e = "sighash"), e === "json")
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((s) => JSON.parse(s.format(e)))
      });
    const n = [];
    return e !== "sighash" && n.push("event"), n.push(this.name + $s(e, this.inputs)), e !== "sighash" && this.anonymous && n.push("anonymous"), n.join(" ");
  }
  /**
   *  Return the topic hash for an event with %%name%% and %%params%%.
   */
  static getTopicHash(e, n) {
    return n = (n || []).map((i) => lt.from(i)), new be(Y, e, n, !1).topicHash;
  }
  /**
   *  Returns a new **EventFragment** for %%obj%%.
   */
  static from(e) {
    if (be.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return be.from(kn(e));
      } catch {
        g(!1, "invalid event fragment", "obj", e);
      }
    else if (e instanceof le) {
      const n = Lo("event", e), s = Ke(e, !0), i = !!Je(e, Et(["anonymous"])).has("anonymous");
      return or(e), new be(Y, n, s, i);
    }
    return new be(Y, e.name, e.inputs ? e.inputs.map((n) => lt.from(n, !0)) : [], !!e.anonymous);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **EventFragment**.
   */
  static isFragment(e) {
    return e && e[It] === Au;
  }
}
class Qe extends ar {
  /**
   *  @private
   */
  constructor(e, n, s, i, o) {
    super(e, n, s);
    /**
     *  Whether the constructor can receive an endowment.
     */
    m(this, "payable");
    /**
     *  The recommended gas limit for deployment or ``null``.
     */
    m(this, "gas");
    Object.defineProperty(this, It, { value: bu }), B(this, { payable: i, gas: o });
  }
  /**
   *  Returns a string representation of this constructor as %%format%%.
   */
  format(e) {
    if (b(e != null && e !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" }), e === "json")
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(e)))
      });
    const n = [`constructor${$s(e, this.inputs)}`];
    return this.payable && n.push("payable"), this.gas != null && n.push(`@${this.gas.toString()}`), n.join(" ");
  }
  /**
   *  Returns a new **ConstructorFragment** for %%obj%%.
   */
  static from(e) {
    if (Qe.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return Qe.from(kn(e));
      } catch {
        g(!1, "invalid constuctor fragment", "obj", e);
      }
    else if (e instanceof le) {
      Je(e, Et(["constructor"]));
      const n = Ke(e), s = !!Je(e, Cg).has("payable"), i = pf(e);
      return or(e), new Qe(Y, "constructor", n, s, i);
    }
    return new Qe(Y, "constructor", e.inputs ? e.inputs.map(lt.from) : [], !!e.payable, e.gas != null ? e.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **ConstructorFragment**.
   */
  static isFragment(e) {
    return e && e[It] === bu;
  }
}
class ke extends ar {
  constructor(e, n, s) {
    super(e, "fallback", n);
    /**
     *  If the function can be sent value during invocation.
     */
    m(this, "payable");
    Object.defineProperty(this, It, { value: Eu }), B(this, { payable: s });
  }
  /**
   *  Returns a string representation of this fallback as %%format%%.
   */
  format(e) {
    const n = this.inputs.length === 0 ? "receive" : "fallback";
    if (e === "json") {
      const s = this.payable ? "payable" : "nonpayable";
      return JSON.stringify({ type: n, stateMutability: s });
    }
    return `${n}()${this.payable ? " payable" : ""}`;
  }
  /**
   *  Returns a new **FallbackFragment** for %%obj%%.
   */
  static from(e) {
    if (ke.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return ke.from(kn(e));
      } catch {
        g(!1, "invalid fallback fragment", "obj", e);
      }
    else if (e instanceof le) {
      const n = e.toString(), s = e.peekKeyword(Et(["fallback", "receive"]));
      if (g(s, "type must be fallback or receive", "obj", n), e.popKeyword(Et(["fallback", "receive"])) === "receive") {
        const c = Ke(e);
        return g(c.length === 0, "receive cannot have arguments", "obj.inputs", c), Je(e, Et(["payable"])), or(e), new ke(Y, [], !0);
      }
      let o = Ke(e);
      o.length ? g(o.length === 1 && o[0].type === "bytes", "invalid fallback inputs", "obj.inputs", o.map((c) => c.format("minimal")).join(", ")) : o = [lt.from("bytes")];
      const a = df(e);
      if (g(a === "nonpayable" || a === "payable", "fallback cannot be constants", "obj.stateMutability", a), Je(e, Et(["returns"])).has("returns")) {
        const c = Ke(e);
        g(c.length === 1 && c[0].type === "bytes", "invalid fallback outputs", "obj.outputs", c.map((u) => u.format("minimal")).join(", "));
      }
      return or(e), new ke(Y, o, a === "payable");
    }
    if (e.type === "receive")
      return new ke(Y, [], !0);
    if (e.type === "fallback") {
      const n = [lt.from("bytes")], s = e.stateMutability === "payable";
      return new ke(Y, n, s);
    }
    g(!1, "invalid fallback description", "obj", e);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FallbackFragment**.
   */
  static isFragment(e) {
    return e && e[It] === Eu;
  }
}
class Ee extends Mo {
  /**
   *  @private
   */
  constructor(e, n, s, i, o, a) {
    super(e, "function", n, i);
    /**
     *  If the function is constant (e.g. ``pure`` or ``view`` functions).
     */
    m(this, "constant");
    /**
     *  The returned types for the result of calling this function.
     */
    m(this, "outputs");
    /**
     *  The state mutability (e.g. ``payable``, ``nonpayable``, ``view``
     *  or ``pure``)
     */
    m(this, "stateMutability");
    /**
     *  If the function can be sent value during invocation.
     */
    m(this, "payable");
    /**
     *  The recommended gas limit to send when calling this function.
     */
    m(this, "gas");
    Object.defineProperty(this, It, { value: Nu }), o = Object.freeze(o.slice()), B(this, { constant: s === "view" || s === "pure", gas: a, outputs: o, payable: s === "payable", stateMutability: s });
  }
  /**
   *  The Function selector.
   */
  get selector() {
    return ir(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this function as %%format%%.
   */
  format(e) {
    if (e == null && (e = "sighash"), e === "json")
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((s) => JSON.parse(s.format(e))),
        outputs: this.outputs.map((s) => JSON.parse(s.format(e)))
      });
    const n = [];
    return e !== "sighash" && n.push("function"), n.push(this.name + $s(e, this.inputs)), e !== "sighash" && (this.stateMutability !== "nonpayable" && n.push(this.stateMutability), this.outputs && this.outputs.length && (n.push("returns"), n.push($s(e, this.outputs))), this.gas != null && n.push(`@${this.gas.toString()}`)), n.join(" ");
  }
  /**
   *  Return the selector for a function with %%name%% and %%params%%.
   */
  static getSelector(e, n) {
    return n = (n || []).map((i) => lt.from(i)), new Ee(Y, e, "view", n, [], null).selector;
  }
  /**
   *  Returns a new **FunctionFragment** for %%obj%%.
   */
  static from(e) {
    if (Ee.isFragment(e))
      return e;
    if (typeof e == "string")
      try {
        return Ee.from(kn(e));
      } catch {
        g(!1, "invalid function fragment", "obj", e);
      }
    else if (e instanceof le) {
      const s = Lo("function", e), i = Ke(e), o = df(e);
      let a = [];
      Je(e, Et(["returns"])).has("returns") && (a = Ke(e));
      const c = pf(e);
      return or(e), new Ee(Y, s, o, i, a, c);
    }
    let n = e.stateMutability;
    return n == null && (n = "payable", typeof e.constant == "boolean" ? (n = "view", e.constant || (n = "payable", typeof e.payable == "boolean" && !e.payable && (n = "nonpayable"))) : typeof e.payable == "boolean" && !e.payable && (n = "nonpayable")), new Ee(Y, e.name, n, e.inputs ? e.inputs.map(lt.from) : [], e.outputs ? e.outputs.map(lt.from) : [], e.gas != null ? e.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FunctionFragment**.
   */
  static isFragment(e) {
    return e && e[It] === Nu;
  }
}
class nr extends Mo {
  /**
   *  @private
   */
  constructor(t, e, n) {
    super(t, "struct", e, n), Object.defineProperty(this, It, { value: Pu });
  }
  /**
   *  Returns a string representation of this struct as %%format%%.
   */
  format() {
    throw new Error("@TODO");
  }
  /**
   *  Returns a new **StructFragment** for %%obj%%.
   */
  static from(t) {
    if (typeof t == "string")
      try {
        return nr.from(kn(t));
      } catch {
        g(!1, "invalid struct fragment", "obj", t);
      }
    else if (t instanceof le) {
      const e = Lo("struct", t), n = Ke(t);
      return or(t), new nr(Y, e, n);
    }
    return new nr(Y, t.name, t.inputs ? t.inputs.map(lt.from) : []);
  }
  // @TODO: fix this return type
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **StructFragment**.
   */
  static isFragment(t) {
    return t && t[It] === Pu;
  }
}
const fe = /* @__PURE__ */ new Map();
fe.set(0, "GENERIC_PANIC");
fe.set(1, "ASSERT_FALSE");
fe.set(17, "OVERFLOW");
fe.set(18, "DIVIDE_BY_ZERO");
fe.set(33, "ENUM_RANGE_ERROR");
fe.set(34, "BAD_STORAGE_DATA");
fe.set(49, "STACK_UNDERFLOW");
fe.set(50, "ARRAY_RANGE_ERROR");
fe.set(65, "OUT_OF_MEMORY");
fe.set(81, "UNINITIALIZED_FUNCTION_CALL");
const Mg = new RegExp(/^bytes([0-9]*)$/), _g = new RegExp(/^(u?int)([0-9]*)$/);
let na = null;
function Gg(r, t, e, n) {
  let s = "missing revert data", i = null;
  const o = null;
  let a = null;
  if (e) {
    s = "execution reverted";
    const u = K(e);
    if (e = T(e), u.length === 0)
      s += " (no data present; likely require(false) occurred", i = "require(false)";
    else if (u.length % 32 !== 4)
      s += " (could not decode reason; invalid data length)";
    else if (T(u.slice(0, 4)) === "0x08c379a0")
      try {
        i = n.decode(["string"], u.slice(4))[0], a = {
          signature: "Error(string)",
          name: "Error",
          args: [i]
        }, s += `: ${JSON.stringify(i)}`;
      } catch {
        s += " (could not decode reason; invalid string data)";
      }
    else if (T(u.slice(0, 4)) === "0x4e487b71")
      try {
        const f = Number(n.decode(["uint256"], u.slice(4))[0]);
        a = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [f]
        }, i = `Panic due to ${fe.get(f) || "UNKNOWN"}(${f})`, s += `: ${i}`;
      } catch {
        s += " (could not decode panic code)";
      }
    else
      s += " (unknown custom error)";
  }
  const c = {
    to: t.to ? V(t.to) : null,
    data: t.data || "0x"
  };
  return t.from && (c.from = V(t.from)), tt(s, "CALL_EXCEPTION", {
    action: r,
    data: e,
    reason: i,
    transaction: c,
    invocation: o,
    revert: a
  });
}
var sn, yr;
const Eo = class Eo {
  constructor() {
    y(this, sn);
  }
  /**
   *  Get the default values for the given %%types%%.
   *
   *  For example, a ``uint`` is by default ``0`` and ``bool``
   *  is by default ``false``.
   */
  getDefaultValue(t) {
    const e = t.map((s) => x(this, sn, yr).call(this, lt.from(s)));
    return new Di(e, "_").defaultValue();
  }
  /**
   *  Encode the %%values%% as the %%types%% into ABI data.
   *
   *  @returns DataHexstring
   */
  encode(t, e) {
    Zu(e.length, t.length, "types/values length mismatch");
    const n = t.map((o) => x(this, sn, yr).call(this, lt.from(o))), s = new Di(n, "_"), i = new pa();
    return s.encode(i, e), i.data;
  }
  /**
   *  Decode the ABI %%data%% as the %%types%% into values.
   *
   *  If %%loose%% decoding is enabled, then strict padding is
   *  not enforced. Some older versions of Solidity incorrectly
   *  padded event data emitted from ``external`` functions.
   */
  decode(t, e, n) {
    const s = t.map((o) => x(this, sn, yr).call(this, lt.from(o)));
    return new Di(s, "_").decode(new ga(e, n));
  }
  /**
   *  Returns the shared singleton instance of a default [[AbiCoder]].
   *
   *  On the first call, the instance is created internally.
   */
  static defaultAbiCoder() {
    return na == null && (na = new Eo()), na;
  }
  /**
   *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
   *  result %%data%% for the [[CallExceptionAction]] %%action%% against
   *  the Transaction %%tx%%.
   */
  static getBuiltinCallException(t, e, n) {
    return Gg(t, e, n, Eo.defaultAbiCoder());
  }
};
sn = new WeakSet(), yr = function(t) {
  if (t.isArray())
    return new gp(x(this, sn, yr).call(this, t.arrayChildren), t.arrayLength, t.name);
  if (t.isTuple())
    return new Di(t.components.map((n) => x(this, sn, yr).call(this, n)), t.name);
  switch (t.baseType) {
    case "address":
      return new dp(t.name);
    case "bool":
      return new mp(t.name);
    case "string":
      return new kp(t.name);
    case "bytes":
      return new yp(t.name);
    case "":
      return new bp(t.name);
  }
  let e = t.type.match(_g);
  if (e) {
    let n = parseInt(e[2] || "256");
    return g(n !== 0 && n <= 256 && n % 8 === 0, "invalid " + e[1] + " bit length", "param", t), new xp(n / 8, e[1] === "int", t.name);
  }
  if (e = t.type.match(Mg), e) {
    let n = parseInt(e[1]);
    return g(n !== 0 && n <= 32, "invalid bytes length", "param", t), new wp(n, t.name);
  }
  g(!1, "invalid type", "type", t.type);
};
let Ns = Eo;
class Hg {
  /**
   *  @_ignore:
   */
  constructor(t, e, n) {
    /**
     *  The matching fragment for the ``topic0``.
     */
    m(this, "fragment");
    /**
     *  The name of the Event.
     */
    m(this, "name");
    /**
     *  The full Event signature.
     */
    m(this, "signature");
    /**
     *  The topic hash for the Event.
     */
    m(this, "topic");
    /**
     *  The arguments passed into the Event with ``emit``.
     */
    m(this, "args");
    const s = t.name, i = t.format();
    B(this, {
      fragment: t,
      name: s,
      signature: i,
      topic: e,
      args: n
    });
  }
}
class Qg {
  /**
   *  @_ignore:
   */
  constructor(t, e, n, s) {
    /**
     *  The matching fragment from the transaction ``data``.
     */
    m(this, "fragment");
    /**
     *  The name of the Function from the transaction ``data``.
     */
    m(this, "name");
    /**
     *  The arguments passed to the Function from the transaction ``data``.
     */
    m(this, "args");
    /**
     *  The full Function signature from the transaction ``data``.
     */
    m(this, "signature");
    /**
     *  The selector for the Function from the transaction ``data``.
     */
    m(this, "selector");
    /**
     *  The ``value`` (in wei) from the transaction.
     */
    m(this, "value");
    const i = t.name, o = t.format();
    B(this, {
      fragment: t,
      name: i,
      args: n,
      signature: o,
      selector: e,
      value: s
    });
  }
}
class Vg {
  /**
   *  @_ignore:
   */
  constructor(t, e, n) {
    /**
     *  The matching fragment.
     */
    m(this, "fragment");
    /**
     *  The name of the Error.
     */
    m(this, "name");
    /**
     *  The arguments passed to the Error with ``revert``.
     */
    m(this, "args");
    /**
     *  The full Error signature.
     */
    m(this, "signature");
    /**
     *  The selector for the Error.
     */
    m(this, "selector");
    const s = t.name, i = t.format();
    B(this, {
      fragment: t,
      name: s,
      args: n,
      signature: i,
      selector: e
    });
  }
}
class xu {
  /**
   *  @_ignore:
   */
  constructor(t) {
    /**
     *  The ``keccak256`` of the value logged.
     */
    m(this, "hash");
    /**
     *  @_ignore:
     */
    m(this, "_isIndexed");
    B(this, { hash: t, _isIndexed: !0 });
  }
  /**
   *  Returns ``true`` if %%value%% is an **Indexed**.
   *
   *  This provides a Type Guard for property access.
   */
  static isIndexed(t) {
    return !!(t && t._isIndexed);
  }
}
const ku = {
  0: "generic panic",
  1: "assert(false)",
  17: "arithmetic overflow",
  18: "division or modulo by zero",
  33: "enum overflow",
  34: "invalid encoded storage byte array accessed",
  49: "out-of-bounds array access; popping on an empty array",
  50: "out-of-bounds access of an array or bytesN",
  65: "out of memory",
  81: "uninitialized function"
}, Ru = {
  "0x08c379a0": {
    signature: "Error(string)",
    name: "Error",
    inputs: ["string"],
    reason: (r) => `reverted with reason string ${JSON.stringify(r)}`
  },
  "0x4e487b71": {
    signature: "Panic(uint256)",
    name: "Panic",
    inputs: ["uint256"],
    reason: (r) => {
      let t = "unknown panic code";
      return r >= 0 && r <= 255 && ku[r.toString()] && (t = ku[r.toString()]), `reverted with panic code 0x${r.toString(16)} (${t})`;
    }
  }
};
var pe, ge, me, ft, Yr, Ji, qr, zi;
const Nr = class Nr {
  /**
   *  Create a new Interface for the %%fragments%%.
   */
  constructor(t) {
    // Find a function definition by any means necessary (unless it is ambiguous)
    y(this, Yr);
    // Find an event definition by any means necessary (unless it is ambiguous)
    y(this, qr);
    /**
     *  All the Contract ABI members (i.e. methods, events, errors, etc).
     */
    m(this, "fragments");
    /**
     *  The Contract constructor.
     */
    m(this, "deploy");
    /**
     *  The Fallback method, if any.
     */
    m(this, "fallback");
    /**
     *  If receiving ether is supported.
     */
    m(this, "receive");
    y(this, pe, void 0);
    y(this, ge, void 0);
    y(this, me, void 0);
    //    #structs: Map<string, StructFragment>;
    y(this, ft, void 0);
    let e = [];
    typeof t == "string" ? e = JSON.parse(t) : e = t, d(this, me, /* @__PURE__ */ new Map()), d(this, pe, /* @__PURE__ */ new Map()), d(this, ge, /* @__PURE__ */ new Map());
    const n = [];
    for (const o of e)
      try {
        n.push(ar.from(o));
      } catch (a) {
        console.log("EE", a);
      }
    B(this, {
      fragments: Object.freeze(n)
    });
    let s = null, i = !1;
    d(this, ft, this.getAbiCoder()), this.fragments.forEach((o, a) => {
      let c;
      switch (o.type) {
        case "constructor":
          if (this.deploy) {
            console.log("duplicate definition - constructor");
            return;
          }
          B(this, { deploy: o });
          return;
        case "fallback":
          o.inputs.length === 0 ? i = !0 : (g(!s || o.payable !== s.payable, "conflicting fallback fragments", `fragments[${a}]`, o), s = o, i = s.payable);
          return;
        case "function":
          c = l(this, me);
          break;
        case "event":
          c = l(this, ge);
          break;
        case "error":
          c = l(this, pe);
          break;
        default:
          return;
      }
      const u = o.format();
      c.has(u) || c.set(u, o);
    }), this.deploy || B(this, {
      deploy: Qe.from("constructor()")
    }), B(this, { fallback: s, receive: i });
  }
  /**
   *  Returns the entire Human-Readable ABI, as an array of
   *  signatures, optionally as %%minimal%% strings, which
   *  removes parameter names and unneceesary spaces.
   */
  format(t) {
    const e = t ? "minimal" : "full";
    return this.fragments.map((s) => s.format(e));
  }
  /**
   *  Return the JSON-encoded ABI. This is the format Solidiy
   *  returns.
   */
  formatJson() {
    const t = this.fragments.map((e) => e.format("json"));
    return JSON.stringify(t.map((e) => JSON.parse(e)));
  }
  /**
   *  The ABI coder that will be used to encode and decode binary
   *  data.
   */
  getAbiCoder() {
    return Ns.defaultAbiCoder();
  }
  /**
   *  Get the function name for %%key%%, which may be a function selector,
   *  function name or function signature that belongs to the ABI.
   */
  getFunctionName(t) {
    const e = x(this, Yr, Ji).call(this, t, null, !1);
    return g(e, "no matching function", "key", t), e.name;
  }
  /**
   *  Returns true if %%key%% (a function selector, function name or
   *  function signature) is present in the ABI.
   *
   *  In the case of a function name, the name may be ambiguous, so
   *  accessing the [[FunctionFragment]] may require refinement.
   */
  hasFunction(t) {
    return !!x(this, Yr, Ji).call(this, t, null, !1);
  }
  /**
   *  Get the [[FunctionFragment]] for %%key%%, which may be a function
   *  selector, function name or function signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple functions match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single function in
   *  the ABI, this will throw.
   */
  getFunction(t, e) {
    return x(this, Yr, Ji).call(this, t, e || null, !0);
  }
  /**
   *  Iterate over all functions, calling %%callback%%, sorted by their name.
   */
  forEachFunction(t) {
    const e = Array.from(l(this, me).keys());
    e.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t(l(this, me).get(s), n);
    }
  }
  /**
   *  Get the event name for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   */
  getEventName(t) {
    const e = x(this, qr, zi).call(this, t, null, !1);
    return g(e, "no matching event", "key", t), e.name;
  }
  /**
   *  Returns true if %%key%% (an event topic hash, event name or
   *  event signature) is present in the ABI.
   *
   *  In the case of an event name, the name may be ambiguous, so
   *  accessing the [[EventFragment]] may require refinement.
   */
  hasEvent(t) {
    return !!x(this, qr, zi).call(this, t, null, !1);
  }
  /**
   *  Get the [[EventFragment]] for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple events match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single event in
   *  the ABI, this will throw.
   */
  getEvent(t, e) {
    return x(this, qr, zi).call(this, t, e || null, !0);
  }
  /**
   *  Iterate over all events, calling %%callback%%, sorted by their name.
   */
  forEachEvent(t) {
    const e = Array.from(l(this, ge).keys());
    e.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t(l(this, ge).get(s), n);
    }
  }
  /**
   *  Get the [[ErrorFragment]] for %%key%%, which may be an error
   *  selector, error name or error signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple errors match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single error in
   *  the ABI, this will throw.
   */
  getError(t, e) {
    if (X(t)) {
      const s = t.toLowerCase();
      if (Ru[s])
        return Ct.from(Ru[s].signature);
      for (const i of l(this, pe).values())
        if (s === i.selector)
          return i;
      return null;
    }
    if (t.indexOf("(") === -1) {
      const s = [];
      for (const [i, o] of l(this, pe))
        i.split(
          "("
          /* fix:) */
        )[0] === t && s.push(o);
      if (s.length === 0)
        return t === "Error" ? Ct.from("error Error(string)") : t === "Panic" ? Ct.from("error Panic(uint256)") : null;
      if (s.length > 1) {
        const i = s.map((o) => JSON.stringify(o.format())).join(", ");
        g(!1, `ambiguous error description (i.e. ${i})`, "name", t);
      }
      return s[0];
    }
    if (t = Ct.from(t).format(), t === "Error(string)")
      return Ct.from("error Error(string)");
    if (t === "Panic(uint256)")
      return Ct.from("error Panic(uint256)");
    const n = l(this, pe).get(t);
    return n || null;
  }
  /**
   *  Iterate over all errors, calling %%callback%%, sorted by their name.
   */
  forEachError(t) {
    const e = Array.from(l(this, pe).keys());
    e.sort((n, s) => n.localeCompare(s));
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      t(l(this, pe).get(s), n);
    }
  }
  // Get the 4-byte selector used by Solidity to identify a function
  /*
  getSelector(fragment: ErrorFragment | FunctionFragment): string {
      if (typeof(fragment) === "string") {
          const matches: Array<Fragment> = [ ];
  
          try { matches.push(this.getFunction(fragment)); } catch (error) { }
          try { matches.push(this.getError(<string>fragment)); } catch (_) { }
  
          if (matches.length === 0) {
              logger.throwArgumentError("unknown fragment", "key", fragment);
          } else if (matches.length > 1) {
              logger.throwArgumentError("ambiguous fragment matches function and error", "key", fragment);
          }
  
          fragment = matches[0];
      }
  
      return dataSlice(id(fragment.format()), 0, 4);
  }
      */
  // Get the 32-byte topic hash used by Solidity to identify an event
  /*
  getEventTopic(fragment: EventFragment): string {
      //if (typeof(fragment) === "string") { fragment = this.getEvent(eventFragment); }
      return id(fragment.format());
  }
  */
  _decodeParams(t, e) {
    return l(this, ft).decode(t, e);
  }
  _encodeParams(t, e) {
    return l(this, ft).encode(t, e);
  }
  /**
   *  Encodes a ``tx.data`` object for deploying the Contract with
   *  the %%values%% as the constructor arguments.
   */
  encodeDeploy(t) {
    return this._encodeParams(this.deploy.inputs, t || []);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified error (see [[getError]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeErrorResult(t, e) {
    if (typeof t == "string") {
      const n = this.getError(t);
      g(n, "unknown error", "fragment", t), t = n;
    }
    return g($(e, 0, 4) === t.selector, `data signature does not match error ${t.name}.`, "data", e), this._decodeParams(t.inputs, $(e, 4));
  }
  /**
   *  Encodes the transaction revert data for a call result that
   *  reverted from the the Contract with the sepcified %%error%%
   *  (see [[getError]] for valid values for %%fragment%%) with the %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeErrorResult(t, e) {
    if (typeof t == "string") {
      const n = this.getError(t);
      g(n, "unknown error", "fragment", t), t = n;
    }
    return rt([
      t.selector,
      this._encodeParams(t.inputs, e || [])
    ]);
  }
  /**
   *  Decodes the %%data%% from a transaction ``tx.data`` for
   *  the function specified (see [[getFunction]] for valid values
   *  for %%fragment%%).
   *
   *  Most developers should prefer the [[parseTransaction]] method
   *  instead, which will automatically detect the fragment.
   */
  decodeFunctionData(t, e) {
    if (typeof t == "string") {
      const n = this.getFunction(t);
      g(n, "unknown function", "fragment", t), t = n;
    }
    return g($(e, 0, 4) === t.selector, `data signature does not match function ${t.name}.`, "data", e), this._decodeParams(t.inputs, $(e, 4));
  }
  /**
   *  Encodes the ``tx.data`` for a transaction that calls the function
   *  specified (see [[getFunction]] for valid values for %%fragment%%) with
   *  the %%values%%.
   */
  encodeFunctionData(t, e) {
    if (typeof t == "string") {
      const n = this.getFunction(t);
      g(n, "unknown function", "fragment", t), t = n;
    }
    return rt([
      t.selector,
      this._encodeParams(t.inputs, e || [])
    ]);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeFunctionResult(t, e) {
    if (typeof t == "string") {
      const i = this.getFunction(t);
      g(i, "unknown function", "fragment", t), t = i;
    }
    let n = "invalid length for result data";
    const s = vt(e);
    if (s.length % 32 === 0)
      try {
        return l(this, ft).decode(t.outputs, s);
      } catch {
        n = "could not decode result data";
      }
    b(!1, n, "BAD_DATA", {
      value: T(s),
      info: { method: t.name, signature: t.format() }
    });
  }
  makeError(t, e) {
    const n = K(t, "data"), s = Ns.getBuiltinCallException("call", e, n), i = "execution reverted (unknown custom error)";
    if (s.message.startsWith(i)) {
      const a = T(n.slice(0, 4)), c = this.getError(a);
      if (c)
        try {
          const u = l(this, ft).decode(c.inputs, n.slice(4));
          s.revert = {
            name: c.name,
            signature: c.format(),
            args: u
          }, s.reason = s.revert.signature, s.message = `execution reverted: ${s.reason}`;
        } catch {
          s.message = "execution reverted (coult not decode custom error)";
        }
    }
    const o = this.parseTransaction(e);
    return o && (s.invocation = {
      method: o.name,
      signature: o.signature,
      args: o.args
    }), s;
  }
  /**
   *  Encodes the result data (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values
   *  for %%fragment%%) with %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeFunctionResult(t, e) {
    if (typeof t == "string") {
      const n = this.getFunction(t);
      g(n, "unknown function", "fragment", t), t = n;
    }
    return T(l(this, ft).encode(t.outputs, e || []));
  }
  /*
      spelunk(inputs: Array<ParamType>, values: ReadonlyArray<any>, processfunc: (type: string, value: any) => Promise<any>): Promise<Array<any>> {
          const promises: Array<Promise<>> = [ ];
          const process = function(type: ParamType, value: any): any {
              if (type.baseType === "array") {
                  return descend(type.child
              }
              if (type. === "address") {
              }
          };
  
          const descend = function (inputs: Array<ParamType>, values: ReadonlyArray<any>) {
              if (inputs.length !== values.length) { throw new Error("length mismatch"); }
              
          };
  
          const result: Array<any> = [ ];
          values.forEach((value, index) => {
              if (value == null) {
                  topics.push(null);
              } else if (param.baseType === "array" || param.baseType === "tuple") {
                  logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
              } else if (Array.isArray(value)) {
                  topics.push(value.map((value) => encodeTopic(param, value)));
              } else {
                  topics.push(encodeTopic(param, value));
              }
          });
      }
  */
  // Create the filter for the event with search criteria (e.g. for eth_filterLog)
  encodeFilterTopics(t, e) {
    if (typeof t == "string") {
      const i = this.getEvent(t);
      g(i, "unknown event", "eventFragment", t), t = i;
    }
    b(e.length <= t.inputs.length, `too many arguments for ${t.format()}`, "UNEXPECTED_ARGUMENT", { count: e.length, expectedCount: t.inputs.length });
    const n = [];
    t.anonymous || n.push(t.topicHash);
    const s = (i, o) => i.type === "string" ? ir(o) : i.type === "bytes" ? q(T(o)) : (i.type === "bool" && typeof o == "boolean" ? o = o ? "0x01" : "0x00" : i.type.match(/^u?int/) ? o = Nn(o) : i.type.match(/^bytes/) ? o = Sh(o, 32) : i.type === "address" && l(this, ft).encode(["address"], [o]), sr(T(o), 32));
    for (e.forEach((i, o) => {
      const a = t.inputs[o];
      if (!a.indexed) {
        g(i == null, "cannot filter non-indexed parameters; must be null", "contract." + a.name, i);
        return;
      }
      i == null ? n.push(null) : a.baseType === "array" || a.baseType === "tuple" ? g(!1, "filtering with tuples or arrays not supported", "contract." + a.name, i) : Array.isArray(i) ? n.push(i.map((c) => s(a, c))) : n.push(s(a, i));
    }); n.length && n[n.length - 1] === null; )
      n.pop();
    return n;
  }
  encodeEventLog(t, e) {
    if (typeof t == "string") {
      const o = this.getEvent(t);
      g(o, "unknown event", "eventFragment", t), t = o;
    }
    const n = [], s = [], i = [];
    return t.anonymous || n.push(t.topicHash), g(e.length === t.inputs.length, "event arguments/values mismatch", "values", e), t.inputs.forEach((o, a) => {
      const c = e[a];
      if (o.indexed)
        if (o.type === "string")
          n.push(ir(c));
        else if (o.type === "bytes")
          n.push(q(c));
        else {
          if (o.baseType === "tuple" || o.baseType === "array")
            throw new Error("not implemented");
          n.push(l(this, ft).encode([o.type], [c]));
        }
      else
        s.push(o), i.push(c);
    }), {
      data: l(this, ft).encode(s, i),
      topics: n
    };
  }
  // Decode a filter for the event and the search criteria
  decodeEventLog(t, e, n) {
    if (typeof t == "string") {
      const w = this.getEvent(t);
      g(w, "unknown event", "eventFragment", t), t = w;
    }
    if (n != null && !t.anonymous) {
      const w = t.topicHash;
      g(X(n[0], 32) && n[0].toLowerCase() === w, "fragment/topic mismatch", "topics[0]", n[0]), n = n.slice(1);
    }
    const s = [], i = [], o = [];
    t.inputs.forEach((w, E) => {
      w.indexed ? w.type === "string" || w.type === "bytes" || w.baseType === "tuple" || w.baseType === "array" ? (s.push(lt.from({ type: "bytes32", name: w.name })), o.push(!0)) : (s.push(w), o.push(!1)) : (i.push(w), o.push(!1));
    });
    const a = n != null ? l(this, ft).decode(s, rt(n)) : null, c = l(this, ft).decode(i, e, !0), u = [], f = [];
    let h = 0, p = 0;
    return t.inputs.forEach((w, E) => {
      let A = null;
      if (w.indexed)
        if (a == null)
          A = new xu(null);
        else if (o[E])
          A = new xu(a[p++]);
        else
          try {
            A = a[p++];
          } catch (N) {
            A = N;
          }
      else
        try {
          A = c[h++];
        } catch (N) {
          A = N;
        }
      u.push(A), f.push(w.name || null);
    }), eo.fromItems(u, f);
  }
  /**
   *  Parses a transaction, finding the matching function and extracts
   *  the parameter values along with other useful function details.
   *
   *  If the matching function cannot be found, return null.
   */
  parseTransaction(t) {
    const e = K(t.data, "tx.data"), n = I(t.value != null ? t.value : 0, "tx.value"), s = this.getFunction(T(e.slice(0, 4)));
    if (!s)
      return null;
    const i = l(this, ft).decode(s.inputs, e.slice(4));
    return new Qg(s, s.selector, i, n);
  }
  parseCallResult(t) {
    throw new Error("@TODO");
  }
  /**
   *  Parses a receipt log, finding the matching event and extracts
   *  the parameter values along with other useful event details.
   *
   *  If the matching event cannot be found, returns null.
   */
  parseLog(t) {
    const e = this.getEvent(t.topics[0]);
    return !e || e.anonymous ? null : new Hg(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics));
  }
  /**
   *  Parses a revert data, finding the matching error and extracts
   *  the parameter values along with other useful error details.
   *
   *  If the matching error cannot be found, returns null.
   */
  parseError(t) {
    const e = T(t), n = this.getError($(e, 0, 4));
    if (!n)
      return null;
    const s = l(this, ft).decode(n.inputs, $(e, 4));
    return new Vg(n, n.selector, s);
  }
  /**
   *  Creates a new [[Interface]] from the ABI %%value%%.
   *
   *  The %%value%% may be provided as an existing [[Interface]] object,
   *  a JSON-encoded ABI or any Human-Readable ABI format.
   */
  static from(t) {
    return t instanceof Nr ? t : typeof t == "string" ? new Nr(JSON.parse(t)) : typeof t.format == "function" ? new Nr(t.format("json")) : new Nr(t);
  }
};
pe = new WeakMap(), ge = new WeakMap(), me = new WeakMap(), ft = new WeakMap(), Yr = new WeakSet(), Ji = function(t, e, n) {
  if (X(t)) {
    const i = t.toLowerCase();
    for (const o of l(this, me).values())
      if (i === o.selector)
        return o;
    return null;
  }
  if (t.indexOf("(") === -1) {
    const i = [];
    for (const [o, a] of l(this, me))
      o.split(
        "("
        /* fix:) */
      )[0] === t && i.push(a);
    if (e) {
      const o = e.length > 0 ? e[e.length - 1] : null;
      let a = e.length, c = !0;
      mt.isTyped(o) && o.type === "overrides" && (c = !1, a--);
      for (let u = i.length - 1; u >= 0; u--) {
        const f = i[u].inputs.length;
        f !== a && (!c || f !== a - 1) && i.splice(u, 1);
      }
      for (let u = i.length - 1; u >= 0; u--) {
        const f = i[u].inputs;
        for (let h = 0; h < e.length; h++)
          if (mt.isTyped(e[h])) {
            if (h >= f.length) {
              if (e[h].type === "overrides")
                continue;
              i.splice(u, 1);
              break;
            }
            if (e[h].type !== f[h].baseType) {
              i.splice(u, 1);
              break;
            }
          }
      }
    }
    if (i.length === 1 && e && e.length !== i[0].inputs.length) {
      const o = e[e.length - 1];
      (o == null || Array.isArray(o) || typeof o != "object") && i.splice(0, 1);
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const o = i.map((a) => JSON.stringify(a.format())).join(", ");
      g(!1, `ambiguous function description (i.e. matches ${o})`, "key", t);
    }
    return i[0];
  }
  const s = l(this, me).get(Ee.from(t).format());
  return s || null;
}, qr = new WeakSet(), zi = function(t, e, n) {
  if (X(t)) {
    const i = t.toLowerCase();
    for (const o of l(this, ge).values())
      if (i === o.topicHash)
        return o;
    return null;
  }
  if (t.indexOf("(") === -1) {
    const i = [];
    for (const [o, a] of l(this, ge))
      o.split(
        "("
        /* fix:) */
      )[0] === t && i.push(a);
    if (e) {
      for (let o = i.length - 1; o >= 0; o--)
        i[o].inputs.length < e.length && i.splice(o, 1);
      for (let o = i.length - 1; o >= 0; o--) {
        const a = i[o].inputs;
        for (let c = 0; c < e.length; c++)
          if (mt.isTyped(e[c]) && e[c].type !== a[c].baseType) {
            i.splice(o, 1);
            break;
          }
      }
    }
    if (i.length === 0)
      return null;
    if (i.length > 1 && n) {
      const o = i.map((a) => JSON.stringify(a.format())).join(", ");
      g(!1, `ambiguous event description (i.e. matches ${o})`, "key", t);
    }
    return i[0];
  }
  const s = l(this, ge).get(be.from(t).format());
  return s || null;
};
let va = Nr;
const gf = BigInt(0);
function Gs(r) {
  return r ?? null;
}
function gt(r) {
  return r == null ? null : r.toString();
}
class Cu {
  /**
   *  Creates a new FeeData for %%gasPrice%%, %%maxFeePerGas%% and
   *  %%maxPriorityFeePerGas%%.
   */
  constructor(t, e, n) {
    /**
     *  The gas price for legacy networks.
     */
    m(this, "gasPrice");
    /**
     *  The maximum fee to pay per gas.
     *
     *  The base fee per gas is defined by the network and based on
     *  congestion, increasing the cost during times of heavy load
     *  and lowering when less busy.
     *
     *  The actual fee per gas will be the base fee for the block
     *  and the priority fee, up to the max fee per gas.
     *
     *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
     */
    m(this, "maxFeePerGas");
    /**
     *  The additional amout to pay per gas to encourage a validator
     *  to include the transaction.
     *
     *  The purpose of this is to compensate the validator for the
     *  adjusted risk for including a given transaction.
     *
     *  This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))
     */
    m(this, "maxPriorityFeePerGas");
    B(this, {
      gasPrice: Gs(t),
      maxFeePerGas: Gs(e),
      maxPriorityFeePerGas: Gs(n)
    });
  }
  /**
   *  Returns a JSON-friendly value.
   */
  toJSON() {
    const { gasPrice: t, maxFeePerGas: e, maxPriorityFeePerGas: n } = this;
    return {
      _type: "FeeData",
      gasPrice: gt(t),
      maxFeePerGas: gt(e),
      maxPriorityFeePerGas: gt(n)
    };
  }
}
function co(r) {
  const t = {};
  r.to && (t.to = r.to), r.from && (t.from = r.from), r.data && (t.data = T(r.data));
  const e = "chainId,gasLimit,gasPrice,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
  for (const s of e)
    !(s in r) || r[s] == null || (t[s] = I(r[s], `request.${s}`));
  const n = "type,nonce".split(/,/);
  for (const s of n)
    !(s in r) || r[s] == null || (t[s] = L(r[s], `request.${s}`));
  return r.accessList && (t.accessList = xn(r.accessList)), "blockTag" in r && (t.blockTag = r.blockTag), "enableCcipRead" in r && (t.enableCcipRead = !!r.enableCcipRead), "customData" in r && (t.customData = r.customData), t;
}
var Se;
class Kg {
  /**
   *  Create a new **Block** object.
   *
   *  This should generally not be necessary as the unless implementing a
   *  low-level library.
   */
  constructor(t, e) {
    /**
     *  The provider connected to the block used to fetch additional details
     *  if necessary.
     */
    m(this, "provider");
    /**
     *  The block number, sometimes called the block height. This is a
     *  sequential number that is one higher than the parent block.
     */
    m(this, "number");
    /**
     *  The block hash.
     *
     *  This hash includes all properties, so can be safely used to identify
     *  an exact set of block properties.
     */
    m(this, "hash");
    /**
     *  The timestamp for this block, which is the number of seconds since
     *  epoch that this block was included.
     */
    m(this, "timestamp");
    /**
     *  The block hash of the parent block.
     */
    m(this, "parentHash");
    /**
     *  The nonce.
     *
     *  On legacy networks, this is the random number inserted which
     *  permitted the difficulty target to be reached.
     */
    m(this, "nonce");
    /**
     *  The difficulty target.
     *
     *  On legacy networks, this is the proof-of-work target required
     *  for a block to meet the protocol rules to be included.
     *
     *  On modern networks, this is a random number arrived at using
     *  randao.  @TODO: Find links?
     */
    m(this, "difficulty");
    /**
     *  The total gas limit for this block.
     */
    m(this, "gasLimit");
    /**
     *  The total gas used in this block.
     */
    m(this, "gasUsed");
    /**
     *  The miner coinbase address, wihch receives any subsidies for
     *  including this block.
     */
    m(this, "miner");
    /**
     *  Any extra data the validator wished to include.
     */
    m(this, "extraData");
    /**
     *  The base fee per gas that all transactions in this block were
     *  charged.
     *
     *  This adjusts after each block, depending on how congested the network
     *  is.
     */
    m(this, "baseFeePerGas");
    y(this, Se, void 0);
    d(this, Se, t.transactions.map((n) => typeof n != "string" ? new ti(n, e) : n)), B(this, {
      provider: e,
      hash: Gs(t.hash),
      number: t.number,
      timestamp: t.timestamp,
      parentHash: t.parentHash,
      nonce: t.nonce,
      difficulty: t.difficulty,
      gasLimit: t.gasLimit,
      gasUsed: t.gasUsed,
      miner: t.miner,
      extraData: t.extraData,
      baseFeePerGas: Gs(t.baseFeePerGas)
    });
  }
  /**
   *  Returns the list of transaction hashes, in the order
   *  they were executed within the block.
   */
  get transactions() {
    return l(this, Se).map((t) => typeof t == "string" ? t : t.hash);
  }
  /**
   *  Returns the complete transactions, in the order they
   *  were executed within the block.
   *
   *  This is only available for blocks which prefetched
   *  transactions, by passing ``true`` to %%prefetchTxs%%
   *  into [[Provider-getBlock]].
   */
  get prefetchedTransactions() {
    const t = l(this, Se).slice();
    return t.length === 0 ? [] : (b(typeof t[0] == "object", "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
      operation: "transactionResponses()"
    }), t);
  }
  /**
   *  Returns a JSON-friendly value.
   */
  toJSON() {
    const { baseFeePerGas: t, difficulty: e, extraData: n, gasLimit: s, gasUsed: i, hash: o, miner: a, nonce: c, number: u, parentHash: f, timestamp: h, transactions: p } = this;
    return {
      _type: "Block",
      baseFeePerGas: gt(t),
      difficulty: gt(e),
      extraData: n,
      gasLimit: gt(s),
      gasUsed: gt(i),
      hash: o,
      miner: a,
      nonce: c,
      number: u,
      parentHash: f,
      timestamp: h,
      transactions: p
    };
  }
  [Symbol.iterator]() {
    let t = 0;
    const e = this.transactions;
    return {
      next: () => t < this.length ? {
        value: e[t++],
        done: !1
      } : { value: void 0, done: !0 }
    };
  }
  /**
   *  The number of transactions in this block.
   */
  get length() {
    return l(this, Se).length;
  }
  /**
   *  The [[link-js-date]] this block was included at.
   */
  get date() {
    return this.timestamp == null ? null : new Date(this.timestamp * 1e3);
  }
  /**
   *  Get the transaction at %%indexe%% within this block.
   */
  async getTransaction(t) {
    let e;
    if (typeof t == "number")
      e = l(this, Se)[t];
    else {
      const n = t.toLowerCase();
      for (const s of l(this, Se))
        if (typeof s == "string") {
          if (s !== n)
            continue;
          e = s;
          break;
        } else {
          if (s.hash === n)
            continue;
          e = s;
          break;
        }
    }
    if (e == null)
      throw new Error("no such tx");
    return typeof e == "string" ? await this.provider.getTransaction(e) : e;
  }
  /**
   *  If a **Block** was fetched with a request to include the transactions
   *  this will allow synchronous access to those transactions.
   *
   *  If the transactions were not prefetched, this will throw.
   */
  getPrefetchedTransaction(t) {
    const e = this.prefetchedTransactions;
    if (typeof t == "number")
      return e[t];
    t = t.toLowerCase();
    for (const n of e)
      if (n.hash === t)
        return n;
    g(!1, "no matching transaction", "indexOrHash", t);
  }
  /**
   *  Returns true if this block been mined. This provides a type guard
   *  for all properties on a [[MinedBlock]].
   */
  isMined() {
    return !!this.hash;
  }
  /**
   *  Returns true if this block is an [[link-eip-2930]] block.
   */
  isLondon() {
    return !!this.baseFeePerGas;
  }
  /**
   *  @_ignore:
   */
  orphanedEvent() {
    if (!this.isMined())
      throw new Error("");
    return Jg(this);
  }
}
Se = new WeakMap();
class xi {
  /**
   *  @_ignore:
   */
  constructor(t, e) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    m(this, "provider");
    /**
     *  The transaction hash of the transaction this log occurred in. Use the
     *  [[Log-getTransaction]] to get the [[TransactionResponse]].
     */
    m(this, "transactionHash");
    /**
     *  The block hash of the block this log occurred in. Use the
     *  [[Log-getBlock]] to get the [[Block]].
     */
    m(this, "blockHash");
    /**
     *  The block number of the block this log occurred in. It is preferred
     *  to use the [[Block-hash]] when fetching the related [[Block]],
     *  since in the case of an orphaned block, the block at that height may
     *  have changed.
     */
    m(this, "blockNumber");
    /**
     *  If the **Log** represents a block that was removed due to an orphaned
     *  block, this will be true.
     *
     *  This can only happen within an orphan event listener.
     */
    m(this, "removed");
    /**
     *  The address of the contract that emitted this log.
     */
    m(this, "address");
    /**
     *  The data included in this log when it was emitted.
     */
    m(this, "data");
    /**
     *  The indexed topics included in this log when it was emitted.
     *
     *  All topics are included in the bloom filters, so they can be
     *  efficiently filtered using the [[Provider-getLogs]] method.
     */
    m(this, "topics");
    /**
     *  The index within the block this log occurred at. This is generally
     *  not useful to developers, but can be used with the various roots
     *  to proof inclusion within a block.
     */
    m(this, "index");
    /**
     *  The index within the transaction of this log.
     */
    m(this, "transactionIndex");
    this.provider = e;
    const n = Object.freeze(t.topics.slice());
    B(this, {
      transactionHash: t.transactionHash,
      blockHash: t.blockHash,
      blockNumber: t.blockNumber,
      removed: t.removed,
      address: t.address,
      data: t.data,
      topics: n,
      index: t.index,
      transactionIndex: t.transactionIndex
    });
  }
  /**
   *  Returns a JSON-compatible object.
   */
  toJSON() {
    const { address: t, blockHash: e, blockNumber: n, data: s, index: i, removed: o, topics: a, transactionHash: c, transactionIndex: u } = this;
    return {
      _type: "log",
      address: t,
      blockHash: e,
      blockNumber: n,
      data: s,
      index: i,
      removed: o,
      topics: a,
      transactionHash: c,
      transactionIndex: u
    };
  }
  /**
   *  Returns the block that this log occurred in.
   */
  async getBlock() {
    const t = await this.provider.getBlock(this.blockHash);
    return b(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t;
  }
  /**
   *  Returns the transaction that this log occurred in.
   */
  async getTransaction() {
    const t = await this.provider.getTransaction(this.transactionHash);
    return b(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t;
  }
  /**
   *  Returns the transaction receipt fot the transaction that this
   *  log occurred in.
   */
  async getTransactionReceipt() {
    const t = await this.provider.getTransactionReceipt(this.transactionHash);
    return b(!!t, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), t;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return zg(this);
  }
}
var ai;
class mf {
  /**
   *  @_ignore:
   */
  constructor(t, e) {
    /**
     *  The provider connected to the log used to fetch additional details
     *  if necessary.
     */
    m(this, "provider");
    /**
     *  The address the transaction was sent to.
     */
    m(this, "to");
    /**
     *  The sender of the transaction.
     */
    m(this, "from");
    /**
     *  The address of the contract if the transaction was directly
     *  responsible for deploying one.
     *
     *  This is non-null **only** if the ``to`` is empty and the ``data``
     *  was successfully executed as initcode.
     */
    m(this, "contractAddress");
    /**
     *  The transaction hash.
     */
    m(this, "hash");
    /**
     *  The index of this transaction within the block transactions.
     */
    m(this, "index");
    /**
     *  The block hash of the [[Block]] this transaction was included in.
     */
    m(this, "blockHash");
    /**
     *  The block number of the [[Block]] this transaction was included in.
     */
    m(this, "blockNumber");
    /**
     *  The bloom filter bytes that represent all logs that occurred within
     *  this transaction. This is generally not useful for most developers,
     *  but can be used to validate the included logs.
     */
    m(this, "logsBloom");
    /**
     *  The actual amount of gas used by this transaction.
     *
     *  When creating a transaction, the amount of gas that will be used can
     *  only be approximated, but the sender must pay the gas fee for the
     *  entire gas limit. After the transaction, the difference is refunded.
     */
    m(this, "gasUsed");
    /**
     *  The amount of gas used by all transactions within the block for this
     *  and all transactions with a lower ``index``.
     *
     *  This is generally not useful for developers but can be used to
     *  validate certain aspects of execution.
     */
    m(this, "cumulativeGasUsed");
    /**
     *  The actual gas price used during execution.
     *
     *  Due to the complexity of [[link-eip-1559]] this value can only
     *  be caluclated after the transaction has been mined, snce the base
     *  fee is protocol-enforced.
     */
    m(this, "gasPrice");
    /**
     *  The [[link-eip-2718]] transaction type.
     */
    m(this, "type");
    //readonly byzantium!: boolean;
    /**
     *  The status of this transaction, indicating success (i.e. ``1``) or
     *  a revert (i.e. ``0``).
     *
     *  This is available in post-byzantium blocks, but some backends may
     *  backfill this value.
     */
    m(this, "status");
    /**
     *  The root hash of this transaction.
     *
     *  This is no present and was only included in pre-byzantium blocks, but
     *  could be used to validate certain parts of the receipt.
     */
    m(this, "root");
    y(this, ai, void 0);
    d(this, ai, Object.freeze(t.logs.map((s) => new xi(s, e))));
    let n = gf;
    t.effectiveGasPrice != null ? n = t.effectiveGasPrice : t.gasPrice != null && (n = t.gasPrice), B(this, {
      provider: e,
      to: t.to,
      from: t.from,
      contractAddress: t.contractAddress,
      hash: t.hash,
      index: t.index,
      blockHash: t.blockHash,
      blockNumber: t.blockNumber,
      logsBloom: t.logsBloom,
      gasUsed: t.gasUsed,
      cumulativeGasUsed: t.cumulativeGasUsed,
      gasPrice: n,
      type: t.type,
      //byzantium: tx.byzantium,
      status: t.status,
      root: t.root
    });
  }
  /**
   *  The logs for this transaction.
   */
  get logs() {
    return l(this, ai);
  }
  /**
   *  Returns a JSON-compatible representation.
   */
  toJSON() {
    const {
      to: t,
      from: e,
      contractAddress: n,
      hash: s,
      index: i,
      blockHash: o,
      blockNumber: a,
      logsBloom: c,
      logs: u,
      //byzantium, 
      status: f,
      root: h
    } = this;
    return {
      _type: "TransactionReceipt",
      blockHash: o,
      blockNumber: a,
      //byzantium, 
      contractAddress: n,
      cumulativeGasUsed: gt(this.cumulativeGasUsed),
      from: e,
      gasPrice: gt(this.gasPrice),
      gasUsed: gt(this.gasUsed),
      hash: s,
      index: i,
      logs: u,
      logsBloom: c,
      root: h,
      status: f,
      to: t
    };
  }
  /**
   *  @_ignore:
   */
  get length() {
    return this.logs.length;
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () => t < this.length ? { value: this.logs[t++], done: !1 } : { value: void 0, done: !0 }
    };
  }
  /**
   *  The total fee for this transaction, in wei.
   */
  get fee() {
    return this.gasUsed * this.gasPrice;
  }
  /**
   *  Resolves to the block this transaction occurred in.
   */
  async getBlock() {
    const t = await this.provider.getBlock(this.blockHash);
    if (t == null)
      throw new Error("TODO");
    return t;
  }
  /**
   *  Resolves to the transaction this transaction occurred in.
   */
  async getTransaction() {
    const t = await this.provider.getTransaction(this.hash);
    if (t == null)
      throw new Error("TODO");
    return t;
  }
  /**
   *  Resolves to the return value of the execution of this transaction.
   *
   *  Support for this feature is limited, as it requires an archive node
   *  with the ``debug_`` or ``trace_`` API enabled.
   */
  async getResult() {
    return await this.provider.getTransactionResult(this.hash);
  }
  /**
   *  Resolves to the number of confirmations this transaction has.
   */
  async confirmations() {
    return await this.provider.getBlockNumber() - this.blockNumber + 1;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return wf(this);
  }
  /**
   *  @_ignore:
   */
  reorderedEvent(t) {
    return b(!t || t.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" }), yf(this, t);
  }
}
ai = new WeakMap();
var on;
const Ec = class Ec {
  /**
   *  @_ignore:
   */
  constructor(t, e) {
    /**
     *  The provider this is connected to, which will influence how its
     *  methods will resolve its async inspection methods.
     */
    m(this, "provider");
    /**
     *  The block number of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    m(this, "blockNumber");
    /**
     *  The blockHash of the block that this transaction was included in.
     *
     *  This is ``null`` for pending transactions.
     */
    m(this, "blockHash");
    /**
     *  The index within the block that this transaction resides at.
     */
    m(this, "index");
    /**
     *  The transaction hash.
     */
    m(this, "hash");
    /**
     *  The [[link-eip-2718]] transaction envelope type. This is
     *  ``0`` for legacy transactions types.
     */
    m(this, "type");
    /**
     *  The receiver of this transaction.
     *
     *  If ``null``, then the transaction is an initcode transaction.
     *  This means the result of executing the [[data]] will be deployed
     *  as a new contract on chain (assuming it does not revert) and the
     *  address may be computed using [[getCreateAddress]].
     */
    m(this, "to");
    /**
     *  The sender of this transaction. It is implicitly computed
     *  from the transaction pre-image hash (as the digest) and the
     *  [[signature]] using ecrecover.
     */
    m(this, "from");
    /**
     *  The nonce, which is used to prevent replay attacks and offer
     *  a method to ensure transactions from a given sender are explicitly
     *  ordered.
     *
     *  When sending a transaction, this must be equal to the number of
     *  transactions ever sent by [[from]].
     */
    m(this, "nonce");
    /**
     *  The maximum units of gas this transaction can consume. If execution
     *  exceeds this, the entries transaction is reverted and the sender
     *  is charged for the full amount, despite not state changes being made.
     */
    m(this, "gasLimit");
    /**
     *  The gas price can have various values, depending on the network.
     *
     *  In modern networks, for transactions that are included this is
     *  the //effective gas price// (the fee per gas that was actually
     *  charged), while for transactions that have not been included yet
     *  is the [[maxFeePerGas]].
     *
     *  For legacy transactions, or transactions on legacy networks, this
     *  is the fee that will be charged per unit of gas the transaction
     *  consumes.
     */
    m(this, "gasPrice");
    /**
     *  The maximum priority fee (per unit of gas) to allow a
     *  validator to charge the sender. This is inclusive of the
     *  [[maxFeeFeePerGas]].
     */
    m(this, "maxPriorityFeePerGas");
    /**
     *  The maximum fee (per unit of gas) to allow this transaction
     *  to charge the sender.
     */
    m(this, "maxFeePerGas");
    /**
     *  The data.
     */
    m(this, "data");
    /**
     *  The value, in wei. Use [[formatEther]] to format this value
     *  as ether.
     */
    m(this, "value");
    /**
     *  The chain ID.
     */
    m(this, "chainId");
    /**
     *  The signature.
     */
    m(this, "signature");
    /**
     *  The [[link-eip-2930]] access list for transaction types that
     *  support it, otherwise ``null``.
     */
    m(this, "accessList");
    y(this, on, void 0);
    this.provider = e, this.blockNumber = t.blockNumber != null ? t.blockNumber : null, this.blockHash = t.blockHash != null ? t.blockHash : null, this.hash = t.hash, this.index = t.index, this.type = t.type, this.from = t.from, this.to = t.to || null, this.gasLimit = t.gasLimit, this.nonce = t.nonce, this.data = t.data, this.value = t.value, this.gasPrice = t.gasPrice, this.maxPriorityFeePerGas = t.maxPriorityFeePerGas != null ? t.maxPriorityFeePerGas : null, this.maxFeePerGas = t.maxFeePerGas != null ? t.maxFeePerGas : null, this.chainId = t.chainId, this.signature = t.signature, this.accessList = t.accessList != null ? t.accessList : null, d(this, on, -1);
  }
  /**
   *  Returns a JSON-compatible representation of this transaction.
   */
  toJSON() {
    const { blockNumber: t, blockHash: e, index: n, hash: s, type: i, to: o, from: a, nonce: c, data: u, signature: f, accessList: h } = this;
    return {
      _type: "TransactionReceipt",
      accessList: h,
      blockNumber: t,
      blockHash: e,
      chainId: gt(this.chainId),
      data: u,
      from: a,
      gasLimit: gt(this.gasLimit),
      gasPrice: gt(this.gasPrice),
      hash: s,
      maxFeePerGas: gt(this.maxFeePerGas),
      maxPriorityFeePerGas: gt(this.maxPriorityFeePerGas),
      nonce: c,
      signature: f,
      to: o,
      index: n,
      type: i,
      value: gt(this.value)
    };
  }
  /**
   *  Resolves to the Block that this transaction was included in.
   *
   *  This will return null if the transaction has not been included yet.
   */
  async getBlock() {
    let t = this.blockNumber;
    if (t == null) {
      const n = await this.getTransaction();
      n && (t = n.blockNumber);
    }
    if (t == null)
      return null;
    const e = this.provider.getBlock(t);
    if (e == null)
      throw new Error("TODO");
    return e;
  }
  /**
   *  Resolves to this transaction being re-requested from the
   *  provider. This can be used if you have an unmined transaction
   *  and wish to get an up-to-date populated instance.
   */
  async getTransaction() {
    return this.provider.getTransaction(this.hash);
  }
  /**
   *  Resolve to the number of confirmations this transaction has.
   */
  async confirmations() {
    if (this.blockNumber == null) {
      const { tx: e, blockNumber: n } = await pt({
        tx: this.getTransaction(),
        blockNumber: this.provider.getBlockNumber()
      });
      return e == null || e.blockNumber == null ? 0 : n - e.blockNumber + 1;
    }
    return await this.provider.getBlockNumber() - this.blockNumber + 1;
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(t, e) {
    const n = t ?? 1, s = e ?? 0;
    let i = l(this, on), o = -1, a = i === -1;
    const c = async () => {
      if (a)
        return null;
      const { blockNumber: p, nonce: w } = await pt({
        blockNumber: this.provider.getBlockNumber(),
        nonce: this.provider.getTransactionCount(this.from)
      });
      if (w < this.nonce) {
        i = p;
        return;
      }
      if (a)
        return null;
      const E = await this.getTransaction();
      if (!(E && E.blockNumber != null))
        for (o === -1 && (o = i - 3, o < l(this, on) && (o = l(this, on))); o <= p; ) {
          if (a)
            return null;
          const A = await this.provider.getBlock(o, !0);
          if (A == null)
            return;
          for (const N of A)
            if (N === this.hash)
              return;
          for (let N = 0; N < A.length; N++) {
            const P = await A.getTransaction(N);
            if (P.from === this.from && P.nonce === this.nonce) {
              if (a)
                return null;
              const C = await this.provider.getTransactionReceipt(P.hash);
              if (C == null || p - C.blockNumber + 1 < n)
                return;
              let S = "replaced";
              P.data === this.data && P.to === this.to && P.value === this.value ? S = "repriced" : P.data === "0x" && P.from === P.to && P.value === gf && (S = "cancelled"), b(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                cancelled: S === "replaced" || S === "cancelled",
                reason: S,
                replacement: P.replaceableTransaction(i),
                hash: P.hash,
                receipt: C
              });
            }
          }
          o++;
        }
    }, u = (p) => {
      if (p == null || p.status !== 0)
        return p;
      b(!1, "transaction execution reverted", "CALL_EXCEPTION", {
        action: "sendTransaction",
        data: null,
        reason: null,
        invocation: null,
        revert: null,
        transaction: {
          to: p.to,
          from: p.from,
          data: ""
          // @TODO: in v7, split out sendTransaction properties
        },
        receipt: p
      });
    }, f = await this.provider.getTransactionReceipt(this.hash);
    if (n === 0)
      return u(f);
    if (f) {
      if (await f.confirmations() >= n)
        return u(f);
    } else if (await c(), n === 0)
      return null;
    return await new Promise((p, w) => {
      const E = [], A = () => {
        E.forEach((P) => P());
      };
      if (E.push(() => {
        a = !0;
      }), s > 0) {
        const P = setTimeout(() => {
          A(), w(tt("wait for transaction timeout", "TIMEOUT"));
        }, s);
        E.push(() => {
          clearTimeout(P);
        });
      }
      const N = async (P) => {
        if (await P.confirmations() >= n) {
          A();
          try {
            p(u(P));
          } catch (C) {
            w(C);
          }
        }
      };
      if (E.push(() => {
        this.provider.off(this.hash, N);
      }), this.provider.on(this.hash, N), i >= 0) {
        const P = async () => {
          try {
            await c();
          } catch (C) {
            if (Ot(C, "TRANSACTION_REPLACED")) {
              A(), w(C);
              return;
            }
          }
          a || this.provider.once("block", P);
        };
        E.push(() => {
          this.provider.off("block", P);
        }), this.provider.once("block", P);
      }
    });
  }
  /**
   *  Returns ``true`` if this transaction has been included.
   *
   *  This is effective only as of the time the TransactionResponse
   *  was instantiated. To get up-to-date information, use
   *  [[getTransaction]].
   *
   *  This provides a Type Guard that this transaction will have
   *  non-null property values for properties that are null for
   *  unmined transactions.
   */
  isMined() {
    return this.blockHash != null;
  }
  /**
   *  Returns true if the transaction is a legacy (i.e. ``type == 0``)
   *  transaction.
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLegacy() {
    return this.type === 0;
  }
  /**
   *  Returns true if the transaction is a Berlin (i.e. ``type == 1``)
   *  transaction. See [[link-eip-2070]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isBerlin() {
    return this.type === 1;
  }
  /**
   *  Returns true if the transaction is a London (i.e. ``type == 2``)
   *  transaction. See [[link-eip-1559]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLondon() {
    return this.type === 2;
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that evict this transaction.
   */
  removedEvent() {
    return b(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), wf(this);
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that re-order this event against %%other%%.
   */
  reorderedEvent(t) {
    return b(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), b(!t || t.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), yf(this, t);
  }
  /**
   *  Returns a new TransactionResponse instance which has the ability to
   *  detect (and throw an error) if the transaction is replaced, which
   *  will begin scanning at %%startBlock%%.
   *
   *  This should generally not be used by developers and is intended
   *  primarily for internal use. Setting an incorrect %%startBlock%% can
   *  have devastating performance consequences if used incorrectly.
   */
  replaceableTransaction(t) {
    g(Number.isInteger(t) && t >= 0, "invalid startBlock", "startBlock", t);
    const e = new Ec(this, this.provider);
    return d(e, on, t), e;
  }
};
on = new WeakMap();
let ti = Ec;
function Jg(r) {
  return { orphan: "drop-block", hash: r.hash, number: r.number };
}
function yf(r, t) {
  return { orphan: "reorder-transaction", tx: r, other: t };
}
function wf(r) {
  return { orphan: "drop-transaction", tx: r };
}
function zg(r) {
  return { orphan: "drop-log", log: {
    transactionHash: r.transactionHash,
    blockHash: r.blockHash,
    blockNumber: r.blockNumber,
    address: r.address,
    data: r.data,
    topics: Object.freeze(r.topics.slice()),
    index: r.index
  } };
}
class cc extends xi {
  /**
   * @_ignore:
   */
  constructor(e, n, s) {
    super(e, e.provider);
    /**
     *  The Contract Interface.
     */
    m(this, "interface");
    /**
     *  The matching event.
     */
    m(this, "fragment");
    /**
     *  The parsed arguments passed to the event by ``emit``.
     */
    m(this, "args");
    const i = n.decodeEventLog(s, e.data, e.topics);
    B(this, { args: i, fragment: s, interface: n });
  }
  /**
   *  The name of the event.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The signature of the event.
   */
  get eventSignature() {
    return this.fragment.format();
  }
}
class Af extends xi {
  /**
   * @_ignore:
   */
  constructor(e, n) {
    super(e, e.provider);
    /**
     *  The error encounted when trying to decode the log.
     */
    m(this, "error");
    B(this, { error: n });
  }
}
var Xr;
class jg extends mf {
  /**
   *  @_ignore:
   */
  constructor(e, n, s) {
    super(s, n);
    y(this, Xr, void 0);
    d(this, Xr, e);
  }
  /**
   *  The parsed logs for any [[Log]] which has a matching event in the
   *  Contract ABI.
   */
  get logs() {
    return super.logs.map((e) => {
      const n = e.topics.length ? l(this, Xr).getEvent(e.topics[0]) : null;
      if (n)
        try {
          return new cc(e, l(this, Xr), n);
        } catch (s) {
          return new Af(e, s);
        }
      return e;
    });
  }
}
Xr = new WeakMap();
var ci;
class uc extends ti {
  /**
   *  @_ignore:
   */
  constructor(e, n, s) {
    super(s, n);
    y(this, ci, void 0);
    d(this, ci, e);
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(e) {
    const n = await super.wait(e);
    return n == null ? null : new jg(l(this, ci), this.provider, n);
  }
}
ci = new WeakMap();
class bf extends $u {
  /**
   *  @_event:
   */
  constructor(e, n, s, i) {
    super(e, n, s);
    /**
     *  The log with no matching events.
     */
    m(this, "log");
    B(this, { log: i });
  }
  /**
   *  Resolves to the block the event occured in.
   */
  async getBlock() {
    return await this.log.getBlock();
  }
  /**
   *  Resolves to the transaction the event occured in.
   */
  async getTransaction() {
    return await this.log.getTransaction();
  }
  /**
   *  Resolves to the transaction receipt the event occured in.
   */
  async getTransactionReceipt() {
    return await this.log.getTransactionReceipt();
  }
}
class Wg extends bf {
  /**
   *  @_ignore:
   */
  constructor(t, e, n, s, i) {
    super(t, e, n, new cc(i, t.interface, s));
    const o = t.interface.decodeEventLog(s, this.log.data, this.log.topics);
    B(this, { args: o, fragment: s });
  }
  /**
   *  The event name.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The event signature.
   */
  get eventSignature() {
    return this.fragment.format();
  }
}
const vu = BigInt(0);
function Ef(r) {
  return r && typeof r.call == "function";
}
function Nf(r) {
  return r && typeof r.estimateGas == "function";
}
function _o(r) {
  return r && typeof r.resolveName == "function";
}
function Pf(r) {
  return r && typeof r.sendTransaction == "function";
}
function xf(r) {
  if (r != null) {
    if (_o(r))
      return r;
    if (r.provider)
      return r.provider;
  }
}
var ui;
class Zg {
  constructor(t, e, n) {
    y(this, ui, void 0);
    m(this, "fragment");
    if (B(this, { fragment: e }), e.inputs.length < n.length)
      throw new Error("too many arguments");
    const s = cr(t.runner, "resolveName"), i = _o(s) ? s : null;
    d(this, ui, async function() {
      const o = await Promise.all(e.inputs.map((a, c) => n[c] == null ? null : a.walkAsync(n[c], (f, h) => f === "address" ? Array.isArray(h) ? Promise.all(h.map((p) => bt(p, i))) : bt(h, i) : h)));
      return t.interface.encodeFilterTopics(e, o);
    }());
  }
  getTopicFilter() {
    return l(this, ui);
  }
}
ui = new WeakMap();
function cr(r, t) {
  return r == null ? null : typeof r[t] == "function" ? r : r.provider && typeof r.provider[t] == "function" ? r.provider : null;
}
function Bn(r) {
  return r == null ? null : r.provider || null;
}
async function kf(r, t) {
  const e = mt.dereference(r, "overrides");
  g(typeof e == "object", "invalid overrides parameter", "overrides", r);
  const n = co(e);
  return g(n.to == null || (t || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n.to), g(n.data == null || (t || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n.data), n.from && (n.from = n.from), n;
}
async function Yg(r, t, e) {
  const n = cr(r, "resolveName"), s = _o(n) ? n : null;
  return await Promise.all(t.map((i, o) => i.walkAsync(e[o], (a, c) => (c = mt.dereference(c, a), a === "address" ? bt(c, s) : c))));
}
function qg(r) {
  const t = async function(o) {
    const a = await kf(o, ["data"]);
    a.to = await r.getAddress(), a.from && (a.from = await bt(a.from, xf(r.runner)));
    const c = r.interface, u = I(a.value || vu, "overrides.value") === vu, f = (a.data || "0x") === "0x";
    c.fallback && !c.fallback.payable && c.receive && !f && !u && g(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", o), g(c.fallback || f, "cannot send data to receive-only contract", "overrides.data", a.data);
    const h = c.receive || c.fallback && c.fallback.payable;
    return g(h || u, "cannot send value to non-payable fallback", "overrides.value", a.value), g(c.fallback || f, "cannot send data to receive-only contract", "overrides.data", a.data), a;
  }, e = async function(o) {
    const a = cr(r.runner, "call");
    b(Ef(a), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const c = await t(o);
    try {
      return await a.call(c);
    } catch (u) {
      throw ja(u) && u.data ? r.interface.makeError(u.data, c) : u;
    }
  }, n = async function(o) {
    const a = r.runner;
    b(Pf(a), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const c = await a.sendTransaction(await t(o)), u = Bn(r.runner);
    return new uc(r.interface, u, c);
  }, s = async function(o) {
    const a = cr(r.runner, "estimateGas");
    return b(Nf(a), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await a.estimateGas(await t(o));
  }, i = async (o) => await n(o);
  return B(i, {
    _contract: r,
    estimateGas: s,
    populateTransaction: t,
    send: n,
    staticCall: e
  }), i;
}
function Xg(r, t) {
  const e = function(...u) {
    const f = r.interface.getFunction(t, u);
    return b(f, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: t, args: u }
    }), f;
  }, n = async function(...u) {
    const f = e(...u);
    let h = {};
    if (f.inputs.length + 1 === u.length && (h = await kf(u.pop()), h.from && (h.from = await bt(h.from, xf(r.runner)))), f.inputs.length !== u.length)
      throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
    const p = await Yg(r.runner, f.inputs, u);
    return Object.assign({}, h, await pt({
      to: r.getAddress(),
      data: r.interface.encodeFunctionData(f, p)
    }));
  }, s = async function(...u) {
    const f = await a(...u);
    return f.length === 1 ? f[0] : f;
  }, i = async function(...u) {
    const f = r.runner;
    b(Pf(f), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const h = await f.sendTransaction(await n(...u)), p = Bn(r.runner);
    return new uc(r.interface, p, h);
  }, o = async function(...u) {
    const f = cr(r.runner, "estimateGas");
    return b(Nf(f), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await f.estimateGas(await n(...u));
  }, a = async function(...u) {
    const f = cr(r.runner, "call");
    b(Ef(f), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const h = await n(...u);
    let p = "0x";
    try {
      p = await f.call(h);
    } catch (E) {
      throw ja(E) && E.data ? r.interface.makeError(E.data, h) : E;
    }
    const w = e(...u);
    return r.interface.decodeFunctionResult(w, p);
  }, c = async (...u) => e(...u).constant ? await s(...u) : await i(...u);
  return B(c, {
    name: r.interface.getFunctionName(t),
    _contract: r,
    _key: t,
    getFragment: e,
    estimateGas: o,
    populateTransaction: n,
    send: i,
    staticCall: s,
    staticCallResult: a
  }), Object.defineProperty(c, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const u = r.interface.getFunction(t);
      return b(u, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: t }
      }), u;
    }
  }), c;
}
function $g(r, t) {
  const e = function(...s) {
    const i = r.interface.getEvent(t, s);
    return b(i, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key: t, args: s }
    }), i;
  }, n = function(...s) {
    return new Zg(r, e(...s), s);
  };
  return B(n, {
    name: r.interface.getEventName(t),
    _contract: r,
    _key: t,
    getFragment: e
  }), Object.defineProperty(n, "fragment", {
    configurable: !1,
    enumerable: !0,
    get: () => {
      const s = r.interface.getEvent(t);
      return b(s, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key: t }
      }), s;
    }
  }), n;
}
const uo = Symbol.for("_ethersInternal_contract"), Rf = /* @__PURE__ */ new WeakMap();
function tm(r, t) {
  Rf.set(r[uo], t);
}
function Lt(r) {
  return Rf.get(r[uo]);
}
function em(r) {
  return r && typeof r == "object" && "getTopicFilter" in r && typeof r.getTopicFilter == "function" && r.fragment;
}
async function lc(r, t) {
  let e, n = null;
  if (Array.isArray(t)) {
    const i = function(o) {
      if (X(o, 32))
        return o;
      const a = r.interface.getEvent(o);
      return g(a, "unknown fragment", "name", o), a.topicHash;
    };
    e = t.map((o) => o == null ? null : Array.isArray(o) ? o.map(i) : i(o));
  } else
    t === "*" ? e = [null] : typeof t == "string" ? X(t, 32) ? e = [t] : (n = r.interface.getEvent(t), g(n, "unknown fragment", "event", t), e = [n.topicHash]) : em(t) ? e = await t.getTopicFilter() : "fragment" in t ? (n = t.fragment, e = [n.topicHash]) : g(!1, "unknown event name", "event", t);
  e = e.map((i) => {
    if (i == null)
      return null;
    if (Array.isArray(i)) {
      const o = Array.from(new Set(i.map((a) => a.toLowerCase())).values());
      return o.length === 1 ? o[0] : (o.sort(), o);
    }
    return i.toLowerCase();
  });
  const s = e.map((i) => i == null ? "null" : Array.isArray(i) ? i.join("|") : i).join("&");
  return { fragment: n, tag: s, topics: e };
}
async function Us(r, t) {
  const { subs: e } = Lt(r);
  return e.get((await lc(r, t)).tag) || null;
}
async function Ou(r, t, e) {
  const n = Bn(r.runner);
  b(n, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation: t });
  const { fragment: s, tag: i, topics: o } = await lc(r, e), { addr: a, subs: c } = Lt(r);
  let u = c.get(i);
  if (!u) {
    const h = { address: a || r, topics: o }, p = (N) => {
      let P = s;
      if (P == null)
        try {
          P = r.interface.getEvent(N.topics[0]);
        } catch {
        }
      if (P) {
        const C = P, S = s ? r.interface.decodeEventLog(s, N.data, N.topics) : [];
        Ta(r, e, S, (G) => new Wg(r, G, e, C, N));
      } else
        Ta(r, e, [], (C) => new bf(r, C, e, N));
    };
    let w = [];
    u = { tag: i, listeners: [], start: () => {
      w.length || w.push(n.on(h, p));
    }, stop: async () => {
      if (w.length == 0)
        return;
      let N = w;
      w = [], await Promise.all(N), n.off(h, p);
    } }, c.set(i, u);
  }
  return u;
}
let Oa = Promise.resolve();
async function nm(r, t, e, n) {
  await Oa;
  const s = await Us(r, t);
  if (!s)
    return !1;
  const i = s.listeners.length;
  return s.listeners = s.listeners.filter(({ listener: o, once: a }) => {
    const c = Array.from(e);
    n && c.push(n(a ? null : o));
    try {
      o.call(r, ...c);
    } catch {
    }
    return !a;
  }), s.listeners.length === 0 && (s.stop(), Lt(r).subs.delete(s.tag)), i > 0;
}
async function Ta(r, t, e, n) {
  try {
    await Oa;
  } catch {
  }
  const s = nm(r, t, e, n);
  return Oa = s, await s;
}
const Fi = ["then"];
var _y;
const Vs = class Vs {
  /**
   *  Creates a new contract connected to %%target%% with the %%abi%% and
   *  optionally connected to a %%runner%% to perform operations on behalf
   *  of.
   */
  constructor(t, e, n, s) {
    /**
     *  The target to connect to.
     *
     *  This can be an address, ENS name or any [[Addressable]], such as
     *  another contract. To get the resovled address, use the ``getAddress``
     *  method.
     */
    m(this, "target");
    /**
     *  The contract Interface.
     */
    m(this, "interface");
    /**
     *  The connected runner. This is generally a [[Provider]] or a
     *  [[Signer]], which dictates what operations are supported.
     *
     *  For example, a **Contract** connected to a [[Provider]] may
     *  only execute read-only operations.
     */
    m(this, "runner");
    /**
     *  All the Events available on this contract.
     */
    m(this, "filters");
    /**
     *  @_ignore:
     */
    m(this, _y);
    /**
     *  The fallback or receive function if any.
     */
    m(this, "fallback");
    g(typeof t == "string" || Cl(t), "invalid value for Contract target", "target", t), n == null && (n = null);
    const i = va.from(e);
    B(this, { target: t, runner: n, interface: i }), Object.defineProperty(this, uo, { value: {} });
    let o, a = null, c = null;
    if (s) {
      const h = Bn(n);
      c = new uc(this.interface, h, s);
    }
    let u = /* @__PURE__ */ new Map();
    if (typeof t == "string")
      if (X(t))
        a = t, o = Promise.resolve(t);
      else {
        const h = cr(n, "resolveName");
        if (!_o(h))
          throw tt("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
            operation: "resolveName"
          });
        o = h.resolveName(t).then((p) => {
          if (p == null)
            throw tt("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
              value: t
            });
          return Lt(this).addr = p, p;
        });
      }
    else
      o = t.getAddress().then((h) => {
        if (h == null)
          throw new Error("TODO");
        return Lt(this).addr = h, h;
      });
    tm(this, { addrPromise: o, addr: a, deployTx: c, subs: u });
    const f = new Proxy({}, {
      get: (h, p, w) => {
        if (typeof p == "symbol" || Fi.indexOf(p) >= 0)
          return Reflect.get(h, p, w);
        try {
          return this.getEvent(p);
        } catch (E) {
          if (!Ot(E, "INVALID_ARGUMENT") || E.argument !== "key")
            throw E;
        }
      },
      has: (h, p) => Fi.indexOf(p) >= 0 ? Reflect.has(h, p) : Reflect.has(h, p) || this.interface.hasEvent(String(p))
    });
    return B(this, { filters: f }), B(this, {
      fallback: i.receive || i.fallback ? qg(this) : null
    }), new Proxy(this, {
      get: (h, p, w) => {
        if (typeof p == "symbol" || p in h || Fi.indexOf(p) >= 0)
          return Reflect.get(h, p, w);
        try {
          return h.getFunction(p);
        } catch (E) {
          if (!Ot(E, "INVALID_ARGUMENT") || E.argument !== "key")
            throw E;
        }
      },
      has: (h, p) => typeof p == "symbol" || p in h || Fi.indexOf(p) >= 0 ? Reflect.has(h, p) : h.interface.hasFunction(p)
    });
  }
  /**
   *  Return a new Contract instance with the same target and ABI, but
   *  a different %%runner%%.
   */
  connect(t) {
    return new Vs(this.target, this.interface, t);
  }
  /**
   *  Return a new Contract instance with the same ABI and runner, but
   *  a different %%target%%.
   */
  attach(t) {
    return new Vs(t, this.interface, this.runner);
  }
  /**
   *  Return the resolved address of this Contract.
   */
  async getAddress() {
    return await Lt(this).addrPromise;
  }
  /**
   *  Return the deployed bytecode or null if no bytecode is found.
   */
  async getDeployedCode() {
    const t = Bn(this.runner);
    b(t, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
    const e = await t.getCode(await this.getAddress());
    return e === "0x" ? null : e;
  }
  /**
   *  Resolve to this Contract once the bytecode has been deployed, or
   *  resolve immediately if already deployed.
   */
  async waitForDeployment() {
    const t = this.deploymentTransaction();
    if (t)
      return await t.wait(), this;
    if (await this.getDeployedCode() != null)
      return this;
    const n = Bn(this.runner);
    return b(n != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" }), new Promise((s, i) => {
      const o = async () => {
        try {
          if (await this.getDeployedCode() != null)
            return s(this);
          n.once("block", o);
        } catch (a) {
          i(a);
        }
      };
      o();
    });
  }
  /**
   *  Return the transaction used to deploy this contract.
   *
   *  This is only available if this instance was returned from a
   *  [[ContractFactory]].
   */
  deploymentTransaction() {
    return Lt(this).deployTx;
  }
  /**
   *  Return the function for a given name. This is useful when a contract
   *  method name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getFunction(t) {
    return typeof t != "string" && (t = t.format()), Xg(this, t);
  }
  /**
   *  Return the event for a given name. This is useful when a contract
   *  event name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programatically.
   */
  getEvent(t) {
    return typeof t != "string" && (t = t.format()), $g(this, t);
  }
  /**
   *  @_ignore:
   */
  async queryTransaction(t) {
    throw new Error("@TODO");
  }
  /*
      // @TODO: this is a non-backwards compatible change, but will be added
      //        in v7 and in a potential SmartContract class in an upcoming
      //        v6 release
      async getTransactionReceipt(hash: string): Promise<null | ContractTransactionReceipt> {
          const provider = getProvider(this.runner);
          assert(provider, "contract runner does not have a provider",
              "UNSUPPORTED_OPERATION", { operation: "queryTransaction" });
  
          const receipt = await provider.getTransactionReceipt(hash);
          if (receipt == null) { return null; }
  
          return new ContractTransactionReceipt(this.interface, provider, receipt);
      }
      */
  /**
   *  Provide historic access to event data for %%event%% in the range
   *  %%fromBlock%% (default: ``0``) to %%toBlock%% (default: ``"latest"``)
   *  inclusive.
   */
  async queryFilter(t, e, n) {
    e == null && (e = 0), n == null && (n = "latest");
    const { addr: s, addrPromise: i } = Lt(this), o = s || await i, { fragment: a, topics: c } = await lc(this, t), u = { address: o, topics: c, fromBlock: e, toBlock: n }, f = Bn(this.runner);
    return b(f, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" }), (await f.getLogs(u)).map((h) => {
      let p = a;
      if (p == null)
        try {
          p = this.interface.getEvent(h.topics[0]);
        } catch {
        }
      if (p)
        try {
          return new cc(h, this.interface, p);
        } catch (w) {
          return new Af(h, w);
        }
      return new xi(h, f);
    });
  }
  /**
   *  Add an event %%listener%% for the %%event%%.
   */
  async on(t, e) {
    const n = await Ou(this, "on", t);
    return n.listeners.push({ listener: e, once: !1 }), n.start(), this;
  }
  /**
   *  Add an event %%listener%% for the %%event%%, but remove the listener
   *  after it is fired once.
   */
  async once(t, e) {
    const n = await Ou(this, "once", t);
    return n.listeners.push({ listener: e, once: !0 }), n.start(), this;
  }
  /**
   *  Emit an %%event%% calling all listeners with %%args%%.
   *
   *  Resolves to ``true`` if any listeners were called.
   */
  async emit(t, ...e) {
    return await Ta(this, t, e, null);
  }
  /**
   *  Resolves to the number of listeners of %%event%% or the total number
   *  of listeners if unspecified.
   */
  async listenerCount(t) {
    if (t) {
      const s = await Us(this, t);
      return s ? s.listeners.length : 0;
    }
    const { subs: e } = Lt(this);
    let n = 0;
    for (const { listeners: s } of e.values())
      n += s.length;
    return n;
  }
  /**
   *  Resolves to the listeners subscribed to %%event%% or all listeners
   *  if unspecified.
   */
  async listeners(t) {
    if (t) {
      const s = await Us(this, t);
      return s ? s.listeners.map(({ listener: i }) => i) : [];
    }
    const { subs: e } = Lt(this);
    let n = [];
    for (const { listeners: s } of e.values())
      n = n.concat(s.map(({ listener: i }) => i));
    return n;
  }
  /**
   *  Remove the %%listener%% from the listeners for %%event%% or remove
   *  all listeners if unspecified.
   */
  async off(t, e) {
    const n = await Us(this, t);
    if (!n)
      return this;
    if (e) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(e);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (e == null || n.listeners.length === 0) && (n.stop(), Lt(this).subs.delete(n.tag)), this;
  }
  /**
   *  Remove all the listeners for %%event%% or remove all listeners if
   *  unspecified.
   */
  async removeAllListeners(t) {
    if (t) {
      const e = await Us(this, t);
      if (!e)
        return this;
      e.stop(), Lt(this).subs.delete(e.tag);
    } else {
      const { subs: e } = Lt(this);
      for (const { tag: n, stop: s } of e.values())
        s(), e.delete(n);
    }
    return this;
  }
  /**
   *  Alias for [on].
   */
  async addListener(t, e) {
    return await this.on(t, e);
  }
  /**
   *  Alias for [off].
   */
  async removeListener(t, e) {
    return await this.off(t, e);
  }
  /**
   *  Create a new Class for the %%abi%%.
   */
  static buildClass(t) {
    class e extends Vs {
      constructor(s, i = null) {
        super(s, t, i);
      }
    }
    return e;
  }
  /**
   *  Create a new BaseContract with a specified Interface.
   */
  static from(t, e, n) {
    return n == null && (n = null), new this(t, e, n);
  }
};
_y = uo;
let Ia = Vs;
function rm() {
  return Ia;
}
class rr extends rm() {
}
function ra(r) {
  return r.match(/^ipfs:\/\/ipfs\//i) ? r = r.substring(12) : r.match(/^ipfs:\/\//i) ? r = r.substring(7) : g(!1, "unsupported IPFS format", "link", r), `https://gateway.ipfs.io/ipfs/${r}`;
}
class sm {
  /**
   *  Creates a new **MulticoinProviderPluing** for %%name%%.
   */
  constructor(t) {
    /**
     *  The name.
     */
    m(this, "name");
    B(this, { name: t });
  }
  connect(t) {
    return this;
  }
  /**
   *  Returns ``true`` if %%coinType%% is supported by this plugin.
   */
  supportsCoinType(t) {
    return !1;
  }
  /**
   *  Resovles to the encoded %%address%% for %%coinType%%.
   */
  async encodeAddress(t, e) {
    throw new Error("unsupported coin");
  }
  /**
   *  Resovles to the decoded %%data%% for %%coinType%%.
   */
  async decodeAddress(t, e) {
    throw new Error("unsupported coin");
  }
}
const Cf = new RegExp("^(ipfs)://(.*)$", "i"), Tu = [
  new RegExp("^(https)://(.*)$", "i"),
  new RegExp("^(data):(.*)$", "i"),
  Cf,
  new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
];
var an, Qn, cn, wr, No, vf;
const Pr = class Pr {
  constructor(t, e, n) {
    y(this, cn);
    /**
     *  The connected provider.
     */
    m(this, "provider");
    /**
     *  The address of the resolver.
     */
    m(this, "address");
    /**
     *  The name this resolver was resolved against.
     */
    m(this, "name");
    // For EIP-2544 names, the ancestor that provided the resolver
    y(this, an, void 0);
    y(this, Qn, void 0);
    B(this, { provider: t, address: e, name: n }), d(this, an, null), d(this, Qn, new rr(e, [
      "function supportsInterface(bytes4) view returns (bool)",
      "function resolve(bytes, bytes) view returns (bytes)",
      "function addr(bytes32) view returns (address)",
      "function addr(bytes32, uint) view returns (bytes)",
      "function text(bytes32, string) view returns (string)",
      "function contenthash(bytes32) view returns (bytes)"
    ], t));
  }
  /**
   *  Resolves to true if the resolver supports wildcard resolution.
   */
  async supportsWildcard() {
    return l(this, an) == null && d(this, an, (async () => {
      try {
        return await l(this, Qn).supportsInterface("0x9061b923");
      } catch (t) {
        if (Ot(t, "CALL_EXCEPTION"))
          return !1;
        throw d(this, an, null), t;
      }
    })()), await l(this, an);
  }
  /**
   *  Resolves to the address for %%coinType%% or null if the
   *  provided %%coinType%% has not been configured.
   */
  async getAddress(t) {
    if (t == null && (t = 60), t === 60)
      try {
        const i = await x(this, cn, wr).call(this, "addr(bytes32)");
        return i == null || i === ba ? null : i;
      } catch (i) {
        if (Ot(i, "CALL_EXCEPTION"))
          return null;
        throw i;
      }
    if (t >= 0 && t < 2147483648) {
      let i = t + 2147483648;
      const o = await x(this, cn, wr).call(this, "addr(bytes32,uint)", [i]);
      if (X(o, 20))
        return V(o);
    }
    let e = null;
    for (const i of this.provider.plugins)
      if (i instanceof sm && i.supportsCoinType(t)) {
        e = i;
        break;
      }
    if (e == null)
      return null;
    const n = await x(this, cn, wr).call(this, "addr(bytes32,uint)", [t]);
    if (n == null || n === "0x")
      return null;
    const s = await e.decodeAddress(t, n);
    if (s != null)
      return s;
    b(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
      operation: `getAddress(${t})`,
      info: { coinType: t, data: n }
    });
  }
  /**
   *  Resolves to the EIP-634 text record for %%key%%, or ``null``
   *  if unconfigured.
   */
  async getText(t) {
    const e = await x(this, cn, wr).call(this, "text(bytes32,string)", [t]);
    return e == null || e === "0x" ? null : e;
  }
  /**
   *  Rsolves to the content-hash or ``null`` if unconfigured.
   */
  async getContentHash() {
    const t = await x(this, cn, wr).call(this, "contenthash(bytes32)");
    if (t == null || t === "0x")
      return null;
    const e = t.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
    if (e) {
      const s = e[1] === "e3010170" ? "ipfs" : "ipns", i = parseInt(e[4], 16);
      if (e[5].length === i * 2)
        return `${s}://${Lh("0x" + e[2])}`;
    }
    const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
    if (n && n[1].length === 64)
      return `bzz://${n[1]}`;
    b(!1, "invalid or unsupported content hash data", "UNSUPPORTED_OPERATION", {
      operation: "getContentHash()",
      info: { data: t }
    });
  }
  /**
   *  Resolves to the avatar url or ``null`` if the avatar is either
   *  unconfigured or incorrectly configured (e.g. references an NFT
   *  not owned by the address).
   *
   *  If diagnosing issues with configurations, the [[_getAvatar]]
   *  method may be useful.
   */
  async getAvatar() {
    return (await this._getAvatar()).url;
  }
  /**
   *  When resolving an avatar, there are many steps involved, such
   *  fetching metadata and possibly validating ownership of an
   *  NFT.
   *
   *  This method can be used to examine each step and the value it
   *  was working from.
   */
  async _getAvatar() {
    const t = [{ type: "name", value: this.name }];
    try {
      const e = await this.getText("avatar");
      if (e == null)
        return t.push({ type: "!avatar", value: "" }), { url: null, linkage: t };
      t.push({ type: "avatar", value: e });
      for (let n = 0; n < Tu.length; n++) {
        const s = e.match(Tu[n]);
        if (s == null)
          continue;
        const i = s[1].toLowerCase();
        switch (i) {
          case "https":
          case "data":
            return t.push({ type: "url", value: e }), { linkage: t, url: e };
          case "ipfs": {
            const o = ra(e);
            return t.push({ type: "ipfs", value: e }), t.push({ type: "url", value: o }), { linkage: t, url: o };
          }
          case "erc721":
          case "erc1155": {
            const o = i === "erc721" ? "tokenURI(uint256)" : "uri(uint256)";
            t.push({ type: i, value: e });
            const a = await this.getAddress();
            if (a == null)
              return t.push({ type: "!owner", value: "" }), { url: null, linkage: t };
            const c = (s[2] || "").split("/");
            if (c.length !== 2)
              return t.push({ type: `!${i}caip`, value: s[2] || "" }), { url: null, linkage: t };
            const u = c[1], f = new rr(c[0], [
              // ERC-721
              "function tokenURI(uint) view returns (string)",
              "function ownerOf(uint) view returns (address)",
              // ERC-1155
              "function uri(uint) view returns (string)",
              "function balanceOf(address, uint256) view returns (uint)"
            ], this.provider);
            if (i === "erc721") {
              const A = await f.ownerOf(u);
              if (a !== A)
                return t.push({ type: "!owner", value: A }), { url: null, linkage: t };
              t.push({ type: "owner", value: A });
            } else if (i === "erc1155") {
              const A = await f.balanceOf(a, u);
              if (!A)
                return t.push({ type: "!balance", value: "0" }), { url: null, linkage: t };
              t.push({ type: "balance", value: A.toString() });
            }
            let h = await f[o](u);
            if (h == null || h === "0x")
              return t.push({ type: "!metadata-url", value: "" }), { url: null, linkage: t };
            t.push({ type: "metadata-url-base", value: h }), i === "erc1155" && (h = h.replace("{id}", Nn(u, 32).substring(2)), t.push({ type: "metadata-url-expanded", value: h })), h.match(/^ipfs:/i) && (h = ra(h)), t.push({ type: "metadata-url", value: h });
            let p = {};
            const w = await new Tt(h).send();
            w.assertOk();
            try {
              p = w.bodyJson;
            } catch {
              try {
                t.push({ type: "!metadata", value: w.bodyText });
              } catch {
                const P = w.body;
                return P && t.push({ type: "!metadata", value: T(P) }), { url: null, linkage: t };
              }
              return { url: null, linkage: t };
            }
            if (!p)
              return t.push({ type: "!metadata", value: "" }), { url: null, linkage: t };
            t.push({ type: "metadata", value: JSON.stringify(p) });
            let E = p.image;
            if (typeof E != "string")
              return t.push({ type: "!imageUrl", value: "" }), { url: null, linkage: t };
            if (!E.match(/^(https:\/\/|data:)/i)) {
              if (E.match(Cf) == null)
                return t.push({ type: "!imageUrl-ipfs", value: E }), { url: null, linkage: t };
              t.push({ type: "imageUrl-ipfs", value: E }), E = ra(E);
            }
            return t.push({ type: "url", value: E }), { linkage: t, url: E };
          }
        }
      }
    } catch {
    }
    return { linkage: t, url: null };
  }
  static async getEnsAddress(t) {
    const e = await t.getNetwork(), n = e.getPlugin("org.ethers.plugins.network.Ens");
    return b(n, "network does not support ENS", "UNSUPPORTED_OPERATION", {
      operation: "getEnsAddress",
      info: { network: e }
    }), n.address;
  }
  /**
   *  Resolve to the ENS resolver for %%name%% using %%provider%% or
   *  ``null`` if unconfigured.
   */
  static async fromName(t, e) {
    var s;
    let n = e;
    for (; ; ) {
      if (n === "" || n === "." || e !== "eth" && n === "eth")
        return null;
      const i = await x(s = Pr, No, vf).call(s, t, n);
      if (i != null) {
        const o = new Pr(t, i, e);
        return n !== e && !await o.supportsWildcard() ? null : o;
      }
      n = n.split(".").slice(1).join(".");
    }
  }
};
an = new WeakMap(), Qn = new WeakMap(), cn = new WeakSet(), wr = async function(t, e) {
  e = (e || []).slice();
  const n = l(this, Qn).interface;
  e.unshift(Ra(this.name));
  let s = null;
  await this.supportsWildcard() && (s = n.getFunction(t), b(s, "missing fragment", "UNKNOWN_ERROR", {
    info: { funcName: t }
  }), e = [
    ug(this.name),
    n.encodeFunctionData(s, e)
  ], t = "resolve(bytes,bytes)"), e.push({
    enableCcipRead: !0
  });
  try {
    const i = await l(this, Qn)[t](...e);
    return s ? n.decodeFunctionResult(s, i)[0] : i;
  } catch (i) {
    if (!Ot(i, "CALL_EXCEPTION"))
      throw i;
  }
  return null;
}, No = new WeakSet(), vf = async function(t, e) {
  const n = await Pr.getEnsAddress(t);
  try {
    const i = await new rr(n, [
      "function resolver(bytes32) view returns (address)"
    ], t).resolver(Ra(e), {
      enableCcipRead: !0
    });
    return i === ba ? null : i;
  } catch (s) {
    throw s;
  }
  return null;
}, y(Pr, No);
let lo = Pr;
const Iu = BigInt(0);
function Z(r, t) {
  return function(e) {
    return e == null ? t : r(e);
  };
}
function fc(r) {
  return (t) => {
    if (!Array.isArray(t))
      throw new Error("not an array");
    return t.map((e) => r(e));
  };
}
function ki(r, t) {
  return (e) => {
    const n = {};
    for (const s in r) {
      let i = s;
      if (t && s in t && !(i in e)) {
        for (const o of t[s])
          if (o in e) {
            i = o;
            break;
          }
      }
      try {
        const o = r[s](e[i]);
        o !== void 0 && (n[s] = o);
      } catch (o) {
        const a = o instanceof Error ? o.message : "not-an-error";
        b(!1, `invalid value for value.${s} (${a})`, "BAD_DATA", { value: e });
      }
    }
    return n;
  };
}
function im(r) {
  switch (r) {
    case !0:
    case "true":
      return !0;
    case !1:
    case "false":
      return !1;
  }
  g(!1, `invalid boolean; ${JSON.stringify(r)}`, "value", r);
}
function Ps(r) {
  return g(X(r, !0), "invalid data", "value", r), r;
}
function Xt(r) {
  return g(X(r, 32), "invalid hash", "value", r), r;
}
const om = ki({
  address: V,
  blockHash: Xt,
  blockNumber: L,
  data: Ps,
  index: L,
  removed: Z(im, !1),
  topics: fc(Xt),
  transactionHash: Xt,
  transactionIndex: L
}, {
  index: ["logIndex"]
});
function am(r) {
  return om(r);
}
const cm = ki({
  hash: Z(Xt),
  parentHash: Xt,
  number: L,
  timestamp: L,
  nonce: Z(Ps),
  difficulty: I,
  gasLimit: I,
  gasUsed: I,
  miner: Z(V),
  extraData: Ps,
  baseFeePerGas: Z(I)
});
function um(r) {
  const t = cm(r);
  return t.transactions = r.transactions.map((e) => typeof e == "string" ? e : Of(e)), t;
}
const lm = ki({
  transactionIndex: L,
  blockNumber: L,
  transactionHash: Xt,
  address: V,
  topics: fc(Xt),
  data: Ps,
  index: L,
  blockHash: Xt
}, {
  index: ["logIndex"]
});
function fm(r) {
  return lm(r);
}
const hm = ki({
  to: Z(V, null),
  from: Z(V, null),
  contractAddress: Z(V, null),
  // should be allowNull(hash), but broken-EIP-658 support is handled in receipt
  index: L,
  root: Z(T),
  gasUsed: I,
  logsBloom: Z(Ps),
  blockHash: Xt,
  hash: Xt,
  logs: fc(fm),
  blockNumber: L,
  //confirmations: allowNull(getNumber, null),
  cumulativeGasUsed: I,
  effectiveGasPrice: Z(I),
  status: Z(L),
  type: Z(L, 0)
}, {
  effectiveGasPrice: ["gasPrice"],
  hash: ["transactionHash"],
  index: ["transactionIndex"]
});
function dm(r) {
  return hm(r);
}
function Of(r) {
  r.to && I(r.to) === Iu && (r.to = "0x0000000000000000000000000000000000000000");
  const t = ki({
    hash: Xt,
    type: (e) => e === "0x" || e == null ? 0 : L(e),
    accessList: Z(xn, null),
    blockHash: Z(Xt, null),
    blockNumber: Z(L, null),
    transactionIndex: Z(L, null),
    //confirmations: allowNull(getNumber, null),
    from: V,
    // either (gasPrice) or (maxPriorityFeePerGas + maxFeePerGas) must be set
    gasPrice: Z(I),
    maxPriorityFeePerGas: Z(I),
    maxFeePerGas: Z(I),
    gasLimit: I,
    to: Z(V, null),
    value: I,
    nonce: L,
    data: Ps,
    creates: Z(V, null),
    chainId: Z(I, null)
  }, {
    data: ["input"],
    gasLimit: ["gas"]
  })(r);
  if (t.to == null && t.creates == null && (t.creates = hp(t)), (r.type === 1 || r.type === 2) && r.accessList == null && (t.accessList = []), r.signature ? t.signature = ue.from(r.signature) : t.signature = ue.from(r), t.chainId == null) {
    const e = t.signature.legacyChainId;
    e != null && (t.chainId = e);
  }
  return t.blockHash && I(t.blockHash) === Iu && (t.blockHash = null), t;
}
const pm = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
class Ri {
  /**
   *  Creates a new **NetworkPlugin**.
   */
  constructor(t) {
    /**
     *  The name of the plugin.
     *
     *  It is recommended to use reverse-domain-notation, which permits
     *  unique names with a known authority as well as hierarchal entries.
     */
    m(this, "name");
    B(this, { name: t });
  }
  /**
   *  Creates a copy of this plugin.
   */
  clone() {
    return new Ri(this.name);
  }
}
class Go extends Ri {
  /**
   *  Creates a new GasCostPlugin from %%effectiveBlock%% until the
   *  latest block or another GasCostPlugin supercedes that block number,
   *  with the associated %%costs%%.
   */
  constructor(e, n) {
    e == null && (e = 0);
    super(`org.ethers.network.plugins.GasCost#${e || 0}`);
    /**
     *  The block number to treat these values as valid from.
     *
     *  This allows a hardfork to have updated values included as well as
     *  mulutiple hardforks to be supported.
     */
    m(this, "effectiveBlock");
    /**
     *  The transactions base fee.
     */
    m(this, "txBase");
    /**
     *  The fee for creating a new account.
     */
    m(this, "txCreate");
    /**
     *  The fee per zero-byte in the data.
     */
    m(this, "txDataZero");
    /**
     *  The fee per non-zero-byte in the data.
     */
    m(this, "txDataNonzero");
    /**
     *  The fee per storage key in the [[link-eip-2930]] access list.
     */
    m(this, "txAccessListStorageKey");
    /**
     *  The fee per address in the [[link-eip-2930]] access list.
     */
    m(this, "txAccessListAddress");
    const s = { effectiveBlock: e };
    function i(o, a) {
      let c = (n || {})[o];
      c == null && (c = a), g(typeof c == "number", `invalud value for ${o}`, "costs", n), s[o] = c;
    }
    i("txBase", 21e3), i("txCreate", 32e3), i("txDataZero", 4), i("txDataNonzero", 16), i("txAccessListStorageKey", 1900), i("txAccessListAddress", 2400), B(this, s);
  }
  clone() {
    return new Go(this.effectiveBlock, this);
  }
}
class Ho extends Ri {
  /**
   *  Creates a new **EnsPlugin** connected to %%address%% on the
   *  %%targetNetwork%%. The default ENS address and mainnet is used
   *  if unspecified.
   */
  constructor(e, n) {
    super("org.ethers.plugins.network.Ens");
    /**
     *  The ENS Registrty Contract address.
     */
    m(this, "address");
    /**
     *  The chain ID that the ENS contract lives on.
     */
    m(this, "targetNetwork");
    B(this, {
      address: e || pm,
      targetNetwork: n ?? 1
    });
  }
  clone() {
    return new Ho(this.address, this.targetNetwork);
  }
}
var li, fi;
class gm extends Ri {
  /**
   *  Creates a new **FetchUrlFeeDataNetworkPlugin** which will
   *  be used when computing the fee data for the network.
   */
  constructor(e, n) {
    super("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    y(this, li, void 0);
    y(this, fi, void 0);
    d(this, li, e), d(this, fi, n);
  }
  /**
   *  The URL to initialize the FetchRequest with in %%processFunc%%.
   */
  get url() {
    return l(this, li);
  }
  /**
   *  The callback to use when computing the FeeData.
   */
  get processFunc() {
    return l(this, fi);
  }
  // We are immutable, so we can serve as our own clone
  clone() {
    return this;
  }
}
li = new WeakMap(), fi = new WeakMap();
const sa = /* @__PURE__ */ new Map();
var $r, ts, un;
const xr = class xr {
  /**
   *  Creates a new **Network** for %%name%% and %%chainId%%.
   */
  constructor(t, e) {
    y(this, $r, void 0);
    y(this, ts, void 0);
    y(this, un, void 0);
    d(this, $r, t), d(this, ts, I(e)), d(this, un, /* @__PURE__ */ new Map());
  }
  /**
   *  Returns a JSON-compatible representation of a Network.
   */
  toJSON() {
    return { name: this.name, chainId: String(this.chainId) };
  }
  /**
   *  The network common name.
   *
   *  This is the canonical name, as networks migh have multiple
   *  names.
   */
  get name() {
    return l(this, $r);
  }
  set name(t) {
    d(this, $r, t);
  }
  /**
   *  The network chain ID.
   */
  get chainId() {
    return l(this, ts);
  }
  set chainId(t) {
    d(this, ts, I(t, "chainId"));
  }
  /**
   *  Returns true if %%other%% matches this network. Any chain ID
   *  must match, and if no chain ID is present, the name must match.
   *
   *  This method does not currently check for additional properties,
   *  such as ENS address or plug-in compatibility.
   */
  matches(t) {
    if (t == null)
      return !1;
    if (typeof t == "string") {
      try {
        return this.chainId === I(t);
      } catch {
      }
      return this.name === t;
    }
    if (typeof t == "number" || typeof t == "bigint") {
      try {
        return this.chainId === I(t);
      } catch {
      }
      return !1;
    }
    if (typeof t == "object") {
      if (t.chainId != null) {
        try {
          return this.chainId === I(t.chainId);
        } catch {
        }
        return !1;
      }
      return t.name != null ? this.name === t.name : !1;
    }
    return !1;
  }
  /**
   *  Returns the list of plugins currently attached to this Network.
   */
  get plugins() {
    return Array.from(l(this, un).values());
  }
  /**
   *  Attach a new %%plugin%% to this Network. The network name
   *  must be unique, excluding any fragment.
   */
  attachPlugin(t) {
    if (l(this, un).get(t.name))
      throw new Error(`cannot replace existing plugin: ${t.name} `);
    return l(this, un).set(t.name, t.clone()), this;
  }
  /**
   *  Return the plugin, if any, matching %%name%% exactly. Plugins
   *  with fragments will not be returned unless %%name%% includes
   *  a fragment.
   */
  getPlugin(t) {
    return l(this, un).get(t) || null;
  }
  /**
   *  Gets a list of all plugins that match %%name%%, with otr without
   *  a fragment.
   */
  getPlugins(t) {
    return this.plugins.filter((e) => e.name.split("#")[0] === t);
  }
  /**
   *  Create a copy of this Network.
   */
  clone() {
    const t = new xr(this.name, this.chainId);
    return this.plugins.forEach((e) => {
      t.attachPlugin(e.clone());
    }), t;
  }
  /**
   *  Compute the intrinsic gas required for a transaction.
   *
   *  A GasCostPlugin can be attached to override the default
   *  values.
   */
  computeIntrinsicGas(t) {
    const e = this.getPlugin("org.ethers.plugins.network.GasCost") || new Go();
    let n = e.txBase;
    if (t.to == null && (n += e.txCreate), t.data)
      for (let s = 2; s < t.data.length; s += 2)
        t.data.substring(s, s + 2) === "00" ? n += e.txDataZero : n += e.txDataNonzero;
    if (t.accessList) {
      const s = xn(t.accessList);
      for (const i in s)
        n += e.txAccessListAddress + e.txAccessListStorageKey * s[i].storageKeys.length;
    }
    return n;
  }
  /**
   *  Returns a new Network for the %%network%% name or chainId.
   */
  static from(t) {
    if (mm(), t == null)
      return xr.from("mainnet");
    if (typeof t == "number" && (t = BigInt(t)), typeof t == "string" || typeof t == "bigint") {
      const e = sa.get(t);
      if (e)
        return e();
      if (typeof t == "bigint")
        return new xr("unknown", t);
      g(!1, "unknown network", "network", t);
    }
    if (typeof t.clone == "function")
      return t.clone();
    if (typeof t == "object") {
      g(typeof t.name == "string" && typeof t.chainId == "number", "invalid network object name or chainId", "network", t);
      const e = new xr(t.name, t.chainId);
      return (t.ensAddress || t.ensNetwork != null) && e.attachPlugin(new Ho(t.ensAddress, t.ensNetwork)), e;
    }
    g(!1, "invalid network", "network", t);
  }
  /**
   *  Register %%nameOrChainId%% with a function which returns
   *  an instance of a Network representing that chain.
   */
  static register(t, e) {
    typeof t == "number" && (t = BigInt(t));
    const n = sa.get(t);
    n && g(!1, `conflicting network for ${JSON.stringify(n.name)}`, "nameOrChainId", t), sa.set(t, e);
  }
};
$r = new WeakMap(), ts = new WeakMap(), un = new WeakMap();
let at = xr;
function Bu(r, t) {
  const e = String(r);
  if (!e.match(/^[0-9.]+$/))
    throw new Error(`invalid gwei value: ${r}`);
  const n = e.split(".");
  if (n.length === 1 && n.push(""), n.length !== 2)
    throw new Error(`invalid gwei value: ${r}`);
  for (; n[1].length < t; )
    n[1] += "0";
  if (n[1].length > 9) {
    let s = BigInt(n[1].substring(0, 9));
    n[1].substring(9).match(/^0+$/) || s++, n[1] = s.toString();
  }
  return BigInt(n[0] + n[1]);
}
function Su(r) {
  return new gm(r, async (t, e, n) => {
    n.setHeader("User-Agent", "ethers");
    let s;
    try {
      const [i, o] = await Promise.all([
        n.send(),
        t()
      ]);
      s = i;
      const a = s.bodyJson.standard;
      return {
        gasPrice: o.gasPrice,
        maxFeePerGas: Bu(a.maxFee, 9),
        maxPriorityFeePerGas: Bu(a.maxPriorityFee, 9)
      };
    } catch (i) {
      b(!1, `error encountered with polygon gas station (${JSON.stringify(n.url)})`, "SERVER_ERROR", { request: n, response: s, error: i });
    }
  });
}
let Uu = !1;
function mm() {
  if (Uu)
    return;
  Uu = !0;
  function r(t, e, n) {
    const s = function() {
      const i = new at(t, e);
      return n.ensNetwork != null && i.attachPlugin(new Ho(null, n.ensNetwork)), i.attachPlugin(new Go()), (n.plugins || []).forEach((o) => {
        i.attachPlugin(o);
      }), i;
    };
    at.register(t, s), at.register(e, s), n.altNames && n.altNames.forEach((i) => {
      at.register(i, s);
    });
  }
  r("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] }), r("ropsten", 3, { ensNetwork: 3 }), r("rinkeby", 4, { ensNetwork: 4 }), r("goerli", 5, { ensNetwork: 5 }), r("kovan", 42, { ensNetwork: 42 }), r("sepolia", 11155111, { ensNetwork: 11155111 }), r("classic", 61, {}), r("classicKotti", 6, {}), r("arbitrum", 42161, {
    ensNetwork: 1
  }), r("arbitrum-goerli", 421613, {}), r("base", 8453, { ensNetwork: 1 }), r("base-goerli", 84531, {}), r("base-sepolia", 84532, {}), r("bnb", 56, { ensNetwork: 1 }), r("bnbt", 97, {}), r("linea", 59144, { ensNetwork: 1 }), r("linea-goerli", 59140, {}), r("matic", 137, {
    ensNetwork: 1,
    plugins: [
      Su("https://gasstation.polygon.technology/v2")
    ]
  }), r("matic-mumbai", 80001, {
    altNames: ["maticMumbai", "maticmum"],
    plugins: [
      Su("https://gasstation-testnet.polygon.technology/v2")
    ]
  }), r("optimism", 10, {
    ensNetwork: 1,
    plugins: []
  }), r("optimism-goerli", 420, {}), r("xdai", 100, { ensNetwork: 1 });
}
function Ba(r) {
  return JSON.parse(JSON.stringify(r));
}
var Ue, jt, ln, ye, es, ji;
class ym {
  /**
   *  Create a new **PollingBlockSubscriber** attached to %%provider%%.
   */
  constructor(t) {
    y(this, es);
    y(this, Ue, void 0);
    y(this, jt, void 0);
    y(this, ln, void 0);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    y(this, ye, void 0);
    d(this, Ue, t), d(this, jt, null), d(this, ln, 4e3), d(this, ye, -2);
  }
  /**
   *  The polling interval.
   */
  get pollingInterval() {
    return l(this, ln);
  }
  set pollingInterval(t) {
    d(this, ln, t);
  }
  start() {
    l(this, jt) || (d(this, jt, l(this, Ue)._setTimeout(x(this, es, ji).bind(this), l(this, ln))), x(this, es, ji).call(this));
  }
  stop() {
    l(this, jt) && (l(this, Ue)._clearTimeout(l(this, jt)), d(this, jt, null));
  }
  pause(t) {
    this.stop(), t && d(this, ye, -2);
  }
  resume() {
    this.start();
  }
}
Ue = new WeakMap(), jt = new WeakMap(), ln = new WeakMap(), ye = new WeakMap(), es = new WeakSet(), ji = async function() {
  try {
    const t = await l(this, Ue).getBlockNumber();
    if (l(this, ye) === -2) {
      d(this, ye, t);
      return;
    }
    if (t !== l(this, ye)) {
      for (let e = l(this, ye) + 1; e <= t; e++) {
        if (l(this, jt) == null)
          return;
        await l(this, Ue).emit("block", e);
      }
      d(this, ye, t);
    }
  } catch {
  }
  l(this, jt) != null && d(this, jt, l(this, Ue)._setTimeout(x(this, es, ji).bind(this), l(this, ln)));
};
var Vn, Kn, fn;
class hc {
  /**
   *  Create a new **OnBlockSubscriber** attached to %%provider%%.
   */
  constructor(t) {
    y(this, Vn, void 0);
    y(this, Kn, void 0);
    y(this, fn, void 0);
    d(this, Vn, t), d(this, fn, !1), d(this, Kn, (e) => {
      this._poll(e, l(this, Vn));
    });
  }
  /**
   *  Called on every new block.
   */
  async _poll(t, e) {
    throw new Error("sub-classes must override this");
  }
  start() {
    l(this, fn) || (d(this, fn, !0), l(this, Kn).call(this, -2), l(this, Vn).on("block", l(this, Kn)));
  }
  stop() {
    l(this, fn) && (d(this, fn, !1), l(this, Vn).off("block", l(this, Kn)));
  }
  pause(t) {
    this.stop();
  }
  resume() {
    this.start();
  }
}
Vn = new WeakMap(), Kn = new WeakMap(), fn = new WeakMap();
var ns, De;
class wm extends hc {
  constructor(e, n) {
    super(e);
    y(this, ns, void 0);
    y(this, De, void 0);
    d(this, ns, n), d(this, De, -2);
  }
  pause(e) {
    e && d(this, De, -2), super.pause(e);
  }
  async _poll(e, n) {
    const s = await n.getBlock(l(this, ns));
    s != null && (l(this, De) === -2 ? d(this, De, s.number) : s.number > l(this, De) && (n.emit(l(this, ns), s.number), d(this, De, s.number)));
  }
}
ns = new WeakMap(), De = new WeakMap();
var Po;
class Am extends hc {
  constructor(e, n) {
    super(e);
    y(this, Po, void 0);
    d(this, Po, Ba(n));
  }
  async _poll(e, n) {
    throw new Error("@TODO");
  }
}
Po = new WeakMap();
var rs;
class bm extends hc {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%hash%%.
   */
  constructor(e, n) {
    super(e);
    y(this, rs, void 0);
    d(this, rs, n);
  }
  async _poll(e, n) {
    const s = await n.getTransactionReceipt(l(this, rs));
    s && n.emit(l(this, rs), s);
  }
}
rs = new WeakMap();
var Fe, ss, is, hn, Wt, xo, Tf;
class dc {
  /**
   *  Create a new **PollingTransactionSubscriber** attached to
   *  %%provider%%, listening for %%filter%%.
   */
  constructor(t, e) {
    y(this, xo);
    y(this, Fe, void 0);
    y(this, ss, void 0);
    y(this, is, void 0);
    y(this, hn, void 0);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    y(this, Wt, void 0);
    d(this, Fe, t), d(this, ss, Ba(e)), d(this, is, x(this, xo, Tf).bind(this)), d(this, hn, !1), d(this, Wt, -2);
  }
  start() {
    l(this, hn) || (d(this, hn, !0), l(this, Wt) === -2 && l(this, Fe).getBlockNumber().then((t) => {
      d(this, Wt, t);
    }), l(this, Fe).on("block", l(this, is)));
  }
  stop() {
    l(this, hn) && (d(this, hn, !1), l(this, Fe).off("block", l(this, is)));
  }
  pause(t) {
    this.stop(), t && d(this, Wt, -2);
  }
  resume() {
    this.start();
  }
}
Fe = new WeakMap(), ss = new WeakMap(), is = new WeakMap(), hn = new WeakMap(), Wt = new WeakMap(), xo = new WeakSet(), Tf = async function(t) {
  if (l(this, Wt) === -2)
    return;
  const e = Ba(l(this, ss));
  e.fromBlock = l(this, Wt) + 1, e.toBlock = t;
  const n = await l(this, Fe).getLogs(e);
  if (n.length === 0) {
    l(this, Wt) < t - 60 && d(this, Wt, t - 60);
    return;
  }
  for (const s of n)
    l(this, Fe).emit(l(this, ss), s), d(this, Wt, s.blockNumber);
};
const Em = BigInt(2), Nm = 10;
function Li(r) {
  return r && typeof r.then == "function";
}
function Wi(r, t) {
  return r + ":" + JSON.stringify(t, (e, n) => {
    if (n == null)
      return "null";
    if (typeof n == "bigint")
      return `bigint:${n.toString()}`;
    if (typeof n == "string")
      return n.toLowerCase();
    if (typeof n == "object" && !Array.isArray(n)) {
      const s = Object.keys(n);
      return s.sort(), s.reduce((i, o) => (i[o] = n[o], i), {});
    }
    return n;
  });
}
class fo {
  /**
   *  Create a new UnmanagedSubscriber with %%name%%.
   */
  constructor(t) {
    /**
     *  The name fof the event.
     */
    m(this, "name");
    B(this, { name: t });
  }
  start() {
  }
  stop() {
  }
  pause(t) {
  }
  resume() {
  }
}
function Pm(r) {
  return JSON.parse(JSON.stringify(r));
}
function Sa(r) {
  return r = Array.from(new Set(r).values()), r.sort(), r;
}
async function ia(r, t) {
  if (r == null)
    throw new Error("invalid event");
  if (Array.isArray(r) && (r = { topics: r }), typeof r == "string")
    switch (r) {
      case "block":
      case "debug":
      case "error":
      case "finalized":
      case "network":
      case "pending":
      case "safe":
        return { type: r, tag: r };
    }
  if (X(r, 32)) {
    const e = r.toLowerCase();
    return { type: "transaction", tag: Wi("tx", { hash: e }), hash: e };
  }
  if (r.orphan) {
    const e = r;
    return { type: "orphan", tag: Wi("orphan", e), filter: Pm(e) };
  }
  if (r.address || r.topics) {
    const e = r, n = {
      topics: (e.topics || []).map((s) => s == null ? null : Array.isArray(s) ? Sa(s.map((i) => i.toLowerCase())) : s.toLowerCase())
    };
    if (e.address) {
      const s = [], i = [], o = (a) => {
        X(a) ? s.push(a) : i.push((async () => {
          s.push(await bt(a, t));
        })());
      };
      Array.isArray(e.address) ? e.address.forEach(o) : o(e.address), i.length && await Promise.all(i), n.address = Sa(s.map((a) => a.toLowerCase()));
    }
    return { filter: n, tag: Wi("event", n), type: "event" };
  }
  g(!1, "unknown ProviderEvent", "event", r);
}
function oa() {
  return (/* @__PURE__ */ new Date()).getTime();
}
const xm = {
  cacheTimeout: 250,
  pollingInterval: 4e3
};
var ht, dn, dt, os, Gt, Jn, pn, Le, hi, Zt, as, cs, yt, Ft, di, Ua, pi, Da, zn, Ds, gi, Fa, jn, Fs, us, Zi;
class ho {
  /**
   *  Create a new **AbstractProvider** connected to %%network%%, or
   *  use the various network detection capabilities to discover the
   *  [[Network]] if necessary.
   */
  constructor(t, e) {
    // Shares multiple identical requests made during the same 250ms
    y(this, yt);
    y(this, di);
    y(this, pi);
    // Account
    y(this, zn);
    y(this, gi);
    y(this, jn);
    y(this, us);
    y(this, ht, void 0);
    y(this, dn, void 0);
    // null=unpaused, true=paused+dropWhilePaused, false=paused
    y(this, dt, void 0);
    y(this, os, void 0);
    y(this, Gt, void 0);
    y(this, Jn, void 0);
    y(this, pn, void 0);
    // The most recent block number if running an event or -1 if no "block" event
    y(this, Le, void 0);
    y(this, hi, void 0);
    y(this, Zt, void 0);
    y(this, as, void 0);
    y(this, cs, void 0);
    if (d(this, cs, Object.assign({}, xm, e || {})), t === "any")
      d(this, Jn, !0), d(this, Gt, null);
    else if (t) {
      const n = at.from(t);
      d(this, Jn, !1), d(this, Gt, Promise.resolve(n)), setTimeout(() => {
        this.emit("network", n, null);
      }, 0);
    } else
      d(this, Jn, !1), d(this, Gt, null);
    d(this, Le, -1), d(this, pn, /* @__PURE__ */ new Map()), d(this, ht, /* @__PURE__ */ new Map()), d(this, dn, /* @__PURE__ */ new Map()), d(this, dt, null), d(this, os, !1), d(this, hi, 1), d(this, Zt, /* @__PURE__ */ new Map()), d(this, as, !1);
  }
  get pollingInterval() {
    return l(this, cs).pollingInterval;
  }
  /**
   *  Returns ``this``, to allow an **AbstractProvider** to implement
   *  the [[ContractRunner]] interface.
   */
  get provider() {
    return this;
  }
  /**
   *  Returns all the registered plug-ins.
   */
  get plugins() {
    return Array.from(l(this, dn).values());
  }
  /**
   *  Attach a new plug-in.
   */
  attachPlugin(t) {
    if (l(this, dn).get(t.name))
      throw new Error(`cannot replace existing plugin: ${t.name} `);
    return l(this, dn).set(t.name, t.connect(this)), this;
  }
  /**
   *  Get a plugin by name.
   */
  getPlugin(t) {
    return l(this, dn).get(t) || null;
  }
  /**
   *  Prevent any CCIP-read operation, regardless of whether requested
   *  in a [[call]] using ``enableCcipRead``.
   */
  get disableCcipRead() {
    return l(this, as);
  }
  set disableCcipRead(t) {
    d(this, as, !!t);
  }
  /**
   *  Resolves to the data for executing the CCIP-read operations.
   */
  async ccipReadFetch(t, e, n) {
    if (this.disableCcipRead || n.length === 0 || t.to == null)
      return null;
    const s = t.to.toLowerCase(), i = e.toLowerCase(), o = [];
    for (let a = 0; a < n.length; a++) {
      const c = n[a], u = c.replace("{sender}", s).replace("{data}", i), f = new Tt(u);
      c.indexOf("{data}") === -1 && (f.body = { data: i, sender: s }), this.emit("debug", { action: "sendCcipReadFetchRequest", request: f, index: a, urls: n });
      let h = "unknown error";
      const p = await f.send();
      try {
        const w = p.bodyJson;
        if (w.data)
          return this.emit("debug", { action: "receiveCcipReadFetchResult", request: f, result: w }), w.data;
        w.message && (h = w.message), this.emit("debug", { action: "receiveCcipReadFetchError", request: f, result: w });
      } catch {
      }
      b(p.statusCode < 400 || p.statusCode >= 500, `response not found during CCIP fetch: ${h}`, "OFFCHAIN_FAULT", { reason: "404_MISSING_RESOURCE", transaction: t, info: { url: c, errorMessage: h } }), o.push(h);
    }
    b(!1, `error encountered during CCIP fetch: ${o.map((a) => JSON.stringify(a)).join(", ")}`, "OFFCHAIN_FAULT", {
      reason: "500_SERVER_ERROR",
      transaction: t,
      info: { urls: n, errorMessages: o }
    });
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a block before
   *  returning it, to add additional properties or an alternate
   *  sub-class of [[Block]].
   */
  _wrapBlock(t, e) {
    return new Kg(um(t), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a log before
   *  returning it, to add additional properties or an alternate
   *  sub-class of [[Log]].
   */
  _wrapLog(t, e) {
    return new xi(am(t), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  receipt before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionReceipt]].
   */
  _wrapTransactionReceipt(t, e) {
    return new mf(dm(t), this);
  }
  /**
   *  Provides the opportunity for a sub-class to wrap a transaction
   *  response before returning it, to add additional properties or an
   *  alternate sub-class of [[TransactionResponse]].
   */
  _wrapTransactionResponse(t, e) {
    return new ti(Of(t), this);
  }
  /**
   *  Resolves to the Network, forcing a network detection using whatever
   *  technique the sub-class requires.
   *
   *  Sub-classes **must** override this.
   */
  _detectNetwork() {
    b(!1, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
      operation: "_detectNetwork"
    });
  }
  /**
   *  Sub-classes should use this to perform all built-in operations. All
   *  methods sanitizes and normalizes the values passed into this.
   *
   *  Sub-classes **must** override this.
   */
  async _perform(t) {
    b(!1, `unsupported method: ${t.method}`, "UNSUPPORTED_OPERATION", {
      operation: t.method,
      info: t
    });
  }
  // State
  async getBlockNumber() {
    const t = L(await x(this, yt, Ft).call(this, { method: "getBlockNumber" }), "%response");
    return l(this, Le) >= 0 && d(this, Le, t), t;
  }
  /**
   *  Returns or resolves to the address for %%address%%, resolving ENS
   *  names and [[Addressable]] objects and returning if already an
   *  address.
   */
  _getAddress(t) {
    return bt(t, this);
  }
  /**
   *  Returns or resolves to a valid block tag for %%blockTag%%, resolving
   *  negative values and returning if already a valid block tag.
   */
  _getBlockTag(t) {
    if (t == null)
      return "latest";
    switch (t) {
      case "earliest":
        return "0x0";
      case "finalized":
      case "latest":
      case "pending":
      case "safe":
        return t;
    }
    if (X(t))
      return X(t, 32) ? t : On(t);
    if (typeof t == "bigint" && (t = L(t, "blockTag")), typeof t == "number")
      return t >= 0 ? On(t) : l(this, Le) >= 0 ? On(l(this, Le) + t) : this.getBlockNumber().then((e) => On(e + t));
    g(!1, "invalid blockTag", "blockTag", t);
  }
  /**
   *  Returns or resolves to a filter for %%filter%%, resolving any ENS
   *  names or [[Addressable]] object and returning if already a valid
   *  filter.
   */
  _getFilter(t) {
    const e = (t.topics || []).map((c) => c == null ? null : Array.isArray(c) ? Sa(c.map((u) => u.toLowerCase())) : c.toLowerCase()), n = "blockHash" in t ? t.blockHash : void 0, s = (c, u, f) => {
      let h;
      switch (c.length) {
        case 0:
          break;
        case 1:
          h = c[0];
          break;
        default:
          c.sort(), h = c;
      }
      if (n && (u != null || f != null))
        throw new Error("invalid filter");
      const p = {};
      return h && (p.address = h), e.length && (p.topics = e), u && (p.fromBlock = u), f && (p.toBlock = f), n && (p.blockHash = n), p;
    };
    let i = [];
    if (t.address)
      if (Array.isArray(t.address))
        for (const c of t.address)
          i.push(this._getAddress(c));
      else
        i.push(this._getAddress(t.address));
    let o;
    "fromBlock" in t && (o = this._getBlockTag(t.fromBlock));
    let a;
    return "toBlock" in t && (a = this._getBlockTag(t.toBlock)), i.filter((c) => typeof c != "string").length || o != null && typeof o != "string" || a != null && typeof a != "string" ? Promise.all([Promise.all(i), o, a]).then((c) => s(c[0], c[1], c[2])) : s(i, o, a);
  }
  /**
   *  Returns or resovles to a transaction for %%request%%, resolving
   *  any ENS names or [[Addressable]] and returning if already a valid
   *  transaction.
   */
  _getTransactionRequest(t) {
    const e = co(t), n = [];
    if (["to", "from"].forEach((s) => {
      if (e[s] == null)
        return;
      const i = bt(e[s], this);
      Li(i) ? n.push(async function() {
        e[s] = await i;
      }()) : e[s] = i;
    }), e.blockTag != null) {
      const s = this._getBlockTag(e.blockTag);
      Li(s) ? n.push(async function() {
        e.blockTag = await s;
      }()) : e.blockTag = s;
    }
    return n.length ? async function() {
      return await Promise.all(n), e;
    }() : e;
  }
  async getNetwork() {
    if (l(this, Gt) == null) {
      const s = this._detectNetwork().then((i) => (this.emit("network", i, null), i), (i) => {
        throw l(this, Gt) === s && d(this, Gt, null), i;
      });
      return d(this, Gt, s), (await s).clone();
    }
    const t = l(this, Gt), [e, n] = await Promise.all([
      t,
      this._detectNetwork()
      // The actual connected network
    ]);
    return e.chainId !== n.chainId && (l(this, Jn) ? (this.emit("network", n, e), l(this, Gt) === t && d(this, Gt, Promise.resolve(n))) : b(!1, `network changed: ${e.chainId} => ${n.chainId} `, "NETWORK_ERROR", {
      event: "changed"
    })), e.clone();
  }
  async getFeeData() {
    const t = await this.getNetwork(), e = async () => {
      const { _block: s, gasPrice: i, priorityFee: o } = await pt({
        _block: x(this, gi, Fa).call(this, "latest", !1),
        gasPrice: (async () => {
          try {
            const f = await x(this, yt, Ft).call(this, { method: "getGasPrice" });
            return I(f, "%response");
          } catch {
          }
          return null;
        })(),
        priorityFee: (async () => {
          try {
            const f = await x(this, yt, Ft).call(this, { method: "getPriorityFee" });
            return I(f, "%response");
          } catch {
          }
          return null;
        })()
      });
      let a = null, c = null;
      const u = this._wrapBlock(s, t);
      return u && u.baseFeePerGas && (c = o ?? BigInt("1000000000"), a = u.baseFeePerGas * Em + c), new Cu(i, a, c);
    }, n = t.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
    if (n) {
      const s = new Tt(n.url), i = await n.processFunc(e, this, s);
      return new Cu(i.gasPrice, i.maxFeePerGas, i.maxPriorityFeePerGas);
    }
    return await e();
  }
  async estimateGas(t) {
    let e = this._getTransactionRequest(t);
    return Li(e) && (e = await e), I(await x(this, yt, Ft).call(this, {
      method: "estimateGas",
      transaction: e
    }), "%response");
  }
  async call(t) {
    const { tx: e, blockTag: n } = await pt({
      tx: this._getTransactionRequest(t),
      blockTag: this._getBlockTag(t.blockTag)
    });
    return await x(this, pi, Da).call(this, x(this, di, Ua).call(this, e, n, t.enableCcipRead ? 0 : -1));
  }
  async getBalance(t, e) {
    return I(await x(this, zn, Ds).call(this, { method: "getBalance" }, t, e), "%response");
  }
  async getTransactionCount(t, e) {
    return L(await x(this, zn, Ds).call(this, { method: "getTransactionCount" }, t, e), "%response");
  }
  async getCode(t, e) {
    return T(await x(this, zn, Ds).call(this, { method: "getCode" }, t, e));
  }
  async getStorage(t, e, n) {
    const s = I(e, "position");
    return T(await x(this, zn, Ds).call(this, { method: "getStorage", position: s }, t, n));
  }
  // Write
  async broadcastTransaction(t) {
    const { blockNumber: e, hash: n, network: s } = await pt({
      blockNumber: this.getBlockNumber(),
      hash: this._perform({
        method: "broadcastTransaction",
        signedTransaction: t
      }),
      network: this.getNetwork()
    }), i = Xs.from(t);
    if (i.hash !== n)
      throw new Error("@TODO: the returned hash did not match");
    return this._wrapTransactionResponse(i, s).replaceableTransaction(e);
  }
  // Queries
  async getBlock(t, e) {
    const { network: n, params: s } = await pt({
      network: this.getNetwork(),
      params: x(this, gi, Fa).call(this, t, !!e)
    });
    return s == null ? null : this._wrapBlock(s, n);
  }
  async getTransaction(t) {
    const { network: e, params: n } = await pt({
      network: this.getNetwork(),
      params: x(this, yt, Ft).call(this, { method: "getTransaction", hash: t })
    });
    return n == null ? null : this._wrapTransactionResponse(n, e);
  }
  async getTransactionReceipt(t) {
    const { network: e, params: n } = await pt({
      network: this.getNetwork(),
      params: x(this, yt, Ft).call(this, { method: "getTransactionReceipt", hash: t })
    });
    if (n == null)
      return null;
    if (n.gasPrice == null && n.effectiveGasPrice == null) {
      const s = await x(this, yt, Ft).call(this, { method: "getTransaction", hash: t });
      if (s == null)
        throw new Error("report this; could not find tx or effectiveGasPrice");
      n.effectiveGasPrice = s.gasPrice;
    }
    return this._wrapTransactionReceipt(n, e);
  }
  async getTransactionResult(t) {
    const { result: e } = await pt({
      network: this.getNetwork(),
      result: x(this, yt, Ft).call(this, { method: "getTransactionResult", hash: t })
    });
    return e == null ? null : T(e);
  }
  // Bloom-filter Queries
  async getLogs(t) {
    let e = this._getFilter(t);
    Li(e) && (e = await e);
    const { network: n, params: s } = await pt({
      network: this.getNetwork(),
      params: x(this, yt, Ft).call(this, { method: "getLogs", filter: e })
    });
    return s.map((i) => this._wrapLog(i, n));
  }
  // ENS
  _getProvider(t) {
    b(!1, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
      operation: "_getProvider()"
    });
  }
  async getResolver(t) {
    return await lo.fromName(this, t);
  }
  async getAvatar(t) {
    const e = await this.getResolver(t);
    return e ? await e.getAvatar() : null;
  }
  async resolveName(t) {
    const e = await this.getResolver(t);
    return e ? await e.getAddress() : null;
  }
  async lookupAddress(t) {
    t = V(t);
    const e = Ra(t.substring(2).toLowerCase() + ".addr.reverse");
    try {
      const n = await lo.getEnsAddress(this), i = await new rr(n, [
        "function resolver(bytes32) view returns (address)"
      ], this).resolver(e);
      if (i == null || i === ba)
        return null;
      const a = await new rr(i, [
        "function name(bytes32) view returns (string)"
      ], this).name(e);
      return await this.resolveName(a) !== t ? null : a;
    } catch (n) {
      if (Ot(n, "BAD_DATA") && n.value === "0x" || Ot(n, "CALL_EXCEPTION"))
        return null;
      throw n;
    }
    return null;
  }
  async waitForTransaction(t, e, n) {
    const s = e ?? 1;
    return s === 0 ? this.getTransactionReceipt(t) : new Promise(async (i, o) => {
      let a = null;
      const c = async (u) => {
        try {
          const f = await this.getTransactionReceipt(t);
          if (f != null && u - f.blockNumber + 1 >= s) {
            i(f), a && (clearTimeout(a), a = null);
            return;
          }
        } catch (f) {
          console.log("EEE", f);
        }
        this.once("block", c);
      };
      n != null && (a = setTimeout(() => {
        a != null && (a = null, this.off("block", c), o(tt("timeout", "TIMEOUT", { reason: "timeout" })));
      }, n)), c(await this.getBlockNumber());
    });
  }
  async waitForBlock(t) {
    b(!1, "not implemented yet", "NOT_IMPLEMENTED", {
      operation: "waitForBlock"
    });
  }
  /**
   *  Clear a timer created using the [[_setTimeout]] method.
   */
  _clearTimeout(t) {
    const e = l(this, Zt).get(t);
    e && (e.timer && clearTimeout(e.timer), l(this, Zt).delete(t));
  }
  /**
   *  Create a timer that will execute %%func%% after at least %%timeout%%
   *  (in ms). If %%timeout%% is unspecified, then %%func%% will execute
   *  in the next event loop.
   *
   *  [Pausing](AbstractProvider-paused) the provider will pause any
   *  associated timers.
   */
  _setTimeout(t, e) {
    e == null && (e = 0);
    const n = Rs(this, hi)._++, s = () => {
      l(this, Zt).delete(n), t();
    };
    if (this.paused)
      l(this, Zt).set(n, { timer: null, func: s, time: e });
    else {
      const i = setTimeout(s, e);
      l(this, Zt).set(n, { timer: i, func: s, time: oa() });
    }
    return n;
  }
  /**
   *  Perform %%func%% on each subscriber.
   */
  _forEachSubscriber(t) {
    for (const e of l(this, ht).values())
      t(e.subscriber);
  }
  /**
   *  Sub-classes may override this to customize subscription
   *  implementations.
   */
  _getSubscriber(t) {
    switch (t.type) {
      case "debug":
      case "error":
      case "network":
        return new fo(t.type);
      case "block": {
        const e = new ym(this);
        return e.pollingInterval = this.pollingInterval, e;
      }
      case "safe":
      case "finalized":
        return new wm(this, t.type);
      case "event":
        return new dc(this, t.filter);
      case "transaction":
        return new bm(this, t.hash);
      case "orphan":
        return new Am(this, t.filter);
    }
    throw new Error(`unsupported event: ${t.type}`);
  }
  /**
   *  If a [[Subscriber]] fails and needs to replace itself, this
   *  method may be used.
   *
   *  For example, this is used for providers when using the
   *  ``eth_getFilterChanges`` method, which can return null if state
   *  filters are not supported by the backend, allowing the Subscriber
   *  to swap in a [[PollingEventSubscriber]].
   */
  _recoverSubscriber(t, e) {
    for (const n of l(this, ht).values())
      if (n.subscriber === t) {
        n.started && n.subscriber.stop(), n.subscriber = e, n.started && e.start(), l(this, dt) != null && e.pause(l(this, dt));
        break;
      }
  }
  async on(t, e) {
    const n = await x(this, us, Zi).call(this, t);
    return n.listeners.push({ listener: e, once: !1 }), n.started || (n.subscriber.start(), n.started = !0, l(this, dt) != null && n.subscriber.pause(l(this, dt))), this;
  }
  async once(t, e) {
    const n = await x(this, us, Zi).call(this, t);
    return n.listeners.push({ listener: e, once: !0 }), n.started || (n.subscriber.start(), n.started = !0, l(this, dt) != null && n.subscriber.pause(l(this, dt))), this;
  }
  async emit(t, ...e) {
    const n = await x(this, jn, Fs).call(this, t, e);
    if (!n || n.listeners.length === 0)
      return !1;
    const s = n.listeners.length;
    return n.listeners = n.listeners.filter(({ listener: i, once: o }) => {
      const a = new $u(this, o ? null : i, t);
      try {
        i.call(this, ...e, a);
      } catch {
      }
      return !o;
    }), n.listeners.length === 0 && (n.started && n.subscriber.stop(), l(this, ht).delete(n.tag)), s > 0;
  }
  async listenerCount(t) {
    if (t) {
      const n = await x(this, jn, Fs).call(this, t);
      return n ? n.listeners.length : 0;
    }
    let e = 0;
    for (const { listeners: n } of l(this, ht).values())
      e += n.length;
    return e;
  }
  async listeners(t) {
    if (t) {
      const n = await x(this, jn, Fs).call(this, t);
      return n ? n.listeners.map(({ listener: s }) => s) : [];
    }
    let e = [];
    for (const { listeners: n } of l(this, ht).values())
      e = e.concat(n.map(({ listener: s }) => s));
    return e;
  }
  async off(t, e) {
    const n = await x(this, jn, Fs).call(this, t);
    if (!n)
      return this;
    if (e) {
      const s = n.listeners.map(({ listener: i }) => i).indexOf(e);
      s >= 0 && n.listeners.splice(s, 1);
    }
    return (!e || n.listeners.length === 0) && (n.started && n.subscriber.stop(), l(this, ht).delete(n.tag)), this;
  }
  async removeAllListeners(t) {
    if (t) {
      const { tag: e, started: n, subscriber: s } = await x(this, us, Zi).call(this, t);
      n && s.stop(), l(this, ht).delete(e);
    } else
      for (const [e, { started: n, subscriber: s }] of l(this, ht))
        n && s.stop(), l(this, ht).delete(e);
    return this;
  }
  // Alias for "on"
  async addListener(t, e) {
    return await this.on(t, e);
  }
  // Alias for "off"
  async removeListener(t, e) {
    return this.off(t, e);
  }
  /**
   *  If this provider has been destroyed using the [[destroy]] method.
   *
   *  Once destroyed, all resources are reclaimed, internal event loops
   *  and timers are cleaned up and no further requests may be sent to
   *  the provider.
   */
  get destroyed() {
    return l(this, os);
  }
  /**
   *  Sub-classes may use this to shutdown any sockets or release their
   *  resources and reject any pending requests.
   *
   *  Sub-classes **must** call ``super.destroy()``.
   */
  destroy() {
    this.removeAllListeners();
    for (const t of l(this, Zt).keys())
      this._clearTimeout(t);
    d(this, os, !0);
  }
  /**
   *  Whether the provider is currently paused.
   *
   *  A paused provider will not emit any events, and generally should
   *  not make any requests to the network, but that is up to sub-classes
   *  to manage.
   *
   *  Setting ``paused = true`` is identical to calling ``.pause(false)``,
   *  which will buffer any events that occur while paused until the
   *  provider is unpaused.
   */
  get paused() {
    return l(this, dt) != null;
  }
  set paused(t) {
    !!t !== this.paused && (this.paused ? this.resume() : this.pause(!1));
  }
  /**
   *  Pause the provider. If %%dropWhilePaused%%, any events that occur
   *  while paused are dropped, otherwise all events will be emitted once
   *  the provider is unpaused.
   */
  pause(t) {
    if (d(this, Le, -1), l(this, dt) != null) {
      if (l(this, dt) == !!t)
        return;
      b(!1, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
        operation: "pause"
      });
    }
    this._forEachSubscriber((e) => e.pause(t)), d(this, dt, !!t);
    for (const e of l(this, Zt).values())
      e.timer && clearTimeout(e.timer), e.time = oa() - e.time;
  }
  /**
   *  Resume the provider.
   */
  resume() {
    if (l(this, dt) != null) {
      this._forEachSubscriber((t) => t.resume()), d(this, dt, null);
      for (const t of l(this, Zt).values()) {
        let e = t.time;
        e < 0 && (e = 0), t.time = oa(), setTimeout(t.func, e);
      }
    }
  }
}
ht = new WeakMap(), dn = new WeakMap(), dt = new WeakMap(), os = new WeakMap(), Gt = new WeakMap(), Jn = new WeakMap(), pn = new WeakMap(), Le = new WeakMap(), hi = new WeakMap(), Zt = new WeakMap(), as = new WeakMap(), cs = new WeakMap(), yt = new WeakSet(), Ft = async function(t) {
  const e = l(this, cs).cacheTimeout;
  if (e < 0)
    return await this._perform(t);
  const n = Wi(t.method, t);
  let s = l(this, pn).get(n);
  return s || (s = this._perform(t), l(this, pn).set(n, s), setTimeout(() => {
    l(this, pn).get(n) === s && l(this, pn).delete(n);
  }, e)), await s;
}, di = new WeakSet(), Ua = async function(t, e, n) {
  b(n < Nm, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
    reason: "TOO_MANY_REDIRECTS",
    transaction: Object.assign({}, t, { blockTag: e, enableCcipRead: !0 })
  });
  const s = co(t);
  try {
    return T(await this._perform({ method: "call", transaction: s, blockTag: e }));
  } catch (i) {
    if (!this.disableCcipRead && ja(i) && i.data && n >= 0 && e === "latest" && s.to != null && $(i.data, 0, 4) === "0x556f1830") {
      const o = i.data, a = await bt(s.to, this);
      let c;
      try {
        c = Om($(i.data, 4));
      } catch (h) {
        b(!1, h.message, "OFFCHAIN_FAULT", {
          reason: "BAD_DATA",
          transaction: s,
          info: { data: o }
        });
      }
      b(c.sender.toLowerCase() === a.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
        action: "call",
        data: o,
        reason: "OffchainLookup",
        transaction: s,
        invocation: null,
        revert: {
          signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
          name: "OffchainLookup",
          args: c.errorArgs
        }
      });
      const u = await this.ccipReadFetch(s, c.calldata, c.urls);
      b(u != null, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
        reason: "FETCH_FAILED",
        transaction: s,
        info: { data: i.data, errorArgs: c.errorArgs }
      });
      const f = {
        to: a,
        data: rt([c.selector, vm([u, c.extraData])])
      };
      this.emit("debug", { action: "sendCcipReadCall", transaction: f });
      try {
        const h = await x(this, di, Ua).call(this, f, e, n + 1);
        return this.emit("debug", { action: "receiveCcipReadCallResult", transaction: Object.assign({}, f), result: h }), h;
      } catch (h) {
        throw this.emit("debug", { action: "receiveCcipReadCallError", transaction: Object.assign({}, f), error: h }), h;
      }
    }
    throw i;
  }
}, pi = new WeakSet(), Da = async function(t) {
  const { value: e } = await pt({
    network: this.getNetwork(),
    value: t
  });
  return e;
}, zn = new WeakSet(), Ds = async function(t, e, n) {
  let s = this._getAddress(e), i = this._getBlockTag(n);
  return (typeof s != "string" || typeof i != "string") && ([s, i] = await Promise.all([s, i])), await x(this, pi, Da).call(this, x(this, yt, Ft).call(this, Object.assign(t, { address: s, blockTag: i })));
}, gi = new WeakSet(), Fa = async function(t, e) {
  if (X(t, 32))
    return await x(this, yt, Ft).call(this, {
      method: "getBlock",
      blockHash: t,
      includeTransactions: e
    });
  let n = this._getBlockTag(t);
  return typeof n != "string" && (n = await n), await x(this, yt, Ft).call(this, {
    method: "getBlock",
    blockTag: n,
    includeTransactions: e
  });
}, jn = new WeakSet(), Fs = async function(t, e) {
  let n = await ia(t, this);
  return n.type === "event" && e && e.length > 0 && e[0].removed === !0 && (n = await ia({ orphan: "drop-log", log: e[0] }, this)), l(this, ht).get(n.tag) || null;
}, us = new WeakSet(), Zi = async function(t) {
  const e = await ia(t, this), n = e.tag;
  let s = l(this, ht).get(n);
  return s || (s = { subscriber: this._getSubscriber(e), tag: n, addressableMap: /* @__PURE__ */ new WeakMap(), nameMap: /* @__PURE__ */ new Map(), started: !1, listeners: [] }, l(this, ht).set(n, s)), s;
};
function km(r, t) {
  try {
    const e = La(r, t);
    if (e)
      return Ks(e);
  } catch {
  }
  return null;
}
function La(r, t) {
  if (r === "0x")
    return null;
  try {
    const e = L($(r, t, t + 32)), n = L($(r, e, e + 32));
    return $(r, e + 32, e + 32 + n);
  } catch {
  }
  return null;
}
function Du(r) {
  const t = Qt(r);
  if (t.length > 32)
    throw new Error("internal; should not happen");
  const e = new Uint8Array(32);
  return e.set(t, 32 - t.length), e;
}
function Rm(r) {
  if (r.length % 32 === 0)
    return r;
  const t = new Uint8Array(Math.ceil(r.length / 32) * 32);
  return t.set(r), t;
}
const Cm = new Uint8Array([]);
function vm(r) {
  const t = [];
  let e = 0;
  for (let n = 0; n < r.length; n++)
    t.push(Cm), e += 32;
  for (let n = 0; n < r.length; n++) {
    const s = K(r[n]);
    t[n] = Du(e), t.push(Du(s.length)), t.push(Rm(s)), e += 32 + Math.ceil(s.length / 32) * 32;
  }
  return rt(t);
}
const Fu = "0x0000000000000000000000000000000000000000000000000000000000000000";
function Om(r) {
  const t = {
    sender: "",
    urls: [],
    calldata: "",
    selector: "",
    extraData: "",
    errorArgs: []
  };
  b(kr(r) >= 5 * 32, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
    reason: "insufficient OffchainLookup data"
  });
  const e = $(r, 0, 32);
  b($(e, 0, 12) === $(Fu, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup sender"
  }), t.sender = $(e, 12);
  try {
    const n = [], s = L($(r, 32, 64)), i = L($(r, s, s + 32)), o = $(r, s + 32);
    for (let a = 0; a < i; a++) {
      const c = km(o, a * 32);
      if (c == null)
        throw new Error("abort");
      n.push(c);
    }
    t.urls = n;
  } catch {
    b(!1, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup urls"
    });
  }
  try {
    const n = La(r, 64);
    if (n == null)
      throw new Error("abort");
    t.calldata = n;
  } catch {
    b(!1, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup calldata"
    });
  }
  b($(r, 100, 128) === $(Fu, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup callbaackSelector"
  }), t.selector = $(r, 96, 100);
  try {
    const n = La(r, 128);
    if (n == null)
      throw new Error("abort");
    t.extraData = n;
  } catch {
    b(!1, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup extraData"
    });
  }
  return t.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map((n) => t[n]), t;
}
function pr(r, t) {
  if (r.provider)
    return r.provider;
  b(!1, "missing provider", "UNSUPPORTED_OPERATION", { operation: t });
}
async function Lu(r, t) {
  let e = co(t);
  if (e.to != null && (e.to = bt(e.to, r)), e.from != null) {
    const n = e.from;
    e.from = Promise.all([
      r.getAddress(),
      bt(n, r)
    ]).then(([s, i]) => (g(s.toLowerCase() === i.toLowerCase(), "transaction from mismatch", "tx.from", i), s));
  } else
    e.from = r.getAddress();
  return await pt(e);
}
class Tm {
  /**
   *  Creates a new Signer connected to %%provider%%.
   */
  constructor(t) {
    /**
     *  The provider this signer is connected to.
     */
    m(this, "provider");
    B(this, { provider: t || null });
  }
  async getNonce(t) {
    return pr(this, "getTransactionCount").getTransactionCount(await this.getAddress(), t);
  }
  async populateCall(t) {
    return await Lu(this, t);
  }
  async populateTransaction(t) {
    const e = pr(this, "populateTransaction"), n = await Lu(this, t);
    n.nonce == null && (n.nonce = await this.getNonce("pending")), n.gasLimit == null && (n.gasLimit = await this.estimateGas(n));
    const s = await this.provider.getNetwork();
    if (n.chainId != null) {
      const o = I(n.chainId);
      g(o === s.chainId, "transaction chainId mismatch", "tx.chainId", t.chainId);
    } else
      n.chainId = s.chainId;
    const i = n.maxFeePerGas != null || n.maxPriorityFeePerGas != null;
    if (n.gasPrice != null && (n.type === 2 || i) ? g(!1, "eip-1559 transaction do not support gasPrice", "tx", t) : (n.type === 0 || n.type === 1) && i && g(!1, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", t), (n.type === 2 || n.type == null) && n.maxFeePerGas != null && n.maxPriorityFeePerGas != null)
      n.type = 2;
    else if (n.type === 0 || n.type === 1) {
      const o = await e.getFeeData();
      b(o.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
        operation: "getGasPrice"
      }), n.gasPrice == null && (n.gasPrice = o.gasPrice);
    } else {
      const o = await e.getFeeData();
      if (n.type == null)
        if (o.maxFeePerGas != null && o.maxPriorityFeePerGas != null)
          if (n.type = 2, n.gasPrice != null) {
            const a = n.gasPrice;
            delete n.gasPrice, n.maxFeePerGas = a, n.maxPriorityFeePerGas = a;
          } else
            n.maxFeePerGas == null && (n.maxFeePerGas = o.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = o.maxPriorityFeePerGas);
        else
          o.gasPrice != null ? (b(!i, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
            operation: "populateTransaction"
          }), n.gasPrice == null && (n.gasPrice = o.gasPrice), n.type = 0) : b(!1, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
            operation: "signer.getFeeData"
          });
      else
        n.type === 2 && (n.maxFeePerGas == null && (n.maxFeePerGas = o.maxFeePerGas), n.maxPriorityFeePerGas == null && (n.maxPriorityFeePerGas = o.maxPriorityFeePerGas));
    }
    return await pt(n);
  }
  async estimateGas(t) {
    return pr(this, "estimateGas").estimateGas(await this.populateCall(t));
  }
  async call(t) {
    return pr(this, "call").call(await this.populateCall(t));
  }
  async resolveName(t) {
    return await pr(this, "resolveName").resolveName(t);
  }
  async sendTransaction(t) {
    const e = pr(this, "sendTransaction"), n = await this.populateTransaction(t);
    delete n.from;
    const s = Xs.from(n);
    return await e.broadcastTransaction(await this.signTransaction(s));
  }
}
const Mu = /* @__PURE__ */ new Set();
function Ci(r) {
  Mu.has(r) || (Mu.add(r), console.log("========= NOTICE ========="), console.log(`Request-Rate Exceeded for ${r} (this message will not be repeated)`), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.org/api-keys/"), console.log("=========================="));
}
function Im(r) {
  return JSON.parse(JSON.stringify(r));
}
var Pt, we, Wn, gn, Zn, ls, mi, Ma, yi, _a;
class If {
  /**
   *  Creates a new **FilterIdSubscriber** which will used [[_subscribe]]
   *  and [[_emitResults]] to setup the subscription and provide the event
   *  to the %%provider%%.
   */
  constructor(t) {
    y(this, mi);
    y(this, yi);
    y(this, Pt, void 0);
    y(this, we, void 0);
    y(this, Wn, void 0);
    y(this, gn, void 0);
    y(this, Zn, void 0);
    y(this, ls, void 0);
    d(this, Pt, t), d(this, we, null), d(this, Wn, x(this, mi, Ma).bind(this)), d(this, gn, !1), d(this, Zn, null), d(this, ls, !1);
  }
  /**
   *  Sub-classes **must** override this to begin the subscription.
   */
  _subscribe(t) {
    throw new Error("subclasses must override this");
  }
  /**
   *  Sub-classes **must** override this handle the events.
   */
  _emitResults(t, e) {
    throw new Error("subclasses must override this");
  }
  /**
   *  Sub-classes **must** override this handle recovery on errors.
   */
  _recover(t) {
    throw new Error("subclasses must override this");
  }
  start() {
    l(this, gn) || (d(this, gn, !0), x(this, mi, Ma).call(this, -2));
  }
  stop() {
    l(this, gn) && (d(this, gn, !1), d(this, ls, !0), x(this, yi, _a).call(this), l(this, Pt).off("block", l(this, Wn)));
  }
  pause(t) {
    t && x(this, yi, _a).call(this), l(this, Pt).off("block", l(this, Wn));
  }
  resume() {
    this.start();
  }
}
Pt = new WeakMap(), we = new WeakMap(), Wn = new WeakMap(), gn = new WeakMap(), Zn = new WeakMap(), ls = new WeakMap(), mi = new WeakSet(), Ma = async function(t) {
  try {
    l(this, we) == null && d(this, we, this._subscribe(l(this, Pt)));
    let e = null;
    try {
      e = await l(this, we);
    } catch (i) {
      if (!Ot(i, "UNSUPPORTED_OPERATION") || i.operation !== "eth_newFilter")
        throw i;
    }
    if (e == null) {
      d(this, we, null), l(this, Pt)._recoverSubscriber(this, this._recover(l(this, Pt)));
      return;
    }
    const n = await l(this, Pt).getNetwork();
    if (l(this, Zn) || d(this, Zn, n), l(this, Zn).chainId !== n.chainId)
      throw new Error("chaid changed");
    if (l(this, ls))
      return;
    const s = await l(this, Pt).send("eth_getFilterChanges", [e]);
    await this._emitResults(l(this, Pt), s);
  } catch (e) {
    console.log("@TODO", e);
  }
  l(this, Pt).once("block", l(this, Wn));
}, yi = new WeakSet(), _a = function() {
  const t = l(this, we);
  t && (d(this, we, null), t.then((e) => {
    l(this, Pt).send("eth_uninstallFilter", [e]);
  }));
};
var Yn;
class Bm extends If {
  /**
   *  Creates a new **FilterIdEventSubscriber** attached to %%provider%%
   *  listening for %%filter%%.
   */
  constructor(e, n) {
    super(e);
    y(this, Yn, void 0);
    d(this, Yn, Im(n));
  }
  _recover(e) {
    return new dc(e, l(this, Yn));
  }
  async _subscribe(e) {
    return await e.send("eth_newFilter", [l(this, Yn)]);
  }
  async _emitResults(e, n) {
    for (const s of n)
      e.emit(l(this, Yn), e._wrapLog(s, e._network));
  }
}
Yn = new WeakMap();
class Sm extends If {
  async _subscribe(t) {
    return await t.send("eth_newPendingTransactionFilter", []);
  }
  async _emitResults(t, e) {
    for (const n of e)
      t.emit("pending", n);
  }
}
const Um = "bigint,boolean,function,number,string,symbol".split(/,/g);
function Yi(r) {
  if (r == null || Um.indexOf(typeof r) >= 0 || typeof r.getAddress == "function")
    return r;
  if (Array.isArray(r))
    return r.map(Yi);
  if (typeof r == "object")
    return Object.keys(r).reduce((t, e) => (t[e] = r[e], t), {});
  throw new Error(`should not happen: ${r} (${typeof r})`);
}
function Dm(r) {
  return new Promise((t) => {
    setTimeout(t, r);
  });
}
function gr(r) {
  return r && r.toLowerCase();
}
function _u(r) {
  return r && typeof r.pollingInterval == "number";
}
const Fm = {
  polling: !1,
  staticNetwork: null,
  batchStallTime: 10,
  batchMaxSize: 1 << 20,
  batchMaxCount: 100,
  cacheTimeout: 250,
  pollingInterval: 4e3
};
class aa extends Tm {
  constructor(e, n) {
    super(e);
    m(this, "address");
    n = V(n), B(this, { address: n });
  }
  connect(e) {
    b(!1, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
      operation: "signer.connect"
    });
  }
  async getAddress() {
    return this.address;
  }
  // JSON-RPC will automatially fill in nonce, etc. so we just check from
  async populateTransaction(e) {
    return await this.populateCall(e);
  }
  // Returns just the hash of the transaction after sent, which is what
  // the bare JSON-RPC API does;
  async sendUncheckedTransaction(e) {
    const n = Yi(e), s = [];
    if (n.from) {
      const o = n.from;
      s.push((async () => {
        const a = await bt(o, this.provider);
        g(a != null && a.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", e), n.from = a;
      })());
    } else
      n.from = this.address;
    if (n.gasLimit == null && s.push((async () => {
      n.gasLimit = await this.provider.estimateGas({ ...n, from: this.address });
    })()), n.to != null) {
      const o = n.to;
      s.push((async () => {
        n.to = await bt(o, this.provider);
      })());
    }
    s.length && await Promise.all(s);
    const i = this.provider.getRpcTransaction(n);
    return this.provider.send("eth_sendTransaction", [i]);
  }
  async sendTransaction(e) {
    const n = await this.provider.getBlockNumber(), s = await this.sendUncheckedTransaction(e);
    return await new Promise((i, o) => {
      const a = [1e3, 100], c = async () => {
        const u = await this.provider.getTransaction(s);
        if (u != null) {
          i(u.replaceableTransaction(n));
          return;
        }
        this.provider._setTimeout(() => {
          c();
        }, a.pop() || 4e3);
      };
      c();
    });
  }
  async signTransaction(e) {
    const n = Yi(e);
    if (n.from) {
      const i = await bt(n.from, this.provider);
      g(i != null && i.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", e), n.from = i;
    } else
      n.from = this.address;
    const s = this.provider.getRpcTransaction(n);
    return await this.provider.send("eth_signTransaction", [s]);
  }
  async signMessage(e) {
    const n = typeof e == "string" ? Ve(e) : e;
    return await this.provider.send("personal_sign", [
      T(n),
      this.address.toLowerCase()
    ]);
  }
  async signTypedData(e, n, s) {
    const i = Yi(s), o = await ao.resolveNames(e, n, i, async (a) => {
      const c = await bt(a);
      return g(c != null, "TypedData does not support null address", "value", a), c;
    });
    return await this.provider.send("eth_signTypedData_v4", [
      this.address.toLowerCase(),
      JSON.stringify(ao.getPayload(o.domain, n, o.value))
    ]);
  }
  async unlock(e) {
    return this.provider.send("personal_unlockAccount", [
      this.address.toLowerCase(),
      e,
      null
    ]);
  }
  // https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign
  async _legacySignMessage(e) {
    const n = typeof e == "string" ? Ve(e) : e;
    return await this.provider.send("eth_sign", [
      this.address.toLowerCase(),
      T(n)
    ]);
  }
}
var qn, fs, Me, Ae, ie, Yt, Ht, wi, Ga;
class Bf extends ho {
  constructor(e, n) {
    super(e, n);
    y(this, wi);
    y(this, qn, void 0);
    // The next ID to use for the JSON-RPC ID field
    y(this, fs, void 0);
    // Payloads are queued and triggered in batches using the drainTimer
    y(this, Me, void 0);
    y(this, Ae, void 0);
    y(this, ie, void 0);
    y(this, Yt, void 0);
    y(this, Ht, void 0);
    d(this, fs, 1), d(this, qn, Object.assign({}, Fm, n || {})), d(this, Me, []), d(this, Ae, null), d(this, Yt, null), d(this, Ht, null);
    {
      let i = null;
      const o = new Promise((a) => {
        i = a;
      });
      d(this, ie, { promise: o, resolve: i });
    }
    const s = this._getOption("staticNetwork");
    typeof s == "boolean" ? (g(!s || e !== "any", "staticNetwork cannot be used on special network 'any'", "options", n), s && e != null && d(this, Yt, at.from(e))) : s && (g(e == null || s.matches(e), "staticNetwork MUST match network object", "options", n), d(this, Yt, s));
  }
  /**
   *  Returns the value associated with the option %%key%%.
   *
   *  Sub-classes can use this to inquire about configuration options.
   */
  _getOption(e) {
    return l(this, qn)[e];
  }
  /**
   *  Gets the [[Network]] this provider has committed to. On each call, the network
   *  is detected, and if it has changed, the call will reject.
   */
  get _network() {
    return b(l(this, Yt), "network is not available yet", "NETWORK_ERROR"), l(this, Yt);
  }
  /**
   *  Resolves to the non-normalized value by performing %%req%%.
   *
   *  Sub-classes may override this to modify behavior of actions,
   *  and should generally call ``super._perform`` as a fallback.
   */
  async _perform(e) {
    if (e.method === "call" || e.method === "estimateGas") {
      let s = e.transaction;
      if (s && s.type != null && I(s.type) && s.maxFeePerGas == null && s.maxPriorityFeePerGas == null) {
        const i = await this.getFeeData();
        i.maxFeePerGas == null && i.maxPriorityFeePerGas == null && (e = Object.assign({}, e, {
          transaction: Object.assign({}, s, { type: void 0 })
        }));
      }
    }
    const n = this.getRpcRequest(e);
    return n != null ? await this.send(n.method, n.args) : super._perform(e);
  }
  /**
   *  Sub-classes may override this; it detects the *actual* network that
   *  we are **currently** connected to.
   *
   *  Keep in mind that [[send]] may only be used once [[ready]], otherwise the
   *  _send primitive must be used instead.
   */
  async _detectNetwork() {
    const e = this._getOption("staticNetwork");
    if (e)
      if (e === !0) {
        if (l(this, Yt))
          return l(this, Yt);
      } else
        return e;
    return l(this, Ht) ? await l(this, Ht) : this.ready ? (d(this, Ht, (async () => {
      const n = at.from(I(await this.send("eth_chainId", [])));
      return d(this, Ht, null), n;
    })()), await l(this, Ht)) : (d(this, Ht, (async () => {
      const n = {
        id: Rs(this, fs)._++,
        method: "eth_chainId",
        params: [],
        jsonrpc: "2.0"
      };
      this.emit("debug", { action: "sendRpcPayload", payload: n });
      let s;
      try {
        s = (await this._send(n))[0], d(this, Ht, null);
      } catch (i) {
        throw d(this, Ht, null), this.emit("debug", { action: "receiveRpcError", error: i }), i;
      }
      if (this.emit("debug", { action: "receiveRpcResult", result: s }), "result" in s)
        return at.from(I(s.result));
      throw this.getRpcError(n, s);
    })()), await l(this, Ht));
  }
  /**
   *  Sub-classes **MUST** call this. Until [[_start]] has been called, no calls
   *  will be passed to [[_send]] from [[send]]. If it is overridden, then
   *  ``super._start()`` **MUST** be called.
   *
   *  Calling it multiple times is safe and has no effect.
   */
  _start() {
    l(this, ie) == null || l(this, ie).resolve == null || (l(this, ie).resolve(), d(this, ie, null), (async () => {
      for (; l(this, Yt) == null && !this.destroyed; )
        try {
          d(this, Yt, await this._detectNetwork());
        } catch (e) {
          if (this.destroyed)
            break;
          console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"), this.emit("error", tt("failed to bootstrap network detection", "NETWORK_ERROR", { event: "initial-network-discovery", info: { error: e } })), await Dm(1e3);
        }
      x(this, wi, Ga).call(this);
    })());
  }
  /**
   *  Resolves once the [[_start]] has been called. This can be used in
   *  sub-classes to defer sending data until the connection has been
   *  established.
   */
  async _waitUntilReady() {
    if (l(this, ie) != null)
      return await l(this, ie).promise;
  }
  /**
   *  Return a Subscriber that will manage the %%sub%%.
   *
   *  Sub-classes may override this to modify the behavior of
   *  subscription management.
   */
  _getSubscriber(e) {
    return e.type === "pending" ? new Sm(this) : e.type === "event" ? this._getOption("polling") ? new dc(this, e.filter) : new Bm(this, e.filter) : e.type === "orphan" && e.filter.orphan === "drop-log" ? new fo("orphan") : super._getSubscriber(e);
  }
  /**
   *  Returns true only if the [[_start]] has been called.
   */
  get ready() {
    return l(this, ie) == null;
  }
  /**
   *  Returns %%tx%% as a normalized JSON-RPC transaction request,
   *  which has all values hexlified and any numeric values converted
   *  to Quantity values.
   */
  getRpcTransaction(e) {
    const n = {};
    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((s) => {
      if (e[s] == null)
        return;
      let i = s;
      s === "gasLimit" && (i = "gas"), n[i] = On(I(e[s], `tx.${s}`));
    }), ["from", "to", "data"].forEach((s) => {
      e[s] != null && (n[s] = T(e[s]));
    }), e.accessList && (n.accessList = xn(e.accessList)), n;
  }
  /**
   *  Returns the request method and arguments required to perform
   *  %%req%%.
   */
  getRpcRequest(e) {
    switch (e.method) {
      case "chainId":
        return { method: "eth_chainId", args: [] };
      case "getBlockNumber":
        return { method: "eth_blockNumber", args: [] };
      case "getGasPrice":
        return { method: "eth_gasPrice", args: [] };
      case "getPriorityFee":
        return { method: "eth_maxPriorityFeePerGas", args: [] };
      case "getBalance":
        return {
          method: "eth_getBalance",
          args: [gr(e.address), e.blockTag]
        };
      case "getTransactionCount":
        return {
          method: "eth_getTransactionCount",
          args: [gr(e.address), e.blockTag]
        };
      case "getCode":
        return {
          method: "eth_getCode",
          args: [gr(e.address), e.blockTag]
        };
      case "getStorage":
        return {
          method: "eth_getStorageAt",
          args: [
            gr(e.address),
            "0x" + e.position.toString(16),
            e.blockTag
          ]
        };
      case "broadcastTransaction":
        return {
          method: "eth_sendRawTransaction",
          args: [e.signedTransaction]
        };
      case "getBlock":
        if ("blockTag" in e)
          return {
            method: "eth_getBlockByNumber",
            args: [e.blockTag, !!e.includeTransactions]
          };
        if ("blockHash" in e)
          return {
            method: "eth_getBlockByHash",
            args: [e.blockHash, !!e.includeTransactions]
          };
        break;
      case "getTransaction":
        return {
          method: "eth_getTransactionByHash",
          args: [e.hash]
        };
      case "getTransactionReceipt":
        return {
          method: "eth_getTransactionReceipt",
          args: [e.hash]
        };
      case "call":
        return {
          method: "eth_call",
          args: [this.getRpcTransaction(e.transaction), e.blockTag]
        };
      case "estimateGas":
        return {
          method: "eth_estimateGas",
          args: [this.getRpcTransaction(e.transaction)]
        };
      case "getLogs":
        return e.filter && e.filter.address != null && (Array.isArray(e.filter.address) ? e.filter.address = e.filter.address.map(gr) : e.filter.address = gr(e.filter.address)), { method: "eth_getLogs", args: [e.filter] };
    }
    return null;
  }
  /**
   *  Returns an ethers-style Error for the given JSON-RPC error
   *  %%payload%%, coalescing the various strings and error shapes
   *  that different nodes return, coercing them into a machine-readable
   *  standardized error.
   */
  getRpcError(e, n) {
    const { method: s } = e, { error: i } = n;
    if (s === "eth_estimateGas" && i.message) {
      const c = i.message;
      if (!c.match(/revert/i) && c.match(/insufficient funds/i))
        return tt("insufficient funds", "INSUFFICIENT_FUNDS", {
          transaction: e.params[0],
          info: { payload: e, error: i }
        });
    }
    if (s === "eth_call" || s === "eth_estimateGas") {
      const c = Ha(i), u = Ns.getBuiltinCallException(s === "eth_call" ? "call" : "estimateGas", e.params[0], c ? c.data : null);
      return u.info = { error: i, payload: e }, u;
    }
    const o = JSON.stringify(Mm(i));
    if (typeof i.message == "string" && i.message.match(/user denied|ethers-user-denied/i))
      return tt("user rejected action", "ACTION_REJECTED", {
        action: {
          eth_sign: "signMessage",
          personal_sign: "signMessage",
          eth_signTypedData_v4: "signTypedData",
          eth_signTransaction: "signTransaction",
          eth_sendTransaction: "sendTransaction",
          eth_requestAccounts: "requestAccess",
          wallet_requestAccounts: "requestAccess"
        }[s] || "unknown",
        reason: "rejected",
        info: { payload: e, error: i }
      });
    if (s === "eth_sendRawTransaction" || s === "eth_sendTransaction") {
      const c = e.params[0];
      if (o.match(/insufficient funds|base fee exceeds gas limit/i))
        return tt("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
          transaction: c,
          info: { error: i }
        });
      if (o.match(/nonce/i) && o.match(/too low/i))
        return tt("nonce has already been used", "NONCE_EXPIRED", { transaction: c, info: { error: i } });
      if (o.match(/replacement transaction/i) && o.match(/underpriced/i))
        return tt("replacement fee too low", "REPLACEMENT_UNDERPRICED", { transaction: c, info: { error: i } });
      if (o.match(/only replay-protected/i))
        return tt("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
          operation: s,
          info: { transaction: c, info: { error: i } }
        });
    }
    let a = !!o.match(/the method .* does not exist/i);
    return a || i && i.details && i.details.startsWith("Unauthorized method:") && (a = !0), a ? tt("unsupported operation", "UNSUPPORTED_OPERATION", {
      operation: e.method,
      info: { error: i, payload: e }
    }) : tt("could not coalesce error", "UNKNOWN_ERROR", { error: i, payload: e });
  }
  /**
   *  Requests the %%method%% with %%params%% via the JSON-RPC protocol
   *  over the underlying channel. This can be used to call methods
   *  on the backend that do not have a high-level API within the Provider
   *  API.
   *
   *  This method queues requests according to the batch constraints
   *  in the options, assigns the request a unique ID.
   *
   *  **Do NOT override** this method in sub-classes; instead
   *  override [[_send]] or force the options values in the
   *  call to the constructor to modify this method's behavior.
   */
  send(e, n) {
    if (this.destroyed)
      return Promise.reject(tt("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: e }));
    const s = Rs(this, fs)._++, i = new Promise((o, a) => {
      l(this, Me).push({
        resolve: o,
        reject: a,
        payload: { method: e, params: n, id: s, jsonrpc: "2.0" }
      });
    });
    return x(this, wi, Ga).call(this), i;
  }
  /**
   *  Resolves to the [[Signer]] account for  %%address%% managed by
   *  the client.
   *
   *  If the %%address%% is a number, it is used as an index in the
   *  the accounts from [[listAccounts]].
   *
   *  This can only be used on clients which manage accounts (such as
   *  Geth with imported account or MetaMask).
   *
   *  Throws if the account doesn't exist.
   */
  async getSigner(e) {
    e == null && (e = 0);
    const n = this.send("eth_accounts", []);
    if (typeof e == "number") {
      const i = await n;
      if (e >= i.length)
        throw new Error("no such account");
      return new aa(this, i[e]);
    }
    const { accounts: s } = await pt({
      network: this.getNetwork(),
      accounts: n
    });
    e = V(e);
    for (const i of s)
      if (V(i) === e)
        return new aa(this, e);
    throw new Error("invalid account");
  }
  async listAccounts() {
    return (await this.send("eth_accounts", [])).map((n) => new aa(this, n));
  }
  destroy() {
    l(this, Ae) && (clearTimeout(l(this, Ae)), d(this, Ae, null));
    for (const { payload: e, reject: n } of l(this, Me))
      n(tt("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: e.method }));
    d(this, Me, []), super.destroy();
  }
}
qn = new WeakMap(), fs = new WeakMap(), Me = new WeakMap(), Ae = new WeakMap(), ie = new WeakMap(), Yt = new WeakMap(), Ht = new WeakMap(), wi = new WeakSet(), Ga = function() {
  if (l(this, Ae))
    return;
  const e = this._getOption("batchMaxCount") === 1 ? 0 : this._getOption("batchStallTime");
  d(this, Ae, setTimeout(() => {
    d(this, Ae, null);
    const n = l(this, Me);
    for (d(this, Me, []); n.length; ) {
      const s = [n.shift()];
      for (; n.length && s.length !== l(this, qn).batchMaxCount; )
        if (s.push(n.shift()), JSON.stringify(s.map((o) => o.payload)).length > l(this, qn).batchMaxSize) {
          n.unshift(s.pop());
          break;
        }
      (async () => {
        const i = s.length === 1 ? s[0].payload : s.map((o) => o.payload);
        this.emit("debug", { action: "sendRpcPayload", payload: i });
        try {
          const o = await this._send(i);
          this.emit("debug", { action: "receiveRpcResult", result: o });
          for (const { resolve: a, reject: c, payload: u } of s) {
            if (this.destroyed) {
              c(tt("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: u.method }));
              continue;
            }
            const f = o.filter((h) => h.id === u.id)[0];
            if (f == null) {
              const h = tt("missing response for request", "BAD_DATA", {
                value: o,
                info: { payload: u }
              });
              this.emit("error", h), c(h);
              continue;
            }
            if ("error" in f) {
              c(this.getRpcError(u, f));
              continue;
            }
            a(f.result);
          }
        } catch (o) {
          this.emit("debug", { action: "receiveRpcError", error: o });
          for (const { reject: a } of s)
            a(o);
        }
      })();
    }
  }, e));
};
var mn;
class Lm extends Bf {
  constructor(e, n) {
    super(e, n);
    y(this, mn, void 0);
    d(this, mn, 4e3);
  }
  _getSubscriber(e) {
    const n = super._getSubscriber(e);
    return _u(n) && (n.pollingInterval = l(this, mn)), n;
  }
  /**
   *  The polling interval (default: 4000 ms)
   */
  get pollingInterval() {
    return l(this, mn);
  }
  set pollingInterval(e) {
    if (!Number.isInteger(e) || e < 0)
      throw new Error("invalid interval");
    d(this, mn, e), this._forEachSubscriber((n) => {
      _u(n) && (n.pollingInterval = l(this, mn));
    });
  }
}
mn = new WeakMap();
var hs;
class Pn extends Lm {
  constructor(e, n, s) {
    e == null && (e = "http://localhost:8545");
    super(n, s);
    y(this, hs, void 0);
    typeof e == "string" ? d(this, hs, new Tt(e)) : d(this, hs, e.clone());
  }
  _getConnection() {
    return l(this, hs).clone();
  }
  async send(e, n) {
    return await this._start(), await super.send(e, n);
  }
  async _send(e) {
    const n = this._getConnection();
    n.body = JSON.stringify(e), n.setHeader("content-type", "application/json");
    const s = await n.send();
    s.assertOk();
    let i = s.bodyJson;
    return Array.isArray(i) || (i = [i]), i;
  }
}
hs = new WeakMap();
function Ha(r) {
  if (r == null)
    return null;
  if (typeof r.message == "string" && r.message.match(/revert/i) && X(r.data))
    return { message: r.message, data: r.data };
  if (typeof r == "object") {
    for (const t in r) {
      const e = Ha(r[t]);
      if (e)
        return e;
    }
    return null;
  }
  if (typeof r == "string")
    try {
      return Ha(JSON.parse(r));
    } catch {
    }
  return null;
}
function Qa(r, t) {
  if (r != null) {
    if (typeof r.message == "string" && t.push(r.message), typeof r == "object")
      for (const e in r)
        Qa(r[e], t);
    if (typeof r == "string")
      try {
        return Qa(JSON.parse(r), t);
      } catch {
      }
  }
}
function Mm(r) {
  const t = [];
  return Qa(r, t), t;
}
const Mi = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
function _m(r) {
  switch (r) {
    case "mainnet":
      return "rpc.ankr.com/eth";
    case "goerli":
      return "rpc.ankr.com/eth_goerli";
    case "matic":
      return "rpc.ankr.com/polygon";
    case "arbitrum":
      return "rpc.ankr.com/arbitrum";
  }
  g(!1, "unsupported network", "network", r);
}
class po extends Pn {
  /**
   *  Create a new **AnkrProvider**.
   *
   *  By default connecting to ``mainnet`` with a highly throttled
   *  API key.
   */
  constructor(e, n) {
    e == null && (e = "mainnet");
    const s = at.from(e);
    n == null && (n = Mi);
    const i = { polling: !0, staticNetwork: s }, o = po.getRequest(s, n);
    super(o, s, i);
    /**
     *  The API key for the Ankr connection.
     */
    m(this, "apiKey");
    B(this, { apiKey: n });
  }
  _getProvider(e) {
    try {
      return new po(e, this.apiKey);
    } catch {
    }
    return super._getProvider(e);
  }
  /**
   *  Returns a prepared request for connecting to %%network%% with
   *  %%apiKey%%.
   */
  static getRequest(e, n) {
    n == null && (n = Mi);
    const s = new Tt(`https://${_m(e.name)}/${n}`);
    return s.allowGzip = !0, n === Mi && (s.retryFunc = async (i, o, a) => (Ci("AnkrProvider"), !0)), s;
  }
  getRpcError(e, n) {
    return e.method === "eth_sendRawTransaction" && n && n.error && n.error.message === "INTERNAL_ERROR: could not replace existing tx" && (n.error.message = "replacement transaction underpriced"), super.getRpcError(e, n);
  }
  isCommunityResource() {
    return this.apiKey === Mi;
  }
}
const _i = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
function Gm(r) {
  switch (r) {
    case "mainnet":
      return "eth-mainnet.alchemyapi.io";
    case "goerli":
      return "eth-goerli.g.alchemy.com";
    case "sepolia":
      return "eth-sepolia.g.alchemy.com";
    case "arbitrum":
      return "arb-mainnet.g.alchemy.com";
    case "arbitrum-goerli":
      return "arb-goerli.g.alchemy.com";
    case "base":
      return "base-mainnet.g.alchemy.com";
    case "base-goerli":
      return "base-goerli.g.alchemy.com";
    case "matic":
      return "polygon-mainnet.g.alchemy.com";
    case "matic-mumbai":
      return "polygon-mumbai.g.alchemy.com";
    case "optimism":
      return "opt-mainnet.g.alchemy.com";
    case "optimism-goerli":
      return "opt-goerli.g.alchemy.com";
  }
  g(!1, "unsupported network", "network", r);
}
class go extends Pn {
  constructor(e, n) {
    e == null && (e = "mainnet");
    const s = at.from(e);
    n == null && (n = _i);
    const i = go.getRequest(s, n);
    super(i, s, { staticNetwork: s });
    m(this, "apiKey");
    B(this, { apiKey: n });
  }
  _getProvider(e) {
    try {
      return new go(e, this.apiKey);
    } catch {
    }
    return super._getProvider(e);
  }
  async _perform(e) {
    if (e.method === "getTransactionResult") {
      const { trace: n, tx: s } = await pt({
        trace: this.send("trace_transaction", [e.hash]),
        tx: this.getTransaction(e.hash)
      });
      if (n == null || s == null)
        return null;
      let i, o = !1;
      try {
        i = n[0].result.output, o = n[0].error === "Reverted";
      } catch {
      }
      if (i)
        return b(!o, "an error occurred during transaction executions", "CALL_EXCEPTION", {
          action: "getTransactionResult",
          data: i,
          reason: null,
          transaction: s,
          invocation: null,
          revert: null
          // @TODO
        }), i;
      b(!1, "could not parse trace result", "BAD_DATA", { value: n });
    }
    return await super._perform(e);
  }
  isCommunityResource() {
    return this.apiKey === _i;
  }
  static getRequest(e, n) {
    n == null && (n = _i);
    const s = new Tt(`https://${Gm(e.name)}/v2/${n}`);
    return s.allowGzip = !0, n === _i && (s.retryFunc = async (i, o, a) => (Ci("alchemy"), !0)), s;
  }
}
class Hm extends Pn {
  constructor(t) {
    t == null && (t = "mainnet");
    const e = at.from(t);
    g(e.name === "mainnet", "unsupported network", "network", t), super("https://cloudflare-eth.com/", e, { staticNetwork: e });
  }
}
const Gu = 2e3;
function Qm(r) {
  return r && typeof r.then == "function";
}
const Vm = "org.ethers.plugins.provider.Etherscan", Km = ["enableCcipRead"];
let Jm = 1;
var ds;
class zm extends ho {
  /**
   *  Creates a new **EtherscanBaseProvider**.
   */
  constructor(e, n) {
    const s = n ?? null;
    super();
    /**
     *  The connected network.
     */
    m(this, "network");
    /**
     *  The API key or null if using the community provided bandwidth.
     */
    m(this, "apiKey");
    y(this, ds, void 0);
    const i = at.from(e);
    d(this, ds, i.getPlugin(Vm)), B(this, { apiKey: s, network: i }), this.getBaseUrl();
  }
  /**
   *  Returns the base URL.
   *
   *  If an [[EtherscanPlugin]] is configured on the
   *  [[EtherscanBaseProvider_network]], returns the plugin's
   *  baseUrl.
   */
  getBaseUrl() {
    if (l(this, ds))
      return l(this, ds).baseUrl;
    switch (this.network.name) {
      case "mainnet":
        return "https://api.etherscan.io";
      case "goerli":
        return "https://api-goerli.etherscan.io";
      case "sepolia":
        return "https://api-sepolia.etherscan.io";
      case "arbitrum":
        return "https://api.arbiscan.io";
      case "arbitrum-goerli":
        return "https://api-goerli.arbiscan.io";
      case "matic":
        return "https://api.polygonscan.com";
      case "matic-mumbai":
        return "https://api-testnet.polygonscan.com";
      case "optimism":
        return "https://api-optimistic.etherscan.io";
      case "optimism-goerli":
        return "https://api-goerli-optimistic.etherscan.io";
      case "bnb":
        return "http://api.bscscan.com";
      case "bnbt":
        return "http://api-testnet.bscscan.com";
    }
    g(!1, "unsupported network", "network", this.network);
  }
  /**
   *  Returns the URL for the %%module%% and %%params%%.
   */
  getUrl(e, n) {
    const s = Object.keys(n).reduce((o, a) => {
      const c = n[a];
      return c != null && (o += `&${a}=${c}`), o;
    }, ""), i = this.apiKey ? `&apikey=${this.apiKey}` : "";
    return `${this.getBaseUrl()}/api?module=${e}${s}${i}`;
  }
  /**
   *  Returns the URL for using POST requests.
   */
  getPostUrl() {
    return `${this.getBaseUrl()}/api`;
  }
  /**
   *  Returns the parameters for using POST requests.
   */
  getPostData(e, n) {
    return n.module = e, n.apikey = this.apiKey, n;
  }
  async detectNetwork() {
    return this.network;
  }
  /**
   *  Resolves to the result of calling %%module%% with %%params%%.
   *
   *  If %%post%%, the request is made as a POST request.
   */
  async fetch(e, n, s) {
    const i = Jm++, o = s ? this.getPostUrl() : this.getUrl(e, n), a = s ? this.getPostData(e, n) : null;
    this.emit("debug", { action: "sendRequest", id: i, url: o, payload: a });
    const c = new Tt(o);
    c.setThrottleParams({ slotInterval: 1e3 }), c.retryFunc = (h, p, w) => (this.isCommunityResource() && Ci("Etherscan"), Promise.resolve(!0)), c.processFunc = async (h, p) => {
      const w = p.hasBody() ? JSON.parse(Ks(p.body)) : {}, E = (typeof w.result == "string" ? w.result : "").toLowerCase().indexOf("rate limit") >= 0;
      return e === "proxy" ? w && w.status == 0 && w.message == "NOTOK" && E && (this.emit("debug", { action: "receiveError", id: i, reason: "proxy-NOTOK", error: w }), p.throwThrottleError(w.result, Gu)) : E && (this.emit("debug", { action: "receiveError", id: i, reason: "null result", error: w.result }), p.throwThrottleError(w.result, Gu)), p;
    }, a && (c.setHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8"), c.body = Object.keys(a).map((h) => `${h}=${a[h]}`).join("&"));
    const u = await c.send();
    try {
      u.assertOk();
    } catch (h) {
      this.emit("debug", { action: "receiveError", id: i, error: h, reason: "assertOk" }), b(!1, "response error", "SERVER_ERROR", { request: c, response: u });
    }
    u.hasBody() || (this.emit("debug", { action: "receiveError", id: i, error: "missing body", reason: "null body" }), b(!1, "missing response", "SERVER_ERROR", { request: c, response: u }));
    const f = JSON.parse(Ks(u.body));
    return e === "proxy" ? (f.jsonrpc != "2.0" && (this.emit("debug", { action: "receiveError", id: i, result: f, reason: "invalid JSON-RPC" }), b(!1, "invalid JSON-RPC response (missing jsonrpc='2.0')", "SERVER_ERROR", { request: c, response: u, info: { result: f } })), f.error && (this.emit("debug", { action: "receiveError", id: i, result: f, reason: "JSON-RPC error" }), b(!1, "error response", "SERVER_ERROR", { request: c, response: u, info: { result: f } })), this.emit("debug", { action: "receiveRequest", id: i, result: f }), f.result) : f.status == 0 && (f.message === "No records found" || f.message === "No transactions found") ? (this.emit("debug", { action: "receiveRequest", id: i, result: f }), f.result) : ((f.status != 1 || typeof f.message == "string" && !f.message.match(/^OK/)) && (this.emit("debug", { action: "receiveError", id: i, result: f }), b(!1, "error response", "SERVER_ERROR", { request: c, response: u, info: { result: f } })), this.emit("debug", { action: "receiveRequest", id: i, result: f }), f.result);
  }
  /**
   *  Returns %%transaction%% normalized for the Etherscan API.
   */
  _getTransactionPostData(e) {
    const n = {};
    for (let s in e) {
      if (Km.indexOf(s) >= 0 || e[s] == null)
        continue;
      let i = e[s];
      s === "type" && i === 0 || s === "blockTag" && i === "latest" || ({ type: !0, gasLimit: !0, gasPrice: !0, maxFeePerGs: !0, maxPriorityFeePerGas: !0, nonce: !0, value: !0 }[s] ? i = On(i) : s === "accessList" ? i = "[" + xn(i).map((o) => `{address:"${o.address}",storageKeys:["${o.storageKeys.join('","')}"]}`).join(",") + "]" : i = T(i), n[s] = i);
    }
    return n;
  }
  /**
   *  Throws the normalized Etherscan error.
   */
  _checkError(e, n, s) {
    let i = "";
    if (Ot(n, "SERVER_ERROR")) {
      try {
        i = n.info.result.error.message;
      } catch {
      }
      if (!i)
        try {
          i = n.info.message;
        } catch {
        }
    }
    if (e.method === "estimateGas" && !i.match(/revert/i) && i.match(/insufficient funds/i) && b(!1, "insufficient funds", "INSUFFICIENT_FUNDS", {
      transaction: e.transaction
    }), (e.method === "call" || e.method === "estimateGas") && i.match(/execution reverted/i)) {
      let o = "";
      try {
        o = n.info.result.error.data;
      } catch {
      }
      const a = Ns.getBuiltinCallException(e.method, e.transaction, o);
      throw a.info = { request: e, error: n }, a;
    }
    if (i && e.method === "broadcastTransaction") {
      const o = Xs.from(e.signedTransaction);
      i.match(/replacement/i) && i.match(/underpriced/i) && b(!1, "replacement fee too low", "REPLACEMENT_UNDERPRICED", {
        transaction: o
      }), i.match(/insufficient funds/) && b(!1, "insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
        transaction: o
      }), i.match(/same hash was already imported|transaction nonce is too low|nonce too low/) && b(!1, "nonce has already been used", "NONCE_EXPIRED", {
        transaction: o
      });
    }
    throw n;
  }
  async _detectNetwork() {
    return this.network;
  }
  async _perform(e) {
    switch (e.method) {
      case "chainId":
        return this.network.chainId;
      case "getBlockNumber":
        return this.fetch("proxy", { action: "eth_blockNumber" });
      case "getGasPrice":
        return this.fetch("proxy", { action: "eth_gasPrice" });
      case "getPriorityFee":
        if (this.network.name === "mainnet")
          return "1000000000";
        if (this.network.name === "optimism")
          return "1000000";
        throw new Error("fallback onto the AbstractProvider default");
      case "getBalance":
        return this.fetch("account", {
          action: "balance",
          address: e.address,
          tag: e.blockTag
        });
      case "getTransactionCount":
        return this.fetch("proxy", {
          action: "eth_getTransactionCount",
          address: e.address,
          tag: e.blockTag
        });
      case "getCode":
        return this.fetch("proxy", {
          action: "eth_getCode",
          address: e.address,
          tag: e.blockTag
        });
      case "getStorage":
        return this.fetch("proxy", {
          action: "eth_getStorageAt",
          address: e.address,
          position: e.position,
          tag: e.blockTag
        });
      case "broadcastTransaction":
        return this.fetch("proxy", {
          action: "eth_sendRawTransaction",
          hex: e.signedTransaction
        }, !0).catch((n) => this._checkError(e, n, e.signedTransaction));
      case "getBlock":
        if ("blockTag" in e)
          return this.fetch("proxy", {
            action: "eth_getBlockByNumber",
            tag: e.blockTag,
            boolean: e.includeTransactions ? "true" : "false"
          });
        b(!1, "getBlock by blockHash not supported by Etherscan", "UNSUPPORTED_OPERATION", {
          operation: "getBlock(blockHash)"
        });
      case "getTransaction":
        return this.fetch("proxy", {
          action: "eth_getTransactionByHash",
          txhash: e.hash
        });
      case "getTransactionReceipt":
        return this.fetch("proxy", {
          action: "eth_getTransactionReceipt",
          txhash: e.hash
        });
      case "call": {
        if (e.blockTag !== "latest")
          throw new Error("EtherscanProvider does not support blockTag for call");
        const n = this._getTransactionPostData(e.transaction);
        n.module = "proxy", n.action = "eth_call";
        try {
          return await this.fetch("proxy", n, !0);
        } catch (s) {
          return this._checkError(e, s, e.transaction);
        }
      }
      case "estimateGas": {
        const n = this._getTransactionPostData(e.transaction);
        n.module = "proxy", n.action = "eth_estimateGas";
        try {
          return await this.fetch("proxy", n, !0);
        } catch (s) {
          return this._checkError(e, s, e.transaction);
        }
      }
    }
    return super._perform(e);
  }
  async getNetwork() {
    return this.network;
  }
  /**
   *  Resolves to the current price of ether.
   *
   *  This returns ``0`` on any network other than ``mainnet``.
   */
  async getEtherPrice() {
    return this.network.name !== "mainnet" ? 0 : parseFloat((await this.fetch("stats", { action: "ethprice" })).ethusd);
  }
  /**
   *  Resolves to a [Contract]] for %%address%%, using the
   *  Etherscan API to retreive the Contract ABI.
   */
  async getContract(e) {
    let n = this._getAddress(e);
    Qm(n) && (n = await n);
    try {
      const s = await this.fetch("contract", {
        action: "getabi",
        address: n
      }), i = JSON.parse(s);
      return new rr(n, i, this);
    } catch {
      return null;
    }
  }
  isCommunityResource() {
    return this.apiKey == null;
  }
}
ds = new WeakMap();
function jm() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}
const Wm = jm().WebSocket;
var _e, Ai, yn, Xn, wn;
class pc {
  /**
   *  Creates a new **SocketSubscriber** attached to %%provider%% listening
   *  to %%filter%%.
   */
  constructor(t, e) {
    y(this, _e, void 0);
    y(this, Ai, void 0);
    y(this, yn, void 0);
    y(this, Xn, void 0);
    y(this, wn, void 0);
    d(this, _e, t), d(this, Ai, JSON.stringify(e)), d(this, yn, null), d(this, Xn, null), d(this, wn, null);
  }
  /**
   *  The filter.
   */
  get filter() {
    return JSON.parse(l(this, Ai));
  }
  start() {
    d(this, yn, l(this, _e).send("eth_subscribe", this.filter).then((t) => (l(this, _e)._register(t, this), t)));
  }
  stop() {
    l(this, yn).then((t) => {
      l(this, _e).send("eth_unsubscribe", [t]);
    }), d(this, yn, null);
  }
  // @TODO: pause should trap the current blockNumber, unsub, and on resume use getLogs
  //        and resume
  pause(t) {
    b(t, "preserve logs while paused not supported by SocketSubscriber yet", "UNSUPPORTED_OPERATION", { operation: "pause(false)" }), d(this, Xn, !!t);
  }
  resume() {
    d(this, Xn, null);
  }
  /**
   *  @_ignore:
   */
  _handleMessage(t) {
    if (l(this, yn) != null && l(this, Xn) === null) {
      let e = l(this, wn);
      e == null ? e = this._emit(l(this, _e), t) : e = e.then(async () => {
        await this._emit(l(this, _e), t);
      }), d(this, wn, e.then(() => {
        l(this, wn) === e && d(this, wn, null);
      }));
    }
  }
  /**
   *  Sub-classes **must** override this to emit the events on the
   *  provider.
   */
  async _emit(t, e) {
    throw new Error("sub-classes must implemente this; _emit");
  }
}
_e = new WeakMap(), Ai = new WeakMap(), yn = new WeakMap(), Xn = new WeakMap(), wn = new WeakMap();
class Zm extends pc {
  /**
   *  @_ignore:
   */
  constructor(t) {
    super(t, ["newHeads"]);
  }
  async _emit(t, e) {
    t.emit("block", parseInt(e.number));
  }
}
class Ym extends pc {
  /**
   *  @_ignore:
   */
  constructor(t) {
    super(t, ["newPendingTransactions"]);
  }
  async _emit(t, e) {
    t.emit("pending", e);
  }
}
var bi;
class qm extends pc {
  /**
   *  @_ignore:
   */
  constructor(e, n) {
    super(e, ["logs", n]);
    y(this, bi, void 0);
    d(this, bi, JSON.stringify(n));
  }
  /**
   *  The filter.
   */
  get logFilter() {
    return JSON.parse(l(this, bi));
  }
  async _emit(e, n) {
    e.emit(this.logFilter, e._wrapLog(n, e._network));
  }
}
bi = new WeakMap();
var $n, ps, An;
class Xm extends Bf {
  /**
   *  Creates a new **SocketProvider** connected to %%network%%.
   *
   *  If unspecified, the network will be discovered.
   */
  constructor(e, n) {
    const s = Object.assign({}, n ?? {});
    g(s.batchMaxCount == null || s.batchMaxCount === 1, "sockets-based providers do not support batches", "options.batchMaxCount", n), s.batchMaxCount = 1, s.staticNetwork == null && (s.staticNetwork = !0);
    super(e, s);
    y(this, $n, void 0);
    // Maps each filterId to its subscriber
    y(this, ps, void 0);
    // If any events come in before a subscriber has finished
    // registering, queue them
    y(this, An, void 0);
    d(this, $n, /* @__PURE__ */ new Map()), d(this, ps, /* @__PURE__ */ new Map()), d(this, An, /* @__PURE__ */ new Map());
  }
  // This value is only valid after _start has been called
  /*
  get _network(): Network {
      if (this.#network == null) {
          throw new Error("this shouldn't happen");
      }
      return this.#network.clone();
  }
  */
  _getSubscriber(e) {
    switch (e.type) {
      case "close":
        return new fo("close");
      case "block":
        return new Zm(this);
      case "pending":
        return new Ym(this);
      case "event":
        return new qm(this, e.filter);
      case "orphan":
        if (e.filter.orphan === "drop-log")
          return new fo("drop-log");
    }
    return super._getSubscriber(e);
  }
  /**
   *  Register a new subscriber. This is used internalled by Subscribers
   *  and generally is unecessary unless extending capabilities.
   */
  _register(e, n) {
    l(this, ps).set(e, n);
    const s = l(this, An).get(e);
    if (s) {
      for (const i of s)
        n._handleMessage(i);
      l(this, An).delete(e);
    }
  }
  async _send(e) {
    g(!Array.isArray(e), "WebSocket does not support batch send", "payload", e);
    const n = new Promise((s, i) => {
      l(this, $n).set(e.id, { payload: e, resolve: s, reject: i });
    });
    return await this._waitUntilReady(), await this._write(JSON.stringify(e)), [await n];
  }
  // Sub-classes must call this once they are connected
  /*
      async _start(): Promise<void> {
          if (this.#ready) { return; }
  
          for (const { payload } of this.#callbacks.values()) {
              await this._write(JSON.stringify(payload));
          }
  
          this.#ready = (async function() {
              await super._start();
          })();
      }
      */
  /**
   *  Sub-classes **must** call this with messages received over their
   *  transport to be processed and dispatched.
   */
  async _processMessage(e) {
    const n = JSON.parse(e);
    if (n && typeof n == "object" && "id" in n) {
      const s = l(this, $n).get(n.id);
      if (s == null) {
        this.emit("error", tt("received result for unknown id", "UNKNOWN_ERROR", {
          reasonCode: "UNKNOWN_ID",
          result: n
        }));
        return;
      }
      l(this, $n).delete(n.id), s.resolve(n);
    } else if (n && n.method === "eth_subscription") {
      const s = n.params.subscription, i = l(this, ps).get(s);
      if (i)
        i._handleMessage(n.params.result);
      else {
        let o = l(this, An).get(s);
        o == null && (o = [], l(this, An).set(s, o)), o.push(n.params.result);
      }
    } else {
      this.emit("error", tt("received unexpected message", "UNKNOWN_ERROR", {
        reasonCode: "UNEXPECTED_MESSAGE",
        result: n
      }));
      return;
    }
  }
  /**
   *  Sub-classes **must** override this to send %%message%% over their
   *  transport.
   */
  async _write(e) {
    throw new Error("sub-classes must override this");
  }
}
$n = new WeakMap(), ps = new WeakMap(), An = new WeakMap();
var tr, oe;
class Sf extends Xm {
  constructor(e, n, s) {
    super(n, s);
    y(this, tr, void 0);
    y(this, oe, void 0);
    typeof e == "string" ? (d(this, tr, () => new Wm(e)), d(this, oe, l(this, tr).call(this))) : typeof e == "function" ? (d(this, tr, e), d(this, oe, e())) : (d(this, tr, null), d(this, oe, e)), this.websocket.onopen = async () => {
      try {
        await this._start(), this.resume();
      } catch (i) {
        console.log("failed to start WebsocketProvider", i);
      }
    }, this.websocket.onmessage = (i) => {
      this._processMessage(i.data);
    };
  }
  get websocket() {
    if (l(this, oe) == null)
      throw new Error("websocket closed");
    return l(this, oe);
  }
  async _write(e) {
    this.websocket.send(e);
  }
  async destroy() {
    l(this, oe) != null && (l(this, oe).close(), d(this, oe, null)), super.destroy();
  }
}
tr = new WeakMap(), oe = new WeakMap();
const Ls = "84842078b09946638c03157f83405213";
function $m(r) {
  switch (r) {
    case "mainnet":
      return "mainnet.infura.io";
    case "goerli":
      return "goerli.infura.io";
    case "sepolia":
      return "sepolia.infura.io";
    case "arbitrum":
      return "arbitrum-mainnet.infura.io";
    case "arbitrum-goerli":
      return "arbitrum-goerli.infura.io";
    case "linea":
      return "linea-mainnet.infura.io";
    case "linea-goerli":
      return "linea-goerli.infura.io";
    case "matic":
      return "polygon-mainnet.infura.io";
    case "matic-mumbai":
      return "polygon-mumbai.infura.io";
    case "optimism":
      return "optimism-mainnet.infura.io";
    case "optimism-goerli":
      return "optimism-goerli.infura.io";
  }
  g(!1, "unsupported network", "network", r);
}
class ty extends Sf {
  /**
   *  Creates a new **InfuraWebSocketProvider**.
   */
  constructor(e, n) {
    const s = new ei(e, n), i = s._getConnection();
    b(!i.credentials, "INFURA WebSocket project secrets unsupported", "UNSUPPORTED_OPERATION", { operation: "InfuraProvider.getWebSocketProvider()" });
    const o = i.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/");
    super(o, e);
    /**
     *  The Project ID for the INFURA connection.
     */
    m(this, "projectId");
    /**
     *  The Project Secret.
     *
     *  If null, no authenticated requests are made. This should not
     *  be used outside of private contexts.
     */
    m(this, "projectSecret");
    B(this, {
      projectId: s.projectId,
      projectSecret: s.projectSecret
    });
  }
  isCommunityResource() {
    return this.projectId === Ls;
  }
}
class ei extends Pn {
  /**
   *  Creates a new **InfuraProvider**.
   */
  constructor(e, n, s) {
    e == null && (e = "mainnet");
    const i = at.from(e);
    n == null && (n = Ls), s == null && (s = null);
    const o = ei.getRequest(i, n, s);
    super(o, i, { staticNetwork: i });
    /**
     *  The Project ID for the INFURA connection.
     */
    m(this, "projectId");
    /**
     *  The Project Secret.
     *
     *  If null, no authenticated requests are made. This should not
     *  be used outside of private contexts.
     */
    m(this, "projectSecret");
    B(this, { projectId: n, projectSecret: s });
  }
  _getProvider(e) {
    try {
      return new ei(e, this.projectId, this.projectSecret);
    } catch {
    }
    return super._getProvider(e);
  }
  isCommunityResource() {
    return this.projectId === Ls;
  }
  /**
   *  Creates a new **InfuraWebSocketProvider**.
   */
  static getWebSocketProvider(e, n) {
    return new ty(e, n);
  }
  /**
   *  Returns a prepared request for connecting to %%network%%
   *  with %%projectId%% and %%projectSecret%%.
   */
  static getRequest(e, n, s) {
    n == null && (n = Ls), s == null && (s = null);
    const i = new Tt(`https://${$m(e.name)}/v3/${n}`);
    return i.allowGzip = !0, s && i.setCredentials("", s), n === Ls && (i.retryFunc = async (o, a, c) => (Ci("InfuraProvider"), !0)), i;
  }
}
const Gi = "919b412a057b5e9c9b6dce193c5a60242d6efadb";
function ey(r) {
  switch (r) {
    case "mainnet":
      return "ethers.quiknode.pro";
    case "goerli":
      return "ethers.ethereum-goerli.quiknode.pro";
    case "arbitrum":
      return "ethers.arbitrum-mainnet.quiknode.pro";
    case "arbitrum-goerli":
      return "ethers.arbitrum-goerli.quiknode.pro";
    case "matic":
      return "ethers.matic.quiknode.pro";
    case "matic-mumbai":
      return "ethers.matic-testnet.quiknode.pro";
    case "optimism":
      return "ethers.optimism.quiknode.pro";
    case "optimism-goerli":
      return "ethers.optimism-goerli.quiknode.pro";
  }
  g(!1, "unsupported network", "network", r);
}
class mo extends Pn {
  /**
   *  Creates a new **QuickNodeProvider**.
   */
  constructor(e, n) {
    e == null && (e = "mainnet");
    const s = at.from(e);
    n == null && (n = Gi);
    const i = mo.getRequest(s, n);
    super(i, s, { staticNetwork: s });
    /**
     *  The API token.
     */
    m(this, "token");
    B(this, { token: n });
  }
  _getProvider(e) {
    try {
      return new mo(e, this.token);
    } catch {
    }
    return super._getProvider(e);
  }
  isCommunityResource() {
    return this.token === Gi;
  }
  /**
   *  Returns a new request prepared for %%network%% and the
   *  %%token%%.
   */
  static getRequest(e, n) {
    n == null && (n = Gi);
    const s = new Tt(`https://${ey(e.name)}/${n}`);
    return s.allowGzip = !0, n === Gi && (s.retryFunc = async (i, o, a) => (Ci("QuickNodeProvider"), !0)), s;
  }
}
const ny = BigInt("1"), ry = BigInt("2");
function sy(r) {
  for (let t = r.length - 1; t > 0; t--) {
    const e = Math.floor(Math.random() * (t + 1)), n = r[t];
    r[t] = r[e], r[e] = n;
  }
}
function iy(r) {
  return new Promise((t) => {
    setTimeout(t, r);
  });
}
function Va() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function ca(r) {
  return JSON.stringify(r, (t, e) => typeof e == "bigint" ? { type: "bigint", value: e.toString() } : e);
}
const Hu = { stallTimeout: 400, priority: 1, weight: 1 }, Qu = {
  blockNumber: -2,
  requests: 0,
  lateResponses: 0,
  errorResponses: 0,
  outOfSync: -1,
  unsupportedEvents: 0,
  rollingDuration: 0,
  score: 0,
  _network: null,
  _updateNumber: null,
  _totalTime: 0,
  _lastFatalError: null,
  _lastFatalErrorTimestamp: 0
};
async function oy(r, t) {
  for (; (r.blockNumber < 0 || r.blockNumber < t) && (r._updateNumber || (r._updateNumber = (async () => {
    try {
      const e = await r.provider.getBlockNumber();
      e > r.blockNumber && (r.blockNumber = e);
    } catch (e) {
      r.blockNumber = -2, r._lastFatalError = e, r._lastFatalErrorTimestamp = Va();
    }
    r._updateNumber = null;
  })()), await r._updateNumber, r.outOfSync++, !r._lastFatalError); )
    ;
}
function Hs(r) {
  if (r == null)
    return "null";
  if (Array.isArray(r))
    return "[" + r.map(Hs).join(",") + "]";
  if (typeof r == "object" && typeof r.toJSON == "function")
    return Hs(r.toJSON());
  switch (typeof r) {
    case "boolean":
    case "symbol":
      return r.toString();
    case "bigint":
    case "number":
      return BigInt(r).toString();
    case "string":
      return JSON.stringify(r);
    case "object": {
      const t = Object.keys(r);
      return t.sort(), "{" + t.map((e) => `${JSON.stringify(e)}:${Hs(r[e])}`).join(",") + "}";
    }
  }
  throw console.log("Could not serialize", r), new Error("Hmm...");
}
function ua(r) {
  if ("error" in r) {
    const e = r.error;
    return { tag: Hs(e), value: e };
  }
  const t = r.result;
  return { tag: Hs(t), value: t };
}
function qi(r, t) {
  const e = /* @__PURE__ */ new Map();
  for (const { value: s, tag: i, weight: o } of t) {
    const a = e.get(i) || { value: s, weight: 0 };
    a.weight += o, e.set(i, a);
  }
  let n = null;
  for (const s of e.values())
    s.weight >= r && (!n || s.weight > n.weight) && (n = s);
  if (n)
    return n.value;
}
function Ka(r, t) {
  let e = 0;
  const n = /* @__PURE__ */ new Map();
  let s = null;
  const i = [];
  for (const { value: a, tag: c, weight: u } of t)
    if (a instanceof Error) {
      const f = n.get(c) || { value: a, weight: 0 };
      f.weight += u, n.set(c, f), (s == null || f.weight > s.weight) && (s = f);
    } else
      i.push(BigInt(a)), e += u;
  if (e < r)
    return s && s.weight >= r ? s.value : void 0;
  i.sort((a, c) => a < c ? -1 : c > a ? 1 : 0);
  const o = Math.floor(i.length / 2);
  return i.length % 2 ? i[o] : (i[o - 1] + i[o] + ny) / ry;
}
function la(r, t) {
  const e = qi(r, t);
  if (e !== void 0)
    return e;
  for (const n of t)
    if (n.value)
      return n.value;
}
function ay(r, t) {
  if (r === 1)
    return L(Ka(r, t), "%internal");
  const e = /* @__PURE__ */ new Map(), n = (o, a) => {
    const c = e.get(o) || { result: o, weight: 0 };
    c.weight += a, e.set(o, c);
  };
  for (const { weight: o, value: a } of t) {
    const c = L(a);
    n(c - 1, o), n(c, o), n(c + 1, o);
  }
  let s = 0, i;
  for (const { weight: o, result: a } of e.values())
    o >= r && (o > s || i != null && o === s && a > i) && (s = o, i = a);
  return i;
}
var xt, Ge, gs, ko, Uf, Ei, Ja, Ro, Df, Co, Ff, Ni, za;
class cy extends ho {
  /**
   *  Creates a new **FallbackProvider** with %%providers%% connected to
   *  %%network%%.
   *
   *  If a [[Provider]] is included in %%providers%%, defaults are used
   *  for the configuration.
   */
  constructor(e, n, s) {
    super(n, s);
    // Grab the next (random) config that is not already part of
    // the running set
    y(this, ko);
    // Adds a new runner (if available) to running.
    y(this, Ei);
    // Initializes the blockNumber and network for each runner and
    // blocks until initialized
    y(this, Ro);
    y(this, Co);
    y(this, Ni);
    /**
     *  The number of backends that must agree on a value before it is
     *  accpeted.
     */
    m(this, "quorum");
    /**
     *  @_ignore:
     */
    m(this, "eventQuorum");
    /**
     *  @_ignore:
     */
    m(this, "eventWorkers");
    y(this, xt, void 0);
    y(this, Ge, void 0);
    y(this, gs, void 0);
    d(this, xt, e.map((i) => i instanceof ho ? Object.assign({ provider: i }, Hu, Qu) : Object.assign({}, Hu, i, Qu))), d(this, Ge, -2), d(this, gs, null), s && s.quorum != null ? this.quorum = s.quorum : this.quorum = Math.ceil(l(this, xt).reduce((i, o) => (i += o.weight, i), 0) / 2), this.eventQuorum = 1, this.eventWorkers = 1, g(this.quorum <= l(this, xt).reduce((i, o) => i + o.weight, 0), "quorum exceed provider wieght", "quorum", this.quorum);
  }
  get providerConfigs() {
    return l(this, xt).map((e) => {
      const n = Object.assign({}, e);
      for (const s in n)
        s[0] === "_" && delete n[s];
      return n;
    });
  }
  async _detectNetwork() {
    return at.from(I(await this._perform({ method: "chainId" })));
  }
  // @TODO: Add support to select providers to be the event subscriber
  //_getSubscriber(sub: Subscription): Subscriber {
  //    throw new Error("@TODO");
  //}
  /**
   *  Transforms a %%req%% into the correct method call on %%provider%%.
   */
  async _translatePerform(e, n) {
    switch (n.method) {
      case "broadcastTransaction":
        return await e.broadcastTransaction(n.signedTransaction);
      case "call":
        return await e.call(Object.assign({}, n.transaction, { blockTag: n.blockTag }));
      case "chainId":
        return (await e.getNetwork()).chainId;
      case "estimateGas":
        return await e.estimateGas(n.transaction);
      case "getBalance":
        return await e.getBalance(n.address, n.blockTag);
      case "getBlock": {
        const s = "blockHash" in n ? n.blockHash : n.blockTag;
        return await e.getBlock(s, n.includeTransactions);
      }
      case "getBlockNumber":
        return await e.getBlockNumber();
      case "getCode":
        return await e.getCode(n.address, n.blockTag);
      case "getGasPrice":
        return (await e.getFeeData()).gasPrice;
      case "getPriorityFee":
        return (await e.getFeeData()).maxPriorityFeePerGas;
      case "getLogs":
        return await e.getLogs(n.filter);
      case "getStorage":
        return await e.getStorage(n.address, n.position, n.blockTag);
      case "getTransaction":
        return await e.getTransaction(n.hash);
      case "getTransactionCount":
        return await e.getTransactionCount(n.address, n.blockTag);
      case "getTransactionReceipt":
        return await e.getTransactionReceipt(n.hash);
      case "getTransactionResult":
        return await e.getTransactionResult(n.hash);
    }
  }
  async _perform(e) {
    if (e.method === "broadcastTransaction") {
      const o = l(this, xt).map((u) => null), a = l(this, xt).map(async ({ provider: u, weight: f }, h) => {
        try {
          const p = await u._perform(e);
          o[h] = Object.assign(ua({ result: p }), { weight: f });
        } catch (p) {
          o[h] = Object.assign(ua({ error: p }), { weight: f });
        }
      });
      for (; ; ) {
        const u = o.filter((p) => p != null);
        for (const { value: p } of u)
          if (!(p instanceof Error))
            return p;
        const f = qi(this.quorum, o.filter((p) => p != null));
        if (Ot(f, "INSUFFICIENT_FUNDS"))
          throw f;
        const h = a.filter((p, w) => o[w] == null);
        if (h.length === 0)
          break;
        await Promise.race(h);
      }
      const c = la(this.quorum, o);
      if (b(c !== void 0, "problem multi-broadcasting", "SERVER_ERROR", {
        request: "%sub-requests",
        info: { request: e, results: o.map(ca) }
      }), c instanceof Error)
        throw c;
      return c;
    }
    await x(this, Ro, Df).call(this);
    const n = /* @__PURE__ */ new Set();
    let s = 0;
    for (; ; ) {
      const o = x(this, Ei, Ja).call(this, n, e);
      if (o == null || (s += o.config.weight, s >= this.quorum))
        break;
    }
    const i = await x(this, Ni, za).call(this, n, e);
    for (const o of n)
      o.perform && o.result == null && o.config.lateResponses++;
    return i;
  }
  async destroy() {
    for (const { provider: e } of l(this, xt))
      e.destroy();
    super.destroy();
  }
}
xt = new WeakMap(), Ge = new WeakMap(), gs = new WeakMap(), ko = new WeakSet(), Uf = function(e) {
  const n = Array.from(e).map((i) => i.config), s = l(this, xt).slice();
  sy(s), s.sort((i, o) => i.priority - o.priority);
  for (const i of s)
    if (!i._lastFatalError && n.indexOf(i) === -1)
      return i;
  return null;
}, Ei = new WeakSet(), Ja = function(e, n) {
  const s = x(this, ko, Uf).call(this, e);
  if (s == null)
    return null;
  const i = {
    config: s,
    result: null,
    didBump: !1,
    perform: null,
    staller: null
  }, o = Va();
  return i.perform = (async () => {
    try {
      s.requests++;
      const c = await this._translatePerform(s.provider, n);
      i.result = { result: c };
    } catch (c) {
      s.errorResponses++, i.result = { error: c };
    }
    const a = Va() - o;
    s._totalTime += a, s.rollingDuration = 0.95 * s.rollingDuration + 0.05 * a, i.perform = null;
  })(), i.staller = (async () => {
    await iy(s.stallTimeout), i.staller = null;
  })(), e.add(i), i;
}, Ro = new WeakSet(), Df = async function() {
  let e = l(this, gs);
  if (!e) {
    const n = [];
    l(this, xt).forEach((s) => {
      n.push((async () => {
        await oy(s, 0), s._lastFatalError || (s._network = await s.provider.getNetwork());
      })());
    }), d(this, gs, e = (async () => {
      await Promise.all(n);
      let s = null;
      for (const i of l(this, xt)) {
        if (i._lastFatalError)
          continue;
        const o = i._network;
        s == null ? s = o.chainId : o.chainId !== s && b(!1, "cannot mix providers on different networks", "UNSUPPORTED_OPERATION", {
          operation: "new FallbackProvider"
        });
      }
    })());
  }
  await e;
}, Co = new WeakSet(), Ff = async function(e, n) {
  const s = [];
  for (const i of e)
    if (i.result != null) {
      const { tag: o, value: a } = ua(i.result);
      s.push({ tag: o, value: a, weight: i.config.weight });
    }
  if (!(s.reduce((i, o) => i + o.weight, 0) < this.quorum)) {
    switch (n.method) {
      case "getBlockNumber": {
        l(this, Ge) === -2 && d(this, Ge, Math.ceil(L(Ka(this.quorum, l(this, xt).filter((o) => !o._lastFatalError).map((o) => ({
          value: o.blockNumber,
          tag: L(o.blockNumber).toString(),
          weight: o.weight
        }))))));
        const i = ay(this.quorum, s);
        return i === void 0 ? void 0 : (i > l(this, Ge) && d(this, Ge, i), l(this, Ge));
      }
      case "getGasPrice":
      case "getPriorityFee":
      case "estimateGas":
        return Ka(this.quorum, s);
      case "getBlock":
        return "blockTag" in n && n.blockTag === "pending" ? la(this.quorum, s) : qi(this.quorum, s);
      case "call":
      case "chainId":
      case "getBalance":
      case "getTransactionCount":
      case "getCode":
      case "getStorage":
      case "getTransaction":
      case "getTransactionReceipt":
      case "getLogs":
        return qi(this.quorum, s);
      case "broadcastTransaction":
        return la(this.quorum, s);
    }
    b(!1, "unsupported method", "UNSUPPORTED_OPERATION", {
      operation: `_perform(${ca(n.method)})`
    });
  }
}, Ni = new WeakSet(), za = async function(e, n) {
  if (e.size === 0)
    throw new Error("no runners?!");
  const s = [];
  let i = 0;
  for (const a of e) {
    if (a.perform && s.push(a.perform), a.staller) {
      s.push(a.staller);
      continue;
    }
    a.didBump || (a.didBump = !0, i++);
  }
  const o = await x(this, Co, Ff).call(this, e, n);
  if (o !== void 0) {
    if (o instanceof Error)
      throw o;
    return o;
  }
  for (let a = 0; a < i; a++)
    x(this, Ei, Ja).call(this, e, n);
  return b(s.length > 0, "quorum not met", "SERVER_ERROR", {
    request: "%sub-requests",
    info: { request: n, results: Array.from(e).map((a) => ca(a.result)) }
  }), await Promise.race(s), await x(this, Ni, za).call(this, e, n);
};
function uy(r) {
  return r && typeof r.send == "function" && typeof r.close == "function";
}
const ly = "goerli kovan sepolia classicKotti optimism-goerli arbitrum-goerli matic-mumbai bnbt".split(" ");
function fy(r, t) {
  t == null && (t = {});
  const e = (o) => t[o] === "-" ? !1 : typeof t.exclusive == "string" ? o === t.exclusive : Array.isArray(t.exclusive) ? t.exclusive.indexOf(o) !== -1 : !0;
  if (typeof r == "string" && r.match(/^https?:/))
    return new Pn(r);
  if (typeof r == "string" && r.match(/^wss?:/) || uy(r))
    return new Sf(r);
  let n = null;
  try {
    n = at.from(r);
  } catch {
  }
  const s = [];
  if (e("publicPolygon") && n && n.name === "matic" && s.push(new Pn("https://polygon-rpc.com/", n, { staticNetwork: n })), e("alchemy"))
    try {
      s.push(new go(r, t.alchemy));
    } catch {
    }
  if (e("ankr") && t.ankr != null)
    try {
      s.push(new po(r, t.ankr));
    } catch {
    }
  if (e("cloudflare"))
    try {
      s.push(new Hm(r));
    } catch {
    }
  if (e("etherscan"))
    try {
      s.push(new zm(r, t.etherscan));
    } catch {
    }
  if (e("infura"))
    try {
      let o = t.infura, a;
      typeof o == "object" && (a = o.projectSecret, o = o.projectId), s.push(new ei(r, o, a));
    } catch {
    }
  if (e("quicknode"))
    try {
      let o = t.quicknode;
      s.push(new mo(r, o));
    } catch {
    }
  if (b(s.length, "unsupported default network", "UNSUPPORTED_OPERATION", {
    operation: "getDefaultProvider"
  }), s.length === 1)
    return s[0];
  let i = Math.floor(s.length / 2);
  return i > 2 && (i = 2), n && ly.indexOf(n.name) !== -1 && (i = 1), t && t.quorum && (i = t.quorum), new cy(s, void 0, { quorum: i });
}
function hy(r) {
  return r === "sepolia" ? fy("sepolia", { exclusive: ["infura"] }) : new Pn(r);
}
function dy(r) {
  return hy(r);
}
const py = `[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "avatar",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            }
          ],
          "indexed": false,
          "internalType": "struct Sensations.sensation",
          "name": "_sensation",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "Synapsis",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "getSensationsLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "avatar",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            }
          ],
          "internalType": "struct Sensations.sensation",
          "name": "_sensation",
          "type": "tuple"
        }
      ],
      "name": "newSensation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "sensations",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "avatar",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]`;
function gy(r, t) {
  return new rr(
    r.sensationsContractAddress,
    py,
    t
  );
}
function my(r, t) {
  return gy(r, t);
}
var H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vi = Symbol.for("react.element"), yy = Symbol.for("react.portal"), wy = Symbol.for("react.fragment"), Ay = Symbol.for("react.strict_mode"), by = Symbol.for("react.profiler"), Ey = Symbol.for("react.provider"), Ny = Symbol.for("react.context"), Py = Symbol.for("react.forward_ref"), xy = Symbol.for("react.suspense"), ky = Symbol.for("react.memo"), Ry = Symbol.for("react.lazy"), Vu = Symbol.iterator;
function Cy(r) {
  return r === null || typeof r != "object" ? null : (r = Vu && r[Vu] || r["@@iterator"], typeof r == "function" ? r : null);
}
var Lf = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Mf = Object.assign, _f = {};
function xs(r, t, e) {
  this.props = r, this.context = t, this.refs = _f, this.updater = e || Lf;
}
xs.prototype.isReactComponent = {};
xs.prototype.setState = function(r, t) {
  if (typeof r != "object" && typeof r != "function" && r != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, r, t, "setState");
};
xs.prototype.forceUpdate = function(r) {
  this.updater.enqueueForceUpdate(this, r, "forceUpdate");
};
function Gf() {
}
Gf.prototype = xs.prototype;
function gc(r, t, e) {
  this.props = r, this.context = t, this.refs = _f, this.updater = e || Lf;
}
var mc = gc.prototype = new Gf();
mc.constructor = gc;
Mf(mc, xs.prototype);
mc.isPureReactComponent = !0;
var Ku = Array.isArray, Hf = Object.prototype.hasOwnProperty, yc = { current: null }, Qf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vf(r, t, e) {
  var n, s = {}, i = null, o = null;
  if (t != null)
    for (n in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Hf.call(t, n) && !Qf.hasOwnProperty(n) && (s[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1)
    s.children = e;
  else if (1 < a) {
    for (var c = Array(a), u = 0; u < a; u++)
      c[u] = arguments[u + 2];
    s.children = c;
  }
  if (r && r.defaultProps)
    for (n in a = r.defaultProps, a)
      s[n] === void 0 && (s[n] = a[n]);
  return { $$typeof: vi, type: r, key: i, ref: o, props: s, _owner: yc.current };
}
function vy(r, t) {
  return { $$typeof: vi, type: r.type, key: t, ref: r.ref, props: r.props, _owner: r._owner };
}
function wc(r) {
  return typeof r == "object" && r !== null && r.$$typeof === vi;
}
function Oy(r) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + r.replace(/[=:]/g, function(e) {
    return t[e];
  });
}
var Ju = /\/+/g;
function fa(r, t) {
  return typeof r == "object" && r !== null && r.key != null ? Oy("" + r.key) : t.toString(36);
}
function Xi(r, t, e, n, s) {
  var i = typeof r;
  (i === "undefined" || i === "boolean") && (r = null);
  var o = !1;
  if (r === null)
    o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (r.$$typeof) {
          case vi:
          case yy:
            o = !0;
        }
    }
  if (o)
    return o = r, s = s(o), r = n === "" ? "." + fa(o, 0) : n, Ku(s) ? (e = "", r != null && (e = r.replace(Ju, "$&/") + "/"), Xi(s, t, e, "", function(u) {
      return u;
    })) : s != null && (wc(s) && (s = vy(s, e + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(Ju, "$&/") + "/") + r)), t.push(s)), 1;
  if (o = 0, n = n === "" ? "." : n + ":", Ku(r))
    for (var a = 0; a < r.length; a++) {
      i = r[a];
      var c = n + fa(i, a);
      o += Xi(i, t, e, c, s);
    }
  else if (c = Cy(r), typeof c == "function")
    for (r = c.call(r), a = 0; !(i = r.next()).done; )
      i = i.value, c = n + fa(i, a++), o += Xi(i, t, e, c, s);
  else if (i === "object")
    throw t = String(r), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Hi(r, t, e) {
  if (r == null)
    return r;
  var n = [], s = 0;
  return Xi(r, n, "", "", function(i) {
    return t.call(e, i, s++);
  }), n;
}
function Ty(r) {
  if (r._status === -1) {
    var t = r._result;
    t = t(), t.then(function(e) {
      (r._status === 0 || r._status === -1) && (r._status = 1, r._result = e);
    }, function(e) {
      (r._status === 0 || r._status === -1) && (r._status = 2, r._result = e);
    }), r._status === -1 && (r._status = 0, r._result = t);
  }
  if (r._status === 1)
    return r._result.default;
  throw r._result;
}
var Nt = { current: null }, $i = { transition: null }, Iy = { ReactCurrentDispatcher: Nt, ReactCurrentBatchConfig: $i, ReactCurrentOwner: yc };
H.Children = { map: Hi, forEach: function(r, t, e) {
  Hi(r, function() {
    t.apply(this, arguments);
  }, e);
}, count: function(r) {
  var t = 0;
  return Hi(r, function() {
    t++;
  }), t;
}, toArray: function(r) {
  return Hi(r, function(t) {
    return t;
  }) || [];
}, only: function(r) {
  if (!wc(r))
    throw Error("React.Children.only expected to receive a single React element child.");
  return r;
} };
H.Component = xs;
H.Fragment = wy;
H.Profiler = by;
H.PureComponent = gc;
H.StrictMode = Ay;
H.Suspense = xy;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Iy;
H.cloneElement = function(r, t, e) {
  if (r == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
  var n = Mf({}, r.props), s = r.key, i = r.ref, o = r._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = yc.current), t.key !== void 0 && (s = "" + t.key), r.type && r.type.defaultProps)
      var a = r.type.defaultProps;
    for (c in t)
      Hf.call(t, c) && !Qf.hasOwnProperty(c) && (n[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1)
    n.children = e;
  else if (1 < c) {
    a = Array(c);
    for (var u = 0; u < c; u++)
      a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: vi, type: r.type, key: s, ref: i, props: n, _owner: o };
};
H.createContext = function(r) {
  return r = { $$typeof: Ny, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, r.Provider = { $$typeof: Ey, _context: r }, r.Consumer = r;
};
H.createElement = Vf;
H.createFactory = function(r) {
  var t = Vf.bind(null, r);
  return t.type = r, t;
};
H.createRef = function() {
  return { current: null };
};
H.forwardRef = function(r) {
  return { $$typeof: Py, render: r };
};
H.isValidElement = wc;
H.lazy = function(r) {
  return { $$typeof: Ry, _payload: { _status: -1, _result: r }, _init: Ty };
};
H.memo = function(r, t) {
  return { $$typeof: ky, type: r, compare: t === void 0 ? null : t };
};
H.startTransition = function(r) {
  var t = $i.transition;
  $i.transition = {};
  try {
    r();
  } finally {
    $i.transition = t;
  }
};
H.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
H.useCallback = function(r, t) {
  return Nt.current.useCallback(r, t);
};
H.useContext = function(r) {
  return Nt.current.useContext(r);
};
H.useDebugValue = function() {
};
H.useDeferredValue = function(r) {
  return Nt.current.useDeferredValue(r);
};
H.useEffect = function(r, t) {
  return Nt.current.useEffect(r, t);
};
H.useId = function() {
  return Nt.current.useId();
};
H.useImperativeHandle = function(r, t, e) {
  return Nt.current.useImperativeHandle(r, t, e);
};
H.useInsertionEffect = function(r, t) {
  return Nt.current.useInsertionEffect(r, t);
};
H.useLayoutEffect = function(r, t) {
  return Nt.current.useLayoutEffect(r, t);
};
H.useMemo = function(r, t) {
  return Nt.current.useMemo(r, t);
};
H.useReducer = function(r, t, e) {
  return Nt.current.useReducer(r, t, e);
};
H.useRef = function(r) {
  return Nt.current.useRef(r);
};
H.useState = function(r) {
  return Nt.current.useState(r);
};
H.useSyncExternalStore = function(r, t, e) {
  return Nt.current.useSyncExternalStore(r, t, e);
};
H.useTransition = function() {
  return Nt.current.useTransition();
};
H.version = "18.2.0";
var By = "0x84D7d0F4A74930A26bD04789ffFbC573E54dFaBc", Sy = "sepolia", Uy = {
  sensationsContractAddress: By,
  networkUrl: Sy
};
function Dy(r) {
  var t = dy(r.networkUrl);
  return my(r, t);
}
function Fy(r) {
  var t = r.toObject();
  if (Ch.granted) {
    self.registration.showNotification("New sensation:", {
      body: t.message
    });
    return;
  }
}
function Ly(r) {
  r.on("Synapsis", Fy);
}
function My(r) {
  Ly(Dy(Uy));
}
kh([{"revision":null,"url":"assets/index-IdT3ixQW.css"},{"revision":null,"url":"assets/index-LVtLAyVj.js"},{"revision":"82c6e9e56c8dc3afb636433d45fb89ec","url":"index.html"},{"revision":"4df96cba5b004abaaaac3c250fd2bfbe","url":"registerSW.js"},{"revision":"97f63c95e1e388889f2dd4858bedd28f","url":"assets/img/favicon.svg"},{"revision":"2e818667ce90c7722f69c755f2b910dd","url":"assets/img/favicon.ico"},{"revision":"e085559e2718fde9dce21d7393e4614a","url":"assets/img/apple-touch-icon.png"},{"revision":"8b96ef4611f09c893dd1c777f41ff366","url":"assets/img/android-chrome-192x192.png"},{"revision":"d9eebe7e1ea5db49ea00127dd4282e80","url":"assets/img/android-chrome-512x512.png"},{"revision":"f77c87f977e0fcce05a6df46c885a129","url":"assets/robots.txt"},{"revision":"143f70bd79ef69ee9c25c29178f913a3","url":"manifest.webmanifest"}]);
Ph();
addEventListener("periodicSync", function(r) {
  if (r.tag === "sensum-heartbeat")
    return zf(r.waitUntil, new Promise(function(t, e) {
      setTimeout(function(n) {
        t(void 0);
      }, 3e5);
    }));
});
My();
//# sourceMappingURL=ServiceWorker.bs.js.map
