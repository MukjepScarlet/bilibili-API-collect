import{_ as a,r as o,o as p,c as e,a as d,b as t,d as r,w as l,e as s}from"./app-61339773.js";const c={},u=s('<h1 id="web-播放器信息" tabindex="-1"><a class="header-anchor" href="#web-播放器信息" aria-hidden="true">#</a> web 播放器信息</h1><p>web 播放器的信息接口，提供正常播放需要的元数据，包括：智能防挡弹幕、字幕、章节看点等。</p><blockquote><p>https://api.bilibili.com/x/player/wbi/v2</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url 参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件 avid</td><td>必要 (可选)</td><td>aid 与 bvid 任选</td></tr><tr><td>bvid</td><td>str</td><td>稿件 bvid</td><td>必要 (可选)</td><td>aid 与 bvid 任选</td></tr><tr><td>cid</td><td>num</td><td>稿件 cid</td><td>必要</td><td></td></tr><tr><td>w_rid</td><td>str</td><td>WBI 签名</td><td>不必要</td><td></td></tr><tr><td>wts</td><td>num</td><td>当前 unix 时间戳</td><td>不必要</td><td></td></tr></tbody></table><p><strong>json 回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>视频 aid</td><td></td></tr><tr><td>bvid</td><td>str</td><td>视频 bvid</td><td></td></tr><tr><td>cid</td><td>num</td><td>视频 cid</td><td></td></tr><tr><td>dm_mask</td><td>obj</td><td></td><td>webmask 信息（如果没有这一项，说明这个视频没有防挡功能）</td></tr><tr><td>subtitle</td><td>obj</td><td></td><td>字幕信息（需要登录，不登录此项内容为 <code>[]</code> ）</td></tr><tr><td>view_points</td><td>array</td><td></td><td>章节看点信息</td></tr><tr><td>其他</td><td>...</td><td></td><td>主要是观看记录、使用者等级权限等个人信息</td></tr></tbody></table><p><code>dm_mask</code>对象（如果有）：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>cid</td><td>num</td><td>视频 cid</td><td></td></tr><tr><td>plat</td><td>num</td><td>未知</td><td></td></tr><tr><td>fps</td><td>num</td><td>webmask 取样 fps</td><td></td></tr><tr><td>time</td><td>num</td><td>未知</td><td></td></tr><tr><td>mask_url</td><td>str</td><td>webmask 资源 url</td><td></td></tr></tbody></table>',13),i=s(`<p><code>subtitle</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>allow_submit</td><td>bool</td><td>true</td><td></td></tr><tr><td>lan</td><td>str</td><td>&quot;&quot;</td><td></td></tr><tr><td>lan_doc</td><td>str</td><td>&quot;&quot;</td><td></td></tr><tr><td>subtitles</td><td>array</td><td></td><td>不登录为 <code>[]</code></td></tr></tbody></table><p><code>subtitles</code> 数组内的元素：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>ai_status</td><td>num</td><td></td><td></td></tr><tr><td>ai_type</td><td>num</td><td></td><td></td></tr><tr><td>id</td><td>num</td><td></td><td></td></tr><tr><td>id_str</td><td>str</td><td></td><td>和 id 不一样</td></tr><tr><td>is_lock</td><td>bool</td><td></td><td></td></tr><tr><td>lan</td><td>str</td><td>语言类型英文字母缩写</td><td></td></tr><tr><td>lan_doc</td><td>str</td><td>语言类型中文名称</td><td></td></tr><tr><td>subtitle_url</td><td>str</td><td>资源 url 地址</td><td></td></tr><tr><td>type</td><td>num</td><td>0</td><td></td></tr></tbody></table><p><code>view_point</code> 数组内的元素：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>content</td><td>num</td><td>章节名</td><td></td></tr><tr><td>from</td><td>num</td><td></td><td></td></tr><tr><td>to</td><td>num</td><td></td><td></td></tr><tr><td>type</td><td>num</td><td></td><td></td></tr><tr><td>imgUrl</td><td>str</td><td>图片资源地址</td><td></td></tr><tr><td>logoUrl</td><td>str</td><td>&quot;&quot;</td><td></td></tr></tbody></table><p>示例:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> https://api.bilibili.com/x/player/wbi/v2?aid<span class="token operator">=</span><span class="token number">515345690</span><span class="token operator">&amp;</span><span class="token assign-left variable">cid</span><span class="token operator">=</span><span class="token number">825851971</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">515345690</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BV1Fg411D7Jy&quot;</span><span class="token punctuation">,</span>
        ... <span class="token comment">// 省略</span>
        <span class="token property">&quot;dm_mask&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;cid&quot;</span><span class="token operator">:</span> <span class="token number">825851971</span><span class="token punctuation">,</span>
            <span class="token property">&quot;plat&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;fps&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
            <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mask_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;//upos-sz-staticcos-cmask.bilivideo.com/cmaskboss/825851971_30_0.webmask?trid=219266863a1442baa05086b4285ba923B&amp;orderid=0,1&amp;logo=00000000&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;view_points&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span>
                <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;狗啃的&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;imgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/vchapter/825851971_0.jpg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;logoUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span>
                <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">63</span><span class="token punctuation">,</span>
                <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;椒牌泡菜&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;imgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/vchapter/825851971_27.jpg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;logoUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> ... <span class="token comment">// 省略</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;subtitle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;allow_submit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;lan&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;lan_doc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;subtitles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 未登录，下面是登录的版本</span>
            <span class="token property">&quot;subtitles&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1042985852759993300</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lan&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ai-zh&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lan_doc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;中文（自动生成）&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;is_lock&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;subtitle_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;//aisubtitle.hdslb.com/bfs/ai_subtitle/prod/5153456908258519712094280c7c2884b77929bab82f64530f?auth_key=1714795727-a8eb254b60bc4a73bc8662da51005340-0-1c305894e48e959979b163636461fb8f&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;id_str&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1042985852759993344&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;ai_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;ai_status&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function k(b,m){const n=o("RouterLink");return p(),e("div",null,[u,d("p",null,[t("解析 webmask 请看 "),r(n,{to:"/docs/danmaku/webmask.html"},{default:l(()=>[t("智能防挡弹幕")]),_:1})]),i])}const q=a(c,[["render",k],["__file","player.html.vue"]]);export{q as default};
